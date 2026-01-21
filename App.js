import { createIcons, User, Users, Building, Mail, Lightbulb, Code, Palette, } from 'lucide';

export default function App() {
    const html = `
        <div class="bg-[#09090b] text-zinc-50 min-h-screen selection:bg-zinc-800 selection:text-zinc-100 font-sans">
            
            <section id="home" class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>
                
                <div class="text-center max-w-3xl mx-auto relative z-10">
                    <div class="space-y-6">
                        <img
                            src="/images/butters.jpg"
                            alt="Butters"
                            class="mx-auto mb-8 w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border border-zinc-800 shadow-2xl"
                        />
                        <h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
                            Sup, I'm <span class="text-zinc-400">Dylan</span>
                        </h1>
                        <p class="text-lg sm:text-xl text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
                            Developer & problem solver. Building digital solutions with a focus on full-stack web development.
                        </p>
                        
                        <div class="flex flex-wrap justify-center gap-4">
                            <a href="#about" class="px-5 py-2.5 rounded-md bg-zinc-100 text-zinc-950 font-medium hover:bg-zinc-200 transition-colors text-sm">
                                About Me
                            </a>
                            <a href="#projects" class="px-5 py-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 font-medium hover:bg-zinc-800 transition-colors text-sm">
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="w-full px-6 py-24">
                <div class="max-w-6xl mx-auto">
                    <div class="mb-16">
                        <h2 class="text-3xl font-bold tracking-tight mb-4">Expertise</h2>
                        <p class="text-zinc-400 text-lg max-w-2xl">
                            Gained through passion and experience across modern web technologies and collaborative environments.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300">
                            <div class="flex items-start gap-4">
                                <div class="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-cyan-400">
                                    <i data-lucide="code" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold text-zinc-100 mb-1 group-hover:text-white transition-colors">Software Development</h4>
                                    <p class="text-zinc-400 text-sm leading-relaxed">Hands on experience building web applications with modern technologies and cloud platforms.</p>
                                </div>
                            </div>
                        </div>

                        <div class="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300">
                            <div class="flex items-start gap-4">
                                <div class="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-pink-400">
                                    <i data-lucide="palette" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold text-zinc-100 mb-1 group-hover:text-white transition-colors">Design Thinking</h4>
                                    <p class="text-zinc-400 text-sm leading-relaxed">Architecting scalable software systems with a strong focus on UX and maintainability.</p>
                                </div>
                            </div>
                        </div>

                        <div class="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300">
                            <div class="flex items-start gap-4">
                                <div class="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-yellow-400">
                                    <i data-lucide="lightbulb" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold text-zinc-100 mb-1 group-hover:text-white transition-colors">Problem Solving</h4>
                                    <p class="text-zinc-400 text-sm leading-relaxed">Tackling complex challenges and transforming them into elegant, scalable solutions.</p>
                                </div>
                            </div>
                        </div>

                        <div class="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300">
                            <div class="flex items-start gap-4">
                                <div class="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-emerald-400">
                                    <i data-lucide="users" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold text-zinc-100 mb-1 group-hover:text-white transition-colors">Collaboration</h4>
                                    <p class="text-zinc-400 text-sm leading-relaxed">Leading cross-functional teams and fostering open, effective communication.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" class="px-6 py-24 bg-[#050505]">
                <div class="max-w-6xl mx-auto">
                    <div class="mb-16">
                        <h2 class="text-3xl font-bold tracking-tight mb-4">Stuff I've built/am building</h2>
                        <div class="h-px w-24 bg-zinc-800"></div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div class="group rounded-xl border border-zinc-800 bg-zinc-900/10 overflow-hidden hover:bg-zinc-900/30 transition-all">
                            <div class="aspect-video relative overflow-hidden">
                                <img src="/images/minesweeper.jpg" alt="Minesweeper" class="w-full h-full object-cover" />
                            </div>
                            <div class="p-6">
                                <h3 class="text-lg font-bold text-zinc-100 mb-2">Minesweeper</h3>
                                <p class="text-zinc-400 text-sm mb-6 line-clamp-2">A reimagined version of the classic game focused on OOP design and JavaFX.</p>
                                
                                <div class="flex flex-wrap gap-2 mb-6">
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">Java</span>
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-pink-500/20 bg-pink-500/10 text-pink-400">JavaFX</span>
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">OOP</span>
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">Desktop</span>
                                </div>

                                <a href="https://cdnapisec.kaltura.com/p/1751071/embedPlaykitJs/uiconf_id/55382703?iframeembed=true&entry_id=1_srbpvwcv" class="text-xs text-zinc-100 font-medium inline-flex items-center gap-2 hover:underline">View Presentation <i data-lucide="code" class="w-3.5 h-3.5"></i></a>
                            </div>
                        </div>

                        <div class="group rounded-xl border border-zinc-800 bg-zinc-900/10 overflow-hidden hover:bg-zinc-900/30 transition-all">
                            <div class="aspect-video relative overflow-hidden">
                                <img src="/images/team-link.jpeg" alt="TeamLink" class="w-full h-full object-cover" />
                            </div>
                            <div class="p-6">
                                <h3 class="text-lg font-bold text-zinc-100 mb-2">TeamLink</h3>
                                <p class="text-zinc-400 text-sm mb-6 line-clamp-2">Full-stack web application for team formation. Capstone Award Winner.</p>
                                
                                <div class="flex flex-wrap gap-2 mb-6">
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">PHP</span>
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-blue-500/20 bg-blue-500/10 text-blue-400">MySQL</span>
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-purple-500/20 bg-purple-500/10 text-purple-400">JavaScript</span>
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-amber-500/20 bg-amber-500/10 text-amber-400">Winner</span>
                                </div>
                                
                                <a href="https://zion.luddy.indiana.edu/info-capstone-2025/teamlink" class="text-xs text-zinc-100 font-medium inline-flex items-center gap-2 hover:underline">Visit Live <i data-lucide="code" class="w-3.5 h-3.5"></i></a>
                            </div>
                        </div>

                        <div class="group rounded-xl border border-zinc-800 bg-zinc-900/10 overflow-hidden hover:bg-zinc-900/30 transition-all">
                            <div class="aspect-video relative overflow-hidden">
                                <img src="/images/navi-structure1.png" alt="Navi" class="w-full h-full object-cover" />
                            </div>
                            <div class="p-6">
                                <h3 class="text-lg font-bold text-zinc-100 mb-2">Navi</h3>
                                <p class="text-zinc-400 text-sm mb-6 line-clamp-2">B2B sales tool designed to help sales teams improve performance through AI-driven insights.</p>
                                
                                <div class="flex flex-wrap gap-2 mb-6">
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-blue-500/20 bg-blue-500/10 text-blue-400">TypeScript</span>
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-pink-500/20 bg-pink-500/10 text-pink-400">Azure AI</span>
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">React</span>
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-zinc-700 bg-zinc-800 text-zinc-300">Node</span>
                                </div>
                                
                                <span class="text-xs text-zinc-500 font-medium italic">Internal Tool</span>
                            </div>
                        </div>

                        <div class="group rounded-xl border border-zinc-800 bg-zinc-900/10 overflow-hidden hover:bg-zinc-900/30 transition-all">
                            <div class="aspect-video relative overflow-hidden">
                                <img src="/images/under-construction.jpg" alt="New Project" class="w-full h-full object-cover" />
                            </div>
                            <div class="p-6">
                                <h3 class="text-lg font-bold text-zinc-100 mb-2">Future Solution</h3>
                                <p class="text-zinc-400 text-sm mb-6 line-clamp-2">Diving deeper into full-stack web development with the M.E.R.N. stack.</p>
                                
                                <div class="flex flex-wrap gap-2 mb-6">
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">M.E.R.N.</span>
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-zinc-700 bg-zinc-800 text-zinc-300">CI/CD</span>
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-purple-500/20 bg-purple-500/10 text-purple-400">Google Cloud</span>
                                    <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border border-orange-500/20 bg-orange-500/10 text-orange-400">Docker</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <footer id="contact" class="px-6 py-24 border-t border-zinc-900">
                <div class="max-w-6xl mx-auto text-center">
                    <h2 class="text-3xl font-bold tracking-tight mb-6">Get in touch</h2>
                    <p class="text-zinc-400 mb-10 max-w-lg mx-auto">
                        Open to new opportunities and collaborations. Drop me a line if you'd like to work together.
                    </p>
                    
                    <div class="flex flex-col items-center gap-4 text-sm text-zinc-300">
                        <a href="mailto:dylan.gray@revenuepathgroup.com" class="hover:text-white transition-colors">dylan.gray@revenuepathgroup.com</a>
                        <a href="tel:317-500-0233" class="hover:text-white transition-colors">317-500-0233</a>
                    </div>
                    
                    <p class="mt-24 text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
                        &copy; 2026 Dylan Gray — Have a great day.
                    </p>
                </div>
            </footer>
        </div>
    `;

    setTimeout(() => {
        createIcons({
            icons: { User, Building, Mail, Code, Palette, Lightbulb, Users },
        })
    }, 0);

    return html;
}