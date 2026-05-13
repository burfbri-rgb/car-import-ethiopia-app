import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          Ready to Import Your Dream Car?
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Tell us what you&apos;re looking for and we&apos;ll find the perfect
          vehicle at the best price. Get a free, no-obligation quote today.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/quote" size="lg" variant="primary">
            Get a Free Quote
          </Button>
          <Button href="/contact" size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
