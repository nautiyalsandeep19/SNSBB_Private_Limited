import React from "react";
import { assets } from "../assets/assets";

const Gallery = () => {
  const galleryImages = [
    assets.gallery1,
    assets.gallery2,
    assets.gallery3,
    assets.gallery4,
    assets.gallery5,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1C2D] via-[#0E2F4F] to-[#0a1a23] text-white mt-15">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Our Gallery
          </h2>
          <p className="text-blue-200 mt-4 text-lg">
            A glimpse of our fibre infrastructure and projects
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
