"use client";
import CardComponent from "@/components/ui/card";
import { FaNpm } from "react-icons/fa";
import { useState } from "react";

function Projects() {
  const [index, setindex] = useState(0);
  const handleTabChange = (index) => {
    setindex(index);
  };
  return (
    <div className=" m-5  md:mx-40 flex flex-col md:gap-20 gap-10 ">
      <div className="flex justify-evenly title font-bold text-2xl uppercase">
        <h2
          className={`${
            index == 0 ? "text-textPrimary" : "text-inherit"
          } cursor-pointer`}
          onClick={() => handleTabChange(0)}
        >
          Live
        </h2>
        <h2
          className={`${
            index == 1 ? "text-textPrimary" : "text-inherit"
          } cursor-pointer`}
          onClick={() => handleTabChange(1)}
        >
          Personal
        </h2>
      </div>
      {index === 0 && (
        <>
          {/* Live Projects */}
          <div className="flex flex-col md:flex-row place-items-center justify-center gap-10">
            <CardComponent
              title={"Waterflow Technology"}
              image={"/WFT.png"}
              description={"This is a company website "}
              url={"https://waterflow.technology/"}
            />
            <CardComponent
              title={"Sagar Distilery"}
              image={"/SagarLogo.png"}
              description={"This is a company website "}
              url={"https://www.sagardistilleries.com/"}
            />
          </div>
        </>
      )}
      {index === 1 && (
        <>
          <div className="grid   place-content-center place-items-center grid-cols-1 ">
            <CardComponent
              title={"Tron UI"}
              image={"/Npm-logo.svg"}
              description={
                "Ui-library is an open source react component library that implements new design's. It's comprehensive and can be used in production out of the box."
              }
              url={"https://www.npmjs.com/package/tron-ui"}
            />{" "}
          </div>
        </>
      )}
    </div>
  );
}

export default Projects;
