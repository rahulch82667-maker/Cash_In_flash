const StoreLocations = () => {
  const locations = [
    {
      address: "13937B Van Nuys Blvd",
      city: "Arleta, CA 91331",
      hours: "Mon – Fri: 8:30am – 6pm",
      sat: "Sat: 10am – 2pm",
      phone: "(747) 270-7121",
      color: "bg-[#000000]",
      status: null
    },
    {
      city: "Winnetka, CA",
      color: "bg-[#15C15D]",
      status: "Coming Soon!"
    },
    {
      city: "North Hollywood, CA",
      color: "bg-[#15C15D]",
      status: "Coming Soon!"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[40px] font-bold text-center mb-12 font-poppins">Store Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col border border-gray-100">
              <div className="p-8 flex-grow text-center flex flex-col justify-center min-h-[180px]">
                {loc.address && <p className="font-bold text-lg mb-1">{loc.address}</p>}
                <p className="font-bold text-lg mb-4">{loc.city}</p>
                {loc.hours && (
                  <div className="text-gray-500 text-sm">
                    <p>{loc.hours}</p>
                    <p>{loc.sat}</p>
                  </div>
                )}
              </div>
              <div className={`${loc.color} py-4 text-white text-center font-medium`}>
                {loc.status ? loc.status : loc.phone}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreLocations;