import { Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-navy-medium/30 bg-navy-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-navy-lightest">
            &copy; {new Date().getFullYear()} Ben Laycock. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/ben-laycock/"
              target="_blank"
              className="text-navy-lightest hover:text-navy-light transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

