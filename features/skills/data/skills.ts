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
        icon: "/Website/icons/frontend-icon.svg",
        gradient: "from-pink-400 to-purple-500",
        items: [
            {
                name: "JavaScript",
                icon: "/Website/icons/javascript-icon.svg",
            },
            {
                name: "TypeScript",
                icon: "/Website/icons/typescript-icon.svg",
            },
            {
                name: "Python",
                icon: "/Website/icons/python-icon.svg",
            },
            {
                name: "PHP",
                icon: "/Website/icons/php-icon.svg",
            },
            {
                name: "C#",
                icon: "/Website/icons/csharp-icon.svg",
            },
        ],
    },

    frontend: {
        title: "Frontend",
        icon: "/Website/icons/frontend-icon.svg",
        gradient: "from-cyan-400 to-blue-500",
        items: [
            {
                name: "React",
                icon: "/Website/icons/react-icon.svg",
            },
            {
                name: "Next.js",
                icon: "/Website/icons/nextjs-icon.svg",
            },
            {
                name: "Astro",
                icon: "/Website/icons/astro-icon.svg",
            },
            {
                name: "Tailwind CSS",
                icon: "/Website/icons/tailwind-icon.svg",
            },
            {
                name: "SCSS",
                icon: "/Website/icons/sass-icon.svg",
            },
            {
                name: "Bootstrap",
                icon: "/Website/icons/bootstrap-icon.svg",
            },
        ],
    },

    backend: {
        title: "Backend",
        icon: "/Website/icons/backend-icon.svg",
        gradient: "from-green-400 to-cyan-500",
        items: [
            {
                name: "PayloadCMS",
                icon: "/Website/icons/payloadcms-icon.svg",
            },
            {
                name: "Node.js",
                icon: "/Website/icons/nodejs-icon.svg",
            },
            {
                name: ".NET Core",
            },
        ],
    },

    databases: {
        title: "Databases",
        icon: "/Website/icons/backend-icon.svg",
        gradient: "from-purple-400 to-pink-500",
        items: [
            {
                name: "PostgreSQL",
                icon: "/Website/icons/postgresql-icon.svg",
            },
            {
                name: "MongoDB",
                icon: "/Website/icons/mongodb-icon.svg",
            },
            {
                name: "SQLite",
            },
        ],
    },

    workflow: {
        title: "Workflow & DevOps",
        icon: "/Website/icons/workflow-icon.svg",
        gradient: "from-orange-400 to-red-500",

        items: [
            {
                name: "Git",
                icon: "/Website/icons/git-icon.svg",
            },
            {
                name: "Docker",
                icon: "/Website/icons/docker-icon.svg",
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
