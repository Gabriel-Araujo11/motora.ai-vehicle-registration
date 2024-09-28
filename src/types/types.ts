export interface Vehicle {
  id: number;
  type: string;
  placa: string;
  lat: number;
  lng: number;
  speed: number;
  status: string;
}

export interface VehicleFormProps {
  onAddVehicle: (vehicle: Vehicle) => void;
}

export type CreateVehiclePayload = Omit<Vehicle, "id">;
