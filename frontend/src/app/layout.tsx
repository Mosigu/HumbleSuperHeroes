import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
  title: "Humble Superheroes",
  description: "Explore the humblest superheroes of all time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme
          appearance="light"
          accentColor="ruby"
          grayColor="slate"
          panelBackground="translucent"
          scaling="100%"
          radius="small"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
