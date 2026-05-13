import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us - EthioImports",
  description:
    "Learn about EthioImports, Ethiopia's premier car import company. With 10+ years of experience, we've imported 500+ vehicles for 1000+ satisfied clients.",
};

const stats = [
  { value: "500+", label: "Cars Imported" },
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Happy Clients" },
  { value: "4", label: "Countries Sourced From" },
];

const values = [
  {
    title: "Quality Assurance",
    description:
      "Every vehicle we import undergoes rigorous inspection to ensure it meets our high standards of quality and reliability.",
  },
  {
    title: "Transparency",
    description:
      "We provide full cost breakdowns, vehicle history reports, and regular updates throughout the import process.",
  },
  {
    title: "Customer Focus",
    description:
      "Our clients are at the heart of everything we do. We listen, advise, and deliver solutions that match your needs.",
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty and professionalism, building long-term relationships with our clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            About EthioImports
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl text-lg">
            Ethiopia&apos;s trusted partner for premium vehicle imports.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to transform the Ethiopian automotive
                  landscape, EthioImports has grown to become one of the
                  country&apos;s most trusted car import companies.
                </p>
                <p>
                  We recognized that Ethiopians deserve access to quality,
                  affordable vehicles from the global market. With our deep
                  understanding of both international automotive markets and
                  local regulations, we bridge the gap to deliver exceptional
                  value.
                </p>
                <p>
                  Over the past decade, we&apos;ve helped thousands of customers
                  import their dream vehicles from Dubai, Japan, the USA, and
                  Europe. Our commitment to quality, transparency, and customer
                  satisfaction sets us apart.
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div
                className="rounded-xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800"
                  alt="Car showroom"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-gold-500">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
              Our Values
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl shadow-md p-8 text-center">
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
            Ready to Get Started?
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Let us help you find and import the perfect vehicle for your needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/inventory" variant="primary" size="lg">
              Browse Inventory
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
