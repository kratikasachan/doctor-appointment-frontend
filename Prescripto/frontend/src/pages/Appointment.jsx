import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [days, setDays] = useState([]);

  useEffect(() => {
    // find doctor by id
    const doctor = doctors.find((doc) => String(doc._id) === String(docId));
    setDocInfo(doctor);

    // generate next 7 days
    const today = new Date();
    const options = { weekday: "short" };
    const tempDays = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      tempDays.push({
        day: d.toLocaleDateString("en-US", options).toUpperCase(),
        date: d.getDate(),
      });
    }
    setDays(tempDays);
  }, [docId, doctors]);

  if (!docInfo) return <p className="text-center mt-10">Loading...</p>;

  
  // generate 30 min interval slots between 9AM - 5PM
const generateTimeSlots = () => {
  const slots = [];
  let start = 9 * 60; // 9:00 AM in minutes
  let end = 17 * 60;  // 5:00 PM in minutes

  for (let mins = start; mins <= end; mins += 30) {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    let suffix = h >= 12 ? "pm" : "am";
    let displayH = h % 12 || 12;
    let displayM = m === 0 ? "00" : m;
    slots.push(`${displayH}:${displayM} ${suffix}`);
  }
  return slots;
};

const times = generateTimeSlots();


  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Doctor Profile Card */}
      <div className="flex flex-col md:flex-row gap-8 items-start bg-white rounded-2xl shadow-lg p-6">
        {/* Image Section */}
        <div className="bg-blue-500 rounded-xl p-4 flex justify-center items-center w-64 h-72">
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="h-full object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {docInfo.name}
          </h2>
          <p className="text-gray-600">
            {docInfo.degree} - {docInfo.speciality}
          </p>
          <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
            {docInfo.experience} 
          </span>

          <h3 className="mt-4 font-semibold">About</h3>
          <p className="text-gray-600">{docInfo.about}</p>

          <p className="mt-4 font-semibold">
            Appointment fee: {currencySymbol}
            {docInfo.fees}
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Booking slots</h3>

        {/* Days */}
        <div className="flex gap-4 overflow-x-auto">
          {days.map((d, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center w-16 h-20 rounded-full cursor-pointer ${
                i === 0
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <span className="text-sm">{d.day}</span>
              <span className="font-bold">{d.date}</span>
            </div>
          ))}
        </div>

        {/* Times */}
        <div className="flex gap-3 mt-6 flex-wrap">
          {times.map((time, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition"
            >
              {time}
            </button>
          ))}
        </div>

        {/* Book Button */}
        <button className="mt-6 w-center py-3 bg-blue-400 hover:bg-blue-700 text-white rounded-lg font-semibold">
          Book an appointment
        </button>
      </div>

      {/* Top Doctors To Book */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Top Doctors To Book</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doctors
            .filter(
              (doc) =>
                doc.speciality === docInfo.speciality &&
                String(doc._id) !== String(docId) 
            )
            .map((relatedDoc) => (
              <Link
                to={`/appointment/${relatedDoc._id}`}
                key={relatedDoc._id}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition"
              >
                <img
                  src={relatedDoc.image}
                  alt={relatedDoc.name}
                  className="w-40 h-48 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-lg">{relatedDoc.name}</h4>
                <p className="text-gray-600 text-sm">{relatedDoc.speciality}</p>
                <p className="font-semibold mt-1">
                  {currencySymbol}
                  {relatedDoc.fees}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
