import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-navy-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600')",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-48">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Premium Imported Cars for{" "}
            <span className="text-gold-500">Ethiopia</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            We bring the world&apos;s finest vehicles to Ethiopian roads. From
            luxury SUVs to reliable sedans, find your dream car with our
            expert import services.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/inventory" size="lg" variant="primary">
              Browse Inventory
            </Button>
            <Button href="/quote" size="lg" variant="outline">
              Request a Quote
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <p className="text-2xl font-bold text-gold-500">500+</p>
              <p className="text-sm text-gray-400">Cars Imported</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold-500">10+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold-500">1000+</p>
              <p className="text-sm text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
