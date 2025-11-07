import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contextAPI/useDarkMode";


const poppins = Poppins({
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
            <body className={`${poppins.className} antialiased flex flex-col`}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
