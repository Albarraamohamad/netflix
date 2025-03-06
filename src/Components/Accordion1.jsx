import React, { useState } from "react";

const Accordion1 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    { title: "What is Netflix?", content: "Netflix is a streaming service that offers a variety of TV shows, movies, and more." },
    { title: "How much does Netflix cost?", content: "Netflix pricing depends on your location and selected plan." },
    { title: "Where can I watch?", content: "You can watch Netflix on any device, including smart TVs, gaming consoles, and mobile phones." },
    { title: "How do I cancel?", content: "You can cancel anytime through your account settings. No contracts or cancellation fees." },
    { title: "What Can I Watch on Netflix?", content: "Netflix has movies, documentaries, TV shows, anime, and more." },
    { title: "Is Netflix good for kids?", content: "Netflix Kids provides family-friendly content with parental controls." },
  ];

  return (
    <div className="w-full container mx-auto p-4 duration-700 min-w-[200px] ">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            className="bg-[#2D2D2D] w-full flex justify-between items-center text-white px-4 py-3 text-base sm:text-lg gap-3 sm:gap-5 hover:bg-gray-700 transition-all"
            onClick={() => toggle(index)}
          >
            <span className="text-sm sm:text-lg">{item.title}</span>
            <span className="text-base sm:text-lg">{openIndex === index ? "✖" : "＋"}</span>
          </button>
          {openIndex === index && (
            <div className="bg-black text-white px-4 py-3 border-t border-gray-700 transition-all duration-700 text-xs sm:text-base">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion1;
