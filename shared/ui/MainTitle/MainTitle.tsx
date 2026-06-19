export function MainTitle({ title }: { title: string }) {
    return (
        <h2 className="text-3xl md:text-6xl font-mono font-bold mb-6">
            <span className="text-cyan-400">&lt;</span>
            <span className="bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">{title}</span>
            <span className="text-pink-500">/&gt;</span>
        </h2>
    );
}
