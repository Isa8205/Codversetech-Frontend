import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Section */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold">Company</h5>
            <nav className="space-y-2">
              <ul>
                <li><a href="https://10web-site.ai/172/ready-ant/about-us/" className="text-gray-700 hover:text-gray-900">About Us</a></li>
                <li><a href="https://10web-site.ai/172/ready-ant/services/" className="text-gray-700 hover:text-gray-900">Services</a></li>
                <li><a href="https://10web-site.ai/172/ready-ant/portfolio/" className="text-gray-700 hover:text-gray-900">Portfolio</a></li>
              </ul>
            </nav>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold">Support</h5>
            <nav>
              <ul>
                <li><a href="https://10web-site.ai/172/ready-ant/contact-us/" className="text-gray-700 hover:text-gray-900">Contact Us</a></li>
              </ul>
            </nav>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold">Resources</h5>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h5 className="text-xl font-semibold">Stay Updated</h5>
          <p className="text-gray-600">Subscribe to our newsletter for the latest updates and insights from Codverse Tech.</p>
          <form action="#" method="post" className="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full md:w-2/3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="mt-2 md:mt-0 md:ml-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Divider */}
        <div className="my-8 border-t border-gray-300"></div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">© 2025 Codverse Tech. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
