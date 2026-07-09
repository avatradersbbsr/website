import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig, telLink } from "@/lib/site-config";
import SectionHeading from "@/components/shared/SectionHeading";

export default function MapSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Visit Our Showroom"
          title="Come see and try before you buy"
          description="Located on Puri Bypass Road, Badagada — easy to find, easy to park."
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-secondary-100 shadow-soft aspect-[16/10]">
            <iframe
              src={siteConfig.contact.mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AVA Traders showroom location on Google Maps"
            />
          </div>

          <div className="lg:col-span-2 rounded-2xl border border-secondary-100 bg-canvas p-6 flex flex-col gap-5">
            <InfoRow icon={MapPin} label="Address" value={siteConfig.contact.address} />
            <InfoRow
              icon={Phone}
              label="Phone"
              value={`${siteConfig.contact.phonePrimary} / ${siteConfig.contact.phoneSecondary}`}
              href={telLink(siteConfig.contact.phonePrimary)}
            />
            <InfoRow icon={Mail} label="Email" value={siteConfig.contact.email} href={`mailto:${siteConfig.contact.email}`} />
            <InfoRow
              icon={Clock}
              label="Business Hours"
              value={siteConfig.contact.hours.map((h) => `${h.day}: ${h.time}`).join(" · ")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-secondary-400">{label}</p>
        <p className="text-sm text-secondary-700 mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
