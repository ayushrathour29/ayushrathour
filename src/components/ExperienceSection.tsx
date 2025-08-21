import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Junior Cloud Developer Intern",
      company: "NEXTURN",
      location: "Hyderabad",
      period: "Jan 2025 – May 2025",
      type: "Current",
      responsibilities: [
        "Developed GoLang-based microservices and secure REST APIs",
        "Worked on CI/CD pipeline integration with Docker",
        "Optimized SQL queries and database migrations",
        "Built logging and authentication middleware for distributed systems"
      ]
    },
    {
      role: "Training Intern",
      company: "Tata Motors Ltd",
      location: "Jamshedpur",
      period: "Jan 2024 – Feb 2024",
      type: "Completed",
      responsibilities: [
        "Built real-time dashboards in Power BI from SAP Portal data",
        "Automated processes using scripts, improving machine efficiency by 85%",
        "Designed monitoring solutions reducing downtime and response time"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world experience in software development, cloud technologies, and data engineering
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover-glow hover-lift relative">
              
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-border"></div>
              )}
              
              <div className="flex gap-6">
                
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-4">
                  
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="heading-sm">{exp.role}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        exp.type === 'Current' 
                          ? 'bg-success/10 text-success' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="text-lg font-semibold text-primary">{exp.company}</div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;