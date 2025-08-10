import doodsImg from '../doods.png';

const About = () => {
  return (
    <section id="about" className="py-20 md:mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="glass rounded-2xl p-8 relative overflow-visible">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">My Journey</h3>
            <span className="inline-block mb-3 w-12 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 rounded-full" />
              <div className="space-y-4 leading-relaxed">
                <p className='text-sm md:text-lg text-white/90'>
                  After two years of playing college baseball, I transferred to the Luddy School of Informatics, Computing, and Engineering at Indiana University and discovered a deep love and curiosity for technology. I ended up graduating with a B.S. in Informatics, specializing in Human-Centered Computing and Web Design/Development.
                </p>
                <p className='text-sm md:text-lg text-white/90'>
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
      </div>
    </section>
  );
};

export default About;