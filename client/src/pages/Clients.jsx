import React from "react";
import { assets } from "../assets/assets";

export default function Clients() {
  const clients = [
    {
      number: "01",
      name: "ABC Technologies",
      logo: assets.client1,
      description: "Enterprise optical fibre leasing for data centers.",
      testimonial: "Reliable connectivity and quick restoration.",
    },
    {
      number: "02",
      name: "MetroNet Solutions",
      logo: "https://via.placeholder.com/80",
      description: "Point-to-point connectivity across locations.",
      testimonial: "Excellent uptime and support team.",
    },
    {
      number: "03",
      name: "Skyline Infra",
      logo: "https://via.placeholder.com/80",
      description: "Underground fibre infrastructure deployment.",
      testimonial: "Professional telecom infrastructure partner.",
    },
    {
      number: "04",
      name: "Global IT Hub",
      logo: "https://via.placeholder.com/80",
      description: "Dedicated leased optical fibre connectivity.",
      testimonial: "Fast link restoration service.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Patel",
      role: "IT Manager",
      img: "https://i.pravatar.cc/80?img=1",
      text: "SNSBB Telemedia provides extremely reliable fibre connectivity with quick link restoration.",
    },
    {
      name: "Amit Shah",
      role: "Network Engineer",
      img: "https://i.pravatar.cc/80?img=2",
      text: "Excellent uptime and maintenance support. Their fibre infrastructure is very stable.",
    },
    {
      name: "Kunal Mehta",
      role: "Operations Head",
      img: "https://i.pravatar.cc/80?img=3",
      text: "Point-to-point connectivity services are fast and dependable.",
    },
    {
      name: "Vivek Singh",
      role: "Business Owner",
      img: "https://i.pravatar.cc/80?img=4",
      text: "Professional telecom partner with great technical support.",
    },
  ];

  const stats = [
    { value: "25+", label: "Clients Served" },
    { value: "150+", label: "KM Fibre Network" },
    { value: "99.9%", label: "Network Uptime" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1C2D] via-[#0E2F4F] to-[#0a1a23] text-white mt-15 ">
      <section className="px-4 sm:px-6 lg:px-10 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Our Clients
            </h2>
            <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto">
              Trusted by leading enterprises for reliable optical fibre
              connectivity
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-[2px] bg-gradient-to-b from-[#0B1C2D] via-[#0E2F4F] to-[#0a1a23] hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="relative bg-[#0F2A5A]/95 backdrop-blur-xl rounded-2xl p-6 sm:p-8 h-full overflow-hidden">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card Number */}
                  <div className="absolute right-4 sm:right-6 top-4 sm:top-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                    {client.number}
                  </div>

                  <div className="relative z-10">
                    {/* Logo */}
                    <div className="mb-6">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-10 sm:h-12 grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>

                    {/* Name */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                      {client.name}
                    </h3>

                    {/* Description */}
                    <p className="text-blue-100/90 text-sm sm:text-base mb-6 leading-relaxed">
                      {client.description}
                    </p>

                    {/* Testimonial */}
                    <div className="border-t border-white/10 pt-4 mt-auto">
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-cyan-300/90 text-sm italic leading-relaxed">
                          {client.testimonial}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY STATS */}
      <section className="py-12 lg:py-20 bg-white/5 backdrop-blur-lg border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 lg:p-8 border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-blue-200 text-xs sm:text-sm lg:text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-[#0F2A5A] to-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto">
              Real feedback from businesses we've helped connect
            </p>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white text-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl text-gray-300 mb-3 leading-none">
                  "
                </div>
                <p className="text-sm leading-relaxed mb-6 min-h-[80px]">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <img
                    src={t.img}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-200"
                    alt={t.name}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: Scrollable layout */}
          <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[320px] bg-white text-gray-700 rounded-2xl p-6 shadow-xl snap-center"
              >
                <div className="text-5xl text-gray-300 mb-3 leading-none">
                  "
                </div>
                <p className="text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <img
                    src={t.img}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-200"
                    alt={t.name}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
