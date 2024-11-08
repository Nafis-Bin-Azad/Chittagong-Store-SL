"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa"
import Image from "next/image"
import HeroImage1 from "/public/images/hero/hero-1.jpg"
import HeroImage2 from "/public/images/hero/hero-2.jpg"

const Hero = () => {
  return (
    <section className="hero w-full h-screen bg-gray-100 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0} // Set space between slides to 0 for a cleaner look
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{
          clickable: true,
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative flex items-center justify-start h-screen pl-12 lg:pl-20">
            <Image
              src={HeroImage1}
              alt="Hero Image 1"
              style={{ objectFit: "cover" }}
              className="absolute inset-0 w-full h-full"
            />
            <div className="relative z-10 text-left text-black p-4 lg:p-8 max-w-lg lg:max-w-xl">
              <h6 className="text-red-500 font-bold text-sm uppercase mb-4">
                New Arrivals in Accessories
              </h6>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Explore Our Latest Collection
              </h2>
              <p className="text-lg mb-8">
                Discover affordable fashion accessories and clothing in Madrid.
                Quality products for everyone.
              </p>
              <button className="bg-black text-white px-6 py-3 uppercase flex items-center">
                Shop Now <span className="ml-2">&rarr;</span>
              </button>
              <div className="hero__social flex mt-10 space-x-5">
                <a href="#">
                  <FaFacebookF className="text-xl text-black" />
                </a>
                <a href="#">
                  <FaTwitter className="text-xl text-black" />
                </a>
                <a href="#">
                  <FaPinterestP className="text-xl text-black" />
                </a>
                <a href="#">
                  <FaInstagram className="text-xl text-black" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative flex items-center justify-start h-screen pl-12 lg:pl-20">
            <Image
              src={HeroImage2}
              alt="Hero Image 2"
              style={{ objectFit: "cover" }}
              className="absolute inset-0 w-full h-full"
            />
            <div className="relative z-10 text-left text-black p-4 lg:p-8 max-w-lg lg:max-w-xl">
              <h6 className="text-red-500 font-bold text-sm uppercase mb-4">
                Summer Collection
              </h6>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Fall - Winter Collections 2030
              </h2>
              <p className="text-lg mb-8">
                A specialist label creating luxury essentials. Ethically crafted
                with an unwavering commitment to exceptional quality.
              </p>
              <button className="bg-black text-white px-6 py-3 uppercase flex items-center">
                Shop Now <span className="ml-2">&rarr;</span>
              </button>
              <div className="hero__social flex mt-10 space-x-5">
                <a href="#">
                  <FaFacebookF className="text-xl text-black" />
                </a>
                <a href="#">
                  <FaTwitter className="text-xl text-black" />
                </a>
                <a href="#">
                  <FaPinterestP className="text-xl text-black" />
                </a>
                <a href="#">
                  <FaInstagram className="text-xl text-black" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero
