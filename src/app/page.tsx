"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
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
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        p={{ base: 5, md: 10 }}
        gap={{ base: 4, md: 8 }}
      >
        <Box flex="2" maxW={{ base: "100%", md: "70%" }} bg="#fcf8f5">
          <Dashboard vehicles={[]} handleAddVehicle={() => {}} />
        </Box>
      </Flex>
    </div>
  );
}
