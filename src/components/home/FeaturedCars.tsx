import { getServerClient } from "@/lib/supabase/server";
import CarCard from "@/components/inventory/CarCard";

export default async function FeaturedCars() {
  const supabase = getServerClient();

  const { data: cars } = await supabase
    .from("cars")
    .select("*")
    .eq("is_featured", true)
    .eq("status", "available")
    .limit(6);

  if (!cars || cars.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">
            Featured Vehicles
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Our精选 selection of premium imported vehicles ready for delivery to
            Ethiopian roads.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/inventory"
            className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-500 font-semibold transition-colors"
          >
            View All Vehicles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
