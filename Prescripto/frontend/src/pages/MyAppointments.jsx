import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b '>My appointments</p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
  <div key={index} className="flex justify-between items-center border-b border-gray-300 py-4">
    
    {/* Left side (doctor info + image) */}
    <div className="flex items-center gap-4">
      <img src={item.image} alt="" className="w-24 h-24 object-cover rounded-full" />
      <div>
        <p className="font-semibold">{item.name}</p>
        <p>{item.speciality}</p>
        <p>Address: {item.address.line2}</p>
        <p><span className="font-medium">Date & Time:</span> 25,july,2024 | 8:30 pm</p>
      </div>
    </div>

    {/* Right side (buttons) */}
    <div className="flex flex-col gap-2 justify-end">
      <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:bg-blue-400 transition-all duration-300">Pay Online</button>
      <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-400 transition-all duration-300">Cancel appointment</button>
    </div>
  </div>
))}

      </div>
    </div>
  )
}

export default MyAppointments