import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F7] text-[#2D3748] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NailCare Pro</h3>
            <p className="text-sm">Professional medical-grade nail care services provided by Registered Nurses.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm hover:text-[#0A5C99]">Our Services</Link></li>
              <li><Link href="/about" className="text-sm hover:text-[#0A5C99]">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[#0A5C99]">Contact</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-[#0A5C99]">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm hover:text-[#0A5C99]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-[#0A5C99]">Terms of Service</Link></li>
              <li><Link href="/hipaa" className="text-sm hover:text-[#0A5C99]">HIPAA Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#0A5C99] hover:text-[#1E88E5]" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-[#0A5C99] hover:text-[#1E88E5]" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="text-[#0A5C99] hover:text-[#1E88E5]" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-[#0A5C99] hover:text-[#1E88E5]" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} NailCare Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
