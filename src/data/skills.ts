import type { IconKey } from "@/assets/icons/iconMap";

type SkillCategory = {
    title: string;
    icon: IconKey;
    gradient: string;
    items: {
        name: string;
        icon?: IconKey;
    }[];
};

type skillList = Record<string, SkillCategory>;

export const skills: skillList = {
    languages: {
        title: "Programming Languages",
        icon: "frontend-icon.svg",
        gradient: "from-pink-400 to-purple-500",
        items: [
            {
                name: "JavaScript",
                icon: "javascript-icon.svg",
            },
            {
                name: "TypeScript",
                icon: "typescript-icon.svg",
            },
            {
                name: "Python",
                icon: "python-icon.svg",
            },
            {
                name: "PHP",
                icon: "php-icon.svg",
            },
            {
                name: "C#",
                icon: "csharp-icon.svg",
            },
        ],
    },

    frontend: {
        title: "Frontend",
        icon: "frontend-icon.svg",
        gradient: "from-cyan-400 to-blue-500",
        items: [
            {
                name: "React",
                icon: "react-icon.svg",
            },
            {
                name: "Next.js",
                icon: "nextjs-icon.svg",
            },
            {
                name: "Astro",
                icon: "astro-icon.svg",
            },
            {
                name: "Tailwind CSS",
                icon: "tailwind-icon.svg",
            },
            {
                name: "SCSS",
                icon: "sass-icon.svg",
            },
            {
                name: "Bootstrap",
                icon: "bootstrap-icon.svg",
            },
        ],
    },

    backend: {
        title: "Backend",
        icon: "backend-icon.svg",
        gradient: "from-green-400 to-cyan-500",
        items: [
            {
                name: "PayloadCMS",
                icon: "payload-icon.svg",
            },
            {
                name: "Node.js",
                icon: "nodejs-icon.svg",
            },
            {
                name: ".NET Core",
            },
        ],
    },

    databases: {
        title: "Databases",
        icon: "backend-icon.svg",
        gradient: "from-purple-400 to-pink-500",
        items: [
            {
                name: "PostgreSQL",
                icon: "postgresql-icon.svg",
            },
            {
                name: "MongoDB",
                icon: "mongodb-icon.svg",
            },
        ],
    },

    workflow: {
        title: "Workflow & DevOps",
        icon: "workflow-icon.svg",
        gradient: "from-orange-400 to-red-500",

        items: [
            {
                name: "Git",
                icon: "git-icon.svg",
            },
            {
                name: "Docker",
                icon: "docker-icon.svg",
            },
            {
                name: "CI/CD",
            },
            {
                name: "GitHub Actions",
            },
            {
                name: "Vitest",
            },
        ],
    },
};
