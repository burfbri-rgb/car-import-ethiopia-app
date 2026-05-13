import { Suspense } from "react";
import type { Metadata } from "next";
import CarFilters from "@/components/inventory/CarFilters";
import CarGrid from "@/components/inventory/CarGrid";

export const metadata: Metadata = {
  title: "Inventory - EthioImports",
  description:
    "Browse our inventory of premium imported vehicles in Ethiopia. Find SUVs, sedans, and commercial vehicles.",
};

function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden animate-pulse">
          <div className="aspect-[16/10] bg-gray-200" />
          <div className="p-5 space-y-3">
            <div className="h-3 bg-gray-200 rounded w-1/3" />
            <div className="h-5 bg-gray-200 rounded w-3/4" />
            <div className="h-6 bg-gray-200 rounded w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

interface PageProps {
  searchParams: Promise<{ make?: string; year?: string; minPrice?: string; maxPrice?: string }>;
}

export default async function InventoryPage({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Inventory
          </h1>
          <p className="mt-2 text-gray-300">
            Browse our curated selection of premium imported vehicles.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <aside className="lg:col-span-1 mb-6 lg:mb-0">
            <CarFilters />
          </aside>
          <div className="lg:col-span-3">
            <Suspense fallback={<LoadingGrid />}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                <CarGrid
                  make={params.make}
                  year={params.year}
                  minPrice={params.minPrice}
                  maxPrice={params.maxPrice}
                />
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
