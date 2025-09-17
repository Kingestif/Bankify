import type { Metadata } from "next";
import "./globals.css";

/**
 * * The script Avoids Flash of Incorrect Theme at the start of page load
 */
export const metadata: Metadata = {
  title: "Bankify",
  description: "Make Banking simple & modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{const s=localStorage.getItem('theme');
            if(s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches))
            document.documentElement.classList.add('dark');}catch(e){}})();`
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
