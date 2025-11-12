import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "suriyanlk18@gmail.com",
      link: "mailto:suriyanlk18@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9597478911",
      link: "tel:+919597478911",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Suriya1811",
      link: "https://github.com/Suriya1811",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/alagusuriya",
      link: "https://linkedin.com/in/alagusuriya",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Card data-testid="card-contact-info">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-semibold">
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover-elevate transition-all"
                data-testid={`link-contact-${info.label.toLowerCase()}`}
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-muted-foreground">
                    {info.label}
                  </div>
                  <div className="text-sm font-medium truncate">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
