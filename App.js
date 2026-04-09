export default function App() {
    const html = `
        <div class="bg-[#09090b] text-zinc-50 min-h-screen selection:bg-blue-500/30 selection:text-zinc-100 font-sans antialiased flex flex-col">
            
            <nav class="fixed top-0 w-full p-6 mt-6 z-50 flex justify-end md:hidden">
                <img 
                    src="/images/butters.jpg" 
                    alt="Butters" 
                    class="w-14 h-14 object-cover rounded-full border border-zinc-800 shadow-lg"
                />
            </nav>

            <section class="relative min-h-screen flex items-center px-6 lg:px-24 overflow-hidden flex-grow">
                <div class="absolute -top-24 -left-24 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"></div>
                <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full"></div>

                <div class="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    
                    <div class="space-y-10 text-left order-2 md:order-1">
                        <div class="space-y-4">
                            <h1 class="text-4xl sm:text-7xl font-bold tracking-tight text-white">
                                Sup, I'm <span class="text-blue-400/90">Dylan</span>
                            </h1>
                        </div>

                        <div class="space-y-3 pt-4 border-t border-zinc-800/50 max-w-md">
                            <h3 class="text-xs font-semibold uppercase tracking-widest text-zinc-500">About Me</h3>
                            <p class="text-zinc-400 text-sm leading-relaxed">
                                I specialize in building web applications and solving problems. 
                                Currently focused on creating client facing tools with modern
                                web technologies. When I'm not coding, I'm either at the gym, 
                                fishing, or handing out with my friends.
                            </p>
                        </div>

                        <div class="space-y-6">
                            <p class="text-xs font-medium text-zinc-500 uppercase tracking-wider">Where you can find me</p>
                            
                            <div class="flex flex-col gap-4">
                                <div class="flex items-center justify-between group max-w-sm">
                                    <a href="https://github.com/dylGray" target="_blank" class="flex items-center gap-3 text-zinc-300 hover:text-blue-400 transition-all font-medium">
                                        <img src="/images/github-icon.png" alt="GitHub" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                        GitHub
                                    </a>
                                </div>

                                <div class="flex items-center justify-between group max-w-sm">
                                    <a href="https://www.linkedin.com/in/dylan-gray-255107217/" target="_blank" class="flex items-center gap-3 text-zinc-300 hover:text-blue-400 transition-all font-medium">
                                        <img src="/images/linkedin.webp" alt="LinkedIn" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                        LinkedIn
                                    </a>
                                </div>

                                <div class="flex items-center justify-between max-w-sm">
                                    <p class="flex items-center gap-3 text-zinc-300 font-medium">
                                        <img src="/images/email.webp" alt="Email" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                        dylan.gray@revenuepathgroup.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="hidden md:flex justify-center items-center order-1 md:order-2">
                        <div class="relative group">
                            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <img 
                                src="/images/butters.jpg" 
                                alt="Butters Large" 
                                class="relative w-64 h-64 lg:w-[420px] lg:h-[420px] object-cover rounded-2xl border border-zinc-800 shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <footer class="w-full py-12 px-6">
                <div class="max-w-6xl mx-auto text-center space-y-3">
                    <p class="text-zinc-500 italic text-sm tracking-widest">
                        Matthew 6:34
                    </p>
                    <p class="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
                        &copy; 2026 Dylan Gray
                    </p>
                </div>
            </footer>
        </div>
    `;

    return html;
}