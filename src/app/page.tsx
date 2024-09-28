"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import VehicleMap from "../components/vehicleLiveMap";

export default function Home() {
  return (
    <div>
      <Heading p={10} color="#0c0847" textAlign="center">
        Motora.ai monitoring
      </Heading>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        p={10}
        gap={8}
      >
        <Box flex="2" maxW={{ base: "100%", md: "60%" }} p={4}>
          <VehicleMap />
        </Box>
      </Flex>
    </div>
  );
}
