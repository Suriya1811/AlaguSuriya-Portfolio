import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";
import { i } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

const education = [
  {
    degree: "B.E. in Computer Science and Engineering",
    institution: "Anna University (SSMIET, Dindigul)",
    duration: "Jul 2022 – May 2025",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Govt. Polytechnic College, Coimbatore",
    duration: "Jul 2019 – May 2022",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16" data-testid="text-education-title">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card
              key={edu.degree}
              className="hover-elevate transition-all duration-300"
              data-testid={`card-education-${index}`}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg mb-2" data-testid={`text-education-degree-${index}`}>
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="text-sm" data-testid={`text-education-institution-${index}`}>
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span data-testid={`text-education-duration-${index}`}>{edu.duration}</span>
                      </div>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

