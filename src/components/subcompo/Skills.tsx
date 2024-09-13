export default function Skills() {
    const skills = [
      "JavaScript (ES6+)", "TypeScript", "React", "Node.js", "HTML5", "CSS3",
      "Tailwind CSS", "RESTful APIs", "Git",
      "AWS", "MongoDB", "PostgreSQL", "WebSocket"
    ]
  
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-primary text-primary-foreground px-3 py-1 rounded-full cursor-pointer text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
    )
  }