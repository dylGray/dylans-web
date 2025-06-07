import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Proficient in modern web technologies including React, TypeScript, Node.js, and cloud platforms. Always learning and adapting to new technologies."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Thinking",
      description: "Strong eye for design and user experience. I believe great software is not just functional, but also beautiful and intuitive to use."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Problem Solving",
      description: "I thrive on complex challenges and enjoy breaking down problems into elegant, scalable solutions that drive real business value."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion Driven",
      description: "Technology is more than just my career—it's my passion. I'm constantly exploring new ideas and contributing to open-source projects."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who believes in the power of technology to transform ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                My journey into technology began with curiosity and has evolved into a deep passion for creating 
                meaningful digital experiences. I've had the privilege of working on diverse projects that have 
                shaped my understanding of both technical excellence and user-centered design.
              </p>
              <p>
                From building scalable web applications to crafting intuitive user interfaces, I approach every 
                project with enthusiasm and attention to detail. I believe that great software is born from the 
                intersection of solid engineering principles and creative problem-solving.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I'm always excited to collaborate 
                on projects that push boundaries and create positive impact.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-200">
                <div className="flex items-start space-x-4">
                  <div className="glass-dark rounded-lg p-3 text-blue-300">
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                    <p className="text-white/80 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'React', 'TypeScript', 'Node.js', 'Python',
              'AWS', 'Docker', 'PostgreSQL', 'MongoDB',
              'GraphQL', 'REST APIs', 'Git', 'Figma'
            ].map((skill, index) => (
              <div key={index} className="glass-dark rounded-lg p-3 text-center">
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;