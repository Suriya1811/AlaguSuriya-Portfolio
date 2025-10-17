import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "VentureLoop",
    subtitle: "Startup & Investor Platform",
    description:
      "Full stack web platform connecting startup founders with investors. Developed for a real-life client; project was paid and delivered successfully. Features include secure authentication, dashboards, investor profiles, and listings. Currently in marketing phase.",
    tech: ["React.js", "REST APIs", "Database Integration"],
    link: "https://ventureloopfrontend.onrender.com",
    featured: true,
  },
  {
    title: "Woolen Flower Business Site",
    subtitle: "E-commerce Frontend",
    description:
      "Frontend website for a small business selling handmade flowers and bouquets. Designed a clean product showcase layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: null,
  },
  {
    title: "Nike Clone Website",
    subtitle: "UI Practice Project",
    description:
      "Practice project replicating Nike's landing page UI. Focused on responsive layout and animation transitions.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://suriya11.neocities.org/Nike/Home",
  },
  {
    title: "Marvel Blog Website",
    subtitle: "Content Showcase",
    description:
      "Mini blog site displaying Marvel characters with UI grids and cards. Built to practice content layout and styling.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://suriya11.neocities.org/marvel/marvel",
  },
  {
    title: "To-Do List Web App",
    subtitle: "Task Manager",
    description:
      "Simple DOM-based task manager with add/remove functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://suriya11.neocities.org/To%20Do%20List/task2",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16" data-testid="text-projects-title">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`flex flex-col hover-elevate transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              data-testid={`card-project-${index}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="default" className="shrink-0" data-testid="badge-featured">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription data-testid={`text-project-subtitle-${index}`}>
                  {project.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, "-")}-${index}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {project.link && (
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={() => window.open(project.link!, "_blank")}
                    data-testid={`button-view-project-${index}`}
                  >
                    View Live
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
