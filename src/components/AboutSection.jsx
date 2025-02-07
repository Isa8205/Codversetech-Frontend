export function AboutSection () {
    return (
      <div className="flex lg:justify-between md:flex-col lg:flex-row w-full">
        {/* Text Content Section */}
        <div className="flex flex-col w-full max-w-6xl mx-auto p-4 md:p-8 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 animate-fade-in-up">
            Discover Codverse Tech
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up delay-100">
            Founded in 2020, Codverse Tech is dedicated to empowering businesses through innovative technology solutions. 
            Our mission is to enhance efficiency and drive growth by providing tailored software that meets the unique 
            needs of our clients. We value innovation, quality, customer satisfaction, and collaboration. Our team, 
            led by experienced professionals like Alice Johnson, our CEO, and Mark Smith, our Lead Developer, is 
            passionate about delivering exceptional results. With a commitment to excellence, we work closely with 
            our clients to ensure their expectations are not just met, but exceeded. Join us on this journey to 
            revolutionize your business with cutting-edge technology.
          </p>
        </div>
  
        {/* Full-width Image Section */}
        <div className="md:w-full mt-8">
          <img 
            loading="lazy"
            width={1820}
            height={1024}
            src="https://10web-site.ai/172/wp-content/uploads/sites/184/2025/01/tenweb_media_r2syeuxhm.webp"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            alt="Codverse Tech Team"
          />
        </div>
      </div>
    );
  };
  
  export default AboutSection;