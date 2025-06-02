export default function Skills() {
  return (
    <div id="skills" className="w-full py-12 ">
      <div className="">
        <h2 className="text-primary font-bold uppercase text-3xl  text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-8">
          <div className="  rounded-lg p-6  transition-all duration-300">
            <h3 className="font-bold text-xl mb-4 text-primary/90">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                Nextjs
              </span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                Reactjs
              </span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                Sveltejs
              </span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                UI/UX
              </span>
            </div>
          </div>

          <div className="  rounded-lg p-6  transition-all duration-300">
            <h3 className="font-bold text-xl mb-4 text-primary/90">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                TanStack
              </span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                Rest API
              </span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                NPM and CDN
              </span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                MongoDB
              </span>
            </div>
          </div>

          <div className="  rounded-lg p-6  transition-all duration-300">
            <h3 className="font-bold text-xl mb-4 text-primary/90">CSS</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                TailwindCSS
              </span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                Responsive Design
              </span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                Bootstrap
              </span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                Material UI
              </span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                Sadcn/UI
              </span>
            </div>
          </div>

          <div className="  rounded-lg p-6  transition-all duration-300">
            <h3 className="font-bold text-xl mb-4 text-primary/90">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                Nestjs
              </span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                Nodejs
              </span>
            </div>
          </div>

          <div className="  rounded-lg p-6  transition-all duration-300">
            <h3 className="font-bold text-xl mb-4 text-primary/90">
              Technical SEO
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                On-page SEO
              </span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                Performance
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
