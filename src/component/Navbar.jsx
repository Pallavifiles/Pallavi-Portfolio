import React from 'react'

 function Navbar() {
  return (
    <nav className="bg-white px-6 md:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-0 shadow-sm">

      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        CORE_TECH
      </h1>

      {/* Menu */}
      <ul className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 font-medium">

        <li className="text-cyan-500 hover:text-cyan-600 cursor-pointer transition">
          Solutions
        </li>

        <li className="hover:text-cyan-600 cursor-pointer transition">
          Expertise
        </li>

        <li className="hover:text-cyan-600 cursor-pointer transition">
          Insights
        </li>

        <li className="hover:text-cyan-600 cursor-pointer transition">
          Case Studies
        </li>

      </ul>

      {/* Button */}
      <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition w-full md:w-auto">
        Contact
      </button>

    </nav>
  )
}
export default Navbar