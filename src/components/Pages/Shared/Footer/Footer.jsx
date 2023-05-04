import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-dark">
          <div className='text-light text-center pt-4'>
          <h5 className=''>Find us on</h5>
          <FaFacebook></FaFacebook>
          <span className='px-3'><FaTwitter></FaTwitter></span>
          <FaInstagram></FaInstagram>
          <span className='px-3'><FaYoutube></FaYoutube></span>
          </div>


        <p className="p-4 mb-0 text-light text-center">Copyright @2023. All right reserve. The Chef's Kitchen.</p>
      </div>
    );
};

export default Footer;