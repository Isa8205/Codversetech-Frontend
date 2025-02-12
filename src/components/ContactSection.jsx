const ContactSection = () => {
  return (
    <section className="relative w-full py-16 px-6 text-[#ccd6f6] flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Google Maps Embed */}
      <div className="flex-grow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.71672577606154!2d35.28173574346802!3d-0.3729293045647957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a578ac6a85a9b%3A0x6823e9733d53e41a!2sExtranet%20Systems!5e0!3m2!1sen!2ske!4v1739383787372!5m2!1sen!2ske"
          className="border-0 w-full h-[450px] rounded-lg shadow-md"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-1/2  p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4">Get in Touch</h3>
        <p className="text-[#8892b0] mb-6">We’d love to hear from you!</p>
        <form className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-[#ccd6f6]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-1 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#64ffda]"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-[#ccd6f6]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#64ffda]"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-[#ccd6f6]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 mt-1 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#64ffda]"
              placeholder="Type your message"
              required
            ></textarea>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-sm text-[#8892b0]">
              I accept the Terms
            </label>
          </div>
          <button
            type="submit"
            className="w-full inline-block bg-gray-700 hover:bg-[#64ffda] text-[#64ffda] hover:text-gray-700 font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
