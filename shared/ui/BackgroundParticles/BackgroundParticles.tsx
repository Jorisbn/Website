import { generateParticles } from "./generateParticles";

const particles = generateParticles(20);

export function BackgroundParticles() {
    return (
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-linear-to-br from-cyber-dark via-black to-cyber-darker opacity-50" />

            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.1) 1px, transparent 0px)",
                    backgroundSize: "50px 47.7px",
                }}
            />

            {particles.map((p, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                    style={{
                        left: p.left,
                        top: p.top,
                        transform: `translateY(${p.translateY})`,
                    }}
                />
            ))}
        </div>
    );
}
