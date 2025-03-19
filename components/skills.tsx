export default function Skills() {
  const skills = [
    "Project Management",
    "Digital Banking",
    "Financial Technology",
    "Customer Service Implementation",
    "Merger & Acquisition",
    "Contact Center Solutions",
    "Mortgage Platforms",
    "CRM Implementation",
    "Marketing Automation",
    "Mobile Banking",
    "Payment Systems",
    "Digital Wallets",
    "Credit Card Systems",
    "Statement Processing",
    "Agile Methodologies",
    "Vendor Management",
  ]

  return (
    <section id="skills" className="py-24 bg-navy-medium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-white">Skills</h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-navy-dark/40 text-navy-lightest rounded-full text-sm font-medium hover:bg-navy-dark/60 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

