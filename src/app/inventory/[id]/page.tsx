import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServerClient } from "@/lib/supabase/server";
import Button from "@/components/ui/Button";
import CarInquiryForm from "./CarInquiryForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const supabase = getServerClient();
  const { data: car } = await supabase.from("cars").select("name").eq("id", id).single();

  if (!car) return { title: "Car Not Found - EthioImports" };

  return {
    title: `${car.name} - EthioImports`,
    description: `View details for ${car.name}. Inquire about this vehicle or request a quote.`,
  };
}

export default async function CarDetailPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = getServerClient();

  const { data: car } = await supabase.from("cars").select("*").eq("id", id).single();

  if (!car) notFound();

  const specs = [
    { label: "Year", value: car.year },
    { label: "Mileage", value: `${car.mileage.toLocaleString()} km` },
    { label: "Fuel Type", value: car.fuel_type || "N/A" },
    { label: "Transmission", value: car.transmission || "N/A" },
    { label: "Engine", value: car.engine_cc || "N/A" },
    { label: "Color", value: car.color || "N/A" },
    { label: "Condition", value: car.condition || "N/A" },
    { label: "Price", value: `$${car.price.toLocaleString()}` },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <Button href="/inventory" variant="ghost" size="sm">
          &larr; Back to Inventory
        </Button>

        <div className="mt-6 lg:grid lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              {car.images && car.images.length > 0 ? (
                <div className="grid grid-cols-1 gap-2">
                  <img
                    src={car.images[0]}
                    alt={car.name}
                    className="w-full h-[400px] object-cover"
                  />
                  {car.images.length > 1 && (
                    <div className="grid grid-cols-4 gap-2 p-2">
                      {car.images.slice(1, 5).map((img: string, i: number) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${car.name} ${i + 2}`}
                          className="w-full h-24 object-cover rounded-lg"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-[400px] bg-gray-200 flex items-center justify-center text-gray-400">
                  No image available
                </div>
              )}
            </div>

            <div className="mt-6 bg-white rounded-xl shadow-md p-6 lg:p-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-navy-900">
                {car.name}
              </h1>
              <p className="text-gold-600 text-2xl font-bold mt-2">
                ${car.price.toLocaleString()}
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500">{spec.label}</p>
                    <p className="text-sm font-semibold text-navy-900 mt-0.5">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              {car.description && (
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-navy-900 mb-2">
                    Description
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {car.description}
                  </p>
                </div>
              )}

              {car.features && car.features.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-navy-900 mb-3">
                    Features
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature: string, i: number) => (
                      <span
                        key={i}
                        className="bg-gold-100 text-gold-700 text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 mt-6 lg:mt-0">
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 sticky top-24">
              <h2 className="text-xl font-bold text-navy-900 mb-1">
                Inquire About This Car
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Interested in this {car.name}? Send us a message.
              </p>
              <CarInquiryForm carId={car.id} carName={car.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
