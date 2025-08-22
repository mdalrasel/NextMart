"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Discover the Best Deals",
    desc: "Shop our wide range of products at unbeatable prices.",
    img: "https://source.unsplash.com/1600x600/?shopping,store",
  },
  {
    id: 2,
    title: "Latest Technology",
    desc: "Find the newest gadgets and electronics here.",
    img: "https://source.unsplash.com/1600x600/?technology,gadgets",
  },
  {
    id: 3,
    title: "Your Style, Your Choice",
    desc: "Fashion products to keep you trendy and stylish.",
    img: "https://source.unsplash.com/1600x600/?fashion,clothes",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg mb-6">{slide.desc}</p>
            <a
              href="/products"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Shop Now
            </a>
          </div>
        </div>
      ))}

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
