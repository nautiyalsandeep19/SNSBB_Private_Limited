import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Network, Zap, Activity, Shield, Sparkles } from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: Network,
      title: "Fiber Leasing",
      subtitle: "Infrastructure on Demand",
      description:
        "Unlock enterprise-grade dark fiber without the capital burden. Lease dedicated strands with complete control over your optical path, enabling custom wavelength division multiplexing and future-proof scalability.",
      features: [
        "Flexible lease terms",
        "Dedicated fiber strands",
        "Full network control",
      ],
      gradient: "from-amber-400 via-orange-500 to-rose-500",
      accentColor: "orange",
    },
    {
      icon: Zap,
      title: "Point to Point Connectivity",
      subtitle: "Direct. Private. Instant.",
      description:
        "Ultra-low latency connections between your critical sites. No hops, no shared infrastructure—just pure, uninterrupted light-speed communication for applications that demand absolute reliability.",
      features: [
        "Sub-millisecond latency",
        "100% uptime SLA",
        "Private routing",
      ],
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      accentColor: "blue",
    },
    {
      icon: Activity,
      title: "Bandwidth Setup",
      subtitle: "Precision Provisioning",
      description:
        "Expertly engineered bandwidth deployment tailored to your traffic patterns. From 10G to 400G waves, we architect, configure, and optimize your capacity with surgical precision.",
      features: [
        "Scalable capacity",
        "Zero packet loss",
        "Real-time monitoring",
      ],
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      accentColor: "teal",
    },
    {
      icon: Shield,
      title: "Fiber Maintenance",
      subtitle: "Proactive Protection",
      description:
        "Comprehensive care programs that prevent problems before they occur. OTDR testing, connector cleaning, and environmental monitoring keep your network performing at theoretical maximums.",
      features: [
        "Preventive diagnostics",
        "24/7 monitoring",
        "Performance reports",
      ],
      gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
      accentColor: "purple",
    },
    {
      icon: Sparkles,
      title: "Fiber Link Restoration",
      subtitle: "Emergency Response",
      description:
        "When disaster strikes, every second counts. Our rapid-response teams deploy immediately with spare inventory, fusion splicing gear, and the expertise to restore your mission-critical links fast.",
      features: ["<2 hour response", "Redundant routing", "Disaster recovery"],
      gradient: "from-red-400 via-pink-500 to-rose-600",
      accentColor: "red",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1C2D] via-[#0E2F4F] to-[#0a1a23]  mt-16 text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Radial gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm font-medium tracking-wider text-white/80">
                  FIBER OPTIC SOLUTIONS
                </span>
              </div>
            </div>

            <h1 className="text-7xl md:text-8xl font-black tracking-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Light Speed
              </span>
              <span className="block text-5xl md:text-6xl mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
              Enterprise fiber solutions engineered for organizations that can't
              afford downtime
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                    opacity: 0,
                  }}
                >
                  {/* Card */}
                  <div
                    className={`
                    relative h-full border border-white/10 rounded-2xl overflow-hidden
                    transition-all duration-500 ease-out
                    ${isActive ? "bg-white/10 border-white/30 shadow-2xl shadow-blue-500/20" : "bg-white/5 hover:bg-white/8"}
                  `}
                  >
                    {/* Gradient bar */}
                    <div
                      className={`h-1 bg-gradient-to-r ${service.gradient} transition-all duration-500 ${isActive ? "opacity-100" : "opacity-50"}`}
                    ></div>

                    <div className="p-8">
                      {/* Icon and Title */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div
                            className={`
                            inline-flex p-3 rounded-xl mb-4
                            bg-gradient-to-br ${service.gradient}
                            transition-transform duration-500
                            ${isActive ? "scale-110" : "scale-100"}
                          `}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>

                          <h3 className="text-2xl font-bold mb-1 text-white">
                            {service.title}
                          </h3>
                          <p
                            className={`text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                          >
                            {service.subtitle}
                          </p>
                        </div>

                        <div
                          className={`
                          text-6xl font-black text-white/5 transition-all duration-500
                          ${isActive ? "scale-110 text-white/10" : "scale-100"}
                        `}
                        >
                          {(index + 1).toString().padStart(2, "0")}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed mb-6 text-sm">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-white/50"
                          >
                            <div
                              className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient}`}
                            ></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div
                      className={`
                      absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 pointer-events-none
                      ${isActive ? "opacity-5" : "group-hover:opacity-3"}
                    `}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "99.99%", label: "Uptime SLA" },
              { value: "<2hrs", label: "Response Time" },
              { value: "400G", label: "Max Capacity" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                style={{
                  animationDelay: `${services.length * 100 + i * 50}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0,
                }}
              >
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="relative">
            <div className="absolute inset-0  rounded-3xl opacity-20 blur-3xl"></div>
            <div className="relative border border-white/20 rounded-3xl p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Ready to Accelerate?
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                Connect with our fiber engineering team to design your custom
                infrastructure solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                  <Link to={"/contact"}> Schedule Consultation</Link>
                </button>
                <button className="px-8 py-4 border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300">
                  View Network Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap");

        * {
          font-family:
            "Inter",
            system-ui,
            -apple-system,
            sans-serif;
        }
      `}</style>
    </div>
  );
}
