'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const serviceAreas = [
  { name: "New York City", status: "Active" },
  { name: "Los Angeles", status: "Active" },
  { name: "Chicago", status: "Active" },
  { name: "Houston", status: "Coming Soon" },
  { name: "Phoenix", status: "Coming Soon" },
  { name: "Philadelphia", status: "Coming Soon" }
]

export default function ServiceAreas() {
  const [hoveredArea, setHoveredArea] = useState(null)

  return (
    <section id="service-areas" className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0A5C99] mb-12">Our Service Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#0A5C99] mb-4">Current and Upcoming Locations</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <motion.li
                  key={index}
                  className="flex items-center justify-between p-2 rounded-md cursor-pointer"
                  onMouseEnter={() => setHoveredArea(area.name)}
                  onMouseLeave={() => setHoveredArea(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#0A5C99] mr-2" />
                    {area.name}
                  </span>
                  <span className={`text-sm ${area.status === 'Active' ? 'text-green-500' : 'text-orange-500'}`}>
                    {area.status}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#0A5C99] mb-4">Service Area Map</h3>
            {/* Placeholder for an interactive map */}
            <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
              <p className="text-[#2D3748]">
                {hoveredArea ? `Viewing: ${hoveredArea}` : 'Hover over a location to see details'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
