import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Lock, AlertTriangle, FileCheck, Zap, Phone } from 'lucide-react'

const safetyData = [
  { icon: Shield, text: "Certified RNs" },
  { icon: Lock, text: "HIPAA Compliant" },
  { icon: AlertTriangle, text: "Infection Control" },
  { icon: FileCheck, text: "Insurance Compliance" },
  { icon: Zap, text: "Sterile Equipment" },
  { icon: Phone, text: "24/7 Support" }
]

export default function SafetyCredentials() {
  return (
    <section id="safety-credentials" className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0A5C99] mb-12">Medical-Grade Care Standards</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {safetyData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="h-12 w-12 text-[#0A5C99] mb-2" />
              <p className="text-center text-[#2D3748]">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center space-x-8">
          <Image src="/placeholder.svg?height=60&width=120" alt="Certification Badge" width={120} height={60} />
          <Image src="/placeholder.svg?height=60&width=120" alt="Safety Protocol Badge" width={120} height={60} />
          <Image src="/placeholder.svg?height=60&width=120" alt="Insurance Compliance Badge" width={120} height={60} />
        </div>
      </div>
    </section>
  )
}
