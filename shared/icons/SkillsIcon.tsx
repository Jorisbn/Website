export function SkillsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
            {...props}
        >
            <path d="m16 18 6-6-6-6" />
            <path d="m8 6-6 6 6 6" />
        </svg>
    );
}
