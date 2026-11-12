import { useMemo, useState } from 'react';
import type { VehicleSize } from '@/data/services';
import { VehicleSizeContext } from './vehicleSizeStore';

export function VehicleSizeProvider({ children }: { children: React.ReactNode }) {
  const [size, setSize] = useState<VehicleSize>('sedan');
  const value = useMemo(() => ({ size, setSize }), [size]);
  return <VehicleSizeContext.Provider value={value}>{children}</VehicleSizeContext.Provider>;
}
