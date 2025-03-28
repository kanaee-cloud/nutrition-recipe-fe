import About from "../custom/About";
import { CarouselPlugin } from "../custom/CarouselPlugin";
import { Button } from "../ui/button";
import { FaUpRightFromSquare } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-b from-[#0d2058] to-[#09090b]">
        <div className="mx-auto flex flex-col justify-center text-white font-semibold p-6 max-w-lg text-center">
          <h1 className="text-3xl md:text-5xl mb-4">The Recipe</h1>
          <p className="text-base md:text-lg opacity-80">
            Your Assistant Partner in the Kitchen.
          </p>

          {/* Buttons */}
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
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
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
    </>
  );
}
