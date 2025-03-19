import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

// Define Project type
type Project = {
  title: string;
  period?: string;
  company: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  link?: string;
  image?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Fan inc. NIL Platform Launch",
      company: "Fan inc.",
      description:
        "Leading the strategic direction and management of Fan inc., pioneering the first-ever NIL-enabled social platform exclusively for college athletes. Overseeing product development, strategic partnerships, and investor relations while building a revolutionary ecosystem where athletes can monetize their Name, Image, and Likeness through direct fan engagement.",
      technologies: ["Product Leadership", "NIL Technology", "Social Platform", "College Athletics", "Strategic Partnerships"],
      featured: true,
      link: "https://faninc.com",
    },
    {
      title: "Credit Union Mergers",
      company: "Texas Tech Credit Union",
      description: "Project and implementation lead on multiple credit union mergers, including a 30 million dollar acquisition.",
      technologies: ["Project Management", "Financial Services", "Merger & Acquisition"],
    },
    {
      title: "Alkami Digital Banking Conversion",
      company: "Texas Tech Credit Union",
      description:
        "Led the conversion to Alkami's digital banking platform, enhancing online and mobile banking services.",
      technologies: ["Digital Banking", "Fintech", "Project Management"],
    },
    {
      title: "Glia Digital Customer Service Implementation",
      company: "Texas Tech Credit Union",
      description:
        "Implemented Glia's Digital Customer Service solution to bring the in-person experience to all customer interactions - whether they start online or on the phone.",
      technologies: ["Customer Service", "Digital Transformation", "Omnichannel Communication"],
    },
    {
      title: "8x8 Contact Center and Work Implementation",
      company: "Texas Tech Credit Union",
      description:
        "Implemented 8x8's Contact Center and Work software and physical devices, improving communication infrastructure.",
      technologies: ["Contact Center", "VoIP", "Unified Communications"],
    },
    {
      title: "SimpleNexus Mortgage Platform",
      company: "Texas Tech Credit Union",
      description:
        "Rolled out the SimpleNexus mortgage platform, including online and mobile applications, disclosures, and other mortgage-related services.",
      technologies: ["Mortgage Services", "Mobile Applications", "Financial Technology"],
    },
    {
      title: "HubSpot Implementation",
      company: "Texas Tech Credit Union",
      description:
        "Implemented HubSpot CMS, Service, and Marketing, including email automation, custom workflows, surveys, ticketing, and scheduling software.",
      technologies: ["CRM", "Marketing Automation", "Customer Service"],
    },
    {
      title: "Mobile Banking & Digital Wallet Implementation",
      company: "Texas Tech Credit Union",
      description: "Led implementation of mobile banking solutions and digital wallet integrations including Apple Pay, Google Pay, and Samsung Pay. Pioneered mobile card management features for controlling debit cards.",
      technologies: ["Mobile Banking", "Digital Wallets", "Payment Systems", "Card Management"],
    },
    {
      title: "Interactive Teller Machine (iTM) Deployment",
      company: "Texas Tech Credit Union",
      description: "Oversaw the implementation of Interactive Teller Machines (iTMs), modernizing the credit union's service channels and enhancing member experiences through innovative banking technology.",
      technologies: ["Banking Technology", "Service Channel Innovation", "Member Experience", "Hardware Implementation"],
    },
  ]

  return (
    <section id="projects" className="py-24 bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-navy-light">Key Projects</h2>

          {/* Featured Project */}
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div key={`featured-${index}`} className="mb-12">
                <Card className="bg-navy-dark border-navy-medium hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-navy-light to-navy-medium"></div>
                  <div className="md:flex">
                    <div className="w-full">
                      <CardHeader>
                        <div className="text-center">
                          <CardTitle className="text-navy-light text-2xl">
                            {project.link ? (
                              <Link
                                href={project.link}
                                target="_blank"
                                className="hover:text-navy-lightest transition-colors"
                              >
                                {project.title}
                              </Link>
                            ) : (
                              project.title
                            )}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-navy-light text-center">{project.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-navy-lightest mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="font-normal bg-navy-medium text-navy-lightest"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>
            ))}

          {/* Regular Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-navy-dark border-navy-medium hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="h-2 bg-gradient-to-r from-navy-light to-navy-medium"></div>
                  <CardHeader>
                    <div className="text-center">
                      <CardTitle className="text-navy-light">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-navy-light text-center">{project.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy-lightest mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="font-normal bg-navy-medium text-navy-lightest"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

