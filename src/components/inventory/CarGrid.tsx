import { getServerClient } from "@/lib/supabase/server";
import CarCard from "./CarCard";
import type { Car } from "@/types";

interface CarGridProps {
  make?: string;
  year?: string;
  minPrice?: string;
  maxPrice?: string;
}

export default async function CarGrid({
  make,
  year,
  minPrice,
  maxPrice,
}: CarGridProps) {
  const supabase = getServerClient();

  let query = supabase
    .from("cars")
    .select("*")
    .eq("status", "available")
    .order("created_at", { ascending: false });

  if (make && make !== "All Makes") {
    query = query.eq("make", make);
  }
  if (year && year !== "All Years") {
    query = query.eq("year", parseInt(year));
  }
  if (minPrice) {
    query = query.gte("price", parseFloat(minPrice));
  }
  if (maxPrice) {
    query = query.lte("price", parseFloat(maxPrice));
  }

  const { data: cars } = await query;

  if (!cars || cars.length === 0) {
    return (
      <div className="col-span-full text-center py-16">
        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p className="text-gray-500 text-lg">No vehicles match your filters.</p>
        <p className="text-gray-400 text-sm mt-1">Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <>
      {cars.map((car: Car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </>
  );
}
