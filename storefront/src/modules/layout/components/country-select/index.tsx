// src/modules/layout/components/CountrySelect.tsx
"use client"

import { Listbox, Transition } from "@headlessui/react"
import { Fragment, useEffect, useMemo, useState } from "react"
import ReactCountryFlag from "react-country-flag"
import { useParams, usePathname } from "next/navigation"
import { updateRegion } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"

// Import a spinner component or use an icon
import { FaSpinner } from "react-icons/fa"

type CountryOption = {
  country: string
  region: string
  label: string
}

type CountrySelectProps = {
  regions: HttpTypes.StoreRegion[]
}

const CountrySelect = ({ regions }: CountrySelectProps) => {
  const [current, setCurrent] = useState<CountryOption | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  const params = useParams() as { countryCode: string }
  const countryCode = params.countryCode || ""
  const currentPath = usePathname()?.split(`/${countryCode}`)[1] || "/"

  const options = useMemo<CountryOption[]>(() => {
    if (!regions) {
      return []
    }

    return regions
      .flatMap((r) => {
        if (!r.countries) {
          return []
        }
        return r.countries.map((c) => ({
          country: c.iso_2 || "",
          region: r.id || "",
          label: c.display_name || "",
        }))
      })
      .sort((a, b) => a.label.localeCompare(b.label))
  }, [regions])

  useEffect(() => {
    if (countryCode && options.length > 0) {
      const option = options.find(
        (o) => o.country.toLowerCase() === countryCode.toLowerCase()
      )
      if (option && option.country !== current?.country) {
        setCurrent(option)
      }
    }
  }, [options, countryCode])

  const handleChange = async (option: CountryOption) => {
    if (option && option.country && option.country !== countryCode) {
      setLoading(true)
      try {
        await updateRegion(option.country, currentPath)
        // After updating the region, you might need to update the current option
        setCurrent(option)
      } catch (error) {
        console.error("Failed to update region:", error)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="relative flex items-center">
      <Listbox value={current} onChange={handleChange}>
        <Listbox.Button className="py-1 flex items-center gap-x-2 hover:text-gray-300">
          <span>Shipping to:</span>
          {current && (
            <span className="flex items-center gap-x-2">
              <ReactCountryFlag
                svg
                style={{
                  width: "16px",
                  height: "16px",
                }}
                countryCode={current.country}
              />
              {current.label}
            </span>
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className="absolute mt-2 bg-white text-black p-2 shadow-lg w-48 text-center max-h-60 overflow-auto z-10"
            static
          >
            {options.map((o, index) => (
              <Listbox.Option
                key={index}
                value={o}
                className="py-2 hover:bg-gray-200 px-3 cursor-pointer flex items-center gap-x-2"
              >
                <ReactCountryFlag
                  svg
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
                  countryCode={o.country}
                />
                {o.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
      {loading && (
        <FaSpinner className="animate-spin ml-2 text-gray-500" size={16} />
      )}
    </div>
  )
}

export default CountrySelect
