import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="mb-40 h-[20rem] sm:h-[25rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
        <h1 className="ml-20 sm:ml-40 mb-30 font-bold  text-4xl md:text-8xl my-4  justify-center items-center flex  bg-gradient-to-r from-blue-300 via-gray-700 to-gray-400    text-transparent bg-clip-text pb-5  w-fit mx-3">
        Our Previous Sponsors
      </h1>
      <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
    </div>
  );
}

// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];



const testimonials = [
  {
    image: "/img/sponser-11.png",
    name: "Coding Blocks",
    // title: "A Tale of Two Cities",
  },
  {
    image: "/img/sponser-22.png",
    name: "GeeksForGeeks",
    // title: "Hamlet",
  },
  {
    image: "/img/sponser-33.png",
    name: "Coding Ninjas",
    // title: "A Dream Within a Dream",
  },
  {
    image: "/img/sponser-44.png",
    name: "Rosenfeld",
    // title: "Pride and Prejudice",
  },
  // {
  //   image: "/img/sponser-55.jpg",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];