import { Code, Database, Cloud, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["GoLang", "Python", "C++", "JavaScript", "SQL", "Bash"]
    },
    {
      icon: Database,
      title: "Big Data & Data Engineering", 
      skills: ["Hadoop", "HDFS", "Apache Hive", "Spark", "PySpark", "ETL/ELT"]
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["Docker", "Azure DevOps", "Git", "Control-M", "Jira"]
    },
    {
      icon: BarChart3,
      title: "Frontend & Backend",
      skills: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "Flask", "Tailwind CSS"]
    }
  ];

  const databases = ["PostgreSQL", "MySQL", "MongoDB"];
  const concepts = ["Distributed Systems", "SDLC (Agile/Waterfall)", "Observability"];
  const tools = ["Power BI", "Tableau"];

  return (
    <section id="skills" className="section">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, data engineering, and cloud technologies
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover-glow hover-lift group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-badge text-xs">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="heading-sm text-center">Databases</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {databases.map((db, index) => (
                <span key={index} className="skill-badge">{db}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="heading-sm text-center">Core Concepts</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {concepts.map((concept, index) => (
                <span key={index} className="skill-badge">{concept}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="heading-sm text-center">Reporting Tools</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {tools.map((tool, index) => (
                <span key={index} className="skill-badge">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;