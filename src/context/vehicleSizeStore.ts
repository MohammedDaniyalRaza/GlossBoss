import { createContext, useContext } from 'react';
import type { VehicleSize } from '@/data/services';

export type VehicleSizeContextValue = { size: VehicleSize; setSize: (size: VehicleSize) => void };

export const VehicleSizeContext = createContext<VehicleSizeContextValue | null>(null);

export function useVehicleSize() {
  const context = useContext(VehicleSizeContext);
  if (!context) throw new Error('useVehicleSize must be used within VehicleSizeProvider');
  return context;
}
