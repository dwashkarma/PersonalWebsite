import Link from "next/link";

function About() {
  return (
    <div
      id="about"
      className="text-pretty  flex flex-col gap-5 basis-1/2 mt-10"
    >
      <h2 className="text-3xl font-bold text-textSecondary uppercase">About</h2>
      <p>
        Hi, I&apos;m Diwash Karmacharya, a passionate Frontend Developer with
        hands-on experience in creating dynamic and responsive web applications.
        My journey in web development has been shaped through impactful
        internships and an associate position, where I&apos;ve contributed to
        building scalable, secure, and user-focused digital solutions.
      </p>
      <h2 className="text-3xl font-bold text-textSecondary uppercase">
        {" "}
        Professional Experience
      </h2>
      <div className="flex flex-col gap-2">
        <h2 className="title grid text-textSecondary ">
          <span className="font-semibold text-lg">
            {" "}
            WildStone Solution Pvt.Ltd - Intern
          </span>
          <div className="text-md italic ">
            <span className="">Duration</span>
            <span className="text-green-800"> (3 months)</span>
          </div>
        </h2>
        <p>
          During my internship at Wildstone Solution, I worked on developing
          user-friendly interfaces using HTML, CSS, JavaScript and React.js.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="title grid text-textSecondary text-lg ">
          <span className="font-semibold">
            Waterflow Technology Pvt.Ltd - Intern
          </span>
          <div className="italic text-md">
            <span>Duration</span>
            <span className=" text-green-800 ">(6 months)</span>
          </div>
        </h2>
        <p>
          At Waterflow Technology, I further developed my skills in React.js and
          Next.js. I was part of a team that built a complex finance project and
          website with SEO optimization. Gained knowledge in UI/UX and completed
          project. Developed dynamic, high-performance web applications using
          React.js and Next.js, leveraging server-side rendering (SSR) and
          static site generation (SSG) for optimal speed and SEO. Collaborated
          with the UX/UI, Backend team to optimize the projects. Used modern CSS
          frameworks like Tailwind CSS and Bootstrap to create responsive and
          visually appealing interfaces.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="title grid text-textSecondary font-semibold text-lg">
          Waterflow Technology Pvt.Ltd - Associate
        </h2>
        <p>
          Worked on various portfolio websites, Built secure and robust nance
          web apps, implemented payment gateways, handled complex forms using
          best practices Designed and delivered robust nancial platforms with
          user-friendly dashboards, interactive data visualizations using
          dierent UI Libraries. Ensured top-notch security by implementing JWT
          authentication, OAuth. Integrated APIs and microservices using tools
          such as GraphQL, REST, Axios and Tanstack to enable ecient
          communication between backend systems and the frontend.
        </p>
      </div>
    </div>
  );
}

export default About;
