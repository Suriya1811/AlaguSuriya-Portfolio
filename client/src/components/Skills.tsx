import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "SQL", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "PySpark"],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Talend Studio",
      "Eclipse",
      "Git",
      "GitHub",
      "HTML",
      "CSS",
      "Figma",
      "MongoDB",
      "NoSQL",
      "XML",
      "JSON",
      "ETL",
      "DAG workflow",
    ],
  },
  {
    title: "Core Competencies",
    skills: [
      "Data Transformation",
      "Debugging",
      "Tool Development",
      "Workflow Optimization",
      "Team Collaboration",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16" data-testid="text-skills-title">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-skill-category-${index}`}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground" data-testid={`text-skill-category-${index}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
