import { MainTitle } from "@/shared/ui";
import { Projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectSection() {
    return (
        <section
            id="projects"
            className="py-20 relative"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <MainTitle title="UITGELICHTE_PROJECTEN" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(Projects).map(([key, project]) => (
                        <ProjectCard
                            key={key}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
