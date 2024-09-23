import React from 'react'
import { assets } from '../assets/assets'

const MentorHub = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>MENTOR <span className='text-gray-700 font-semibold'>HUB</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.mentor_image} alt="Mentor Hub" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Mentor Hub, your reliable platform for connecting with experienced mentors who guide you on your journey to success. Whether you're a student, a professional, or someone seeking personal growth, our mentors are here to help you achieve your goals.</p>
          <p>At Mentor Hub, we believe in fostering strong mentor-mentee relationships. We provide a tailored experience where you can find the right mentor based on your specific needs and preferences. Let us help you reach new heights with our network of mentors.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Mentor Hub is to bridge the gap between mentors and mentees, facilitating meaningful connections that lead to personal and professional growth. We aim to create a platform where knowledge and experience are shared freely to help you succeed.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE MENTOR HUB</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EXPERTISE:</b>
          <p>Access to a network of highly skilled and experienced mentors from various fields.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>GUIDANCE: </b>
          <p>Get personalized mentorship and support to help you reach your goals.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>TAILORED MATCHING:</b>
          <p >We connect you with mentors who are best suited to your individual needs and aspirations.</p>
        </div>
      </div>

    </div>
  )
}

export default MentorHub