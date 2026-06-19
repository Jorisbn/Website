import { particles } from "./particles";

export function DiagonalBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-size-[60px_60px]" />
            </div>
            <div className="absolute inset-0">
                {particles.map((particle, index) => (
                    <div
                        key={index}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration,
                        }}
                    />
                ))}
            </div>
            <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900/90 to-black" />
            <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-br from-transparent via-cyan-500/20 to-transparent opacity-50" />
            <div className="absolute top-0 right-1/3 w-px h-full bg-linear-to-br from-transparent via-purple-500/20 to-transparent opacity-50" />
        </div>
    );
}
