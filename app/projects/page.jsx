import BreadCrumb from "@/components/shared/breadcrums";
import CardComponent from "@/components/shared/card";

const projects = [
  {
    title: "Waterflow Technology",
    image: "/WFT.png",
    description:
      "At Waterflow Technology, a service provider,partner in navigating the complex landscape of digital transformation.",
    url: "https://waterflow.technology/",
  },
  {
    title: "Sagar Distilery Pvt.Ltd",
    image: "/SagarLogo.png",
    description:
      "Sagar Distillery Ltd. (est. 2014) produces high-quality spirits like Nepse Bulls whiskey, Royal Blue vodka, Grey Wolf gin, and Berries and Blues.",
    url: "https://www.sagardistilleries.com/",
  },
  {
    title: "Tron UI",
    image: "/Npm-logo.svg",
    description:
      "Tron-UI is an open source react component library that implements new design's. It's comprehensive and can be used in production out of the box. ",
    url: "https://www.npmjs.com/package/tron-ui",
  },
];
function Projects() {
  return (
    <>
      <BreadCrumb />
      <div className=" m-5  md:mx-40 flex flex-col md:gap-20 gap-10 ">
        <div className="flex flex-col md:flex-row place-items-center justify-center gap-10">
          {projects.map((item, index) => {
            return (
              <CardComponent
                title={item.title}
                image={item.image}
                description={item.description.slice(0, 50) + "..."}
                url={item.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
