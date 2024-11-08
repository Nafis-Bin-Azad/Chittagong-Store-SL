import { notFound } from "next/navigation"
import CartDropdown from "../cart-dropdown"
import { enrichLineItems, retrieveCart } from "@lib/data/cart"

const fetchCart = async () => {
  const cart = await retrieveCart()

  if (!cart) {
    return null
  }

  if (cart?.items?.length) {
    const enrichedItems = await enrichLineItems(cart.items, cart.region_id!)
    cart.items = enrichedItems
  }

  return cart
}

export default async function CartButton() {
  const cart = await fetchCart()

  return <CartDropdown cart={cart} />
}

// ("use client")
// import React from "react"
// import { BsCart } from "react-icons/bs"
// import CartDropdown from "../cart-dropdown"
// import { enrichLineItems, retrieveCart } from "@lib/data/cart"

// // Import Popover for dropdown functionality
// import { Popover, Transition } from "@headlessui/react"
// import { Fragment, useState } from "react"

// const fetchCart = async () => {
//   const cart = await retrieveCart()

//   if (!cart) {
//     return null
//   }

//   if (cart?.items?.length) {
//     const enrichedItems = await enrichLineItems(cart.items, cart.region_id!)
//     cart.items = enrichedItems
//   }

//   return cart
// }

// export default async function CartButton() {
//   const cart = await fetchCart()

//   // Calculate the total number of items in the cart
//   const itemCount =
//     cart?.items?.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0

//   return (
//     <Popover className="relative">
//       {({ open }) => (
//         <>
//           {/* Cart Button with Icon and Item Count */}
//           <Popover.Button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-gray-900 transition">
//             <BsCart size={20} />
//             <span className="text-sm font-semibold">({itemCount})</span>
//           </Popover.Button>

//           {/* Cart Dropdown Panel */}
//           <Transition
//             as={Fragment}
//             enter="transition ease-out duration-200"
//             enterFrom="opacity-0 translate-y-1"
//             enterTo="opacity-100 translate-y-0"
//             leave="transition ease-in duration-150"
//             leaveFrom="opacity-100 translate-y-0"
//             leaveTo="opacity-0 translate-y-1"
//           >
//             <Popover.Panel className="absolute right-0 z-50 mt-2 w-96 p-4 bg-white border border-gray-200 shadow-lg">
//               <CartDropdown cart={cart} />
//             </Popover.Panel>
//           </Transition>
//         </>
//       )}
//     </Popover>
//   )
// }
