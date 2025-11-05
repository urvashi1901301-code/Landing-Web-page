export default function About() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">ABOUT LUXORT</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground max-w-3xl">
            Where Timeless Elegance Meets Exceptional Comfort and Unforgettable Experiences in Luxury Hospitality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Quote */}
          <div className="bg-white p-8 rounded-lg">
            <p className="text-base text-foreground leading-relaxed mb-6">
              Luxort is where elegance meets comfort, creating unforgettable moments with every stay. Welcome to your
              perfect escape.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Roberta Pulipe</p>
                <p className="text-xs text-muted-foreground">Founder of Luxort</p>
              </div>
            </div>
          </div>

          {/* Right - Images */}
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              At Luxort, we redefine the meaning of luxury hospitality. our hotel offers a seamless blend of classic
              sophistication and modern comfort, providing guests with an unparalleled experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-300 h-48 rounded-lg" />
              <div className="bg-gray-400 h-48 rounded-lg" />
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-2">01 COMFY AREA</p>
              <button className="text-primary hover:text-primary/80 transition">NEXT →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
