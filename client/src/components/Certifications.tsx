import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "IBM",
  },
  {
    name: "Mastering the Art of Prompting",
    issuer: "IBM",
  },
  {
    name: "Master of Frontend",
    issuer: "GeeksforGeeks",
  },
  {
    name: "Prompt Engineering",
    issuer: "Guvi",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16" data-testid="text-certifications-title">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card
              key={cert.name}
              className="hover-elevate transition-all duration-300"
              data-testid={`card-certification-${index}`}
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base mb-1" data-testid={`text-certification-name-${index}`}>
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="text-sm" data-testid={`text-certification-issuer-${index}`}>
                      {cert.issuer}
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
