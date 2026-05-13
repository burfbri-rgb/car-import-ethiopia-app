import Link from "next/link";
import type { Car } from "@/types";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function CarCard({ car }: { car: Car }) {
  return (
    <Card>
      <div className="aspect-[16/10] bg-gray-200 relative overflow-hidden">
        {car.images && car.images[0] ? (
          <img
            src={car.images[0]}
            alt={car.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs text-gray-500 mb-1">
          {car.year} &middot; {car.mileage.toLocaleString()} km
        </p>
        <h3 className="font-semibold text-navy-900 text-lg leading-tight mb-2">
          {car.name}
        </h3>
        <p className="text-gold-600 font-bold text-xl">
          ${car.price.toLocaleString()}
        </p>
        <div className="flex gap-2 mt-4">
          <Link
            href={`/inventory/${car.id}`}
            className="flex-1 text-center text-sm bg-navy-700 hover:bg-navy-600 text-white font-medium px-3 py-2 rounded-lg transition-colors"
          >
            View Details
          </Link>
          <Link
            href={`/inventory/${car.id}?inquire=true`}
            className="flex-1 text-center text-sm bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-3 py-2 rounded-lg transition-colors"
          >
            Inquire
          </Link>
        </div>
      </div>
    </Card>
  );
}
