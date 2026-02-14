import React from "react";
import { assets } from "../assets/assets";

const Network = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1C2D] via-[#0E2F4F] to-[#0a1a23] text-white mt-15">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Our Network Infrastructure
          </h2>
          <p className="text-blue-200 mt-4 text-lg">
            Robust underground fibre backbone ensuring seamless connectivity
          </p>
        </div>

        {/* Image 1 */}
        <div className="relative mb-16 group">
          <img
            src={assets.networkphoto1}
            alt="Network Infrastructure"
            className="w-full rounded-2xl shadow-2xl"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>

          <div className="absolute bottom-8 left-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              Optical Fiber Backbone
            </h3>
            <p className="text-blue-200 mt-2">
              High-capacity fibre routes across Gujarat
            </p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative group">
          <img
            src={assets.networkphoto2}
            alt="Enterprise Connectivity"
            className="w-full rounded-2xl shadow-2xl"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>

          <div className="absolute bottom-8 left-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              Enterprise Connectivity
            </h3>
            <p className="text-blue-200 mt-2">
              Secure and reliable data transmission
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
