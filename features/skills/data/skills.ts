type SkillItem = {
    name: string;
    icon?: string;
};

type SkillCategory = {
    title: string;
    icon: string;
    gradient: string;
    items: SkillItem[];
};

type skillList = Record<string, SkillCategory>;

export const skills: skillList = {
    languages: {
        title: "Programming Languages",
        icon: "/icons/frontend-icon.svg",
        gradient: "from-pink-400 to-purple-500",
        items: [
            {
                name: "JavaScript",
                icon: "/icons/javascript-icon.svg",
            },
            {
                name: "TypeScript",
                icon: "/icons/typescript-icon.svg",
            },
            {
                name: "Python",
                icon: "/icons/python-icon.svg",
            },
            {
                name: "PHP",
                icon: "/icons/php-icon.svg",
            },
            {
                name: "C#",
                icon: "/icons/csharp-icon.svg",
            },
        ],
    },

    frontend: {
        title: "Frontend",
        icon: "/icons/frontend-icon.svg",
        gradient: "from-cyan-400 to-blue-500",
        items: [
            {
                name: "React",
                icon: "/icons/react-icon.svg",
            },
            {
                name: "Next.js",
                icon: "/icons/nextjs-icon.svg",
            },
            {
                name: "Astro",
                icon: "/icons/astro-icon.svg",
            },
            {
                name: "Tailwind CSS",
                icon: "/icons/tailwind-icon.svg",
            },
            {
                name: "SCSS",
                icon: "/icons/sass-icon.svg",
            },
            {
                name: "Bootstrap",
                icon: "/icons/bootstrap-icon.svg",
            },
        ],
    },

    backend: {
        title: "Backend",
        icon: "/icons/backend-icon.svg",
        gradient: "from-green-400 to-cyan-500",
        items: [
            {
                name: "PayloadCMS",
                icon: "/icons/payloadcms-icon.svg",
            },
            {
                name: "Node.js",
                icon: "/icons/nodejs-icon.svg",
            },
            {
                name: ".NET Core",
            },
        ],
    },

    databases: {
        title: "Databases",
        icon: "/icons/backend-icon.svg",
        gradient: "from-purple-400 to-pink-500",
        items: [
            {
                name: "PostgreSQL",
                icon: "/icons/postgresql-icon.svg",
            },
            {
                name: "MongoDB",
                icon: "/icons/mongodb-icon.svg",
            },
        ],
    },

    workflow: {
        title: "Workflow & DevOps",
        icon: "/icons/workflow-icon.svg",
        gradient: "from-orange-400 to-red-500",

        items: [
            {
                name: "Git",
                icon: "/icons/git-icon.svg",
            },
            {
                name: "Docker",
                icon: "/icons/docker-icon.svg",
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

export const extraSkills: string[] = ["HTML5", "CSS3", "Figma", "VS Code", "Coolify", "AWS SMTP"];
