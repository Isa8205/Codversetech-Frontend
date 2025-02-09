import heroImage from "../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-start text-[#ccd6f6] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cover Image"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-start max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to <span className="text-[#64ffda]">Codverse Tech</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#8892b0]">
          At Codverse Tech, we specialize in innovative software solutions that
          drive business success. Our team of experts is dedicated to
          delivering exceptional quality and unparalleled service.
        </p>
        <form className="mt-6 flex flex-wrap items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full md:w-auto border-none rounded-lg text-gray-900 focus:ring-2 focus:ring-[#64ffda]"
            required
          />
          <button
            type="submit"
            className="bg-[#64ffda] flex-grow sm:flex-grow-0 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-[#52e0c4] transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-3 text-sm text-[#8892b0]">
          By signing up, you agree to our {" "}
          <a href="/terms-and-conditions" className="hover:underline text-[#64ffda]">
            Terms and Conditions
          </a>{" "}
          and {" "}
          <a href="/privacy-policy" className="hover:underline text-[#64ffda]">
            Privacy Policy
          </a>.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
