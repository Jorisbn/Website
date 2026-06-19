import "./globals.css";

import type { Metadata } from "next";
import { Header, Footer } from "@/shared/layout";
import { DiagonalBackground } from "@/shared/ui";

export const metadata: Metadata = {
    title: "Joris Bruynen | Portfolio",
    description: "Full-stack developer portfolio and projects.",

    authors: [{ name: "Joris Bruynen" }],

    metadataBase: new URL("https://jorisbn.github.io/Website/"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="nl"
            className="h-full antialiased scroll-smooth"
        >
            <body className="min-h-full flex flex-col bg-black">
                <DiagonalBackground />

                <Header />

                <main className="relative z-10">{children}</main>

                <Footer />
            </body>
        </html>
    );
}
