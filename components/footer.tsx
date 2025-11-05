import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <p className="text-2xl font-serif font-bold mb-4">✦ LUXORT</p>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Luxort combines timeless elegance with modern luxury, offering unparalleled comfort and unforgettable
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="#" className="text-sm hover:text-white transition block">
                Home
              </Link>
              <Link href="#" className="text-sm hover:text-white transition block">
                About Us
              </Link>
              <Link href="#" className="text-sm hover:text-white transition block">
                Events
              </Link>
              <Link href="#" className="text-sm hover:text-white transition block">
                Testimonials
              </Link>
              <Link href="#" className="text-sm hover:text-white transition block">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold mb-6">Social Media</h3>
            <nav className="space-y-3">
              <Link href="#" className="text-sm hover:text-white transition block">
                X
              </Link>
              <Link href="#" className="text-sm hover:text-white transition block">
                Facebook
              </Link>
              <Link href="#" className="text-sm hover:text-white transition block">
                Instagram
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Luxort, All Right Reserved</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
