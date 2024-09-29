"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import VehicleMap from "../components/vehicleMap";

export default function Home() {
  return (
    <div>
      <Heading
        p={{ base: 8, md: 10 }}
        color="#0c0847"
        textAlign="center"
        fontSize={{ base: "2xl", md: "4xl" }}
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
        <Box
          flex="2"
          maxW={{ base: "100%", md: "60%" }}
          p={{ base: 2, md: 4 }}
          width="100%"
        >
          <VehicleMap />
        </Box>
      </Flex>
    </div>
  );
}
