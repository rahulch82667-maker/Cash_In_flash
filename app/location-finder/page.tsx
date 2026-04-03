'use client';

import { useState } from 'react';
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import LocationCard from "@/components/location/LocationCard";
import StoreMapWrapper from "@/components/location/StoreMapWrapper";
import { StoreLocation } from "@/components/location/StoreMap";

const LocationFinderPage = () => {
  const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([34.0522, -118.2437]);

  // Store locations with coordinates
  const storeLocations: StoreLocation[] = [
    {
      id: 1,
      name: "Cash In Flash - Arleta",
      address: "13937 Van Nuys Blvd",
      cityStateZip: "Arleta, CA, 91331",
      phone: "747.270.7121",
      coordinates: [34.2265, -118.4488], // Approximate coordinates for Arleta
      hours: [
        { day: "Monday", time: "10:00 AM - 07:00 PM" },
        { day: "Tuesday", time: "10:00 AM - 07:00 PM" },
        { day: "Wednesday", time: "10:00 AM - 07:00 PM" },
        { day: "Thursday", time: "10:00 AM - 07:00 PM" },
        { day: "Friday", time: "10:00 AM - 07:00 PM" },
        { day: "Saturday", time: "10:00 AM - 06:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
    {
      id: 2,
      name: "Cash In Flash - Winnetka",
      address: "20050 Vanowen St Unit E",
      cityStateZip: "Winnetka, CA, 91306",
      phone: "747.270.7121",
      coordinates: [34.1939, -118.5772], // Approximate coordinates for Winnetka
      hours: [
        { day: "Monday", time: "10:00 AM - 07:00 PM" },
        { day: "Tuesday", time: "10:00 AM - 07:00 PM" },
        { day: "Wednesday", time: "10:00 AM - 07:00 PM" },
        { day: "Thursday", time: "10:00 AM - 07:00 PM" },
        { day: "Friday", time: "10:00 AM - 07:00 PM" },
        { day: "Saturday", time: "10:00 AM - 06:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
  ];

  const handleMarkerClick = (store: StoreLocation) => {
    setSelectedStoreId(store.id);
    setMapCenter(store.coordinates);
    // Scroll to the corresponding card
    const element = document.getElementById(`store-${store.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleViewOnMap = (storeId: number) => {
    const store = storeLocations.find(s => s.id === storeId);
    if (store) {
      setSelectedStoreId(storeId);
      setMapCenter(store.coordinates);
      // Smooth scroll to map
      const mapElement = document.getElementById('store-map');
      if (mapElement) {
        mapElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };


  const handleBackToResults = () => {
    setSelectedStoreId(null);
    const locationsElement = document.getElementById('locations-list');
    if (locationsElement) {
      locationsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-[1200px] mx-auto px-4 py-10 mt-[125px]">
        <h1 className="text-[28px] font-bold text-center mb-8 font-poppins">
          Location Finder
        </h1>

        {/* Map Container */}
        <div id="store-map" className="bg-white border border-gray-200 rounded-md shadow-sm p-4 mb-10">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#f8f9fa] overflow-hidden rounded-sm border border-gray-100">
            <StoreMapWrapper 
              stores={storeLocations}
              center={mapCenter}
              zoom={13}
              onMarkerClick={handleMarkerClick}
              selectedStoreId={selectedStoreId}
            />
          </div>

          {/* Map Footer Buttons */}
          <div className="flex justify-between items-center mt-4 px-2">
            <button 
              onClick={handleBackToResults}
              className="text-[13px] font-medium text-gray-500 border border-gray-300 py-1.5 px-4 rounded-sm hover:bg-gray-50 transition-colors"
            >
              Back to Results
            </button>
          </div>
        </div>

        {/* Locations List */}
        <div id="locations-list" className="max-w-[900px] mx-auto">
          {storeLocations.map((store) => (
            <div key={store.id} id={`store-${store.id}`}>
              <LocationCard 
                number={store.id}
                address={store.address}
                cityStateZip={store.cityStateZip}
                phone={store.phone}
                hours={store.hours!}
                coordinates={store.coordinates}
                onViewOnMap={() => handleViewOnMap(store.id)}
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LocationFinderPage;