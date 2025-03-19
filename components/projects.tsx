import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

// Define Project type
type Project = {
  title: string;
  period: string;
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
      title: "Fan Inc. NIL Platform Launch",
      period: "June 2023 - Present",
      company: "Fan Inc.",
      description:
        "Led the development and launch of Fan Inc., the first-ever NIL-enabled social app exclusively for college athletes to get discovered and earn compensation for their Name, Image, and Likeness.",
      technologies: ["Mobile App Development", "NIL Technology", "Social Platform", "College Athletics"],
      featured: true,
      link: "https://faninc.com",
    },
    {
      title: "Credit Union Merger",
      period: "Sep 2022 - Feb 2023",
      company: "Texas Tech Credit Union",
      description: "Project and implementation lead on a 30 million dollar merger.",
      technologies: ["Project Management", "Financial Services", "Merger & Acquisition"],
    },
    {
      title: "Alkami Digital Banking Conversion",
      period: "Oct 2021 - Jun 2022",
      company: "Texas Tech Credit Union",
      description:
        "Led the conversion to Alkami's digital banking platform, enhancing online and mobile banking services.",
      technologies: ["Digital Banking", "Fintech", "Project Management"],
    },
    {
      title: "Glia Digital Customer Service Implementation",
      period: "Jan 2022 - Apr 2022",
      company: "Texas Tech Credit Union",
      description:
        "Implemented Glia's Digital Customer Service solution to bring the in-person experience to all customer interactions - whether they start online or on the phone.",
      technologies: ["Customer Service", "Digital Transformation", "Omnichannel Communication"],
    },
    {
      title: "8x8 Contact Center and Work Implementation",
      period: "Mar 2021 - Jun 2021",
      company: "Texas Tech Federal Credit Union",
      description:
        "Implemented 8x8's Contact Center and Work software and physical devices, improving communication infrastructure.",
      technologies: ["Contact Center", "VoIP", "Unified Communications"],
    },
    {
      title: "SimpleNexus Mortgage Platform",
      period: "Feb 2020 - May 2020",
      company: "Texas Tech Federal Credit Union",
      description:
        "Rolled out the SimpleNexus mortgage platform, including online and mobile applications, disclosures, and other mortgage-related services.",
      technologies: ["Mortgage Services", "Mobile Applications", "Financial Technology"],
    },
    {
      title: "HubSpot Implementation",
      period: "Feb 2018 - Jul 2018",
      company: "Texas Tech Federal Credit Union",
      description:
        "Implemented HubSpot CMS, Service, and Marketing, including email automation, custom workflows, surveys, ticketing, and scheduling software.",
      technologies: ["CRM", "Marketing Automation", "Customer Service"],
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
                        <div className="flex justify-between items-start">
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
                          <Badge variant="outline" className="bg-navy-light/20 text-navy-lightest border-navy-light/30">
                            {project.period}
                          </Badge>
                        </div>
                        <CardDescription className="text-navy-light">{project.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-navy-lightest mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
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
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-navy-light">{project.title}</CardTitle>
                      <Badge variant="outline" className="bg-navy-light/20 text-navy-lightest border-navy-light/30">
                        {project.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-navy-light">{project.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy-lightest mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
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

