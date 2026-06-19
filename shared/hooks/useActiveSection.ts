"use client";

import { useEffect, useState } from "react";

const sections = ["top", "about", "skills", "projects"] as const;

export function useActiveSection() {
    const [active, setActive] = useState("top");

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(id);
                    }
                },
                {
                    root: null,
                    threshold: 0.4,
                },
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return active;
}
