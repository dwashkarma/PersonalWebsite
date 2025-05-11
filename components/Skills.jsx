export default function Skills() {
  return (
    <div
      id="skills"
      className="text-slate-800 flex flex-col gap-5 text-start md:text-center py-10 mx-5"
    >
      <h2 className="text-textSecondary font-bold uppercase text-3xl text-center">
        Skills
      </h2>
      <div className="grid gap-2">
        <h3 className="font-bold text-xl">Frontend </h3>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-start md:justify-center">
          <li>Nextjs</li>
          <li>Reactjs</li>
          <li>Sveltejs</li>
          <li>UI/UX</li>
        </div>
      </div>
      <div className="grid gap-2">
        <h3 className="font-bold text-xl">Technologies </h3>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-start md:justify-center">
          <li>TanStack</li>
          <li>Rest API</li>
          <li>NPM and CDN</li>
          <li>MongoDB</li>
        </div>
      </div>
      <div className="grid gap-2">
        <h3 className="font-bold text-xl">CSS </h3>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-start md:justify-center">
          <li>TailwindCSS</li>
          <li>Responsive Design</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
          <li>Sadcn/UI</li>
        </div>
      </div>
      <div className="grid gap-2">
        <h3 className="font-bold text-xl">Backend </h3>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-start md:justify-center">
          <li>Nestjs</li>
          <li>Nodejs</li>
        </div>
      </div>
      <div className="grid gap-2">
        <h3 className="font-bold text-xl">Technical SEO </h3>
      </div>
    </div>
  );
}
