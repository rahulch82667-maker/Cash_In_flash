'use client';

import { useState } from 'react';

interface LocationCardProps {
  number: number;
  address: string;
  cityStateZip: string;
  phone: string;
  hours: { day: string; time: string }[];
  coordinates?: [number, number];
  onViewOnMap?: () => void;
}

const LocationCard = ({ 
  number, 
  address, 
  cityStateZip, 
  phone, 
  hours,
  coordinates,
  onViewOnMap 
}: LocationCardProps) => {
  const [showFullHours, setShowFullHours] = useState(false);
  const displayedHours = showFullHours ? hours : hours.slice(0, 3);

  const handleGetDirections = () => {
    if (coordinates) {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${coordinates[0]},${coordinates[1]}`, '_blank');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 mb-6 font-poppins hover:shadow-md transition-shadow">
      <h3 className="text-[22px] font-bold text-black border-b border-gray-100 pb-3 mb-4">
        {number}. Cash In Flash
      </h3>
      <div className="text-[15px] text-gray-700 space-y-1 mb-4">
        <p>{address}</p>
        <p>{cityStateZip}</p>
        <a href={`tel:${phone}`} className="text-[#0066cc] hover:underline block mt-1">
          {phone}
        </a>
      </div>
      
      <div className="mt-4">
        <h4 className="font-bold text-[16px] mb-2">Store Hours:</h4>
        <div className="space-y-1">
          {displayedHours.map((item, idx) => (
            <div key={idx} className="flex max-w-[300px] justify-between text-[14px]">
              <span className="font-medium text-gray-600">{item.day}:</span>
              <span className="text-gray-800">{item.time}</span>
            </div>
          ))}
        </div>
        {hours.length > 3 && (
          <button
            onClick={() => setShowFullHours(!showFullHours)}
            className="text-[#15C15D] text-sm mt-2 hover:underline"
          >
            {showFullHours ? 'Show less' : `Show all ${hours.length} hours`}
          </button>
        )}
      </div>

      <div className="mt-4 flex gap-3">
        {coordinates && (
          <>
            <button
              onClick={handleGetDirections}
              className="flex-1 bg-[#15C15D] hover:bg-[#12a850] text-white text-sm py-2 px-3 rounded transition-colors"
            >
              Get Directions
            </button>
            {onViewOnMap && (
              <button
                onClick={onViewOnMap}
                className="flex-1 border border-[#15C15D] text-[#15C15D] hover:bg-[#15C15D] hover:text-white text-sm py-2 px-3 rounded transition-colors"
              >
                View on Map
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LocationCard;