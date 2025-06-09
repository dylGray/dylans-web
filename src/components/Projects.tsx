import { ExternalLink, Github, Globe, BarChart3, Bot, Gamepad } from 'lucide-react';
import teamLinkImg from '../assets/images/team-link.jpeg';
import tpsLogoImg from '../assets/images/tps-logo1.png';
import naviStructureImg from '../assets/images/navi-structure1.png';
import mineseeper from '../assets/images/minesweeper.jpg';

declare module '*.jpeg';
declare module '*.png';

const Projects = () => {
  const projects = [
    {
      title: "Minesweeper",
      description: "A reimagined version of the classic Minesweeper game. This was a college project that focused on object-oriented design and GUI development.",
      image: mineseeper,
      technologies: ["Java", "JavaFX", "OOP", "GUI Development", "Unit Testing"],
      icon: <Gamepad className="w-6 h-6" />,
      live: ""
    },
    {
      title: "TeamLink",
      description: "Full-stack web application built to simplify team formation in college courses. This solution won Best Teamwork Award in Indiana University's Informatics Capstone course.",
      image: teamLinkImg,
      technologies: ["JavaScript", "TailwindCSS", "PHP", "MySQL", "OAuth2.0", "Twilio API"],
      icon: <Globe className="w-6 h-6" />,
      live: "https://cgi.luddy.indiana.edu/~team23/app/pages/home.php"
    },
    {
      title: "Elevator Pitch Challenge",
      description: "A marketing tool developed for RPG to highlight where salespeople are struggling in their elevator pitches that leverages AI analysis to provide actionable insights.",
      image: tpsLogoImg,
      technologies: ["Python", "JavaScript", "TailwindCSS", "Vercel", "Cloud Firestore", "OpenAI API"],
      icon: <BarChart3 className="w-6 h-6" />,
      live: "https://priority-pitch.vercel.app/login"
    },
    {
      title: "Navi",
      description: "An agentic B2B sales AI solution designed to help sales teams improve their performance through AI-driven insights and proprietary data.",
      image: naviStructureImg,
      technologies: ["TypeScript", "React", "TailwindCSS", "PostgreSQL", "Vercel", "Azure AI"],
      icon: <Bot className="w-6 h-6" />,
      live: "https://navi.theprioritysale.com/auth/login"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on that showcase my technical skills and creative problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-medium rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  style={{ height: '225px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 glass-dark rounded-lg p-2 text-blue-300">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="glass-dark rounded-full px-3 py-1 text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
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
            href="https://github.com/dylGray"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-medium rounded-full px-8 py-4 text-white font-medium hover:scale-105 transition-all duration-200 hover:animate-glow inline-flex items-center space-x-2"
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