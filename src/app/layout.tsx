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
    title: "HyeJin's PortFolio",
    description: "My PortFolio",
    icons: {
        icon: "/favicon.png", // public 폴더에 있는 경우
        shortcut: "/favicon.png", // 과거 브라우저 호환용
        apple: "/favifon.png" // iOS 홈화면용
    },
};

const setThemeScript = `
(function() {
  try {
    const stored = localStorage.getItem('theme');
    const theme = stored === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme
  } catch (e) {}
})();
`;


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;

}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
            </head>
            <body className={`${poppins.className} antialiased flex flex-col`} >
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
