import dynamic from "next/dynamic";
import { Hero } from "../components/hero";

const ContactUs = dynamic(() =>
  import("../components/contact-us").then((m) => m.ContactUs)
);
const Features = dynamic(() =>
  import("../components/features").then((m) => m.Features)
);
const Pricing = dynamic(() =>
  import("../components/pricing").then((m) => m.Pricing)
);
// const Teams = dynamic(() => import("../components/teams").then((m) => m.Teams));

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='absolute md:w-[25rem] md:h-[25rem] w-[18rem] h-[18rem] bg-gradient-to-tr from-orange-400 to-red-400 opacity-50 duration-1000 animate-spin left-0 top-[100rem] blur-3xl rounded-full z-[1]'></div>
      {/* <Teams /> */}
      <div className='absolute md:w-[25rem] md:h-[25rem] w-[18rem] h-[18rem] bg-gradient-to-tr from-blue-400 to-green-400 opacity-30 duration-1000 animate-spin right-24 top-[130rem] blur-3xl rounded-full z-[1]'></div>
      <Features />
      <Pricing />
      <ContactUs />
    </main>
  );
}
