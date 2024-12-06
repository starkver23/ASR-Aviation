import React, { useState, useEffect, useCallback } from "react";
import premier from "../images/planes/premier.png";

const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../images/planes", false, /\.(png|jpe?g|svg)$/)
);

const Fleet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAircraft, setSelectedAircraft] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const aircrafts = [
    {
      name: "Falcon 2000LX",
      description:
        "The Falcon 2000LX is a versatile, long-range business jet known for its luxury, efficiency, and impressive performance in both speed and comfort.",
      images: images
        .filter((img) => img.includes("falcon"))
        .sort((a, b) => (a.includes("falcon2000") ? -1 : 1)),
    },
    {
      name: "King Air B200",
      description:
        "The King Air B200 is a reliable, high-performance twin turboprop aircraft, renowned for its versatility, efficiency, and capability to operate from shorter runways.",
      images: images.filter((img) => img.includes("king")),
    },
    {
      name: "Hawker 850XP",
      description:
        "The Hawker 850XP is a midsize business jet offering exceptional range, comfort, and performance, with a spacious cabin and efficient operating costs.",
      images: images.filter((img) => img.includes("hawker")),
    },
    {
      name: "Legacy 600",
      description:
        "The Legacy 600 is a large, super-midsize jet known for its luxurious cabin, long range, and impressive performance, making it ideal for both business and long-haul flights.",
      images: images.filter((img) => img.includes("legacy")),
    },
    {
      name: "Premier 1A",
      description:
        "The Premier 1A is a light jet that combines impressive speed, range, and a spacious cabin, offering a comfortable and efficient travel experience for business and leisure.",
      images: [premier],
    },
    {
      name: "Global 6000",
      description:
        "The Global 6000 is a large, long-range business jet that offers exceptional comfort, advanced technology, and impressive speed, making it ideal for intercontinental travel and high-end business flights.",
      images: images.filter((img) => img.includes("global")),
    },
    {
      name: "Gulfstream G550",
      description:
        "The Gulfstream G550 is a large, ultra-long-range business jet renowned for its luxurious cabin, advanced avionics, and exceptional performance, making it a top choice for global business travel.",
      images: images.filter((img) => img.includes("gulfstream")),
    },
    {
      name: "Pilatus PC-24",
      description:
        "The Pilatus PC-24 is a versatile light jet with exceptional short-field capability, combining the flexibility of a turboprop with the speed and comfort of a jet, perfect for accessing smaller airports with ease.",
      images: images.filter((img) => img.includes("pilatus")),
    },
    {
      name: "Cessna Citation Sovereign",
      description:
        "The Cessna Citation Sovereign is a super-midsize jet known for its impressive range, spacious cabin, and excellent performance, offering a perfect balance of comfort and efficiency for medium to long-range flights.",
      images: images.filter((img) => img.includes("citation")),
    },
    {
      name: "Bombardier Global 7500",
      description:
        "The Bombardier Global 7500 is an ultra-long-range business jet, renowned for its luxurious, spacious cabin, advanced technology, and exceptional performance, making it one of the most capable and comfortable aircraft in its class.",
      images: images.filter((img) => img.includes("bombardier")),
    },
    {
      name: "Bell 407",
      description:
        "The Bell 407 is a versatile, single-engine light helicopter known for its reliability, speed, and comfort. It features a four-blade rotor system, making it ideal for a wide range of missions, including EMS, law enforcement, and corporate transport.",
      images: images.filter((img) => img.includes("bell")),
    },
    {
      name: "Airbus H125",
      description:
        "The Airbus H125 has a sleek, compact design with a high-mounted tail rotor and streamlined fuselage, optimized for performance and agility. Its modern exterior ensures efficiency in diverse operational environments.",
      images: images.filter((img) => img.includes("airbus")),
    },
    {
      name: "Bell 429",
      description:
        "The Bell 429 is a light, twin-engine helicopter known for its advanced avionics, spacious cabin, and exceptional performance. It is widely used for EMS, law enforcement, and corporate transport, offering versatility and reliability.",
      images: images.filter((img) => img.includes("Bell429")),
    },
  ];

  const openModal = (aircraft) => {
    setSelectedAircraft(aircraft);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAircraft(null);
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedAircraft.images.length
    );
  }, [selectedAircraft]);

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedAircraft.images.length) %
        selectedAircraft.images.length
    );
  };

  useEffect(() => {
    if (isModalOpen && selectedAircraft) {
      const intervalId = setInterval(() => {
        nextImage();
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [isModalOpen, selectedAircraft, nextImage]);

  return (
    <section className="my-20 font-sans font-thin">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-thin text-gray-800 mb-5">OUR FLEET</h1>
        <p className="text-xl text-gray-700 mb-10">
          Explore our fleet of world-class aircraft, offering luxurious and
          efficient travel experiences.
        </p>
      </div>

      {/* Aircraft Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {aircrafts.map((aircraft, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border p-6 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all"
            onClick={() => openModal(aircraft)}
          >
            <div className="mb-6">
              <img
                src={aircraft.images[0]}
                alt={aircraft.name}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {aircraft.name}
            </h3>
            <p className="text-lg text-gray-600">{aircraft.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedAircraft && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg w-full md:w-2/3 lg:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {selectedAircraft.name}
            </h2>
            <div className="relative">
              <img
                src={selectedAircraft.images[currentImageIndex]}
                alt={selectedAircraft.name}
                className="w-full h-auto object-contain rounded-lg shadow-lg mb-4"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
              >
                &#10094;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
              >
                &#10095;
              </button>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              {selectedAircraft.description}
            </p>
            <button
              onClick={closeModal}
              className="bg-black text-white px-6 py-2 rounded-lg mt-4 hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Fleet;
