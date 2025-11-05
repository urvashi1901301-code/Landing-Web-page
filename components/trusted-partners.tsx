export default function TrustedPartners() {
  const partners = ["Capsule", "Biosynthesis", "Galileo", "Spherule", "FocalPoint", "Galileo", "Nietzsche"]

  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8 text-center">TRUSTED PARTNERS</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner) => (
            <div key={partner} className="text-muted-foreground hover:text-foreground transition cursor-pointer">
              <p className="text-sm font-medium">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
