import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Info } from 'lucide-react'

const pricingData = [
  {
    title: "Basic Care",
    price: "$75",
    features: [
      "Standard nail trimming",
      "Basic foot assessment",
      "30-minute session"
    ]
  },
  {
    title: "Comprehensive Care",
    price: "$120",
    features: [
      "Advanced nail care",
      "Detailed health check",
      "Customized treatment plan",
      "45-minute session"
    ]
  },
  {
    title: "Premium Package",
    price: "$200",
    features: [
      "Full-service nail and foot care",
      "Comprehensive health evaluation",
      "Follow-up report for your doctor",
      "60-minute session"
    ]
  }
]

export default function PricingInsurance() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0A5C99] mb-12">Pricing & Insurance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#0A5C99]">{plan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-[#1E88E5] mb-4">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-[#2D3748]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="bg-[#F7F7F7] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#0A5C99] mb-4">Insurance Information</h3>
          <p className="text-[#2D3748] mb-4">
            We work with various insurance providers and can provide necessary documentation for reimbursement. Our services may be covered under certain plans, especially for patients with diabetes or other qualifying conditions.
          </p>
          <div className="flex items-center text-[#1E88E5]">
            <Info className="h-5 w-5 mr-2" />
            <span>Contact us for detailed insurance and Medicare information.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
