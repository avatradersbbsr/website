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

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {points.map((p) => (
            <div key={p.title} className="group flex flex-col gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-secondary-100/70 bg-white p-4 sm:p-6 shadow-soft hover-lift hover:border-accent/20 transition-all duration-500">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary-50 text-secondary-700 group-hover:bg-accent group-hover:text-white group-hover:shadow-glow-accent transition-all duration-500">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-bold text-secondary-800 text-base">{p.title}</h3>
                <p className="text-xs text-secondary-400 leading-relaxed mt-1.5">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
