import React from "react";

const ContactUs = () => {
  return (
    <section className="my-20 font-sans font-thin">
      <div className="text-center mb-12">
        <h1 className="font-sans font-thin text-center text-5xl mb-10">
          CONTACT US
        </h1>
        <p className="text-xl text-black font-sans font-thin mb-10">
          Reach out to us with your queries or requests via email, and our team
          will get back to you promptly.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-8">
        <p className="text-lg mb-6">
          You can contact us directly at{" "}
          <a href="mailto:asrofficial18@gmail.com" className="text-blue-600">
            MailUs
          </a>
          . We look forward to hearing from you!
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
