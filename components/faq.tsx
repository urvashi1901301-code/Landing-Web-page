"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What are the check-in and check-out times?",
    answer:
      "Our check-in time is from 3:00 PM & check-out is until 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.",
  },
  {
    id: 2,
    question: "Does the hotel offer airport transportation?",
    answer: "Yes, we offer airport transportation services. Please contact us in advance to arrange this service.",
  },
  {
    id: 3,
    question: "Does the hotel have dining options?",
    answer: "Yes, we have multiple fine dining restaurants and bars offering exquisite cuisine and beverages.",
  },
  {
    id: 4,
    question: "Do you host weddings or special events?",
    answer: "We create extraordinary settings for unforgettable events. Contact our events team for more details.",
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1)

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 text-center">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-border rounded-lg overflow-hidden bg-card">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition"
              >
                <p className="font-medium text-foreground text-left">{faq.question}</p>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform ${openId === faq.id ? "rotate-180" : ""}`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-6 py-4 bg-secondary text-muted-foreground border-t border-border">
                  <p className="text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
