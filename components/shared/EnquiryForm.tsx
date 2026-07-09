"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[0-9+\-\s]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  message: z.string().min(5, "Please add a short message"),
  // honeypot field — real users never fill this in
  company: z.string().max(0, "Spam detected").optional(),
});

type FormData = z.infer<typeof schema>;

export default function EnquiryForm({
  productName,
  compact = false,
}: {
  productName?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      message: productName ? `Hi, I'm interested in the ${productName}. Please share more details.` : "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    // NOTE: wire this up to your form endpoint of choice (Resend, Formspree,
    // a custom API route, etc.) using the environment variables in .env.example.
    // Left as a simulated request so the UI is fully functional out of the box.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    reset();
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 text-center py-10 animate-fade-up">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <p className="font-display font-semibold text-lg text-secondary-700">
          Thanks — we&apos;ve got your enquiry
        </p>
        <p className="text-sm text-secondary-400 max-w-sm">
          Our team will call or WhatsApp you back shortly. For urgent queries, feel free to call us directly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-primary hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      {/* Honeypot — hidden from real users, catches basic bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("company")}
      />

      <Field label="Full Name" error={errors.name?.message}>
        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
          className="w-full rounded-xl border border-secondary-200 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none"
        />
      </Field>

      <div className={compact ? "grid gap-4" : "grid sm:grid-cols-2 gap-4"}>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="10-digit mobile number"
            className="w-full rounded-xl border border-secondary-200 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none"
          />
        </Field>
        <Field label="Email (optional)" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-secondary-200 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none"
          />
        </Field>
      </div>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us what you're looking for"
          className="w-full rounded-xl border border-secondary-200 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-3.5 font-semibold hover:bg-primary-600 disabled:opacity-60 transition-colors"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-secondary-600">{label}</span>
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
