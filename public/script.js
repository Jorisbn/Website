window.onload = () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
        },
    );

    document.querySelectorAll(".fade-up, .fade-left, .fade-right, .scale-in").forEach((el) => observer.observe(el));
};
