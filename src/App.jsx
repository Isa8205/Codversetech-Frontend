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
import heroImage from "./assets/images/hero.jpg"

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      {/*
        ===============================
        Hero Section
        - Fullscreen section with a background image overlaid by a dark tint.
        - Headline, subheadline, and call-to-action button use uniform dark-theme colors.
        ===============================
      */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with a dark overlay */}
        <img
          src={heroImage}
          alt="Cover Image"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold mb-4 flex items-center justify-center"
          >
            <img className="inline h-16 mr-2" src={logo} alt="logo" />
            odverseTech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl mb-8 text-gray-300"
          >
            Innovating for a brighter tomorrow
          </motion.p>
          <a href="#services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300"
            >
              Explore Our Services
            </motion.button>
          </a>
        </div>
      </section>

      {/*
        ===============================
        About Section
        - Introduces Codverse Tech with descriptive text and an accompanying image.
        ===============================
      */}
      <AboutSection />

      {/*
        ===============================
        Services Section
        - Displays cards for each software development service.
        - Card backgrounds are set to a darker shade with light-gray text for descriptions.
        ===============================
      */}
      <ServicesSection />

      {/*
        ===============================
        Projects Section
        - Showcases a grid of project cards.
        - Each card follows the dark theme with a gray background and light-gray description text.
        ===============================
      */}
      <ProjectsSection />

      {/*
        ===============================
        Development Process Section
        - Details each step of your development process in a series of cards.
        - Uses a slightly lighter dark background for contrast.
        ===============================
      */}
      <DevelopmentProcess/>

      {/*
        ===============================
        Technology Stack Section
        - Recreates the look from your reference with tech cards.
        - Cards have a dark background, and description text is a lighter gray.
        ===============================
      */}
      <TechstackSection/>

      {/*
        ===============================
        Testimonial Section
        - Client testimonials are shown in cards with consistent dark styling.
        ===============================
      */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-300">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 5, 5].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-700 p-6 rounded-lg max-w-md shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500" />
                  ))}
                </div>
                <p className="text-lg mb-4 text-gray-300">
                  "FutureTech Solutions has revolutionized our business with their innovative AI solutions. Highly recommended!"
                </p>
                <p className="font-semibold text-gray-200">- John Doe, CEO of TechCorp</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*
        ===============================
        Call-to-Action Section
        - Encourages users to take action with a prominent button.
        ===============================
      */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-300">Ready to Step into the Future?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-400">
            Let's collaborate and bring your ideas to life with our cutting-edge technology solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300"
          >
            Get Started <ChevronRight className="inline-block ml-2" />
          </motion.button>
        </div>
      </section>

      {/*
        ===============================
        Footer Section
        - Contains company info, navigation links, a newsletter form, and social media icons.
        - Uses a consistent dark background with muted link colors.
        ===============================
      */}
      <Footer/>

    </div>
  );
}
