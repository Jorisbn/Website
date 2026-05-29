type Project = {
    title: string;
    description: string;
    image: string;
    status: "live" | "development" | "planned";
    role: "frontend" | "backend" | "full-stack";
    stack: string[];
    github?: string;
    website?: string;
};

type projectList = Record<string, Project>;

export const Projects: projectList = {
    flipmerktop: {
        title: "FlipMerktOp",
        description: "Een complete website gebouwd op basis van een Figma-ontwerp, waarbij PayloadCMS als headless CMS voor contentbeheer is gebruikt. De frontend is ontwikkeld met Astro, dat CMS-gegevens via een API ophaalt en pagina's rendert via SSR met caching om snelle laadtijden en efficiënte prestaties te garanderen.",
        image: "flipmerktop.webp",
        status: "live",
        role: "full-stack",
        stack: ["NextJS", "Typescript", "SASS", "PayloadCMS", "MongoDB"],
        website: "https://flipmerktop.nl/",
    },

    voedingswaardewijzer: {
        title: "Voedingswaardewijzer",
        description: "Een Next.js applicatie gebouwd rond een door de klant aangeleverde ingrediënten-database. De applicatie stelt gebruikers in staat om recepten te creëren en automatisch voedingswaarden te berekenen op basis van ingrediënten. Functionaliteiten omvatten authenticatie, het opslaan en delen van recepten, het vergelijken van openbare recepten en ingrediënten, en het bekijken van statistische toplijsten zoals ingrediënten met het hoogste suikergehalte.",
        image: "voedingswaardewijzer.webp",
        status: "live",
        role: "full-stack",
        stack: ["NextJS", "React", "RESTAPI", "Typescript", "MongoDB"],
        website: "https://app.voedingswaardewijzer.nl/",
    },

    eigenkado: {
        title: "Eigenkado",
        description: "Een op PayloadCMS gebaseerde, meertalige applicatie voor het beheren van kerstpakketten binnen bedrijven. De eigenaar kan pakketten aanmaken en koppelen aan bedrijven, en medewerkers importeren via Excel. Per medewerker wordt automatisch een account met wachtwoord gegenereerd en kunnen uitnodigingen in bulk per e-mail worden verstuurd. Medewerkers kunnen vervolgens inloggen en een door het bedrijf geselecteerd aanbod aan pakketten bekijken en kiezen. Na bevestiging wordt de keuze opgeslagen in de database. Elk bedrijf heeft een deadline waarna keuzes worden gesloten, en de eigenaar kan een overzicht exporteren van alle medewerkers en hun gekozen pakketten.",
        image: "eigenkado.webp",
        status: "live",
        role: "full-stack",
        stack: ["NextJS", "React", "RESTAPI", "Typescript", "PostgreSQL"],
        website: "https://www.eigenkado.nl/nl",
    },

    senbis: {
        title: "Senbis Group",
        description: "Wordpress website voor Senbis group met custom post sorting functions voor R&D en Compounds",
        image: "senbis.webp",
        status: "live",
        role: "full-stack",
        stack: ["Wordpress", "PHP", "Javascript", "HTML", "SASS"],
        website: "https://senbis.com",
    },

    loeihard: {
        title: "Loeihard!",
        description: "Een website ontwikkeld op basis van een Figma design met PayloadCMS als backend en Astro als frontend. Het CMS bevat een live preview functionaliteit zodat contentwijzigingen direct zichtbaar zijn tijdens het bewerken. De website is volledig modulair opgebouwd met een block-based structuur, waardoor pagina’s flexibel en volledig uniek samengesteld kunnen worden. De Astro frontend haalt data op via de API en gebruikt caching voor snelle laadtijden en optimale prestaties.",
        image: "loeihard.webp",
        status: "live",
        role: "full-stack",
        stack: ["NextJS", "Typescript", "SASS", "PayloadCMS", "MongoDB"],
        website: "https://loeihard.com/",
    },

    meijelgezondai: {
        title: "Meijelgezond AI",
        description: "Een custom applicatie waarmee gebruikers AI-chatbots kunnen aanmaken en beheren. Per chatbot kan een naam en system prompt worden ingesteld, waarna gebruikers uit verschillende AI-modellen kunnen kiezen die via een externe API beschikbaar worden gesteld. De applicatie biedt een flexibele basis voor het configureren en testen van gepersonaliseerde AI-chatbots.",
        image: "ai.meijelgezond.webp",
        status: "live",
        role: "full-stack",
        stack: ["NextJS", "React", "RESTAPI", "Typescript", "MongoDB"],
        website: "https://ai.meijelgezond.nl/",
    },

    packiejan: {
        title: "Packiejan",
        description: "Een complete website gebouwd op basis van een Figma-ontwerp, waarbij PayloadCMS als headless CMS voor contentbeheer is gebruikt. De frontend is ontwikkeld met Astro, dat CMS-gegevens via een API ophaalt en pagina's rendert via SSR met caching om snelle laadtijden en efficiënte prestaties te garanderen.",
        image: "packiejan.webp",
        status: "development",
        role: "full-stack",
        stack: ["NextJS", "Typescript", "SASS", "PayloadCMS", "MongoDB"],
        website: "",
    },
};
