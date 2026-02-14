import React from "react";
import { assets } from "../assets/assets";
import Contact from "./Contact";
import { Network, Zap, Activity, Shield, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

function AutoTestimonials() {
  const testimonials = [
    {
      name: "Amit Kumar",
      location: "Ahmedabad Customer",
      initials: "AK",
      review:
        "SNSBB provides the most stable internet connection in our area. Gaming, streaming, work from home - everything runs smoothly. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      location: "Business Owner",
      initials: "PS",
      review:
        "Our office connectivity has improved drastically. Zero downtime and amazing customer support team!",
    },
    {
      name: "Rahul Mehta",
      location: "Startup Founder",
      initials: "RM",
      review:
        "Point-to-point connectivity works flawlessly for our data center. Highly professional service.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000); // change every 4 sec

    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[current];

  return (
    <div className="relative">
      <div className="bg-white shadow-xl rounded-2xl p-10 border border-gray-100 transition-all duration-700 ease-in-out">
        <div className="text-yellow-400 text-4xl mb-4">★★★★★</div>

        <p className="text-xl text-gray-700 italic leading-relaxed mb-6 min-h-[120px]">
          "{activeTestimonial.review}"
        </p>

        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            {activeTestimonial.initials}
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-900">
              {activeTestimonial.name}
            </div>
            <div className="text-sm text-gray-500">
              {activeTestimonial.location}
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-blue-800 w-6" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0B1C2D] via-[#0E2F4F] to-[#0a1a23]">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        >
          <source src="/homeVideo.mp4" type="video/mp4" />
        </video>

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0a1a23]/80 z-10"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] z-10"></div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="mb-6 inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
            ⚡ Gujarat's #1 Optical Fiber Provider
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Superfast Optical Fiber
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Internet Across Gujarat
            </span>
          </h1>

          <p className="text-gray-300 mt-4 text-lg md:text-xl max-w-2xl">
            Experience blazing-fast speeds with 99.9% uptime guarantee.
            <span className="block mt-2">
              Reliable • Secure • Ultra-High Speed Connectivity
            </span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105">
              Get Connection
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button className="border-2 border-blue-400/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all backdrop-blur-sm">
              Contact Sales
            </button>
          </div>

          {/* Floating stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {[
              { value: "50+", label: "Cities" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
              { value: "100+", label: "Customers" },
            ].map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl font-bold text-blue-400">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Fiber Services
            </h2>
            <p className="text-gray-600 text-lg">
              Enterprise-grade fiber optic solutions engineered for reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: "Fiber Leasing",
                desc: "Dedicated dark fiber strands with complete network control and scalable infrastructure.",
                gradient: "from-amber-400 via-orange-500 to-rose-500",
              },
              {
                icon: Zap,
                title: "Point to Point Connectivity",
                desc: "Ultra-low latency private connections between critical business locations.",
                gradient: "from-cyan-400 via-blue-500 to-indigo-600",
              },
              {
                icon: Activity,
                title: "Bandwidth Setup",
                desc: "Precision bandwidth provisioning from 10G to 400G capacity.",
                gradient: "from-emerald-400 via-teal-500 to-cyan-600",
              },
              {
                icon: Shield,
                title: "Fiber Maintenance",
                desc: "Preventive diagnostics, OTDR testing, and 24/7 fiber monitoring.",
                gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
              },
              {
                icon: Sparkles,
                title: "Fiber Link Restoration",
                desc: "Rapid emergency response with fusion splicing & disaster recovery.",
                gradient: "from-red-400 via-pink-500 to-rose-600",
              },
            ].map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group bg-white shadow-lg p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= COVERAGE SECTION ================= */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Expanding Across Gujarat
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Providing reliable fiber connectivity in{" "}
            <span className="font-semibold text-white">
              Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar
            </span>{" "}
            and many more cities across the state.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {[
              "Ahmedabad",
              "Surat",
              "Vadodara",
              "Rajkot",
              "Gandhinagar",
              "Bhavnagar",
            ].map((city, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PLANS SECTION ================= */}
      {/* <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Speed
            </h2>
            <p className="text-gray-600 text-lg">
              Flexible plans designed for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { speed: "100 Mbps", price: "₹699", popular: false },
              { speed: "300 Mbps", price: "₹999", popular: true },
              { speed: "1 Gbps", price: "₹1999", popular: false },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 ${
                  plan.popular
                    ? "border-blue-500 shadow-2xl scale-105"
                    : "border-gray-200 shadow-lg"
                } rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <div className="text-gray-500 text-sm font-medium mb-2">
                    Speed
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.speed}
                  </h3>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {[
                      "Unlimited Data",
                      "Free Installation",
                      "24/7 Support",
                      "No Hidden Charges",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/50"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose SNSBB?
            </h2>
            <p className="text-gray-600 text-lg">
              The best fiber internet experience in Gujarat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast Speed",
                desc: "Up to 1 Gbps speeds",
              },
              {
                icon: "🎯",
                title: "Low Latency Network",
                desc: "Perfect for gaming",
              },
              {
                icon: "💰",
                title: "Affordable Pricing",
                desc: "Best value for money",
              },
              {
                icon: "🇮🇳",
                title: "Local Gujarat Support",
                desc: "Support in Gujarati",
              },
              {
                icon: "🔧",
                title: "FTTH Technology",
                desc: "Fiber to the home",
              },
              {
                icon: "⏱️",
                title: "Quick Installation",
                desc: "Setup in 24-48 hours",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl hover:bg-gray-50 transition-all group"
              >
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900 mb-1">
                    {item.title}
                  </div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            What Our Customers Say
          </h2>

          <AutoTestimonials />
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Lightning-Fast Internet Today
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join 10,000+ happy customers across Gujarat
          </p>
          <button className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
            Get Connected Now →
          </button>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;
