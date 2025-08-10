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
      technologies: ["Java", "JavaFX", "OOP", "GUI Development", "Unit Testing", "Version Control"],
      icon: <Gamepad className="w-6 h-6" />,
      live: (
        <a
          href="https://cdnapisec.kaltura.com/p/1751071/embedPlaykitJs/uiconf_id/55382703?iframeembed=true&amp;entry_id=1_srbpvwcv&amp;config%5Bprovider%5D=%7B%22widgetId%22%3A%221_itf7o5gg%22%7D&amp;config%5Bplayback%5D=%7B%22startTime%22%3A0%7D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch the Kaltura video: May 2nd 2025, 1:19:04 pm"
          className="flex items-center space-x-2 glass-dark rounded-lg px-4 py-2 text-white"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm">Project presentation</span>
        </a>
      )
    },
    {
      title: "TeamLink",
      description: "Full-stack web application built to simplify team formation in college courses. This solution won the Teamwork Award in Indiana University's Informatics Capstone course.",
      image: teamLinkImg,
      technologies: ["JavaScript", "TailwindCSS", "PHP", "MariaDB", "OAuth2.0", "Twilio API"],
      icon: <Globe className="w-6 h-6" />,
      live: "https://cgi.luddy.indiana.edu/~team23/app/pages/home.php"
    },
    {
      title: "Elevator Pitch Challenge",
      description: "An in-house tool developed for RPG to highlight where salespeople are struggling in their elevator pitches; leveraging AI analysis to provide actionable insights.",
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
    }
  ];

  return (
    <section style={{ padding: '125px 0 100px 0' }} id="projects" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Previous and On-Going Development
          </h2>
          <p className="text-md sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-2">
            Here are some of the projects I've lead, colloborated on, and have built myself.
          </p>
          <span className="inline-block w-16 h-1 mt-4 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-medium rounded-2xl overflow-hidden transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-300"
                  style={{ height: '225px' }}
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
                      className="glass-dark rounded-full px-3 py-1 text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {typeof project.live === 'string' ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 glass-dark rounded-lg px-4 py-2 text-white transition-transform duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </a>
                  ) : (
                    project.live
                  )}
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
            className="glass-medium rounded-full px-8 py-4 text-white font-medium transition-all duration-200 inline-flex items-center space-x-2"
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