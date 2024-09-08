import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin, CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='bg-[#23390A] flex flex-col sm:flex-row justify-center items-center text-white h-auto sm:h-96 py-10 sm:py-0'>
        <div className='flex flex-col sm:flex-row justify-center items-center sm:h-1/2'>
            <div className='w-full sm:w-2/4 h-full px-5 mb-5 sm:mb-0'>
                <h3 className='font-medium text-lg sm:text-xl'>Ethicalmine</h3>
                <p className='text-xs sm:text-sm opacity-50 py-5 leading-6 w-full sm:w-3/4'>
                    Mining with Integrity for a Sustainable Future. Join us as we can help you achieve your ethical and sustainability goals.
                </p>
                <ul className='flex justify-center sm:justify-start text-gray-500'>
                    <li className='text-blue-400 px-2'><IoLogoTwitter /></li>
                    <li className='px-2'><FaFacebook /></li>
                    <li className='px-2'><CiInstagram /></li>
                    <li className='px-2'><CiLinkedin /></li>
                </ul>
            </div>
            <div className='w-full sm:w-1/4 h-full px-5 text-xs sm:text-sm'>
                <p className='opacity-50'>Company</p>
                <ul className='py-2 font-extralight'>
                    <li className='py-1'>About us</li>
                    <li className='py-1'>Our mission</li>
                    <li className='py-1'>Sustainability Practices</li>
                    <li className='py-1'>Partners & Affiliates</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Contact us</li>
                </ul>
            </div>
            <div className='w-full sm:w-1/4 h-full px-5 text-xs sm:text-sm'>
                <p className='opacity-50'>Product</p>
                <ul className='py-2 font-extralight'>
                    <li className='py-1'>Features</li>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>News</li>
                    <li className='py-1'>Help desk</li>
                    <li className='py-1'>Support</li>
                </ul>
            </div>
            <div className='w-full sm:w-1/4 h-full px-5 text-xs sm:text-sm'>
                <p className='opacity-50'>Legal</p>
                <ul className='py-2 font-extralight'>
                    <li className='py-1'>Privacy Policy</li>
                    <li className='py-1'>Terms & Conditions</li>
                    <li className='py-1'>Sustainability Practices</li>
                    <li className='py-1'>Return Policy</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
