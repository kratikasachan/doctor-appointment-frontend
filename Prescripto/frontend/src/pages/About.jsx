import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-6 md:px-20">
      {/* ABOUT US */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      {/* Image + About text */}
      <div className="my-10 flex flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-md"
          src={assets.about_image}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs
            conveniently and efficiently. At Prescripto, we understand the challenges
            individuals face when it comes to scheduling doctor appointments and managing
            their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously
            strive to enhance our platform, integrating the latest advancements to improve
            user experience and deliver superior service. Whether you're booking your first
            appointment or managing ongoing care, Prescripto is here to support you every
            step of the way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for
            every user. We aim to bridge the gap between patients and healthcare providers,
            making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="text-xl my-6 text-center">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      {/* Three Boxes */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white trasition-all duration-300 text-gray-600 cursor-pointer'>
          <b className="block mb-2">Efficiency:</b>
          <p className="text-gray-600 text-sm">
            Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white trasition-all duration-300 text-gray-600 cursor-pointer'>
          <b className="block mb-2">Convenience:</b>
          <p className="text-gray-600 text-sm">
            Access To A Network Of Trusted Healthcare Professionals In Your Area.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white trasition-all duration-300 text-gray-600 cursor-pointer'>
          <b className="block mb-2">Personalization:</b>
          <p className="text-gray-600 text-sm">
            Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
