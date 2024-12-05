import React, { useState, useEffect, useCallback } from "react";

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
      name: "Premier 1A",
      description:
        "The Premier 1A is a light jet that combines impressive speed, range, and a spacious cabin, offering a comfortable and efficient travel experience for business and leisure.",
      images: images.filter((img) => img.includes("premier")),
    },
    {
      name: "Legacy 600",
      description:
        "The Legacy 600 is a large, super-midsize jet known for its luxurious cabin, long range, and impressive performance, making it ideal for both business and long-haul flights.",
      images: images.filter((img) => img.includes("legacy")),
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
        <h1 className="font-sans font-thin text-center text-5xl mb-10">
          OUR FLEET
        </h1>
        <p className="text-xl text-black font-sans font-thin mb-10">
          Explore our fleet of world-class aircraft, offering luxurious and
          efficient travel experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aircrafts.map((aircraft, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 cursor-pointer"
            onClick={() => openModal(aircraft)}
          >
            <div className="mb-6">
              <img
                src={aircraft.images[0]}
                alt={aircraft.name}
                className="w-auto h-auto max-w-full object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{aircraft.name}</h3>
              <p className="text-lg text-gray-700">{aircraft.description}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedAircraft && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg w-3/4 md:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-4">{selectedAircraft.name}</h2>
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
