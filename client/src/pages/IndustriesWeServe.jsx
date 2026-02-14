import React from "react";

export default function IndustriesWeServe() {
  const industries = [
    {
      icon: "🏦",
      title: "Banking & Financial Services",
      description:
        "Mission-critical connectivity for high-frequency trading, secure transactions, and inter-branch networking.",
      points: [
        "Sub-millisecond latency",
        "Secure private routing",
        "99.99% uptime SLA",
      ],
    },
    {
      icon: "🏢",
      title: "IT & Data Centers",
      description:
        "High-capacity dark fibre and wavelength services connecting hyperscale data centers and enterprise IT infrastructure.",
      points: [
        "Dark fibre leasing",
        "10G–400G scalability",
        "Disaster recovery connectivity",
      ],
    },
    {
      icon: "📡",
      title: "Telecom & ISPs",
      description:
        "Carrier-grade infrastructure supporting metro, backhaul, and last-mile connectivity.",
      points: [
        "Dedicated fibre strands",
        "High-throughput backbone",
        "Rapid link restoration",
      ],
    },
    {
      icon: "⚡",
      title: "Power Grid & Energy Utilities",
      description:
        "Reliable connectivity for substations, SCADA systems, and load dispatch centers.",
      points: [
        "Substation interconnects",
        "Real-time monitoring",
        "Redundant routing support",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#0B1C2D] via-[#0E2F4F] to-[#0a1a23] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold bg-white bg-clip-text text-transparent mb-4">
            Industries We Serve
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Powering critical infrastructure across industries that demand
            ultra-low latency, zero downtime, and unmatched reliability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-[2px] hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="bg-[#0F2A5A]/95 backdrop-blur-xl border rounded-2xl p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="text-4xl mb-4">{industry.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-blue-100/90 text-sm mb-5 flex-grow">
                  {industry.description}
                </p>

                {/* Points */}
                <ul className="space-y-2 text-sm">
                  {industry.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-cyan-200"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
