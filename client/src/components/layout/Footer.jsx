import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">
          {/* LEFT SECTION - Company Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SNSBB Pvt Ltd.
              </span>
            </div>

            {/* About Text */}
            <p className="text-slate-400 leading-relaxed text-sm">
              We craft digital experiences that inspire and transform. Our
              mission is to deliver innovative solutions that empower businesses
              to reach their full potential in the digital age.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3 text-slate-400 hover:text-blue-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 hover:text-blue-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@company.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 hover:text-blue-400 transition-colors duration-200">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 Business Ave, NY 10001</span>
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION - Quick Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Portfolio"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-400 hover:text-white transition-all duration-200 inline-flex items-center group text-sm"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white relative inline-block">
                Resources
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {["Blog", "Careers", "Support", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-400 hover:text-white transition-all duration-200 inline-flex items-center group text-sm"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SECTION - Newsletter & Social */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white relative inline-block">
                Stay Connected
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
              </h3>
              <p className="text-slate-400 text-sm">
                Subscribe to our newsletter for the latest updates and exclusive
                content.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-2 rounded-md transition-all duration-200 transform hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4 pt-4">
              <h4 className="text-sm font-semibold text-slate-300">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, href: "#", color: "hover:text-blue-500" },
                  { Icon: Twitter, href: "#", color: "hover:text-sky-400" },
                  { Icon: Instagram, href: "#", color: "hover:text-pink-500" },
                  { Icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                ].map(({ Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 ${color} transition-all duration-200 transform hover:scale-110 hover:border-slate-600`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} CompanyName. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#privacy"
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
