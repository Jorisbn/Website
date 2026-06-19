import { navigation } from "../config/navigation";

export function Footer() {
    return (
        <footer className="relative bg-black border-t border-cyan-500/20 overflow-hidden z-10">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-t from-cyber-dark via-black to-transparent opacity-50" />
                <div className="absolute inset-0 bg-size-[40px_40px] bg-[radial-gradient(circle_at_1px_1px,rgba(6,182,212,0.1)_1px,transparent_0)]" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-terminal w-8 h-8 text-cyan-400"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 19h8" />
                                        <path d="m4 17 6-6-6-6" />
                                    </svg>

                                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Joris</h3>
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-4">Full-stack developer met focus op moderne websites en webapplicaties gebouwd met React, Next.js, Typescript, MongoDB en PostgreSQL.</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-code w-5 h-5 text-cyan-400"
                                    aria-hidden="true"
                                >
                                    <path d="m16 18 6-6-6-6" />
                                    <path d="m8 6-6 6 6 6" />
                                </svg>
                                Navigation
                            </h4>

                            <nav className="flex flex-col gap-2">
                                {navigation.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        aria-label={item.label}
                                        className="block text-gray-400 hover:text-cyan-400 transition-colors text-left font-mono text-sm"
                                    >
                                        <span className="text-cyan-400">&gt;</span>
                                        {item.text}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="border-t border-cyan-500/20 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                            <span>&copy; 2024 Joris</span>
                            <span className="text-cyan-400">|</span>
                            <span>BUILT_WITH</span>
                            <span className="text-purple-500">React</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm font-mono">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-gray-400">WEBSITE_ONLINE</span>
                            </div>

                            <span className="text-cyan-400">v 1.0.0</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-cyan-500/20" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-purple-500/2" />
        </footer>
    );
}
