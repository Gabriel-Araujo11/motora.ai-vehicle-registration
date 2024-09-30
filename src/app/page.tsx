"use client";

import { Heading } from "@chakra-ui/react";
import Dashboard from "@/components/dashboard";

export default function Home() {
  return (
    <div>
      <Heading
        p={{ base: 8, md: 16 }}
        color="white"
        textAlign="center"
        fontSize={{ base: "2xl", md: "4xl" }}
        bg="gray.800"
      >
        Motora.ai Monitoring
      </Heading>
      <Dashboard />
    </div>
  );
}
