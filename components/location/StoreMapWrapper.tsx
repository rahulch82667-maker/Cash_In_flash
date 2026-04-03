'use client';

import dynamic from 'next/dynamic';
import { StoreLocation } from './StoreMap';

// Dynamically import the map component with no SSR
const StoreMap = dynamic(() => import('./StoreMap'), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  ),
});

interface StoreMapWrapperProps {
  stores: StoreLocation[];
  center?: [number, number];
  zoom?: number;
  onMarkerClick?: (store: StoreLocation) => void;
  selectedStoreId?: number | null;
}

const StoreMapWrapper = (props: StoreMapWrapperProps) => {
  return <StoreMap {...props} />;
};

export default StoreMapWrapper;