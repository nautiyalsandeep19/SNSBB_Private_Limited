import React from "react";
import {
  Wifi,
  Network,
  HardDrive,
  Cable,
  Wrench,
  Zap,
  Shield,
  Clock,
  Target,
  Eye,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Building2,
  Layers,
  Activity,
} from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Dedicated Fibre on Lease",
    desc: "Scalable dark fibre leasing solutions with customizable bandwidth from 10 Gbps to 100 Gbps. Perfect for enterprises requiring exclusive, high-capacity connectivity with complete control over their network infrastructure.",
    gradient: "from-blue-600 via-blue-500 to-cyan-400",
    stat: "",
  },
  {
    icon: Network,
    title: "Point-to-Point Connectivity",
    desc: "Ultra-secure, dedicated fibre links connecting multiple business locations across cities. Guaranteed low-latency connections with symmetric upload and download speeds for seamless data transfer and real-time applications.",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-400",
    stat: "",
  },
  {
    icon: HardDrive,
    title: "Underground Fibre Deployment",
    desc: "Robust underground fibre infrastructure engineered to withstand extreme weather conditions, flooding, and physical damage. Our buried fibre networks offer superior protection and longevity for critical business operations.",
    gradient: "from-orange-600 via-orange-500 to-amber-400",
    stat: "20+ Year Lifespan",
  },
  {
    icon: Cable,
    title: "Overhead Fibre Installation",
    desc: "Rapid deployment aerial fibre solutions ideal for time-sensitive connectivity requirements. Cost-effective installation with minimal disruption, perfect for expanding networks across urban and semi-urban areas quickly.",
    gradient: "from-emerald-600 via-green-500 to-teal-400",
    stat: "48-Hour Deployment",
  },
  {
    icon: Wrench,
    title: "Proactive Network Maintenance",
    desc: "Comprehensive 24/7/365 network monitoring with AI-powered fault prediction and preventive maintenance. Our expert team ensures your fibre infrastructure operates at optimal performance with regular health checks and instant alerts.",
    gradient: "from-indigo-600 via-blue-500 to-sky-400",
    stat: "24/7 Monitoring",
  },
  {
    icon: Zap,
    title: "Emergency Link Restoration",
    desc: "Industry-leading rapid response team with average restoration time under 4 hours. Redundant backup routes, spare fibre capacity, and strategic equipment placement ensure minimal business disruption during outages.",
    gradient: "from-rose-600 via-pink-500 to-red-400",
    stat: "<4hr Response",
  },
];

const features = [
  {
    icon: Shield,
    title: "99.95% Network Uptime",
    desc: "Guaranteed SLA-backed reliability with redundant infrastructure and failover systems",
    color: "cyan",
    metric: "99.95%",
  },
  {
    icon: Zap,
    title: "4-Hour Mean Time to Repair",
    desc: "Fastest restoration service in the industry with dedicated emergency response teams",
    color: "orange",
    metric: "4 hrs",
  },
  {
    icon: Award,
    title: "IP1 Gov. Certified",
    desc: "Government-recognized IP1 certification ensuring compliance with official standards and regulatory excellence",
    color: "purple",
    metric: "IP1 Certified",
  },
  {
    icon: Users,
    title: "Expert Technical Support",
    desc: "Highly trained telecom engineers available round-the-clock for all your needs",
    color: "green",
    metric: "24/7",
  },
];

const clients = [
  "Banking & Financial Services",
  "Data Centers & Cloud Providers",
  "Healthcare Institutions",
  "Educational Institutions",
  "Government Agencies",
  "Manufacturing & Industry",
  "IT & Software Companies",
  "E-commerce Platforms",
];

const coverage = [
  { city: "Ahmedabad", status: "Primary Hub" },
  { city: "Gandhinagar", status: "Full Coverage" },
  { city: "Vadodara", status: "Expanding" },
  { city: "Surat", status: "Coming Soon" },
];

