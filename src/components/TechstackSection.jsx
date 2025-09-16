import { FaJs, FaPython, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiKotlin, SiTypescript } from 'react-icons/si'; // Assuming you're using react-icons

const techStack = [
  { icon: <FaJs className="text-yellow-500 text-4xl" />, name: "JavaScript", description: "Versatile language for both front-end and back-end development." },
  { icon: <FaPython className="text-blue-500 text-4xl" />, name: "Python", description: "Ideal for data analysis and machine learning projects." },
  { icon: <FaReact className="text-cyan-500 text-4xl" />, name: "React", description: "A powerful library for building user interfaces." },
  { icon: <FaNodeJs className="text-green-500 text-4xl" />, name: "Node.js", description: "Enables efficient server-side scripting." },
  // { icon: <FaDocker className="text-blue-600 text-4xl" />, name: "Docker", description: "Facilitates containerization for seamless deployment." },
  { icon: <FaGitAlt className="text-red-500 text-4xl" />, name: "Git", description: "Essential for version control and collaboration." },
  { icon: <SiKotlin className="text-purple-500 text-4xl" />, name: "Kotlin", description: "Modern, concise language for Android and server-side development." },
  { icon: <SiTypescript className="text-blue-700 text-4xl" />, name: "TypeScript", description: "Adds static typing to JavaScript for scalable applications." },
];
export function TechstackSection() {
  return (
    <section className="py-12 bg-gray-900 text-[#8892b0]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#ccd6f6]">Our Technology Stack</h2>
        <p className="text-lg mb-12">We leverage cutting-edge technologies to build robust and scalable solutions.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
              {tech.icon}
              <h3 className="mt-4 text-xl font-semibold">{tech.name}</h3>
              <p className="text-gray-400 mt-2 text-center">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
