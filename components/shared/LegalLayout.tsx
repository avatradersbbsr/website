export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-secondary-700 py-14">
        <div className="container-wide">
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-white">{title}</h1>
          <p className="mt-2 text-sm text-secondary-300">Last updated: {updated}</p>
        </div>
      </section>
      <section className="section-y container-wide max-w-3xl">
        <div className="space-y-8 text-secondary-500 leading-relaxed text-sm [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-secondary-700 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_p]:mb-3">
          {children}
        </div>
      </section>
    </>
  );
}
