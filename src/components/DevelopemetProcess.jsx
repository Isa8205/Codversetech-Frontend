import { FaLightbulb, FaPencilAlt, FaCode, FaVial, FaRocket, FaSyncAlt } from "react-icons/fa";

const DevelopmentProcess = () => {
  const steps = [
    {
      icon: <FaLightbulb className="text-yellow-500 text-4xl" />, 
      title: "1. Ideation",
      description: "We begin by understanding your vision and brainstorming ideas to create a solution that aligns with your business goals."
    },
    {
      icon: <FaPencilAlt className="text-blue-500 text-4xl" />, 
      title: "2. Planning",
      description: "Our team crafts a detailed project plan, outlining the scope, timeline, and resources required to bring your idea to life."
    },
    {
      icon: <FaCode className="text-green-500 text-4xl" />, 
      title: "3. Development",
      description: "Our skilled developers and engineers work diligently to build a robust and scalable software solution tailored to your needs."
    },
    {
      icon: <FaVial className="text-purple-500 text-4xl" />, 
      title: "4. Testing",
      description: "We conduct thorough testing to ensure the software is bug-free and performs optimally across all platforms."
    },
    {
      icon: <FaRocket className="text-red-500 text-4xl" />, 
      title: "5. Deployment",
      description: "Once approved, we deploy the software, ensuring a smooth transition and minimal disruption to your operations."
    },
    {
      icon: <FaSyncAlt className="text-gray-500 text-4xl" />, 
      title: "6. Maintenance",
      description: "We provide ongoing support and maintenance to keep your software up-to-date and functioning at its best."
    }
  ];

  return (
    <section className="py-16 bg-gray-100" id="process">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
        <p className="text-gray-600 mb-12">
          At Codverse Tech, we follow a structured and efficient software development lifecycle to ensure the delivery of high-quality solutions. Our process is designed to be transparent and collaborative, involving our clients at every step.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