export default function About() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#0B1C2D] via-[#0E2F4F] to-[#0a1a23] text-white overflow-hidden"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@400;500;600;700;800;900&display=swap');
        
        .font-display {
          font-family: 'Outfit', sans-serif;
        }
        
        .font-mono {
          font-family: 'Space Mono', monospace;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 grid-pattern">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm">
              <div className="relative">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-mono font-semibold text-white/90 tracking-wide">
                GUJARAT'S PREMIER FIBRE NETWORK PROVIDER
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
              <span className="block text-white">SNSBB Telemedia</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-white/60 mt-4 tracking-normal">
                Private Limited
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Engineering India's digital future with{" "}
              <span className="text-cyan-400 font-semibold">
                ultra-reliable
              </span>{" "}
              optical fibre infrastructure, delivering enterprise-grade
              connectivity solutions across Gujarat since 2010
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-16">
              {[
                {
                  num: "50+",
                  label: "Enterprise Clients",
                  subtext: "Trusted partnerships",
                },
                {
                  num: "500 KM",
                  label: "Fibre Network",
                  subtext: "And expanding",
                },
                {
                  num: "99.95%",
                  label: "Uptime SLA",
                  subtext: "Guaranteed reliability",
                },
                {
                  num: "15+",
                  label: "Years Experience",
                  subtext: "Industry expertise",
                },
              ].map((stat, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition group-hover:scale-105 duration-300">
                    <div className="font-display text-5xl font-black text-gradient mb-2">
                      {stat.num}
                    </div>
                    <div className="text-sm font-semibold text-white/90 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-white/50 font-mono">
                      {stat.subtext}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Building the backbone of{" "}
                <span className="text-gradient">tomorrow's connectivity</span>
              </h2>
              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  <span className="text-white font-semibold">
                    SNSBB Telemedia Pvt. Ltd.
                  </span>{" "}
                  is a leading telecommunications infrastructure provider
                  specializing in comprehensive optical fibre solutions. Since
                  our establishment in 2010, we have been at the forefront of
                  Gujarat's digital transformation.
                </p>
                <p>
                  Our mission extends beyond simply providing connectivity—we
                  architect robust, scalable networks that empower businesses to
                  thrive in an increasingly connected world. From Fortune 500
                  companies to emerging startups, our clients trust us to
                  deliver the reliability, speed, and security their operations
                  demand.
                </p>
                <p>
                  With over 50 kilometers of deployed fibre infrastructure and
                  growing, we combine cutting-edge technology with unparalleled
                  local expertise to deliver solutions that don't just meet
                  today's requirements—they anticipate tomorrow's needs.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <Building2 className="text-blue-400 mb-4" size={40} />
                <h3 className="font-display text-2xl font-bold mb-3">
                  Who We Serve
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {clients.map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {client}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <MapPin className="text-purple-400 mb-4" size={40} />
                <h3 className="font-display text-2xl font-bold mb-4">
                  Coverage Areas
                </h3>
                <div className="space-y-3">
                  {coverage.map((area, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-white/90">{area.city}</span>
                      <span className="font-mono text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                        {area.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="font-mono text-sm text-white/60 tracking-wider">
                WHAT WE OFFER
              </span>
            </div>
            <h2 className="font-display text-6xl md:text-7xl font-black mb-6">
              <span className="">Comprehensive Solutions</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              End-to-end fibre optic infrastructure designed for performance,
              reliability, and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group relative">
                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-white/20 transition duration-500 group-hover:scale-[1.02]">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient}`}
                      >
                        <IconComponent className="text-white" size={32} />
                      </div>
                      {service.stat == "" ? (
                        ""
                      ) : (
                        <div className="font-mono text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70">
                          {service.stat}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-2xl font-bold mb-4 text-white group-hover:text-gradient transition">
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm">
                      {service.desc}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-blue-950/10 via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-6xl md:text-7xl font-black mb-6">
              The <span className="text-gradient">SNSBB Advantage</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Industry-leading performance metrics and uncompromising service
              standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => {
              const IconComponent = item.icon;
              const colorMap = {
                cyan: {
                  gradient: "from-cyan-500 to-blue-500",
                  text: "text-cyan-400",
                },
                orange: {
                  gradient: "from-orange-500 to-red-500",
                  text: "text-orange-400",
                },
                purple: {
                  gradient: "from-purple-500 to-pink-500",
                  text: "text-purple-400",
                },
                green: {
                  gradient: "from-green-500 to-emerald-500",
                  text: "text-emerald-400",
                },
              };

              return (
                <div key={index} className="group relative">
                  <div className="relative bg-black/40 border border-white/10 rounded-2xl p-8 text-center h-full group-hover:border-white/30 transition backdrop-blur-xl">
                    <div
                      className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${colorMap[item.color].gradient} mb-6 group-hover:scale-110 transition duration-300`}
                    >
                      <IconComponent className="text-white" size={36} />
                    </div>
                    <div
                      className={`font-display text-4xl font-black mb-2 ${colorMap[item.color].text}`}
                    >
                      {item.metric}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-6xl md:text-7xl font-black mb-6">
              <span className="text-gradient">Our Purpose</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-blue-950/30 to-cyan-950/30 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 h-full group-hover:border-cyan-500/30 transition">
                <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-8 group-hover:scale-110 transition duration-300">
                  <Target className="text-white" size={48} />
                </div>
                <h3 className="font-display text-4xl font-bold mb-6 text-white">
                  Our Mission
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  To empower businesses across Gujarat and beyond with
                  enterprise-grade fibre optic infrastructure that delivers{" "}
                  <span className="text-cyan-400 font-semibold">
                    unparalleled reliability
                  </span>
                  , exceptional performance, and minimal downtime.
                </p>
                <p className="text-white/60 leading-relaxed">
                  We are committed to being more than just a service provider—we
                  are technology partners dedicated to enabling digital
                  transformation, supporting business growth, and building the
                  critical infrastructure that powers India's economic future.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-purple-950/30 to-pink-950/30 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 h-full group-hover:border-purple-500/30 transition">
                <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-8 group-hover:scale-110 transition duration-300">
                  <Eye className="text-white" size={48} />
                </div>
                <h3 className="font-display text-4xl font-bold mb-6 text-white">
                  Our Vision
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  To establish ourselves as{" "}
                  <span className="text-purple-400 font-semibold">
                    India's most trusted and innovative
                  </span>{" "}
                  telecommunications infrastructure provider, recognized for
                  setting industry standards in reliability, innovation, and
                  customer excellence.
                </p>
                <p className="text-white/60 leading-relaxed">
                  We envision a future where every business, regardless of size
                  or sector, has access to world-class connectivity that enables
                  them to compete globally. Through continuous innovation and
                  unwavering commitment to quality, we are building the digital
                  backbone of tomorrow's connected world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
