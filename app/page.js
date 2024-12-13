
// import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
// import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
// import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
// import { BentoGrid } from "@/components/bento-grid";
// import GoogleGeminiEffectDemo from "@/components/GoogleGeminiEffectDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import { MarqueeDemo } from "@/components/MarqueDemo";
import { TimelineDemo } from "@/components/TimelineDemo";
// import Image from "next/image";

export default function Home() {
  return (
      <div>
        {/* <AuroraBackgroundDemo /> */}
        {/* <GoogleGeminiEffectDemo/> */}
        <HeroScrollDemo/>
        <AnimatedTestimonialsDemo />
        {/* <BentoGrid/> */}
        <TimelineDemo/>
        <InfiniteMovingCardsDemo />
        {/* <MarqueeDemo /> */}
      </div>

  );
}

