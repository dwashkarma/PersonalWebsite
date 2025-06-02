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
    <div
      className="group relative rounded-2xl bg-white p-6 transition-all duration-300 ease-in-out
                    hover:shadow-lg hover:-translate-y-1
                    border  backdrop-blur-sm
                    flex flex-col"
    >
      <div className="relative place-content-center place-items-center w-full aspect-square  overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={image}
          height={300}
          width={300}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          alt={title}
        />
      </div>
      <h2 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
        {title}
      </h2>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
      <div className="mt-6">
        <Suspense
          fallback={<p className="text-sm text-gray-500">Loading...</p>}
        >
          <button
            onClick={() => handleVisit(url)}
            className="group/btn w-full rounded-xl bg-muted p-3 transition-all duration-300
                     hover:bg-amber-600 border border-gray-100 hover:border-amber-600"
          >
            <AnimatedShinyText
              className="inline-flex items-center justify-center gap-2 text-gray-600
                         group-hover/btn:text-white transition-colors"
            >
              <span className="font-medium">Visit Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </AnimatedShinyText>
          </button>
        </Suspense>
      </div>
    </div>
  );
}

export default CardComponent;
