"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { lazy, Suspense } from "react";

const AnimatedShinyText = lazy(() => import("../magicui/animated-shiny-text"));

function CardComponent({ image, title, description, url }) {
  const handleVisit = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="rounded-xl shadow-gray-300 shadow-md grid gap-4 items-center text-slate-800 p-8 w-[20rem] h-fit">
      <div className="min-h-[12rem]">
        <Image
          src={image}
          height={500}
          width={500}
          objectFit="cover"
          alt={title}
        />
      </div>
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-slate-800">{description}</p>
      <div
        className="z-10 flex items-center justify-end"
        onClick={() => handleVisit(url)}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              ✨<span>Visit</span>
              <ArrowRight />
            </AnimatedShinyText>
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default CardComponent;
