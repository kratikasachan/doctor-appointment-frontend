import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const AllDoctors = () => {
  const { doctors } = useContext(AppContext);
  const [selectedSpeciality, setSelectedSpeciality] = useState("All");

  // Unique specialities list
  const specialities = ["All", ...new Set(doctors.map((doc) => doc.speciality))];

  // Filter logic
  const filteredDoctors =
    selectedSpeciality === "All"
      ? doctors
      : doctors.filter((doc) => doc.speciality === selectedSpeciality);

  return (
    <div className="flex flex-col md:flex-row w-[90%] mx-auto mt-8 gap-6">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 md:pr-6">
        <h2 className="text-xl font-semibold mb-4">
          Browse through specialists
        </h2>
        <div className="flex md:flex-col flex-wrap gap-2">
          {specialities.map((spec, index) => (
            <button key={index} onClick={() => setSelectedSpeciality(spec)} className={`px-4 py-2 rounded-lg text-left ${selectedSpeciality === spec? "bg-blue-500 text-white font-semibold" : "bg-gray-100 hover:bg-gray-200"}`}>{spec}</button>
          ))}
        </div>
      </div>

      {/* Right Doctors Grid */}
      <div className="w-full md:w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Link
              key={doctor._id}
              to={`/appointment/${doctor._id}`}
              className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-blue-50"
            >
              <img src={doctor.image} alt={doctor.name} className="w-40 h-40 object-cover rounded-full mx-auto mb-3"/>
              <h3 className="font-bold text-lg">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.speciality}</p>
              <p className="text-green-600 font-medium mt-1">Available</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
