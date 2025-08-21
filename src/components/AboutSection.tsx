import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="heading-lg">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a final-year B.Tech student specializing in Electronics & Communication Engineering 
                at NIT Arunachal Pradesh, with a strong passion for software development and data engineering.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey spans from building microservices with GoLang to creating full-stack applications 
                with React and Node.js. I'm particularly interested in distributed systems, cloud technologies, 
                and data pipeline architectures that solve real-world problems.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="heading-md text-gradient">8.03</div>
                <div className="text-sm text-muted-foreground">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="heading-md text-gradient">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Education Card */}
          <div className="space-y-6">
            <Card className="p-6 hover-glow hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">B.Tech in Electronics & Communication Engineering</h3>
                    <p className="text-primary font-medium">National Institute of Technology, Arunachal Pradesh</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Expected Graduation: June 2025
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      Arunachal Pradesh, India
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="text-sm font-medium">CGPA: 8.03/10</div>
                    <div className="w-full bg-secondary rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full" style={{width: '80.3%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center hover-lift">
                <div className="text-primary font-semibold">GoLang</div>
                <div className="text-sm text-muted-foreground">Primary Language</div>
              </Card>
              <Card className="p-4 text-center hover-lift">
                <div className="text-primary font-semibold">Cloud Native</div>
                <div className="text-sm text-muted-foreground">Focus Area</div>
              </Card>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;