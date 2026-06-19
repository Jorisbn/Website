"use client";

import { navigation } from "../config/navigation";
import { useActiveSection } from "@/shared/hooks/useActiveSection";

export function Header() {
    const active = useActiveSection();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md bg-linear-to-r from-black/70 via-black/80 to-black/70 border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <button className="flex items-center gap-3 text-left">
                        <div className="relative">
                            <div className="w-10 h-10 bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl shadow-[0_0_20px_rgba(118,226,234,0.5)]" />
                            <div className="absolute inset-0 w-10 h-10 bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl animate-pulse opacity-50" />

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 420 400"
                                fill="#FFFFFF"
                                className="absolute inset-0 m-auto"
                            >
                                <g>
                                    <path d="M420 400L274.787 338.298L154.149 102.128L207.766 0L420 400Z" />
                                    <path d="M0 400L75.9573 253.191H187.659L142.978 342.553L0 400Z" />
                                </g>
                            </svg>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-mono font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">Joris</span>
                        </div>
                    </button>

                    <nav className="flex items-center gap-3">
                        {navigation.map(({ href, Icon, text, label }, index) => {
                            const id = href.replace("#", "");

                            const isActive = active === id;

                            return (
                                <a
                                    key={index}
                                    href={href}
                                    aria-label={label}
                                    className={`relative px-4 py-3 text-sm font-mono font-semibold transition-all duration-300 group text-gray-300 hover:text-cyan-400 ${isActive ? "text-cyan-400" : "text-gray-400"}`}
                                >
                                    <div className="flex items-center lg:gap-2 relative z-10">
                                        <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : ""}`} />
                                        <span className="hidden md:block">{text}</span>
                                    </div>

                                    <div className="absolute inset-0 rounded-lg bg-linear-to-r from-cyan-300 via-rose-200 to-cyan-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                    <div className="absolute inset-0 rounded-lg bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-500 active-line transition-[opacity,transform] duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </header>
    );
}
