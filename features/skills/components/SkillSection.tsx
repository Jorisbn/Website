import { skills, extraSkills } from "../data/skills";
import { MainTitle } from "@/shared/ui";
import Image from "next/image";

export function SkillSection() {
    return (
        <section
            id="skills"
            className="py-20 relative overflow-hidden bg-black"
        >
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-br from-cyber-dark via-black to-cyber-darker opacity-50" />
                <div className="absolute inset-0 bg-size-[50px_50px] bg-[radial-gradient(circle_at_1px_1px,rgba(6,182,212,0.1)_1px,transparent_0)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <MainTitle title="SKILLS & EXPERTISE" />
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                    {Object.entries(skills).map(([key, skill]) => {
                        return (
                            <div
                                id={key}
                                className="group"
                                key={key}
                            >
                                <div className="border border-cyan-500/20 bg-linear-to-br from-cyan-500/5 to-purple-500/5 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`p-3 rounded-lg bg-linear-to-r ${skill.gradient} bg-opacity-20 invert`}>
                                            <Image
                                                src={skill.icon}
                                                alt={skill.title}
                                                width={24}
                                                height={24}
                                            />
                                        </div>

                                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-all duration-300">{skill.title}</h3>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {skill.items.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col gap-2"
                                            >
                                                <div className="flex items-center gap-2">
                                                    {item.icon && (
                                                        <span className="text-lg invert">
                                                            <Image
                                                                src={item.icon}
                                                                alt={item.name}
                                                                width={24}
                                                                height={24}
                                                            />
                                                        </span>
                                                    )}
                                                    <span className="text-white font-medium text-sm">{item.name}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-16">
                    <h3 className="text-2xl font-semibold text-white mb-8">Aanvullende technologieën &amp; hulpmiddelen</h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        {extraSkills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-black/30 border border-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
