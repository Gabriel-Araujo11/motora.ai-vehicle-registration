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
        <body style={{ backgroundColor: "#fcf8f5" }}>{children}</body>
      </ChakraProvider>
    </html>
  );
}
