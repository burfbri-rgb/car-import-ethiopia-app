import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote - EthioImports",
  description:
    "Request a free, no-obligation quote for importing your dream car to Ethiopia. Tell us what you're looking for and we'll find the best price.",
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            Request a Quote
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl text-lg">
            Tell us what you&apos;re looking for and we&apos;ll find the best deal.
            Free, no-obligation quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">
              Tell Us About Your Dream Car
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Fill out the form below and our team will get back to you with a
              personalized quote.
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
