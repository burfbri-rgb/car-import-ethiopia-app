"use client";

import { useState } from "react";
import { toast } from "sonner";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import SuccessModal from "@/components/ui/SuccessModal";

interface CarInquiryFormProps {
  carId: string;
  carName: string;
}

export default function CarInquiryForm({ carId, carName }: CarInquiryFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!phone.trim()) errs.phone = "Phone is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Invalid email";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ carId, carName, name, phone, email, message }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setShowSuccess(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} error={errors.name} required />
        <Input label="Phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} error={errors.phone} required />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} required />
        <Textarea label="Message" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold-500 hover:bg-gold-600 disabled:opacity-50 text-navy-900 font-bold px-5 py-3 rounded-lg text-sm transition-colors"
        >
          {loading ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
      <SuccessModal
        open={showSuccess}
        title="Inquiry Sent!"
        message={`Thank you for your interest in the ${carName}. Our team will get back to you shortly.`}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}
