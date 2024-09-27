export interface Vehicle {
  id: number;
  type: string;
  placa: string;
  lat: number;
  lng: number;
  speed: number;
  status: string;
}

export type CreateVehiclePayload = Omit<Vehicle, "id">;
