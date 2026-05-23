import ServiceCard from "./ServiceCard"

function Services() {

  const services = [
    {
      icon:"☁",
      title: "Cloud Architecture",
      description:
        "Scalable multi-cloud environments optimized for redundancy and seamless migration.",
    },

    {
      icon:"☁",
      title: "Cybersecurity",
      description:
        "Military-grade encryption and zero-trust frameworks to protect critical data.",
    },

    {
      icon:"⚙",
      title: "Managed Support",
      description:
        "24/7 monitoring and infrastructure management by elite engineers.",
    },
  ]

  return (
  <section className="bg-gray-100 py-16 md:py-24 px-5 md:px-10 lg:px-20">

  {/* Heading */}
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">

    <div>

      <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">

        Architecting Tomorrow's Systems

      </h1>

      <p className="text-gray-600 text-start mt-4 max-w-2xl text-base md:text-lg leading-7">

        Our core services bridge the gap between
        complex legacy infrastructure and the
        future of distributed intelligent computing.

      </p>

    </div>

    {/* Button */}
    <button className="text-cyan-600 font-semibold hover:text-cyan-800 transition whitespace-nowrap">

      Browse all solutions →

    </button>

  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {services.map((service, index) => (
      <ServiceCard
        key={index}
        icon={service.icon}
        title={service.title}
        description={service.description}
      />
    ))}

  </div>

</section>
  )
}

export default Services