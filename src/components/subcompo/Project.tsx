export default function Projects() {
    const projects = [
      {
        title: "Typing Test App - rabbitType",
        description: "If you want to improve your typing speed then this app is for you. We have the scoreboard as well so try and score it the highest.",
        technologies: ["Reactjs", "Node.js", "Hono", "Cloudflare Workers", "PostgreSQL"],
        liveLink: "https://rabbittype.codewithkara.com/",
        githubLink: "https://github.com/GauravSinghdev/rabbitType"
      },
      {
        title: "Blog Posting App - mediClone",
        description: "A website where you can post the blog and edit your profile and see others blogs too.",
        technologies: ["Reactjs", "Node.js", "Hono", "PostgreSQL"],
        liveLink: "https://mediclone.codewithkara.com/",
        githubLink: "https://github.com/GauravSinghdev/Medium-Clone"
      },
      {
        title: "Ecommerce - khuchies",
        description: "A website which sells baked cookies and sell/deliver it over Rajasthan.",
        technologies: ["Reactjs", "Node.js", "Express", "MongoDB"],
        liveLink: "https://khuchies-thecookiestore.vercel.app",
        githubLink: "https://github.com/GauravSinghdev/khuchies-TheCookieStore"
      }
    ]
  
    return (
      <div>
        <div className='hidden sm:block'>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-secondary p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex gap-2">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground p-1 rounded">
                        Live Link
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground p-1 rounded">
                        GitHub
                      </a>
                    </div>
                  </div>
                  <p className="mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* for mobile */}
        <div className='sm:hidden'>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="bg-secondary p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-semibold mb-2 md:mb-0">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 md:gap-4">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-primary text-primary-foreground px-3 py-2 rounded text-xs md:text-sm"
                      >
                        Live Link
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-primary text-primary-foreground px-3 py-2 rounded text-xs md:text-sm"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                  <p className="mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
  
        </div>
      </div>
      
    )
  }