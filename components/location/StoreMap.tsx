'use client';

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import type L from "leaflet";
import "leaflet/dist/leaflet.css";

// Store location interface
export interface StoreLocation {
  id: number;
  name: string;
  address: string;
  cityStateZip: string;
  phone: string;
  coordinates: [number, number]; // [latitude, longitude]
  hours?: { day: string; time: string }[];
}

// Component to handle map view updates
function ChangeMapView({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

interface StoreMapProps {
  stores: StoreLocation[];
  center?: [number, number];
  zoom?: number;
  onMarkerClick?: (store: StoreLocation) => void;
  selectedStoreId?: number | null;
}

const StoreMap = ({
  stores,
  center = [34.0522, -118.2437], // Default to Los Angeles
  zoom = 12,
  onMarkerClick,
  selectedStoreId,
}: StoreMapProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [L, setL] = useState<typeof import('leaflet') | null>(null);

  useEffect(() => {
    // Dynamically import Leaflet on client side only
    import('leaflet').then((leaflet) => {
      setL(leaflet);
      setIsMounted(true);
      
      // Fix for default marker icons
      delete (leaflet.Icon.Default.prototype as any)._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "/images/marker-icon-2x.png",
        iconUrl: "/images/marker-icon.png",
        shadowUrl: "/images/marker-shadow.png",
      });
    });
  }, []);

  if (!isMounted || !L) {
    return (
      <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  // Default marker icon
  const defaultIcon = L.icon({
    iconUrl: "/images/marker-icon.png",
    shadowUrl: "/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const selectedIcon = L.icon({
    iconUrl: "/images/marker-icon-red.png",
    shadowUrl: "/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className="w-full h-full rounded-sm"
      style={{ background: "#e5e3df" }}
      scrollWheelZoom={true}
      doubleClickZoom={true}
    >
      <ChangeMapView center={center} zoom={zoom} />

      {/* OpenStreetMap Tile Layer */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Markers for each store */}
      {stores.map((store) => (
        <Marker
          key={store.id}
          position={store.coordinates}
          icon={selectedStoreId === store.id ? selectedIcon : defaultIcon}
          eventHandlers={{
            click: () => {
              if (onMarkerClick) {
                onMarkerClick(store);
              }
            },
          }}
        >
          <Popup>
            <div className="min-w-[200px] p-2">
              <h3 className="font-bold text-[#15C15D] mb-2">{store.name}</h3>
              <p className="text-sm text-gray-700 mb-1">{store.address}</p>
              <p className="text-sm text-gray-700 mb-2">{store.cityStateZip}</p>
              <a
                href={`tel:${store.phone}`}
                className="text-sm text-blue-600 hover:underline block mb-2"
              >
                {store.phone}
              </a>
              <button
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${store.coordinates[0]},${store.coordinates[1]}`,
                    "_blank",
                  )
                }
                className="w-full bg-[#15C15D] text-white text-sm py-1 px-2 rounded hover:bg-[#12a850] transition-colors"
              >
                Get Directions
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default StoreMap;