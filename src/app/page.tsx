"use client";

import { Box, Heading } from "@chakra-ui/react";
import VehicleMap from "../components/vehicleLiveMap";

export default function Home() {
  return (
    <div>
      <Heading p={10} color="#0c0847">
        Motora.ai monitoring
      </Heading>
      <Box p={10}>
        <VehicleMap />
      </Box>
    </div>
  );
}
