import { Code, Palette, Lightbulb, Users } from 'lucide-react';
import doodsImg from '../doods.png';

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
          <div className="glass rounded-2xl p-8 relative overflow-visible">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-white leading-relaxed">
                <p className='text-sm md:text-lg'>
                  After two years of playing college baseball, I transferred to the Luddy School of Informatics, Computing, and Engineering at Indiana University and discovered a deep love and curiosity for technology. I ended up graduating with a B.S. in Informatics, specializing in Human-Centered Computing and Web Design/Development.
                </p>
                <p className='text-sm md:text-lg'>
                  Post graudation, I've begun working full-time at Revenue Path Group as a Product Developer and Engineer. At this role, I now design scalable systems, guide clients through technical challenges, and continue to push the boundaries of AI and the human experience.
                </p>
              </div>
          </div>
          {/* Large image outside the container, only on desktop */}
          <div className="-mb-20 hidden lg:flex flex-col items-center relative">
            <img
              src={doodsImg}
              alt="Dylan and Doods"
              className="w-[550px] h-[400px] object-cover rounded-3xl shadow-2xl border-4 border-white/30 mb-4 -mt-16 lg:-ml-16"
              style={{ objectPosition: 'center' }}
            />
            <span className="text-base text-white/80 italic mt-2 drop-shadow-lg">I'm the cool looking guy on the left</span>
          </div>
        </div>

        <div className="space-y-6 md:pt-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gradient -mb-2 flex gap-3 px-1">
            My Core Skills & Experience
            <span className="hidden md:inline-block mt-4 w-8 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 rounded-full" />
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-4xl mb-2 px-1">
            Throughout my time in college and in the workforce, I've gained experience in these key areas:
          </p>
          {experiences.map((exp, index) => (
            <div key={index} className="glass rounded-xl p-6 hover:shadow-xl transition-transform duration-200 group">
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
    </section>
  );
};

export default About;