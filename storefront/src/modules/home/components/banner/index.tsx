import React from "react"
import Image from "next/image"
import Link from "next/link"

const BannerSection = () => {
  return (
    <section className="banner spad py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          {/* First Banner Item */}
          <div className="">
            <div className="banner__item">
              <div className="banner__item__pic">
                <Image
                  src="/images/banner/banner-1.jpg"
                  alt="Clothing Collections"
                  className="object-cover w-16 md:w-32 lg:w-48"
                />
              </div>
              <div className="banner__item__text">
                <h2 className="text-4xl font-bold text-gray-900">
                  Clothing Collections 2030
                </h2>
                <Link
                  href="#"
                  className="mt-3 inline-block uppercase text-base font-semibold tracking-wider text-gray-700 hover:text-red-500 hover:underline"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>

          {/* Second Banner Item */}
          <div className="lg:col-span-3 relative flex flex-col items-start justify-center">
            <div className="banner__item banner__item--middle">
              <div className="banner__item__pic">
                <Image
                  src="/images/banner/banner-2.jpg"
                  alt="Accessories"
                  width={370}
                  height={370}
                  className="object-cover w-16 md:w-32 lg:w-48"
                />
              </div>
              <div className="banner__item__text mt-4 text-left">
                <h2 className="text-3xl font-bold text-gray-900">
                  Accessories
                </h2>
                <Link
                  href="#"
                  className="mt-3 inline-block uppercase text-base font-semibold tracking-wider text-gray-700 hover:text-red-500 hover:underline"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>

          {/* Third Banner Item */}
          <div className="sm:col-span-3 relative">
            <div className="banner__item banner__item--last">
              <div className="banner__item__pic">
                <Image
                  src="/images/banner/banner-3.jpg"
                  alt="Shoes Spring"
                  width={480}
                  height={440}
                  className="object-cover w-full h-full w-16 md:w-32 lg:w-48"
                />
              </div>
              <div className="banner__item__text absolute top-1/4 left-10 text-left">
                <h2 className="text-4xl font-bold text-gray-900">
                  Shoes Spring 2030
                </h2>
                <Link
                  href="#"
                  className="mt-3 inline-block uppercase text-base font-semibold tracking-wider text-gray-700 hover:text-red-500 hover:underline"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSection
