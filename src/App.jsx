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
import Navbar from './components/Navbar'
import heroImage from "./assets/images/hero.jpg"
import HeroSection from './components/HeroSection'

const testimonials = [
    {
      text: "The team at Developins transformed our outdated system into a cutting-edge platform. Their expertise and attention to detail are unmatched!",
      name: "Wesley Too",
      title: "Chairman of Olmismis FCS"
    },
    {
      text: "Working with Developins was a game-changer for our business. They delivered a scalable solution that exceeded our expectations.",
      name: "Elijah Langat",
      title: "Projects lead at Izrah"
    },
    {
      text: "Developins not only built our software but also provided ongoing support and guidance. Their professionalism and technical skills are top-notch.",
      name: "Michael Brown",
      title: "Founder & CEO at TechNova"
    },
    {
      text: "The level of customization and care that Developins put into our project was outstanding. They truly go above and beyond for their clients.",
      name: "Laura Thompson",
      title: "VP of Product at BrightMind"
    },
    {
      text: "Developins delivered a robust and user-friendly application that has received rave reviews from our customers. We couldn’t be happier!",
      name: "Daniel Harris",
      title: "CEO at Appify"
    },
    {
      text: "Their ability to solve complex problems with elegant solutions is remarkable. Developins is our go-to partner for all things software.",
      name: "Olivia Clark",
      title: "Director of Technology at SmartPath"
    }
  ];

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar/>
      {/*
        ===============================
        Hero Section
        - Fullscreen section with a background image overlaid by a dark tint.
        - Headline, subheadline, and call-to-action button use uniform dark-theme colors.
        ===============================
      */}
      <HeroSection/>

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
            {testimonials.map((testimonial, index) => (
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
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-200">- {testimonial.name}, {testimonial.title}</p>
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
