import AstroIcon from "./astro-icon.svg?raw";
import BackendIcon from "./backend-icon.svg?raw";
import BootstrapIcon from "./bootstrap-icon.svg?raw";
import CsharpIcon from "./csharp-icon.svg?raw";
import DockerIcon from "./docker-icon.svg?raw";
import DotnetIcon from "./dotnet-icon.svg?raw";
import FrontendIcon from "./frontend-icon.svg?raw";
import GitIcon from "./git-icon.svg?raw";
import GithubIcon from "./github-icon.svg?raw";
import JavascriptIcon from "./javascript-icon.svg?raw";
import MongoDBIcon from "./mongodb-icon.svg?raw";
import NextjsIcon from "./nextjs-icon.svg?raw";
import NodeJSIcon from "./nodejs-icon.svg?raw";
import PayloadIcon from "./payloadcms-icon.svg?raw";
import PHPIcon from "./php-icon.svg?raw";
import PostgreSQLIcon from "./postgresql-icon.svg?raw";
import PythonIcon from "./python-icon.svg?raw";
import ReactIcon from "./react-icon.svg?raw";
import SASSIcon from "./sass-icon.svg?raw";
import TailwindIcon from "./tailwind-icon.svg?raw";
import TypescriptIcon from "./typescript-icon.svg?raw";
import WorkflowIcon from "./workflow-icon.svg?raw";

export const iconMap = {
    "astro-icon.svg": AstroIcon,
    "backend-icon.svg": BackendIcon,
    "bootstrap-icon.svg": BootstrapIcon,
    "csharp-icon.svg": CsharpIcon,
    "docker-icon.svg": DockerIcon,
    "dotnet-icon.svg": DotnetIcon,
    "frontend-icon.svg": FrontendIcon,
    "git-icon.svg": GitIcon,
    "github-icon.svg": GithubIcon,
    "javascript-icon.svg": JavascriptIcon,
    "mongodb-icon.svg": MongoDBIcon,
    "nextjs-icon.svg": NextjsIcon,
    "nodejs-icon.svg": NodeJSIcon,
    "payload-icon.svg": PayloadIcon,
    "php-icon.svg": PHPIcon,
    "postgresql-icon.svg": PostgreSQLIcon,
    "python-icon.svg": PythonIcon,
    "react-icon.svg": ReactIcon,
    "sass-icon.svg": SASSIcon,
    "tailwind-icon.svg": TailwindIcon,
    "typescript-icon.svg": TypescriptIcon,
    "workflow-icon.svg": WorkflowIcon,
} as const;

export type IconKey = keyof typeof iconMap;
