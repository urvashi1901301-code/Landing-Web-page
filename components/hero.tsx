"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const rooms = [
  { id: 1, name: "GREEN AREA", image: "/luxury-hotel-green-garden-area.jpg" },
  { id: 2, name: "COMFY AREA", image: "/luxury-hotel-comfy-living-room.jpg" },
  { id: 3, name: "SUITE VIEW", image: "/luxury-hotel-suite-bedroom.jpg" },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % rooms.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length)

  return (
    <section className="bg-background py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-tight">
              WELCOME TO LUXORT
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              Discover a world where luxury and comfort blend seamlessly, offering unforgettable experiences in a
              setting of elegance and tranquility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-sm font-medium">
                BOOK YOUR STAY
              </Button>
              <Button
                variant="outline"
                className="border-foreground hover:bg-secondary px-8 py-3 text-sm font-medium bg-transparent"
              >
                EXPLORE OUR SUITES
              </Button>
            </div>
          </div>

          {/* Right - Carousel */}
          <div className="space-y-6">
            <div className="relative bg-gray-300 rounded-lg overflow-hidden h-96">
              <img
                src={rooms[currentIndex].image || "/placeholder.svg"}
                alt={rooms[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Carousel Info */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">0{currentIndex + 1}</p>
                <p className="text-lg font-medium">{rooms[currentIndex].name}</p>
              </div>
              <button className="text-sm text-muted-foreground hover:text-foreground">NEXT →</button>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center gap-4">
              <button onClick={prevSlide} className="p-2 hover:bg-secondary rounded transition">
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {rooms.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1 transition ${idx === currentIndex ? "bg-primary w-8" : "bg-border w-2"}`}
                  />
                ))}
              </div>

              <button onClick={nextSlide} className="p-2 hover:bg-secondary rounded transition">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
