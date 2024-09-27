"use client";

import { Box, Heading } from "@chakra-ui/react";
import VehicleMap from "../components/vehicleLiveMap";

export default function Home() {
  return (
    <div>
      <Heading p={10}>Map</Heading>
      <Box p={10}>
        <VehicleMap />
      </Box>
    </div>
  );
}
