import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16" data-testid="text-experience-title">
          Experience
        </h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <Card className="relative hover-elevate transition-all duration-300" data-testid="card-experience-0">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2" data-testid="text-experience-title-0">
                    Product Engineer Intern
                  </CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center gap-2 text-sm" data-testid="text-experience-company-0">
                      <span className="font-medium">DataSwitch (TridentSoft Intelligence Solutions)</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span data-testid="text-experience-location-0">Chennai</span>
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span data-testid="text-experience-duration-0">Jun 2025 – Sep 2025</span>
                      </div>
                    </div>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-foreground ml-4">
                <li className="flex gap-2" data-testid="text-experience-achievement-0-0">
                  <span className="text-primary mt-1">•</span>
                  <span>Developed and optimized enterprise-scale ETL tools using Java and Talend</span>
                </li>
                <li className="flex gap-2" data-testid="text-experience-achievement-0-1">
                  <span className="text-primary mt-1">•</span>
                  <span>Redesigned Talend Reader logic for XML-to-JSON conversion</span>
                </li>
                <li className="flex gap-2" data-testid="text-experience-achievement-0-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Debugged and improved job reliability and data workflow efficiency</span>
                </li>
                <li className="flex gap-2" data-testid="text-experience-achievement-0-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Completed a stipend-based internship, gaining strong real-world problem-solving experience</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
