import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import open from "open"; // <-- auto open browser (optional)

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware to log API requests
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // In development, use Vite middleware; in production, serve built client
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ✅ Safe host logic for all environments
  const port = parseInt(process.env.PORT || "3000", 10);
  const host =
    process.env.REPL_ID || process.env.HOST === "0.0.0.0"
      ? "0.0.0.0"
      : "127.0.0.1";

  // Start server
  server.listen(port, host, async () => {
    const url = `http://${host}:${port}`;
    log(`✅ Server running at ${url}`);

    // Auto-open browser only when running locally
    if (host === "127.0.0.1") {
      try {
        await open(url);
        log("🌐 Opened in default browser");
      } catch {
        log("⚠️ Could not auto-open browser");
      }
    }
  });
})();