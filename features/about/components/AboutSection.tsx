import { MainTitle, BackgroundParticles } from "@/shared/ui";

export function AboutSection() {
    return (
        <section
            id="about"
            className="py-20 relative overflow-hidden bg-black"
        >
            <BackgroundParticles />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <MainTitle title="OVER_MIJ" />
                </div>

                <div className="flex flex-col gap-12 max-w-6xl mx-auto">
                    <div className="grid gap-8 lg:gap-12">
                        <div className="flex flex-col gap-6">
                            <div className="border border-cyan-500/20 bg-linear-to-r from-cyan-500/5 to-purple-500/5 rounded-lg p-6 backdrop-blur-sm">
                                <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center gap-2">
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
                                        className="lucide lucide-cpu w-6 h-6 text-cyan-400"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 20v2" />
                                        <path d="M12 2v2" />
                                        <path d="M17 20v2" />
                                        <path d="M17 2v2" />
                                        <path d="M2 12h2" />
                                        <path d="M2 17h2" />
                                        <path d="M2 7h2" />
                                        <path d="M20 12h2" />
                                        <path d="M20 17h2" />
                                        <path d="M20 7h2" />
                                        <path d="M7 20v2" />
                                        <path d="M7 2v2" />
                                        <rect
                                            x="4"
                                            y="4"
                                            width="16"
                                            height="16"
                                            rx="2"
                                        />
                                        <rect
                                            x="8"
                                            y="8"
                                            width="8"
                                            height="8"
                                            rx="1"
                                        />
                                    </svg>
                                    Kern specialiteiten
                                </h3>

                                <div className="grid gap-4">
                                    <div className="group p-4 bg-black/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 lg:p-3 rounded-lg bg-linear-to-r from-cyan-400 to-blue-500 bg-opacity-20">
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
                                                    className="lucide lucide-code-xml w-5 h-5 lg:w-6 lg:h-6 text-white"
                                                    aria-hidden="true"
                                                >
                                                    <path d="m18 16 4-4-4-4" />
                                                    <path d="m6 8-4 4 4 4" />
                                                    <path d="m14.5 4-5 16" />
                                                </svg>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm lg:text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">FRONTEND DEVELOPMENT</h4>

                                                <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">Moderne React-applicaties, responsive UI/UX design en interactieve gebruikerservaringen.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group p-4 bg-black/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 lg:p-3 rounded-lg bg-linear-to-r from-green-400 to-cyan-500 bg-opacity-20">
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
                                                    className="lucide lucide-database w-5 h-5 lg:w-6 lg:h-6 text-white"
                                                    aria-hidden="true"
                                                >
                                                    <ellipse
                                                        cx="12"
                                                        cy="5"
                                                        rx="9"
                                                        ry="3"
                                                    />
                                                    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                                                    <path d="M3 12A9 3 0 0 0 21 12" />
                                                </svg>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm lg:text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">BACKEND DEVELOPMENT</h4>

                                                <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">CMS-integraties, API-koppelingen en schaalbare backend-oplossingen met Next.js en PayloadCMS.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group p-4 bg-black/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 lg:p-3 rounded-lg bg-linear-to-r from-purple-400 to-pink-500 bg-opacity-20">
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
                                                    className="lucide lucide-smartphone w-5 h-5 lg:w-6 lg:h-6 text-white"
                                                    aria-hidden="true"
                                                >
                                                    <rect
                                                        width="14"
                                                        height="20"
                                                        x="5"
                                                        y="2"
                                                        rx="2"
                                                        ry="2"
                                                    />
                                                    <path d="M12 18h.01" />
                                                </svg>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm lg:text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">FULL-STACK APPLICATIONS</h4>

                                                <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">Ontwikkeling van complete webapplicaties met moderne frontend- en backendtechnologieën.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group p-4 bg-black/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 lg:p-3 rounded-lg bg-linear-to-r from-orange-400 to-red-500 bg-opacity-20">
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
                                                    className="lucide lucide-settings w-5 h-5 lg:w-6 lg:h-6 text-white"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="3"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm lg:text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">DEVOPS & WORKFLOW</h4>

                                                <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">Focus op efficiënte development workflows met Git, GitHub Actions, Docker en CI/CD.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
