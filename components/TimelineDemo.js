import Image from "next/image";
import React from "react";
import { Timeline } from "./timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "REGISTER",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {/* Built and launched Aceternity UI and Aceternity UI Pro from scratch */}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/start.webp"
              alt="start date"
              width={500}
              height={500}
              className="transition-transform duration-500 hovere:scale-500 aspect-square group-hover:scale-1 ease-out rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
            {/* <div className="bg-neutral-400 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
             <div className="ml-5 mt-10 items-center justify-center">
             <h2 className="text-black mb-0 sm:mb-5 font-bold text-xs sm:text-lg ">Event Registration starts</h2>
             <p className="mr-5">The event registation start on 15th dec</p>
             </div>
            </div> */}
            <div className="bg-gradient-to-r from-blue-200 via-gray-700 to-gray-500 rounded-lg object-cover h-30 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <div className="p-3 sm:p-5 flex flex-col items-start justify-center">
                <h2 className="text-white font-bold text-sm sm:text-2xl leading-tight">
                  Event Registration Starts - 
                </h2>
                <p className="text-white text-xs sm:text-sm leading-snug">
                  The event registration starts on 15th Dec.
                </p>
              </div>
            </div>
            <Image
              src="/img/closed.webp"
              alt="closing date"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="bg-gradient-to-r from-blue-200 via-gray-700 to-gray-500 rounded-lg object-cover h-30 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <div className="p-3 sm:p-5 flex flex-col items-start justify-center">
                <h2 className="text-white font-bold text-sm sm:text-2xl leading-tight">
                Event Registration closes -
                </h2>
                <p className="text-white text-xs sm:text-sm leading-snug">
                The event registation gets close on 5th jan
                </p>
              </div>
            </div>
            {/* <div className="bg-neutral-300 rounded-lg object-cover h-30 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <div className="ml-5 mt-10 items-center justify-center">
                <h2 className="text-black mb-5 font-bold text-lg">
                  {" "}
                  Event Registration closes
                </h2>
                <p className="mr-5">
                  
                </p>
              </div>
            </div> */}
          </div>
        </div>
      ),
    },
    {
      title: "ROUNDS",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {/* I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum. */}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {/* Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built. */}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/roundd-1.jpg"
              alt="round-1 date"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="bg-gradient-to-r from-blue-200 via-gray-700 to-gray-500 rounded-lg object-cover h-30 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <div className="p-3 sm:p-5 flex flex-col items-start justify-center">
                <h2 className="mb-5 text-white font-bold text-sm sm:text-2xl leading-tight">
                ROUND-1
                </h2>
                <p className="text-white text-xs sm:text-sm leading-snug">
                Problem statement selection and development
                </p>
              </div>
            </div>
            {/* <div className="bg-neutral-300 rounded-lg object-cover h30 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <div className="ml-5 mt-10 items-center justify-center">
                <h2 className="text-black mb-5 font-bold text-lg"></h2>
                <p className="mr-5">
                  
                </p>
              </div>
            </div> */}
            <Image
              src="/img/final.jpg"
              alt="final round date"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
             <div className="bg-gradient-to-r from-blue-200 via-gray-700 to-gray-500 rounded-lg object-cover h-30 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <div className="p-3 sm:p-5 flex flex-col items-start justify-center">
                <h2 className="mb-5 text-white font-bold text-sm sm:text-2xl leading-tight">
                FINAL ROUND
                </h2>
                <p className="text-white text-xs sm:text-sm leading-snug">
                Evaluation by industry experts
                </p>
              </div>
            </div>
            {/* <div className="border-white bg-neutral-300 rounded-lg object-cover h-30 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <div className="ml-5 mt-10 items-center justify-center">
                <h2 className="text-black mb-5 font-bold text-lg">
                  
                </h2>
                <p className="mr-5">Evaluation by industry experts</p>
              </div>
            </div> */}
          </div>
        </div>
      ),
    },
    {
      title: "Deadlines",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-lg font-normal mb-4">
            And here is the complete timeline of the event...
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Event start : 15 December 2024
            </div>
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Event closes : 5th January 2025
            </div>
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Round 1 : 9th January 2025
            </div>
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Round 2 : 15Th January 2025
            </div>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            {/* Check out{" "} */}
            <a
              //   href="https://aceternity.com/changelog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              {/* our changelog */}
            </a>{" "}
            {/* for more details. */}
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-5 sm:mt-0 container px-4 md:px-0 mx-auto py-4 sm:py-10 lg:py-10">
      <h2 className="bg-gradient-to-r from-blue-200 via-gray-700 to-gray-400  text-transparent bg-clip-text text-2xl md:text-6xl font-bold dark:text-neutral-50 mb-6">
        EVENT TIMELINE
      </h2>
      <Timeline data={data} />
    </div>
  );
}
