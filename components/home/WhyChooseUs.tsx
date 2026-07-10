import { Eye, Wrench, MapPinned, Wallet } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const points = [
  {
    icon: Eye,
    title: "Try before you buy",
    text: "Every massage chair and major device is on display at our showroom — sit in it, run the programs, compare models side by side.",
  },
  {
    icon: Wrench,
    title: "Real after-sales support",
    text: "Warranty claims and servicing are handled directly by our local team, not a distant call centre.",
  },
  {
    icon: MapPinned,
    title: "15+ years in Bhubaneswar",
    text: "Established in 2010, AVA Traders has built its reputation one showroom visit and one repeat customer at a time.",
  },
  {
    icon: Wallet,
    title: "Transparent pricing",
    text: "MRP, offer price and savings are shown clearly on every product — no hidden charges at checkout.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-y bg-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why Choose AVA Traders"
          title="Buying a massage chair shouldn't feel like a gamble"
          description="We built our showroom around one idea: you should be able to test a product properly and talk to someone who'll still be there after you buy it."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="group flex flex-col gap-3 rounded-2xl border border-secondary-50 p-6 hover:border-primary-100 hover:shadow-soft transition-all duration-300">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="font-display font-semibold text-secondary-700">{p.title}</h3>
              <p className="text-sm text-secondary-400 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
