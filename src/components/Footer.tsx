import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section bg-foreground text-background">
      <div className="section-container">
        <div className="text-center space-y-8">
          
          {/* Main Content */}
          <div className="space-y-4">
            <h3 className="heading-md">Ayush Rathour Raj</h3>
            <p className="text-lg opacity-90 max-w-md mx-auto">
              Building the future with code, one project at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/ayushrathour" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors hover-lift"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/ayushrathour29" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors hover-lift"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:ayushrathourraj@gmail.com"
              className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors hover-lift"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm opacity-75">
            <span>© {currentYear} Ayush Rathour Raj. All rights reserved.</span>
            <div className="flex items-center gap-1">
              <span className="hidden sm:inline">•</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>using React & Tailwind</span>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;