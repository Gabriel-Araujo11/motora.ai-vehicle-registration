export interface Vehicle {
  id: number;
  type: string;
  placa: string;
  lat: number;
  lng: number;
  speed: number;
  status: string;
}

export interface VehicleRegisterProps {
  onAddVehicle: (vehicle: Vehicle) => void;
}

export type CreateVehiclePayload = Omit<Vehicle, "id">;

export interface VehicleEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: Vehicle | null;
  onSave: (updatedVehicle: Vehicle) => void;
  onDelete: (vehicleId?: Vehicle) => void;
}

export interface VehicleMapProps {
  vehicles: Vehicle[];
}

export interface DashboardProps {
  vehicles: Vehicle[];
  handleAddVehicle: () => void;
}
