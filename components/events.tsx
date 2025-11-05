"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const events = [
  { id: 1, name: "WEDDINGS", image: "/luxury-wedding-event-hall.jpg" },
  { id: 2, name: "CORPORATE EVENTS", image: "/luxury-corporate-meeting-room.jpg" },
  { id: 3, name: "PRIVATE GATHERINGS", image: "/luxury-private-event-space.jpg" },
]

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % events.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">UNFORGETTABLE EVENTS AT LUXORT</p>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Celebrate Life's Finest Moments in Style and Elegance
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          At Luxort, we create extraordinary settings for unforgettable events. Whether you're planning an intimate
          gathering or a grand celebration.
        </p>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center gap-4 overflow-x-auto pb-4">
            <div className="flex-shrink-0 w-16 md:w-32 h-64 bg-gray-400 rounded-lg" />
            <div className="flex-shrink-0 w-full md:w-1/2 h-64 bg-gray-300 rounded-lg" />
            <div className="flex-shrink-0 w-16 md:w-32 h-64 bg-gray-400 rounded-lg" />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div>
              <p className="text-sm text-muted-foreground">0{currentIndex + 1}</p>
              <p className="text-lg font-medium">{events[currentIndex].name}</p>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={prevSlide} className="p-2 hover:bg-background rounded transition">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextSlide} className="p-2 hover:bg-background rounded transition">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
