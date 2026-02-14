import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import { assets } from "../../assets/assets";

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0B1C2D] via-[#0E2F4F] to-[#0a1a23] text-slate-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">
          {/* COMPANY INFO */}
          <div className="lg:col-span-4 space-y-6">
            <span>
              <img src={assets.logo} alt="" className="w-30" />
            </span>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              SNSBB Pvt. Ltd.
            </span>

            <p className="text-slate-400 leading-relaxed text-sm">
              SNSBB Pvt. Ltd. is a leading optical fibre infrastructure provider
              delivering high-speed, secure, and reliable connectivity solutions
              across Gujarat. We specialize in fibre leasing, point-to-point
              connectivity, and enterprise bandwidth solutions.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3 text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9825289065</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="text-sm">snsbbtelemedia@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Clients",
                  "IndustriesWeServe",
                  "Gallery",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>Fiber Leasing</li>
                <li>Point-to-Point Connectivity</li>
                <li>Bandwidth Solutions</li>
                <li>Fiber Maintenance</li>
              </ul>
            </div>
          </div>

          {/* NEWSLETTER & SOCIAL */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Follow Our Social Media Pages "
                  required
                  disabled
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                />
              </form>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} SNSBB Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
