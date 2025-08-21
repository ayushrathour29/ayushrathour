import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="section min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="fade-in space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                Available for opportunities
              </div>
              
              <h1 className="heading-xl">
                Hi, I'm{" "}
                <span className="text-gradient">Ayush Rathour Raj</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Software Engineer | Data Engineering Enthusiast
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Final-year B.Tech student at NIT Arunachal Pradesh, passionate about building scalable software solutions and data-driven systems. Currently working on microservices and cloud technologies.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group hover-glow">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="hover-lift">
                <Download className="mr-2 w-4 h-4" />
                Resume
              </Button>
              
              <Button variant="ghost" size="lg" asChild className="hover-lift">
                <a href="mailto:ayushrathourraj@gmail.com">
                  <Mail className="mr-2 w-4 h-4" />
                  Contact
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a 
                href="https://linkedin.com/in/ayushrathour" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/ayushrathour29" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="fade-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroIllustration} 
                alt="Software Engineer Illustration" 
                className="relative rounded-3xl shadow-large hover-lift w-full max-w-lg"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;