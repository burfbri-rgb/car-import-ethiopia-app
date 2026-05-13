"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const makes = [
  "All Makes",
  "Toyota",
  "BMW",
  "Mercedes-Benz",
  "Nissan",
  "Mitsubishi",
  "Lexus",
  "Hyundai",
  "Isuzu",
];

const years = [
  "All Years",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
];

export default function CarFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [make, setMake] = useState(searchParams.get("make") || "All Makes");
  const [year, setYear] = useState(searchParams.get("year") || "All Years");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  function applyFilters() {
    const params = new URLSearchParams();
    if (make !== "All Makes") params.set("make", make);
    if (year !== "All Years") params.set("year", year);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    router.push(`/inventory?${params.toString()}`);
  }

  function resetFilters() {
    setMake("All Makes");
    setYear("All Years");
    setMinPrice("");
    setMaxPrice("");
    router.push("/inventory");
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
      <h3 className="font-semibold text-navy-900 mb-4">Filters</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
          <select
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            {makes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Min Price ($)</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max Price ($)</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="999999"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
        </div>
        <div className="flex gap-2 pt-2">
          <button
            onClick={applyFilters}
            className="flex-1 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Apply
          </button>
          <button
            onClick={resetFilters}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
