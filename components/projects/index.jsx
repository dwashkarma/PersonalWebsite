import BreadCrumb from "@/components/shared/breadcrums";
import CardComponent from "@/components/shared/card";

const projects = [
  {
    title: "KamKaaz -Android App",
    image: "/kamkaaz.png",
    description:
      "Kamkaaz - One Platform. Two Solutions. Endless Opportunities.",
    url: "https://play.google.com/store/apps/details?id=com.dwashkarma.kamkaaz",
  },
  {
    title: "KYC - Naasa Securities",
    image: "/naasa-logo.png",
    description:
      "New Kyc form to open a demat and trading account for Naasa Securities Broker Company.",
    url: "https://newkyc.naasasecurities.com.np/",
  },
  {
    title: "Trading Chart (NEPSE) - Naasa Securities",
    image: "/naasa-logo.png",
    description:
      "An interactive trading chart platform by Naasa Securities that provides real-time market data, advanced charting tools, and technical indicators to help investors analyze and track stock performance in the Nepal Stock Exchange (NEPSE).",
    url: "https://charts.naasasecurities.com.np/",
  },
  {
    title: "Naasa Securities - Website",
    image: "/naasa-logo.png",
    description:
      "Access Naasa Securities account to manage your investment profile, in one secure and user-friendly platform.",
    url: "https://naasasecurities.com.np/",
  },
  {
    title: "Waterflow Technology - Website",
    image: "/WFT.png",
    description:
      "At Waterflow Technology, a service provider,partner in navigating the complex landscape of digital transformation.",
    url: "https://waterflow.technology/",
  },
  {
    title: "Sagar Distilery Pvt.Ltd - Website",
    image: "/SagarLogo.png",
    description:
      "Sagar Distillery Ltd. (est. 2014) produces high-quality spirits like Nepse Bulls whiskey, Royal Blue vodka, Grey Wolf gin, and Berries and Blues.",
    url: "https://www.sagardistilleries.com/",
  },
  {
    title: "KIOCH-(LMS)",
    image: "/KIOCH.png",
    description:
      "Learning Management System for Kathmandu Institute of Child Health - KIOCH.",
    url: "https://learning-ms.vercel.app/",
  },
  {
    title: "Tron UI - NPM Library",
    image: "/Npm-logo.svg",
    description:
      "Tron-UI is an open source react component library that implements new design's. It's comprehensive and can be used in production out of the box. ",
    url: "https://www.npmjs.com/package/tron-ui",
  },
];
function Projects() {
  return (
    <div id="projects" className="mt-6 flex flex-col gap-10">
      {" "}
      <h2 className="text-3xl font-bold text-textSecondary uppercase text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4  gap-4 mx-10 md:mx-20 lg:mx-40">
        {projects.map((item, index) => {
          return (
            <CardComponent
              key={index}
              title={item.title}
              image={item.image}
              description={item.description.slice(0, 50) + "..."}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
