import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gold-500 text-xl font-bold mb-4">
              Ethio<span className="text-white">Imports</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Ethiopia&apos;s premier car import company. We bring the world&apos;s finest
              vehicles to Ethiopian roads with quality assurance and competitive
              pricing.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="hover:text-gold-400 transition-colors">
                  Inventory
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-gold-400 transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Car Import (Dubai, Japan, USA, Europe)</li>
              <li>Customs Clearance</li>
              <li>Vehicle Inspection</li>
              <li>Shipping & Logistics</li>
              <li>Financing Assistance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>Addis Ababa, Ethiopia</li>
              <li>Bole Road, near Megenagna</li>
              <li>
                <a href="tel:+251911234567" className="hover:text-gold-400 transition-colors">
                  +251 911 234 567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ethioimports.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  info@ethioimports.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-navy-700 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} EthioImports. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
