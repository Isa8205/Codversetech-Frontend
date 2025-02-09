import { useEffect, useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <nav
        className={`fixed top-0 left-0 w-full px-6 py-4 transition-all duration-300 z-50 ${
          isScrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-[#64ffda]">
            Codverse Tech
          </a>
          <ul className="hidden md:flex space-x-6 text-[#ccd6f6]">
            <li><a href="/about" className="hover:text-[#64ffda]">01. About</a></li>
            <li><a href="/services" className="hover:text-[#64ffda]">02. Services</a></li>
            <li><a href="/portfolio" className="hover:text-[#64ffda]">03. Portfolio</a></li>
            <li><a href="/contact" className="hover:text-[#64ffda]">04. Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar