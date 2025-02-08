export function AboutSection () {
    return (
      <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto p-8 space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl text-[#ccd6f6] font-bold">Discover Codverse Tech</h2>
          <p className="text-lg text-[#8892b0] leading-relaxed mt-4">
            Founded in 2020, Codverse Tech is dedicated to <span className="text-[#64ffda]">empowering businesses</span> through innovative technology solutions. 
            Our mission is to <span className="text-[#64ffda]">enhance efficiency</span> and <span className="text-[#64ffda]">drive growth</span> by providing tailored software that meets the unique 
            needs of our clients. We value <span className="text-[#64ffda]" >innovation, quality, customer satisfaction, and collaboration. </span> Our team,
            led by experienced professionals like Alice Johnson, our CEO, and Mark Smith, our Lead Developer, is 
            passionate about <span className="text-[#64ffda]">delivering exceptional results</span>. With a commitment to excellence, we work closely with 
            our clients to ensure their expectations are not just met, but exceeded. Join us on this journey to 
            <span className="text-[#64ffda]">revolutionize your business with cutting-edge technology</span>.
          </p>
        </div>
        {/* Image */}
        <div className="flex-1">
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