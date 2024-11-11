'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function Hero() {
  const heroContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.4 }
    })
  }

  return (
    <section id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A5C99] mb-4 leading-tight"
              variants={heroContentVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Medical-Grade Nail Care by Registered Nurses
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl text-[#1E88E5] mb-4"
              variants={heroContentVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Specialized Care for High-Risk Patients
            </motion.h2>
            <motion.p
              className="text-lg text-[#2D3748] mb-8"
              variants={heroContentVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Hospital-Grade Sterilization Protocols • Comprehensive Health Assessment • Preventive Care Focus
            </motion.p>
            <motion.div
              className="space-x-4"
              variants={heroContentVariants}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Button
                className="bg-gradient-to-r from-[#0A5C99] to-[#1E88E5] hover:from-[#1565C0] hover:to-[#1976D2] text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0A5C99] focus:ring-opacity-50"
              >
                Schedule Care
              </Button>
              <Button
                variant="outline"
                className="text-[#0A5C99] border-[#0A5C99] hover:bg-[#0A5C99] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A5C99] focus:ring-opacity-50 focus:border-dashed"
              >
                See Our Services
              </Button>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Registered Nurse providing gentle nail care with clean, medical-grade equipment"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
