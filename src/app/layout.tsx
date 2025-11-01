import type { Metadata } from "next";
import { Jua } from "next/font/google";
import "./globals.css";


const jua = Jua({
    subsets: ["latin"],  // Jua는 라틴 + 한글 섹션이니까 latin 또는 “korean” 등 포함 가능한 경우도 있음
    display: "swap",     // 폰트 렌더링 방식
    weight: "400",       // Jua는 보통 Regular 하나만 있으니까 400
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
            <body className={`${jua.className} antialiased flex flex-col`}>
                {children}
            </body>
        </html>
    );
}
