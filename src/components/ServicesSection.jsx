import React from 'react';

export function ServicesSection() {
  return (
    <section id="services" className="py-12">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-[#ccd6f6]">Explore Our Software Development Services</h2>
      <p className="text-lg text-[#8892b0] max-w-2xl mx-auto mb-8">
        At Codverse Tech, we offer a range of software development services designed to meet the unique needs of your business. From custom software solutions to seamless system integration, our expert team is dedicated to delivering innovative and efficient technology solutions that drive success.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {/*
          Service Card: Custom Software Development
        */}
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://10web-site.ai/172/wp-content/uploads/sites/184/2025/01/tenweb_media_rrq3pnnrk.webp"
            alt="Custom Software Development"
          />
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">Custom Software Development</h5>
            <p className="text-gray-400 mb-4">
              Our custom software solutions are tailored to fit your unique business needs, enhancing efficiency and productivity. We provide ongoing support to ensure your software evolves with your business.
            </p>
            <a
              href="https://10web-site.ai/172/ready-ant/custom-software-development/"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-[#64ffda] font-bold py-2 px-4 rounded"
            >
              Learn More
            </a>
          </div>
        </div>

        {/*
          Service Card: Mobile Application Development
        */}
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://10web-site.ai/172/wp-content/uploads/sites/184/2025/01/tenweb_media_RXRUQ4UTA.webp"
            alt="Mobile Application Development"
          />
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">Mobile Application Development</h5>
            <p className="text-gray-400 mb-4">
              Reach your customers on their preferred devices with our mobile app development services. We create engaging applications for both iOS and Android platforms, enhancing customer engagement.
            </p>
            <a
              href="https://10web-site.ai/172/ready-ant/mobile-application-development/"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-[#64ffda] font-bold py-2 px-4 rounded"
            >
              Learn More
            </a>
          </div>
        </div>

        {/*
          Service Card: System Integration
        */}
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://10web-site.ai/172/wp-content/uploads/sites/184/2025/01/tenweb_media_RY6KZCCQG.webp"
            alt="System Integration"
          />
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">System Integration</h5>
            <p className="text-gray-400 mb-4">
              Ensure seamless operation of your software applications with our system integration services. We enhance data flow and improve efficiency, reducing operational costs.
            </p>
            <a
              href="https://10web-site.ai/172/ready-ant/system-integration/"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-[#64ffda] font-bold py-2 px-4 rounded"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
