import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      icon: Code,
      iconColor: "text-green-500",
      title: "Software Development",
      description: "Hands on experience building robust applications with modern technologies such as React, TypeScript, Node.js, and cloud platforms."
    },
    {
      icon: Palette,
      iconColor: "text-purple-500",
      title: "Design Thinking",
      description: "Skilled in architecting and scaling software systems from the ground up, with a strong focus on user experience and maintainability."
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
      description: "Experienced in working with cross-functional teams, fostering open communication, and driving projects to successful completion."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-white leading-relaxed">
                <p className='text-sm md:text-lg'>
                  After two years of playing college baseball, I transferred to the Luddy School of Informatics, Computing, and Engineering at Indiana University and discovered a deep love and curiosity for technology. I ended up graduating with a B.S. in Informatics, specializing in Human-Centered Computing and Web Design/Development.
                </p>
                <p className='text-sm md:text-lg'>
                  Post graudation, I've begun working full-time at Revenue Path Group as the Director of Product Development & Engineering. At this role, I now design scalable systems, guide clients through technical challenges, and continue to push the boundaries of AI and the human experience.
                </p>
                <p className='text-sm md:text-lg'>
                  Throughout my time at IU and in my professional career, I've deepened my understanding and curiosity for...
                </p>
              </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-200 group">
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
                    <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                    <p className="text-white leading-relaxed text-sm md:text-lg">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;