import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";


const OpenSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "600"],
});

export const metadata: Metadata = {
    title: "HyeJin's Port Folio",
    description: "My Port Folio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;

}>) {
    return (
        <html lang="en">
            <body className={`${OpenSans.className} antialiased flex flex-col`}>
                {children}
            </body>
        </html>
    );
}
