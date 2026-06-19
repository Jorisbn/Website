import { AboutSection } from "@/features/about";
import { HeroSection } from "@/features/hero";
import { ProjectSection } from "@/features/projects";
import { SkillSection } from "@/features/skills";

export default function Home() {
    return (
        <>
            <HeroSection />

            <AboutSection />

            <SkillSection />

            <ProjectSection />
        </>
    );
}
