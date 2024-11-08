// src/modules/layout/components/NavbarWrapper.tsx
"use client"

import React, { useEffect, useState } from "react"

interface NavbarWrapperProps {
  children: React.ReactNode
}

const NavbarWrapper: React.FC<NavbarWrapperProps> = ({ children }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsNavbarVisible(false)
      } else {
        // Scrolling up
        setIsNavbarVisible(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {children}
    </header>
  )
}

export default NavbarWrapper
