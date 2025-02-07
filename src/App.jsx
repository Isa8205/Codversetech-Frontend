import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Code, Cloud, Zap, Users, Star, Linkedin, Twitter, Github, ChevronLeft, Lightbulb, FlaskConical, Paintbrush, TestTube, Rocket, RefreshCw, X, MapPin, FlaskRound, Paintbrush2, PawPrint, PaintRoller } from 'lucide-react'
import logo from "/favicon.ico"
import Footer from './components/Footer'
import DevelopmentProcess from './components/DevelopemetProcess'
import { ProjectsSection } from './components/ProjectSection'
import { ServicesSection } from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import { TechstackSection } from './components/TechstackSection'

export default function App() {
  const [projectdescription, setdescriptions] = useState([false, 0])

  const services = [
    { icon: <Code className="w-8 h-8" />, title: 'AI Development', description: 'Cutting-edge AI solutions for your business needs' },
    { icon: <Cloud className="w-8 h-8" />, title: 'Cloud Services', description: 'Scalable and secure cloud infrastructure' },
    { icon: <Zap className="w-8 h-8" />, title: 'IoT Solutions', description: 'Connecting your devices to the future' },
    { icon: <Users className="w-8 h-8" />, title: 'Consulting', description: 'Expert guidance for your digital transformation' },
  ]

  const projects = [
    { image: 'https://plus.unsplash.com/premium_photo-1675237625862-d982e7f44696?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: "Olmismis FCs", description: 'We built a system for managing the data of the society' },
    { image: 'https://images.unsplash.com/photo-1523243319451-54b60322f948?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: "Elima Chemist", description: 'A fully functional system for managing the stock as well as the sales. Implemented in react and django' },
    { image: 'https://images.unsplash.com/photo-1606235357537-84aea24d4c4f?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: "Moiben Agrovet", description: "An inventory management system for the stock as well as the sales" }
  ]

  const slides = [
    { image: "https://picsum.photos/seed/slide1/800/600", alt: "AI-powered analytics dashboard", caption: "AI-Powered Analytics" },
    { image: "https://picsum.photos/seed/slide2/800/600", alt: "Cloud infrastructure diagram", caption: "Scalable Cloud Solutions" },
    { image: "https://picsum.photos/seed/slide3/800/600", alt: "IoT devices network", caption: "IoT Ecosystem" },
  ]

  const productionSteps = [
    { icon: <Lightbulb className="w-8 h-8" />, title: "Ideation", description: "Brainstorming and conceptualizing innovative solutions" },
    { icon: <FlaskConical className="w-8 h-8" />, title: "Research & Development", description: "In-depth analysis and prototype creation" },
    { icon: <PaintRoller className="w-8 h-8" />, title: "Design & Implementation", description: "Crafting user-friendly interfaces and robust backends" },
    { icon: <TestTube className="w-8 h-8" />, title: "Testing & Quality Assurance", description: "Rigorous testing to ensure top-notch performance" },
    { icon: <Rocket className="w-8 h-8" />, title: "Deployment", description: "Seamless integration and launch of the product" },
    { icon: <RefreshCw className="w-8 h-8" />, title: "Continuous Improvement", description: "Ongoing updates and enhancements based on user feedback" },
  ]

  const HeadsUp = () => {
    const project = projects[projectdescription[1]]
    return (
      <motion.div
        className="p-4 bg-orange-200 rounded-sm fixed z-50 w-2/4"
        style={{ right: '50%', left: '50%', transform: 'translate(-50%)' }}
        initial={{ opacity: '.5', marginTop: '-80%' }}
        animate={{ opacity: '1', marginTop: '4px' }}
        transition={{ duration: .5 }}>
        <div className="flex justify-between items-center ">
          <h3>{project.title}</h3>
          <X className=' bg-red-500 text-white cursor-pointer hover:bg-red-600 rounded-sm' onClick={() => (setdescriptions(false))} />
        </div>

        <p>{project.description}</p>
      </motion.div>
    )
  }

  return (
    <div className='relative'>
      {projectdescription[0] && <HeadsUp />}
      <head>
        <title>Home | codversetech</title>
      </head>
      <div className="min-h-screen bg-orange-50 text-gray-800 overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-orange-400 to-teal-500 opacity-20"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cover Image"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="relative z-10 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl font-bold mb-4 flex align-baseline"
            >
              <img className='inline h-16' src={logo} alt="logo" />odverseTech
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl mb-8"
            >
              Innovating for a brighter tomorrow
            </motion.p>
            <a href='#services'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition duration-300"
              >
                Explore Our Services
              </motion.button>
            </a>
          </div>
        </section>

        <AboutSection/>

        {/* Services Section */}
        <ServicesSection/>

        {/* Projects section */}
        <ProjectsSection/>


        {/* Product Development Process Section */}
        <DevelopmentProcess/>

        <TechstackSection/>

        {/* Testimonial Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center relative rounded-b-md">
            <h2 className="text-4xl font-bold mb-12 text-orange-600">What Our Clients Say</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 5, 5].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-orange-100 p-6 rounded-lg max-w-md shadow-lg dark:bg-gray-700"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-100">
                    "FutureTech Solutions has revolutionized our business with their innovative AI solutions. Highly recommended!"
                  </p>
                  <p className="font-semibold text-orange-800 dark:text-orange-6  00">- John Doe, CEO of TechCorp</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-20 bg-orange-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-orange-600">Ready to Step into the Future?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-700 dark:text-gray-100">
              Let's collaborate and bring your ideas to life with our cutting-edge technology solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-teal-700 transition duration-300"
            >
              Get Started <ChevronRight className="inline-block ml-2" />
            </motion.button>
          </div>
        </section>

        {/* Footer */}
          <Footer/>
      </div>
    </div>
  )
}