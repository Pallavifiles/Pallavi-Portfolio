import React from "react"

function Expertise() {
  return (
   <section className="bg-white text-black py-16 md:py-24 px-5 md:px-10 lg:px-20">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

    {/* Left Image */}
    <div>

      <img
        src="/src/assets/globe.png"
        alt="globe"
        className="rounded-3xl w-full object-cover"
      />

    </div>

    {/* Right Content */}
    <div className="text-start">

      {/* Small Label */}
      <p className="text-cyan-600 font-semibold uppercase tracking-wider mb-4">

        Global Infrastructure

      </p>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">

        Strategic Global Expertise

      </h1>

      {/* Description */}
      <p className="text-gray-500 mt-5 leading-7 md:leading-8 text-base md:text-lg">

        Our distributed architecture solutions ensure
        enterprise-grade performance, security,
        and reliability across global systems.

      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-8 mt-10">

        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-cyan-500">

            99.99%

          </h2>

          <p className="text-gray-500 mt-2">

            System Uptime

          </p>

        </div>

        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-cyan-500">

            150+

          </h2>

          <p className="text-gray-500 mt-2">

            Enterprise Clients

          </p>

        </div>

      </div>

    </div>

  </div>

</section>
  )
}

export default Expertise