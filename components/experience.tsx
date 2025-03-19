import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Director",
      company: "Fan inc.",
      period: "June 2023 - Present",
      location: "Lubbock, Texas",
      description: "Leading strategic initiatives and product development as Director at Fan inc.",
    },
    {
      title: "Product Director",
      company: "Texas Tech Credit Union",
      period: "August 2022 - June 2023",
      location: "Lubbock, Texas",
      description:
        "Directed product strategy and implementation, including overseeing the completion of a 30 million dollar credit union merger.",
    },
    {
      title: "Member Experience Director",
      company: "Texas Tech Credit Union",
      period: "January 2022 - August 2022",
      location: "Lubbock, Texas",
      description:
        "Led member experience initiatives, including the implementation of Glia's Digital Customer Service solution to enhance customer interactions across all channels.",
    },
    {
      title: "Project Director",
      company: "Texas Tech Credit Union",
      period: "May 2017 - January 2022",
      location: "Lubbock, Texas",
      description:
        "Managed multiple high-impact projects including Alkami Digital Banking Conversion, 8x8 Contact Center implementation, and various financial technology integrations.",
    },
    {
      title: "Applications and Processing Manager",
      company: "Texas Tech Credit Union",
      period: "September 2015 - May 2017",
      location: "Lubbock, Texas",
      description:
        "Oversaw applications and processing operations, including the implementation of iTMs, mobile banking conversion, and digital wallet integrations (Apple Pay, Android Pay, Samsung Pay).",
    },
    {
      title: "Mobile Solutions",
      company: "City Bank",
      period: "July 2009 - September 2015",
      location: "Lubbock, Texas",
      description:
        "Technologist in the digital banking space. Implementation and ongoing development of mobile products with the understanding of core banking systems. Pioneered mobile card management features, being first to market with the ability to turn debit cards on/off via a mobile device.",
    },
  ]

  return (
    <section id="experience" className="py-24 bg-gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-navy-light">Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-navy-light/30"
              >
                <div className="absolute w-3 h-3 bg-navy-light rounded-full -left-[6px] top-2"></div>

                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <Badge
                      variant="outline"
                      className="sm:ml-2 w-fit bg-navy-light/20 text-navy-lightest border-navy-light/30"
                    >
                      {exp.period}
                    </Badge>
                  </div>

                  <div>
                    <p className="font-medium text-navy-light">{exp.company}</p>
                    <p className="text-sm text-navy-lightest/80">{exp.location}</p>
                  </div>

                  <p className="text-navy-lightest">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

