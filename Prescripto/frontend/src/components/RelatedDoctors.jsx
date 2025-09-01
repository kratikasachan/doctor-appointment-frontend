import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const [relDocs, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && String(doc._id) !== String(docId)
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-3">Related Doctors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {relDocs.length > 0 ? (
          relDocs.map((doc) => (
            <div
              key={doc._id}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h4 className="font-medium">{doc.name}</h4>
              <p className="text-sm text-gray-600">{doc.speciality}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No related doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedDoctors;
