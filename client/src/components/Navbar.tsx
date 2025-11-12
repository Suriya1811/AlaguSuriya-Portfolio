import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Name / Home */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold text-foreground hover-elevate px-4 py-2 rounded-md transition-all"
            data-testid="link-home"
          >
            Alagu Suriya
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                data-testid={`link-${link.id}`}
              >
                {link.label}
              </Button>
            ))}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* ✅ View Resume Button */}
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1GBDcuLllarwnXi2UfpNMnpLIp4N7I5-7/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                View Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2" data-testid="menu-mobile">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="w-full justify-start"
                data-testid={`link-mobile-${link.id}`}
              >
                {link.label}
              </Button>
            ))}

            {/* ✅ Mobile View Resume */}
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1GBDcuLllarwnXi2UfpNMnpLIp4N7I5-7/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                View Resume
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
