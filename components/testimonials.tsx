import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Jerome Bios",
    location: "Brazil",
    date: "5/2/19",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. I felt like stepping into a dream. Can't wait to return!",
  },
  {
    id: 2,
    name: "Courtney Henry",
    location: "Monaco",
    date: "5/2/19",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. I felt like stepping into a dream. Can't wait to return!",
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    location: "Poland",
    date: "9/18/23",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. I felt like stepping into a dream. Can't wait to return!",
  },
  {
    id: 4,
    name: "Ronald Richards",
    location: "Guinea",
    date: "5/15/12",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. I felt like stepping into a dream. Can't wait to return!",
  },
  {
    id: 5,
    name: "Arlene McCoy",
    location: "Saint Barthélemy",
    date: "5/15/12",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. I felt like stepping into a dream. Can't wait to return!",
  },
  {
    id: 6,
    name: "Eleanor Pena",
    location: "San Tomé and Príncipe",
    date: "5/2/19",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. I felt like stepping into a dream. Can't wait to return!",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">What Our Guests Say</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Exceptional Experiences, Shared by Those Who've Lived Them.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">READ MORE TESTIMONIALS</Button>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-secondary p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-gray-400 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed mb-3">{testimonial.text}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
