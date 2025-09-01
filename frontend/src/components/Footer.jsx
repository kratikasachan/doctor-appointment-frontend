import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-800 md:mx-10"> 
      <div className="grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        {/* ------Left Section */}
        <div>
          <img src={assets.logo} alt="Prescripto Logo" className="mb-4" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* ------Center Section */}
        <div>
          <p className="font-semibold mb-2">COMPANY</p>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* -----Right Section---*/ }
        <div>
          <p className="font-semibold mb-2">GET IN TOUCH</p>
          <ul className="space-y-1">
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* ------- Copyright */}
      <div className="text-center mt-10 border-t pt-4 text-sm text-gray-600">
        <p>© 2024 Prescripto. All Rights Reserved.</p>
      </div>
    </div>  
  );
};

export default Footer;
