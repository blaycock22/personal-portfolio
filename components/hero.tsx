import { Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden section-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:items-start">
          {/* Content with headshot aligned */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            {/* Headshot - now positioned first */}
            <div className="w-40 h-40 md:w-48 md:h-48 relative headshot-border rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/BenLaycockHeadshot.png"
                alt="Ben Laycock"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and title */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block text-white">Ben Laycock</span>
                <span className="block text-navy-light mt-2">Director at Fan Inc.</span>
              </h1>
            </div>
          </div>
          
          <p className="mt-4 text-lg text-navy-lightest max-w-2xl text-center md:text-left">
            Financial technology leader with expertise in product management and digital transformation.
          </p>
          <div className="mt-8">
            <Button asChild className="rounded-full bg-navy-light hover:bg-navy-medium text-navy-dark">
              <Link href="https://www.linkedin.com/in/ben-laycock/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl" />
    </section>
  )
}

