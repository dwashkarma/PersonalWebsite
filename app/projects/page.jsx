import CardComponent from "@/components/ui/card";

function Projects() {
  return (
    <div className="pt-10   min-h-screen mx-40 flex flex-col gap-40 ">
      <div className="flex justify-evenly title font-bold text-2xl uppercase">
        <h2>Live</h2>
        <h2>Personal</h2>
      </div>
      <div className="flex justify-around">
        <CardComponent
          title={"Waterflow Technology"}
          description={"This is a company website "}
        />
        <CardComponent />
      </div>
    </div>
  );
}

export default Projects;
