import React from "react";

// Import images from the src/images folder
import image1 from "../images/image6.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
// import image4 from "../images/image4.jpg";

const Services = () => {
  return (
    <section className="my-20 font-sans font-thin">
      {/* Paragraph before services */}
      <div className="text-center mb-12">
        <h1 className="font-sans font-thin text-center font-large mb-10 text-5xl">
          Fly across the globe with luxury at your comfort.{" "}
        </h1>
        <p className="text-1.5xl text-black font-sans font-thin mb-10">
          ASR Aviation offers a diverse private aircraft fleet, delivering
          personalized services with unmatched reliability, financial stability,
          and global access, backed by Berkshire Hathaway’s commitment to
          excellence.
        </p>
      </div>

      {/* Services Section */}
      <div className="font-sans font-thin space-y-20">
        {/* Service 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <img
              src={image1}
              alt="Service 1"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 flex items-center justify-center md:border-l-[0.5px] md:border-[#dce775] md:px-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-sans font-thin mb-3">
                UNMATCHED EXCELLENCE
              </h3>
              <p className="text-gray-700">
                Flying with ASR Aviation offers seamless travel, personalized
                comfort, and an exceptional flying experience tailored to your
                every need.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 flex items-center justify-center md:border-r-[0.5px] md:border-[#d3d3d3] md:px-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-sans font-thin mb-3">
                ASR Aviation's Midsize Jets
              </h3>
              <p className="text-gray-700">
                Our Best-Selling Choice for Effortless Luxury and Comfort in
                Every Flight.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={image2}
              alt="Service 2"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            />
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <img
              src={image3}
              alt="Service 3"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 flex items-center justify-center md:border-l-[0.5px] md:border-[#dce775] md:px-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-sans font-thin mb-3">
                Elevate Your Journey
              </h3>
              <p className="text-gray-700">
                Redefining Air Travel with Premium Midsize Jets, Air Health
                Helicopters, and a Fleet Crafted for Unmatched Comfort and
                Efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Service 4
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 flex items-center justify-center md:border-r-[0.5px] md:border-[#d3d3d3] md:px-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-sans font-thin mb-3">Service 4</h3>
              <p className="text-gray-700">
                This is a brief description of Service 4, explaining its
                benefits and why it's great.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={image4}
              alt="Service 4"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            />
          </div>
        </div> */}

        {/* Repeat the structure for more services as needed */}
      </div>
    </section>
  );
};

export default Services;
