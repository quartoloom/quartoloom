import { ContactUs } from "../components/contact-us";
import { Features } from "../components/features";
import { Hero } from "../components/hero";
import { Pricing } from "../components/pricing";
import { Teams } from "../components/teams";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='absolute w-[25rem] h-[25rem] bg-gradient-to-tr from-orange-400 to-red-400 opacity-50 duration-1000 animate-spin left-0 top-[100rem] blur-3xl rounded-full z-[1]'></div>
      <Teams />
      <div className='absolute w-[25rem] h-[25rem] bg-gradient-to-tr from-blue-400 to-green-400 opacity-30 duration-1000 animate-spin right-24 top-[130rem] blur-3xl rounded-full z-[1]'></div>
      <Features />
      <Pricing />
      <ContactUs />
    </main>
  );
}
