import React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl text-start border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

  {/* Icon */}
  <div className="w-14 h-14 bg-cyan-100 rounded-xl mb-6 flex items-center justify-center text-2xl text-cyan-600">

    {icon}

  </div>

  {/* Title */}
  <h2 className="text-xl md:text-2xl font-bold text-black mb-4">

    {title}

  </h2>

  {/* Description */}
  <p className="text-gray-600 leading-7 text-sm md:text-base">

    {description}

  </p>

  {/* Link */}
  <button className="mt-6 font-semibold text-cyan-600 hover:text-cyan-800 transition">

    Learn More →

  </button>

</div>
  )
}

export default ServiceCard