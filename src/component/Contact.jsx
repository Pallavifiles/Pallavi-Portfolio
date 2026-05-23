function Contact() {
  return (
   <section className="bg-[#031B3A] py-16 md:py-24 px-5 md:px-10 lg:px-20 text-start">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

    {/* LEFT SIDE */}
    <div>

      {/* Small Label */}
      <p className="text-cyan-400 uppercase tracking-widest text-sm font-semibold mb-4">

        Contact Us

      </p>

      {/* Heading */}
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

        Connect with Our
        <br />
        Infrastructure Experts

      </h1>

      {/* Description */}
      <p className="text-gray-300 mt-8 text-base md:text-lg lg:text-xl leading-8 max-w-xl">

        Ready to modernize your technical stack?
        Schedule a strategic consultation with our
        lead architects today.

      </p>

      {/* Contact Info */}
      <div className="mt-12 space-y-8 text-white">

        <div className="flex items-center gap-4">

          <span className="text-cyan-400 text-2xl">
            ✉
          </span>

          <p className="text-sm md:text-base">
            solutions@coretech-infra.com
          </p>

        </div>

        <div className="flex items-center gap-4">

          <span className="text-cyan-400 text-2xl">
            ☎
          </span>

          <p className="text-sm md:text-base">
            +1 (800) INFRA-OPS
          </p>

        </div>

        <div className="flex items-center gap-4">

          <span className="text-cyan-400 text-2xl">
            ⌖
          </span>

          <p className="text-sm md:text-base">
            Innovation Plaza, Palo Alto, CA
          </p>

        </div>

      </div>

    </div>

    {/* RIGHT SIDE FORM */}
    <div className="bg-[#F4F4F4] rounded-2xl p-6 md:p-10 shadow-2xl">

      {/* Top Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>

          <label className="text-sm text-gray-600 block mb-2 uppercase tracking-wider">

            Full Name

          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 bg-transparent p-4 rounded-md outline-none focus:border-cyan-500 transition"
          />

        </div>

        <div>

          <label className="text-sm text-gray-600 block mb-2 uppercase tracking-wider">

            Company Email

          </label>

          <input
            type="email"
            placeholder="john@enterprise.com"
            className="w-full border border-gray-300 bg-transparent p-4 rounded-md outline-none focus:border-cyan-500 transition"
          />

        </div>

      </div>

      {/* Subject */}
      <div className="mt-8">

        <label className="text-sm text-gray-600 block mb-2 uppercase tracking-wider">

          Subject

        </label>

        <select className="w-full border border-gray-300 bg-transparent p-4 rounded-md outline-none focus:border-cyan-500 transition">

          <option>
            Cloud Architecture Inquiry
          </option>

          <option>
            Cybersecurity Services
          </option>

          <option>
            Infrastructure Support
          </option>

        </select>

      </div>

      {/* Textarea */}
      <div className="mt-8">

        <label className="text-sm text-gray-600 block mb-2 uppercase tracking-wider">

          Project Requirements

        </label>

        <textarea
          rows="5"
          placeholder="Briefly describe your infrastructure challenges..."
          className="w-full border border-gray-300 bg-transparent p-4 rounded-md outline-none focus:border-cyan-500 transition"
        ></textarea>

      </div>

      {/* Button */}
      <button className="w-full bg-black text-white py-4 rounded-md mt-8 font-semibold hover:bg-gray-900 transition">

        Send Inquiry

      </button>

    </div>

  </div>

</section>
  )
}

export default Contact