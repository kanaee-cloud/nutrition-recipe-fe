import About from "../custom/About";
import { CarouselPlugin } from "../custom/CarouselPlugin";
import Feature from "../custom/Feature";
import { Button } from "../ui/button";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { BetweenHorizontalStart, Info  } from 'lucide-react';

export default function LandingPage() {
  return (
    <>
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-b from-[#051853] to-[#09090b]">
        <div className="mx-auto flex flex-col justify-center text-white font-semibold p-6 max-w-lg text-center">
          <h1 className="text-3xl md:text-5xl mb-4">The Recipe</h1>
          <p className="text-base md:text-lg opacity-80">
            Your Assistant Partner in the Kitchen.
          </p>

          <div className="flex items-center justify-center gap-x-4 mt-6">
            <Button className="glassmorphism px-6 py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
            <Button
              variant="secondary"
              className="flex items-center gap-x-2 px-6 py-2 rounded-lg text-white transition-all opacity-70 duration-300 transform hover:scale-105"
            >
              About Us <FaUpRightFromSquare />
            </Button>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center h-screen bg-black/90 text-white px-6 py-16">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 w-full max-w-6xl">
          <div className="text-center md:text-left flex-1">
            <h1 className="flex items-center gap-x-2 text-3xl md:text-4xl font-semibold mb-4">
            <Info className="opacity-50" color="blue" size={30}/>
              About Us
            </h1>
            <p className="text-sm md:text-base opacity-80 mb-6">
              Learn more about how we can help you in the kitchen.
            </p>
            <About />
          </div>

          <div className="flex-1 flex justify-center">
            <CarouselPlugin />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center  bg-black/90 text-white px-6 py-16">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 w-full max-w-6xl">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-3xl font-semibold mb-4 flex items-center gap-x-2"><BetweenHorizontalStart className="opacity-60" size={30} color="red"/> Our Services</h1>
            <p className="text-sm md:text-justify opacity-60 mb-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique fugiat illo sapiente vitae reiciendis sequi repudiandae.</p>
            <Button variant="outline">Explore More</Button>
          </div>
          <div>
            <Feature />
          </div>
        </div>
      </section>
    </>
  );
}
