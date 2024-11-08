// src/modules/layout/templates/footer/index.tsx

import React from "react"
import Link from "next/link"
import Image from "next/image"
import PaymentImage from "/public/images/payment.png"
import logo from "/public/images/logo-inverted.png"
import { Text } from "@medusajs/ui"
import { IoIosMail } from "react-icons/io"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-y-12">
          {/* Footer About Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="mb-6">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Chittagong Store Logo"
                  width={150}
                  height={150}
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <Image src={PaymentImage} alt="Payment Methods" />
          </div>

          {/* Shopping Links Section */}
          <div className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6">
            <h6 className="text-lg font-semibold uppercase mb-6">Shopping</h6>
            <ul>
              <li className="mb-4">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Clothing Store
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Trending Shoes
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care Links Section */}
          <div className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6">
            <h6 className="text-lg font-semibold uppercase mb-6">Shopping</h6>
            <ul>
              <li className="mb-4">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Payment Methods
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Return & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h6 className="text-lg font-semibold uppercase mb-6">Newsletter</h6>
            <p className="text-gray-400 mb-6">
              Be the first to know about new arrivals, sales & promos!
            </p>
            <form className="relative">
              <input
                type="email"
                className="w-full bg-transparent text-white border-b border-white py-2 pr-10 mb-4 focus:outline-none"
                placeholder="Your email"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-3 text-gray-400 hover:text-white"
              >
                <IoIosMail size={25} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Chittagong Store SL. All rights
            reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}

// import { getCategoriesList } from "@lib/data/categories"
// import { getCollectionsList } from "@lib/data/collections"
// import { Text, clx } from "@medusajs/ui"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import MedusaCTA from "@modules/layout/components/medusa-cta"

// export default async function Footer() {
//   const { collections } = await getCollectionsList(0, 6)
//   const { product_categories } = await getCategoriesList(0, 6)

//   return (
//     <footer className="border-t border-ui-border-base w-full">
//       <div className="content-container flex flex-col w-full">
//         <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
//           <div>
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
//             >
//               Chittagong Store SL
//             </LocalizedClientLink>
//           </div>
//           <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
//             {product_categories && product_categories?.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Categories
//                 </span>
//                 <ul
//                   className="grid grid-cols-1 gap-2"
//                   data-testid="footer-categories"
//                 >
//                   {product_categories?.slice(0, 6).map((c) => {
//                     if (c.parent_category) {
//                       return
//                     }

//                     const children =
//                       c.category_children?.map((child) => ({
//                         name: child.name,
//                         handle: child.handle,
//                         id: child.id,
//                       })) || null

//                     return (
//                       <li
//                         className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
//                         key={c.id}
//                       >
//                         <LocalizedClientLink
//                           className={clx(
//                             "hover:text-ui-fg-base",
//                             children && "txt-small-plus"
//                           )}
//                           href={`/categories/${c.handle}`}
//                           data-testid="category-link"
//                         >
//                           {c.name}
//                         </LocalizedClientLink>
//                         {children && (
//                           <ul className="grid grid-cols-1 ml-3 gap-2">
//                             {children &&
//                               children.map((child) => (
//                                 <li key={child.id}>
//                                   <LocalizedClientLink
//                                     className="hover:text-ui-fg-base"
//                                     href={`/categories/${child.handle}`}
//                                     data-testid="category-link"
//                                   >
//                                     {child.name}
//                                   </LocalizedClientLink>
//                                 </li>
//                               ))}
//                           </ul>
//                         )}
//                       </li>
//                     )
//                   })}
//                 </ul>
//               </div>
//             )}
//             {collections && collections.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Collections
//                 </span>
//                 <ul
//                   className={clx(
//                     "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
//                     {
//                       "grid-cols-2": (collections?.length || 0) > 3,
//                     }
//                   )}
//                 >
//                   {collections?.slice(0, 6).map((c) => (
//                     <li key={c.id}>
//                       <LocalizedClientLink
//                         className="hover:text-ui-fg-base"
//                         href={`/collections/${c.handle}`}
//                       >
//                         {c.title}
//                       </LocalizedClientLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
//               <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
//                 <li>
//                   <a
//                     href="https://github.com/medusajs"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     GitHub
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://docs.medusajs.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://github.com/medusajs/nextjs-starter-medusa"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Source code
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
//           <Text className="txt-compact-small">
//             © {new Date().getFullYear()} Chittagong Store SL. All rights
//             reserved.
//           </Text>
//           <MedusaCTA />
//         </div>
//       </div>
//     </footer>
//   )
// }
