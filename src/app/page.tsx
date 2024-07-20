import { ContactUs } from "./components/contact-us";
import { Features } from "./components/features";
import { Hero } from "./components/hero";
import { Pricing } from "./components/pricing";
import { Teams } from "./components/teams";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='absolute w-[25rem] h-[25rem] bg-orange-400 opacity-20 left-0 top-[100rem] blur-3xl rounded-full z-[1]'></div>
      <Teams />
      <div className='absolute w-[25rem] h-[25rem] bg-secondary opacity-100 right-0 top-[120rem] blur-3xl rounded-full z-[1]'></div>
      <Features />
      <Pricing />
      <ContactUs />
    </main>
  );
}
