// src/modules/layout/templates/nav/index.tsx

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import logo from "/public/images/logo.png"
import React, { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { IoSearch } from "react-icons/io5"
import CartButton from "@modules/layout/components/cart-button"
import { FaRegHeart } from "react-icons/fa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import NavbarWrapper from "@modules/layout/components/navbar-wrapper"
import CountrySelect from "@modules/layout/components/country-select"

export default async function Nav() {
  // Fetch regions data on the server side
  const regionsData = await listRegions()
  const regions: StoreRegion[] = regionsData

  return (
    <NavbarWrapper>
      {/* Top Header */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <p className="text-xs">
            Free shipping, 30-day return or refund guarantee.
          </p>
          <div className="flex items-center space-x-6 text-xs uppercase">
            <Link href="/sign-in" className="hover:text-gray-300">
              Sign in
            </Link>
            <Link href="/faqs" className="hover:text-gray-300">
              FAQs
            </Link>
            <CountrySelect regions={regions} />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white p-4 md:p-6 border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/">
              <Image
                src={logo}
                alt="Chittagong Store Logo"
                width={80}
                height={80}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 text-center">
            <ul className="flex justify-center items-center space-x-8 text-lg font-semibold">
              <li>
                <Link href="/" className="hover:text-red-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-red-500 transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition">
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Side Icons */}
          <div className="flex-1 text-right flex items-center justify-end space-x-6">
            <LocalizedClientLink
              href="/search"
              className="hover:text-gray-500 transition flex items-center"
            >
              <IoSearch size={20} />
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/wishlist"
              className="hover:text-gray-500 transition"
            >
              <FaRegHeart />
            </LocalizedClientLink>

            <Suspense>
              <CartButton />
            </Suspense>
            <span className="text-base font-bold">$0.00</span>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

// import { Suspense } from "react"

// import { listRegions } from "@lib/data/regions"
// import { StoreRegion } from "@medusajs/types"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import CartButton from "@modules/layout/components/cart-button"
// import SideMenu from "@modules/layout/components/side-menu"

// export default async function Nav() {
//   const regions = await listRegions().then((regions: StoreRegion[]) => regions)

//   return (
//     <div className="sticky top-0 inset-x-0 z-50 group">
//       <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
//         <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
//           <div className="flex-1 basis-0 h-full flex items-center">
//             <div className="h-full">
//               <SideMenu regions={regions} />
//             </div>
//           </div>

//           <div className="flex items-center h-full">
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
//               data-testid="nav-store-link"
//             >
//               Chittagong Store SL
//             </LocalizedClientLink>
//           </div>

//           <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
//             <div className="hidden small:flex items-center gap-x-6 h-full">
//               {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base"
//                   href="/search"
//                   scroll={false}
//                   data-testid="nav-search-link"
//                 >
//                   Search
//                 </LocalizedClientLink>
//               )}
//               <LocalizedClientLink
//                 className="hover:text-ui-fg-base"
//                 href="/account"
//                 data-testid="nav-account-link"
//               >
//                 Account
//               </LocalizedClientLink>
//             </div>
//             <Suspense
//               fallback={
//                 <LocalizedClientLink
//                   className="hover:text-ui-fg-base flex gap-2"
//                   href="/cart"
//                   data-testid="nav-cart-link"
//                 >
//                   Cart (0)
//                 </LocalizedClientLink>
//               }
//             >
//               <CartButton />
//             </Suspense>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }
