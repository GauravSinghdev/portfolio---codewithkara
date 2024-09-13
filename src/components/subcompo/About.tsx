import Socials from "./Socials";

export default function About() {
    return (
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <Socials/>
        </div>
        <p className="mb-4">
          I&apos;m a passionate full stack developer with 2+ years of experience in creating immersive web experiences. 
          My expertise lies in combining cutting-edge web technologies to build unique and engaging applications.
        </p>
        <p>
          When I&apos;m not coding, you can find me exploring new tech or mentoring aspiring developers.
        </p>
      </section>
    )
  }