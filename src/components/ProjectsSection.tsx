import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Kubernetes GUI",
      description: "A comprehensive frontend dashboard for Kubernetes cluster visualization with real-time monitoring and observability metrics. Built with React and integrated with GoLang APIs.",
      tech: ["React.js", "GoLang", "Kubernetes", "APIs", "Monitoring"],
      github: "https://github.com/ayushrathour29/K8S_GUI",
      live: null,
      featured: true
    },
    {
      title: "Bookstore MERN App",
      description: "Full-stack e-commerce application featuring real-time inventory tracking, role-based JWT authentication, and Redux Toolkit for state management. Deployed on Vercel and Render.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "JWT"],
      github: "https://github.com/ayushrathour29/Bookstore",
      live: "https://bookstore-demo.vercel.app",
      featured: true
    },
    {
      title: "Sports Person Image Classifier",
      description: "Machine learning pipeline using Python for real-time image classification. Built with Flask web framework and custom dataset training using Scikit-learn and OpenCV.",
      tech: ["Python", "Flask", "Scikit-learn", "OpenCV", "Machine Learning"],
      github: "https://github.com/ayushrathour29/Classifier",
      live: null,
      featured: false
    }
  ];

  return (
    <section id="projects" className="section bg-muted/30">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities across different domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`p-6 hover-glow hover-lift group ${project.featured ? 'lg:col-span-1' : ''}`}>
              <div className="space-y-6">
                
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="heading-sm group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild className="hover-lift">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  {project.live && (
                    <Button variant="default" size="sm" asChild className="hover-lift">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
                
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="hover-lift">
            <a href="https://github.com/ayushrathour29" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;