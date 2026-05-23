import React from "react"

function Hero() {
  return (
 <section
  className="min-h-screen bg-cover bg-center flex items-center px-5 md:px-10 lg:px-20 py-20"
  style={{
    backgroundImage: "url('/src/assets/Hero.png')",
  }}
>

  {/* Dark Overlay */}
  <div className=" inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 text-start max-w-3xl">

    {/* Badge */}
    <p className="bg-cyan-400 text-black inline-block px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-6">
      ENTERPRISE INFRASTRUCTURE REDEFINED
    </p>

    {/* Heading */}
    <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">

      Precision Engineering
      <br />

      for the{" "}

      <span className="text-cyan-400">
        Intelligence Era
      </span>

    </h1>

    {/* Description */}
    <p className="text-gray-300 mt-6 text-base md:text-lg leading-7 md:leading-8 max-w-2xl">

      Accelerate your digital transformation with
      high-performance cloud architecture and
      cybersecurity protocols designed for
      absolute reliability.

    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mt-8">

      <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition w-full sm:w-auto">

        View Infrastructure Specs

      </button>

      <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition w-full sm:w-auto">

        Watch Showreel

      </button>

    </div>

  </div>

</section>
  )
}

export default Hero