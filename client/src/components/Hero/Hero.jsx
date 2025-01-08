
"use client"
import Image from 'next/image';



const Hero = () => {
  return (
    <>
    <section className="relative text-white">
      {/* Top Navigation */}
      
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center px-6 lg:px-12 py-16">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/hero.webp"
            alt="Professional Image"
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
        <section className="relative text-black bg-black bor border-l-gray-500">

        <div className="flex flex-col lg:flex-row items-center px-2 lg:px-15 py-10">
          <h1 className="text-4xl font-bold mb-4 p-auto">
            Quality home services, on demand
          </h1>
          <p className="text-lg mb-6">
            Experienced, hand-picked Professionals to serve you at your
            doorstep
          </p>
          {/* Dropdown */}
          <div className="flex justify-center lg:justify-start  ">
            <select className="p-3 border rounded-lg bg-white text-black w-60">
              <option>Select your city</option>
              <option>Delhi</option>
              <option>City 2</option>
              <option>City 3</option>
            </select>
          </div>
        </div>

        {/* Right: Content */}
        </section>
      </div>






      
    </section>


      
        </>
  );
};

export default Hero;