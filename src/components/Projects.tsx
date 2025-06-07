import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time analytics.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      icon: <Globe className="w-6 h-6" />,
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      icon: <Smartphone className="w-6 h-6" />,
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for visualizing complex datasets with real-time charts, filters, and export capabilities. Designed for business intelligence and decision-making.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on that showcase my technical skills and creative problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 glass-dark rounded-lg p-2 text-blue-300">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="glass-dark rounded-full px-3 py-1 text-xs text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 glass-dark rounded-lg px-4 py-2 text-white hover:scale-105 transition-transform duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 glass-dark rounded-lg px-4 py-2 text-white hover:scale-105 transition-transform duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-full px-8 py-4 text-white font-medium hover:scale-105 transition-all duration-200 hover:animate-glow inline-flex items-center space-x-2"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;