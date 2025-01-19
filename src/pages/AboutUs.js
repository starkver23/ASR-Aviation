import React from "react";

const AboutUs = () => {
  return (
    <section className="my-20 font-sans font-thin">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="font-sans font-thin text-center text-5xl mb-10">
          ABOUT US
        </h1>
        <p className="text-xl text-black font-sans font-thin mb-10">
          At ASR Aviation, we are committed to revolutionizing the way you fly.
          Our fleet of luxury private jets ensures comfort, efficiency, and
          world-class service every time you take off.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl text-black font-sans font-thin mb-10 max-w-4xl mx-auto">
          We aim to provide the most reliable and efficient private aviation
          services in the world. With unmatched luxury and personalized
          services, we promise to elevate your flying experience to new heights.
        </p>
      </div>

      {/* Team Section */}
      <div className="font-sans font-thin">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

        {/* Vertical Layout with a Divider */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute inset-y-0 left-1/2 w-px bg-gray-300"></div>

          <div className="space-y-10">
            {/* Team Member 1 */}
            <div className="flex justify-between items-center">
              <div className="w-1/2 text-right pr-6">
                <h3 className="text-xl font-bold">Anirudh Singh</h3>
                <p className="text-lg text-gray-700">CEO & Founder</p>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* Team Member 3 */}
            <div className="flex justify-between items-center">
              <div className="w-1/2 text-right pr-6">
                <h3 className="text-xl font-bold">Gaurav Sherawat</h3>
                <p className="text-lg text-gray-700">CTO</p>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* Team Member 4 */}
            <div className="flex justify-between items-center">
              <div className="w-1/2"></div>
              <div className="w-1/2 text-left pl-6">
                <h3 className="text-xl font-bold">Aryan Verma</h3>
                <p className="text-lg text-gray-700">Full Stack Developer</p>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="flex justify-between items-center">
              <div className="w-1/2 text-right pr-6">
                <h3 className="text-xl font-bold">Adithya Vedantam</h3>
                <p className="text-lg text-gray-700">Sales and Social Media</p>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* Team Member 6 */}
            <div className="flex justify-between items-center">
              <div className="w-1/2"></div>
              <div className="w-1/2 text-left pl-6">
                <h3 className="text-xl font-bold">Harshada Chandel</h3>
                <p className="text-lg text-gray-700">UI/UX Designer</p>
              </div>
            </div>

            {/* Team Member 7 */}
            <div className="flex justify-between items-center">
              <div className="w-1/2 text-right pr-6">
                <h3 className="text-xl font-bold">Srivaths Kamath</h3>
                <p className="text-lg text-gray-700">Sales and Marketing</p>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* Team Member 8 */}
            <div className="flex justify-between items-center">
              <div className="w-1/2"></div>
              <div className="w-1/2 text-left pl-6">
                <h3 className="text-xl font-bold">Arnav Gupta</h3>
                <p className="text-lg text-gray-700">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
