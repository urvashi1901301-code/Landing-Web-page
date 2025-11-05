"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
          GET EXCLUSIVE OFFERS, EVENT UPDATES, AND INSIDER NEWS
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-3 rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            required
          />
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 border border-primary-foreground"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </section>
  )
}
