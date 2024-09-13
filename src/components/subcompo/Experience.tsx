export default function Experience() {
    const experiences = [
      {
        title: "Software Engineer",
        company: "TechInnovate Solutions",
        period: "2021 - 2024",
        responsibilities: [
          "Lead development of complex web applications using React and Node.js",
          "Implemented data visualizations for dashboards, improving user engagement by 40%",
          "Mentored junior developers and conducted code reviews",
        ]
      },
      {
        title: "Freelance",
        company: "Tawanjo Consultant",
        period: "2024 - Present",
        responsibilities: [
            "Designing the website for the account consultant company.",
            "Implementing the content alone and Improving my designing skills aswell.",
          ]
        
      }
    ]
  
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 ">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-secondary p-4 rounded-lg ">
              <h3 className="text-xl font-semibold ">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company} | {exp.period}</p>
              <ul className="list-disc list-inside mt-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }