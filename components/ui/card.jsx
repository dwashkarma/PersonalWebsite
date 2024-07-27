import { cn } from "@/lib/utils";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { ArrowRight } from "lucide-react";

function CardComponent({ image, title, description }) {
  return (
    <div
      style={{ backgroundImage: `${image}` }}
      className="rounded-xl   shadow-gray-300 shadow-md grid gap-4 items-center text-slate-800  p-4 w-[20rem] h-fit"
    >
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-slate-800">{description}</p>
      <div className="z-10 flex  items-center justify-end">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <div className="flex gap-2">
              ✨<span>Visit</span>
              <ArrowRight />
            </div>
            {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
          </AnimatedShinyText>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
