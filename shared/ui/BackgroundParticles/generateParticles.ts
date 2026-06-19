export type Particle = {
    left: string;
    top: string;
    translateY: string;
};

export function generateParticles(count = 20): Particle[] {
    return Array.from({ length: count }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        translateY: `${(Math.random() - 0.5) * 100}px`,
    }));
}
