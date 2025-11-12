import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* background gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `linear-gradient(135deg, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-end)) 100%)`,
        }}
      />

      {/* subtle dotted pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 pt-20">
        {/* Name */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1
            className="text-5xl md:text-7xl font-bold text-foreground mb-2"
            data-testid="text-hero-name"
          >
            Alagu Suriya
          </h1>
<br></br>
          {/* Professional roles */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-6"
            data-testid="text-hero-roles"
          >
            Product Engineer | Data Engineer | Software Developer | Web Developer
          </p>
        </div>

        {/* Tagline */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2
            className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
            data-testid="text-hero-tagline"
          >
            Turning ideas into scalable products and data-driven solutions
          </h2>
        </div>

        {/* Description */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            data-testid="text-hero-intro"
          >
            B.E. CSE - 2025 graduate with hands-on experience in product
            engineering, data engineering, ETL workflows, and frontend development. Passionate about
            solving problems through clean, efficient, and reliable code.
          </p>
        </div>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="gap-2"
            data-testid="button-view-projects"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </Button>

          {/* ✅ Changed to "View Resume" and open in new tab */}
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            asChild
            data-testid="button-view-resume"
          >
            <a
              href="https://drive.google.com/file/d/1GBDcuLllarwnXi2UfpNMnpLIp4N7I5-7/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}