import { AnimatedTestimonials } from "./animated-testimonials";
import { GrAchievement } from "react-icons/gr";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Here's your chance to bring your creativity and coding expertise to life. Impress the judges with your innovative web solutions and stand a chance to win exciting prizes, exclusive goodies, and cash rewards! of upto 20K",
      name: "Sarah Chen",
      designation: "PRIZES : Grab your chance to win amazing rewards",
      src: "/img/prize.jpg",
    },
    {
      quote:
        "Registration for Nexus, organized by the IETE Club, is now open! Showcase your web development skills, tackle exciting challenges, and compete with like-minded enthusiasts.",
      name: "Michael Rodriguez",
      designation: " REGISTER YOURSELF!",
      src: "/img/registration.jpg",
    },
    {
      quote:
        "Our sponsors have generously contributed to make this event bigger and better, offering exciting prizes, exclusive goodies, and cash rewards for our participants. Their involvement reflects their commitment to empowering the next generation of developers and innovators.",
      name: "Emily Watson",
      designation: "SPONSORSHIPS...",
      src: "/img/sponsors.jpg",
    },
    // {
    //   quote:
    //     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //   name: "James Kim",
    //   designation: "Engineering Lead at DataPro",
    //   // src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   // src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}