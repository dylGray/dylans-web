import { createIcons, User, Users, Building, Mail, Lightbulb, Code, Palette } from 'lucide';

export default function App() {
  const html = `
      <!-- HERO -->   
      <section id="home" class="min-h-screen flex items-center justify-center px-2 pt-14 sm:pt-20 mb-4">
        <div class="text-center max-w-5xl mx-auto">
          <div class="p-8 sm:p-12 lg:p-16">
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Sup, I'm Dylan
            </h1>
            <img
              src="/images/butters.jpg"
              alt="Butters"
              class="mx-auto mb-6 w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-full border-4 border-white/20 shadow-lg"
            />
            <p class="text-lg sm:text-xl lg:text-2xl text-white mb-4 leading-relaxed">
              Developer & problem solver
            </p>
            <p class="text-xs sm:text-lg text-white/90 mb-3 md:mb-6 max-w-xl mx-auto leading-relaxed">
              I like building digital solutions. Currently working & improving in full-stack web development. 
            </p>
            <span class="inline-block mb-3 md:mb-6 w-16 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 rounded-full"></span>
            <div class="flex justify-center space-x-6 mb-8 md:mb-12">
              <a href="#about" class="inline-flex items-center gap-2 p-3 text-xs font-medium text-white hover:text-blue-300 transition-colors underline underline-offset-4">
                About
              </a>
              <a href="#projects" class="inline-flex items-center gap-2 p-3 text-xs font-medium text-white hover:text-blue-300 transition-colors underline underline-offset-4">
                Projects
              </a>
              <a href="#contact" class="inline-flex items-center gap-2 p-3 text-xs font-medium text-white hover:text-blue-300 transition-colors underline underline-offset-4">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT SECTION -->   
      <section id="about" class="w-full px-2 sm:px-4 lg:px-8 py-8 md:py-16">
        <div class="max-w-7xl mx-auto px-2">
          <h2 class="text-xl sm:text-4xl mb-2 font-bold text-white gap-3 px-1 text-center md:text-left">
            What I love, and what I can do<span class="hidden md:inline-block ml-3 mb-1.5 w-8 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 rounded-full"></span>
          </h2>
          <p class="text-white/90 w-full text-sm md:text-xl my-3 px-1 text-center md:text-left">
            Throughout my time in college and in the workforce, I've gained passion and experience in these areas and tools:
          </p>
          <div class="mx-auto text-center">
            <span class="inline-block md:hidden mx-auto mt-2 w-16 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 rounded-full"></span>
          </div>
        </div>

        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="order-2 lg:order-1 space-y-4 md:mt-8 px-4 md:px-0">
            <div class="glass rounded-xl p-3 hover:shadow-xl transition-transform duration-200 group">
              <div class="flex items-start space-x-4">
                <div class="glass-dark rounded-lg p-3 text-blue-300">
                  <i data-lucide="code" class="text-green-500 w-7 h-7 transition-transform duration-200 group-hover:-rotate-12"></i>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-1">Software Development</h4>
                  <p class="text-white/90 leading-relaxed text-xs md:text-base">Hands on experience building web applications with modern technologies and cloud platforms.</p>
                </div>
              </div>
            </div>

            <div class="glass rounded-xl p-3 hover:shadow-xl transition-transform duration-200 group">
              <div class="flex items-start space-x-4">
                <div class="glass-dark rounded-lg p-3 text-blue-300">
                  <i data-lucide="palette" class="text-purple-500 w-7 h-7 transition-transform duration-200 group-hover:rotate-12"></i>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-1">Design Thinking</h4>
                  <p class="text-white/90 leading-relaxed text-xs md:text-base">Experience in architecting and scaling software systems from the ground up, with a strong focus on user experience and maintainability.</p>
                </div>
              </div>
            </div>

            <div class="glass rounded-xl p-3 hover:shadow-xl transition-transform duration-200 group">
              <div class="flex items-start space-x-4">
                <div class="glass-dark rounded-lg p-3 text-blue-300">
                  <i data-lucide="lightbulb" class="text-yellow-500 w-7 h-7 transition-transform duration-200 group-hover:-rotate-12"></i>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-1">Problem Solving</h4>
                  <p class="text-white/90 leading-relaxed text-xs md:text-base">Passionate about tackling complex challenges and transforming them into elegant, scalable solutions.</p>
                </div>
              </div>
            </div>

            <div class="glass rounded-xl p-3 hover:shadow-xl transition-transform duration-200 group">
              <div class="flex items-start space-x-4">
                <div class="glass-dark rounded-lg p-3 text-blue-300">
                  <i data-lucide="users" class="text-blue-500 w-7 h-7 transition-transform duration-200 group-hover:rotate-12"></i>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-1">Collaboration</h4>
                  <p class="text-white/90 leading-relaxed text-xs md:text-base">Lead cross-functional teams, fostering open communication, and driving projects to successful completion.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:order-2">
            <div class="grid grid-cols-3 gap-x-0.5 gap-y-20 justify-items-center mt-10 md:mt-20">
              <div class="rounded-xl p-0 hover:scale-110 transition-all duration-300 group">
                <img src="/images/vsc-logo.png" alt="VSCode  " class="w-12 h-auto object-contain">
              </div>
              <div class="rounded-xl p-0 hover:scale-110 transition-all duration-300 group">
                <img src="/images/github-icon.png" alt="GitHub" class="w-12 h-auto object-contain">
              </div>
              <div class="rounded-xl p-0 hover:scale-110 transition-all duration-300 group">
                <img src="/images/git-icon.png" alt="Git" class="w-12 h-auto object-contain">
              </div>
              <div class="rounded-xl p-0 hover:scale-110 transition-all duration-300 group">
                <img src="/images/gpt-logo.png" alt="GPT" class="w-12 h-auto object-contain">
              </div>
              <div class="rounded-xl p-0 hover:scale-110 transition-all duration-300 group">
                <img src="/images/claude-icon.png" alt="Claude AI" class="w-12 h-auto object-contain">
              </div>
              <div class="rounded-xl p-0 hover:scale-110 transition-all duration-300 group">
                <img src="/images/gemini-icon.png" alt="Gemini" class="w-12 h-auto object-contain">
              </div>
              <div class="rounded-xl p-0 mt-3 hover:scale-110 transition-all duration-300 group">
                <img src="/images/tailwind-icon.png" alt="Tailwind CSS" class="w-12 h-auto object-contain">
              </div>
              <div class="rounded-xl p-0 hover:scale-110 transition-all duration-300 group">
                <img src="/images/javascript-logo.png" alt="JavaScript" class="w-14 h-auto object-contain">
              </div>
              <div class="rounded-xl p-0 hover:scale-110 transition-all duration-300 group">
                <img src="/images/python-logo.png" alt="Python" class="w-20 h-auto object-contain">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PROJECTS SECTION -->    
      <section id="projects" class="px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-10">
            <h2 class="text-xl sm:text-4xl lg:text-4xl font-bold text-white mb-2 leading-tight">
              Stuff I've been building
            </h2>
            <p class="text-sm sm:text-xl text-white/90 max-w-3xl mx-auto sm:leading-relaxed mb-2">
              Here are some of the projects I've lead and contributed on.
            </p>
            <span class="inline-block w-16 h-1 mt-4 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 rounded-full"></span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div class="glass-medium rounded-2xl overflow-hidden transition-all duration-300 group">
              <div class="relative overflow-hidden">
                <img
                  src="/images/minesweeper.jpg"
                  alt="Minesweeper"
                  class="w-full object-cover transition-transform duration-300"
                  style="height: 225px;"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div class="p-6">
                <h3 class="text-lg md:text-xl font-bold text-white mb-3">Minesweeper</h3>
                <p class="text-white/80 mb-4 leading-relaxed text-xs md:text-sm">
                  A reimagined version of the classic Minesweeper game. This was a college project that focused on object-oriented design and GUI development.
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">Java</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">JavaFX</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">OOP</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">GUI Development</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">Unit Testing</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">Version Control</span>
                </div>

                <div class="flex space-x-4">
                  <a
                    href="https://cdnapisec.kaltura.com/p/1751071/embedPlaykitJs/uiconf_id/55382703?iframeembed=true&entry_id=1_srbpvwcv&config%5Bprovider%5D=%7B%22widgetId%22%3A%221_itf7o5gg%22%7D&config%5Bplayback%5D=%7B%22startTime%22%3A0%7D"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch the Kaltura video: May 2nd 2025, 1:19:04 pm"
                    class="flex items-center space-x-2 glass-dark rounded-lg px-4 py-2 text-white"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span class="text-sm">Project presentation</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="glass-medium rounded-2xl overflow-hidden transition-all duration-300 group">
              <div class="relative overflow-hidden">
                <img
                  src="/images/team-link.jpeg"
                  alt="TeamLink"
                  class="w-full object-cover transition-transform duration-300"
                  style="height: 225px;"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div class="p-6">
                <h3 class="text-lg md:text-xl font-bold text-white mb-3">TeamLink</h3>
                <p class="text-white/80 mb-4 leading-relaxed text-xs md:text-sm">
                  Full-stack web application built to simplify team formation in college courses. This solution won the 
                  <a href="https://zion.luddy.indiana.edu/info-capstone-2025/teamlink" target="_blank" rel="noopener noreferrer" class="text-blue-400 underline hover:text-blue-300 transition-colors">Teamwork Award</a>
                  in Indiana University's Informatics Capstone course.
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">JavaScript</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">TailwindCSS</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">PHP</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">MariaDB</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">OAuth2.0</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">Twilio API's</span>
                </div>

                <div class="flex space-x-4">
                  <a
                    href="https://zion.luddy.indiana.edu/info-capstone-2025/teamlink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-2 glass-dark rounded-lg px-4 py-2 text-white transition-transform duration-200"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span class="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="glass-medium rounded-2xl overflow-hidden transition-all duration-300 group">
              <div class="relative overflow-hidden">
                <img
                  src="/images/tps-logo1.png"
                  alt="Building Priority"
                  class="w-full object-cover transition-transform duration-300"
                  style="height: 225px;"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div class="p-6">
                <h3 class="text-lg md:text-xl font-bold text-white mb-3">Building Priority</h3>
                <p class="text-white/80 mb-4 leading-relaxed text-xs md:text-sm">
                  An in-house tool developed for RPG to highlight where salespeople are struggling in their elevator pitches, and how to improve their voice as a sales person.
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">Python</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">JavaScript</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">TailwindCSS</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">Vercel</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">Cloud Firestore</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">OpenAI API</span>
                </div>

                <div class="flex space-x-4">
                  <a
                    href="https://priority-pitch.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-2 glass-dark rounded-lg px-4 py-2 text-white transition-transform duration-200"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span class="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="glass-medium rounded-2xl overflow-hidden transition-all duration-300 group">
              <div class="relative overflow-hidden">
                <img
                  src="/images/navi-structure1.png"
                  alt="Navi"
                  class="w-full object-cover transition-transform duration-300"
                  style="height: 225px;"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div class="p-6">
                <h3 class="text-lg md:text-xl font-bold text-white mb-3">Navi</h3>
                <p class="text-white/80 mb-4 leading-relaxed text-xs md:text-sm">
                  A B2B sales tool designed to help sales teams improve their performance through AI-driven insights and proprietary data.
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">TypeScript</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">React</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">TailwindCSS</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">PostgreSQL</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">Azure</span>
                  <span class="glass-dark rounded-full px-3 py-1 text-xs text-white">Azure AI Foundry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer id="contact" class="w-full bottom-0 left-0 z-50 bg-transparent">
        <div class="mx-auto">
          <div class="rounded-2xl p-8 sm:p-12">
            <div class="text-center mb-12">
              <h2 class="text-xl md:text-3xl sm:text-4xl font-bold text-white mb-6">
                How can we get in touch?
              </h2>
              <p class="text-sm md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                I'm always interested in new opportunities and collaborations!
                You can find my work email, cell, and LinkedIn below.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a href="" class="px-6 py-3 text-white inline-flex items-center space-x-3 cursor-default" aria-label="Send email to Dylan">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-xs md:text-lg">dylan.gray@revenuepathgroup.com</span>
              </a>

              <a href="tel:317-500-0233" class="text-xs md:text-lg px-6 pb-6 md:py-3 text-white inline-flex items-center space-x-3 cursor-default">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                <span>317-500-0233</span>
              </a>

              <div class="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="glass-medium rounded-full p-3 group"
                >
                  <svg class="w-6 h-6 text-white transition-transform duration-200 group-hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="glass-medium rounded-full p-3 group"
                >
                  <svg class="w-6 h-6 text-white transition-transform duration-200 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div class="border-t border-white/20 pt-8">
              <div class="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <p class="text-white/60 text-xs md:text-sm flex items-center space-x-1">
                  <span>Have a great rest of your day.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  `;

  // making sure HTML is rendered in DOM before we insert icons 
  setTimeout(() => {
    createIcons({
      icons: {
        User,
        Building,
        Mail,
        Code,
        Palette,
        Lightbulb,
        Users
      },
    })
  }, 0);

  return html;
}
