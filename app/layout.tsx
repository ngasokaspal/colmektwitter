import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITENAME } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
    metadataBase: new URL("https://colmektwitter.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Jepang Barat Viral Terbaru`,
        description: `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'rcg8L-Wz76mBxzQ37nn0-QkCyguScNJkj2ClkYArUZI',
        yandex: 'ceb4aad4fbcad9e0',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
        "logo": "https://colmektwitter.pages.dev/favicon.ico",
        "url": "https://colmektwitter.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://colmektwitter.pages.dev"
            },
            "foundingDate":"2024-09-26"
        }
        const jsonLd1 = {
            "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${SITENAME}`,
        "url": "https://colmektwitter.pages.dev",
        "description": `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
        "image": "https://colmektwitter.pages.dev/favicon.ico",
        "potentialAction":{
            "@type":"ReadAction",
            "target":"https://colmektwitter.pages.dev"}
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://colmektwitter.pages.dev",
        "description": `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://colmektwitter.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
