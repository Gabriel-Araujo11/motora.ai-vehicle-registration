"use client";

import { Heading } from "@chakra-ui/react";
import Dashboard from "@/components/dashboard";

export default function Home() {
  return (
    <div>
      <Heading
        p={{ base: 8, md: 20 }}
        color="white"
        textAlign="center"
        fontSize={{ base: "2xl", md: "4xl" }}
      >
        Motora.ai Monitoring
      </Heading>
      <Dashboard />
    </div>
  );
}
