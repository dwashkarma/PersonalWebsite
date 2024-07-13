import Link from "next/link";

function About() {
  return (
    <div
      id="about"
      className="text-center flex flex-col gap-5 mx-5 md:mx-40 mt-10"
    >
      <h1 className="text-3xl font-bold text-secondary uppercase">About</h1>
      <p>
        Hi, I&apos;m Dwash Karma, a passionate Frontend Developer with hands-on
        experience in creating dynamic and responsive web applications. With
        more than 1 year of experience, I have honed my skills during
        internships at Wildstone Solution and Waterflow Technology Company.
      </p>
      <div className="flex flex-col gap-2">
        <h2 className="title grid text-secondary">
          WildStone Solution Pvt.Ltd{" "}
          <span className="text-base text-green-800">(3 months)</span>
        </h2>
        <p>
          During my internship at Wildstone Solution, I worked on developing
          user-friendly interfaces using HTML, CSS, JavaScript and React.js.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="title grid text-secondary">
          Waterflow Technology Pvt.Ltd{" "}
          <span className="text-base text-green-800">(6 months)</span>
        </h2>
        <p>
          At Waterflow Technology, I further developed my skills in React.js and
          Next.js. I was part of a team that built a complex finance project and
          website with SEO optimization. Gained knowledge in UI/UX and completed
          project.{" "}
          <Link href={"/projects"} className="text-cyan-700 italic text-sm">
            Projects
          </Link>
        </p>
      </div>
    </div>
  );
}

export default About;
