import React from 'react';
import TechSlideshow from './Slideshow';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const experiences = [
  {
    icon: Code,
    iconColor: "text-green-500",
    title: "Software Development",
    description: "Hands on experience building web applications with modern technologies, cloud platforms, and API providers."
  },
  {
    icon: Palette,
    iconColor: "text-purple-500",
    title: "Design Thinking",
    description: "Experience in architecting and scaling software systems from the ground up, with a strong focus on user experience and maintainability."
  },
  {
    icon: Lightbulb,
    iconColor: "text-yellow-500",
    title: "Problem Solving",
    description: "Passionate about tackling complex challenges and transforming them into elegant, scalable solutions through creative problem solving."
  },
  {
    icon: Users,
    iconColor: "text-blue-500",
    title: "Collaboration",
    description: "Lead cross-functional teams, fostering open communication, and driving projects to successful completion."
  }
];

const ExperienceAndSlideshow: React.FC = () => {
  return (
    <section className="w-full px-2 sm:px-4 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-2">
            <h2 className="text-2xl sm:text-4xl mb-2 font-bold text-white gap-3 px-1 text-center md:text-left">
                Skills and Experience<span className="hidden md:inline-block ml-3 mb-1.5 w-8 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 rounded-full" />
            </h2>
            <p className="text-white/90 w-full text-sm md:text-xl mb-2 px-1 text-center md:text-left">
                Throughout my time in college and in the workforce, I've gained experience in these areas and tools:
            </p>
            <div className="mx-auto text-center">
                <span className="inline-block md:hidden mx-auto mt-2 w-16 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 rounded-full" />
            </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-4 md:mt-8 px-4 md:px-0">
            {experiences.map((exp, index) => (
                <div key={index} className="glass rounded-xl p-3 hover:shadow-xl transition-transform duration-200 group">
                  <div className="flex items-start space-x-4">
                      <div className="glass-dark rounded-lg p-3 text-blue-300">
                      {exp.icon && (
                          <exp.icon
                          className={
                              exp.iconColor +
                              " w-7 h-7 transition-transform duration-200 " +
                              (index % 2 === 0 ? "group-hover:-rotate-12" : "group-hover:rotate-12")
                          }
                          />
                      )}
                      </div>
                  <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{exp.title}</h4>
                  <p className="text-white/90 leading-relaxed text-xs md:text-base">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="order-1 lg:order-2">
          <TechSlideshow />
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndSlideshow;
