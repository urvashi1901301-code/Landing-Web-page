"use client"

import { useState } from "react"

const highlights = [
  { id: 1, name: "SWIMMING POOL" },
  { id: 2, name: "FINE DINING RESTAURANTS" },
  { id: 3, name: "LUXURY ROOMS & SUITES" },
  { id: 4, name: "SPA & WELLNESS" },
]

export default function Highlights() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">HOTEL HIGHLIGHTS</p>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Experience the Extraordinary</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Experience elegance and comfort in our Luxury Rooms & Suites, where modern amenities and timeless design
          create the perfect retreat.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 md:gap-8 mb-12 border-b border-border pb-6 overflow-x-auto">
          {highlights.map((highlight, idx) => (
            <button
              key={highlight.id}
              onClick={() => setActiveTab(idx)}
              className={`text-sm font-medium whitespace-nowrap pb-2 transition ${
                activeTab === idx
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {highlight.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-gray-300 rounded-lg h-96 md:h-[500px]" />
      </div>
    </section>
  )
}
