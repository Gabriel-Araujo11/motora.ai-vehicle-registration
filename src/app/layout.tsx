import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motora.ai Monitoring",
  description: "Monitoring carried out by Motora.AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body style={{ backgroundColor: "#1C1C1C" }}>{children}</body>
      </ChakraProvider>
    </html>
  );
}
