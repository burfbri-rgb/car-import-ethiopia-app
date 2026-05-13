import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services - EthioImports",
  description:
    "Comprehensive car import services in Ethiopia including import from Dubai, Japan, USA, customs clearance, inspection, and shipping.",
};

const services = [
  {
    title: "Car Import from Dubai",
    description:
      "We source and import the finest vehicles from Dubai's competitive automotive market. From luxury sedans to rugged SUVs, our Dubai network ensures you get the best deals with full transparency.",
    features: [
      "Direct sourcing from Dubai auctions and dealers",
      "Competitive pricing with full cost breakdown",
      "Complete shipping and logistics management",
      "Pre-shipping inspection and documentation",
    ],
    icon: "🚗",
  },
  {
    title: "Car Import from Japan",
    description:
      "Japan is renowned for its well-maintained, low-mileage vehicles. We partner with trusted Japanese exporters to bring you reliable cars that meet Ethiopian standards.",
    features: [
      "Access to Japanese used car auctions",
      "Comprehensive vehicle history reports",
      "Strict quality control and grading",
      "Sea freight and documentation handled",
    ],
    icon: "🇯🇵",
  },
  {
    title: "Car Import from USA & Europe",
    description:
      "Access premium American and European vehicles with our established import channels. We handle everything from purchase to delivery at your doorstep.",
    features: [
      "USA and European dealer network",
      "Salvage and clean title options",
      "Container shipping with tracking",
      "Customs documentation preparation",
    ],
    icon: "🌍",
  },
  {
    title: "Customs Clearance",
    description:
      "Our experienced customs clearance team navigates Ethiopian customs regulations efficiently. We handle all paperwork, duty calculations, and clearance procedures.",
    features: [
      "Expert duty and tax calculation",
      "Complete documentation management",
      "Port handling and inspection coordination",
      "Fast clearance processing",
    ],
    icon: "📋",
  },
  {
    title: "Vehicle Inspection & Certification",
    description:
      "Every vehicle we import undergoes thorough mechanical and structural inspection. We ensure your car meets Ethiopian roadworthiness standards.",
    features: [
      "Comprehensive mechanical inspection",
      "Structural integrity assessment",
      "Engine and transmission testing",
      "Roadworthiness certification assistance",
    ],
    icon: "🔧",
  },
  {
    title: "Shipping & Logistics",
    description:
      "End-to-end shipping solutions with real-time tracking. We manage the entire logistics chain from the origin port to your preferred location in Ethiopia.",
    features: [
      "RO-RO and container shipping options",
      "Real-time shipment tracking",
      "Insurance coverage",
      "Door-to-door delivery available",
    ],
    icon: "🚢",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            Comprehensive car import solutions tailored to the Ethiopian market.
            We handle everything from sourcing to delivery.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title}>
                <div className="p-8">
                  <span className="text-4xl">{service.icon}</span>
                  <h2 className="text-xl font-bold text-navy-900 mt-4 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-gold-500 mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-navy-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Need a Custom Solution?
          </h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Contact us for personalized import solutions tailored to your specific
            needs and budget.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button href="/quote" variant="outline" size="lg">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
