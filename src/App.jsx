import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import './App.css';

function Clover({ style }) {
  return (
    <div
      className="fixed text-4xl animate-fall"
      style={style}
    >
      ☘️
    </div>
  );
}

function Logo() {
  return (
    <div className="p-2 pb-0 text-center">
      <a href="#home" className="inline-block">
        <img
          src="/oneils-logo.png"
          alt="O'Neil's at Your Service"
          className="max-h-50 w-auto mx-auto"
        />
      </a>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="py-2 px-4 text-white sticky top-0 bg-green-900 z-50">
      <div className="container mx-auto">
        <ul className="flex justify-center items-center space-x-4">
          <li><a href="#home" className="hover:text-yellow-300 transition duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300 transition duration-300">About Us</a></li>
          <li><a href="#services" className="hover:text-yellow-300 transition duration-300">Services</a></li>
          <li><a href="#rates" className="hover:text-yellow-300 transition duration-300">Rates & Availability</a></li>
          <li><a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Home() {
  const { scrollYProgress } = useViewportScroll();

  // Parallax Effect for Heading and Subheading
  const yHeading = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const ySubheading = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div id="home" className="relative">
      <div
        className="hero min-h-screen flex items-center justify-center text-center bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8 rounded-lg max-w-3xl mx-auto">
         
          <motion.p
            className="text-lg md:text-2xl text-white mb-8 px-2"
            style={{ y: ySubheading }}
          >
            Your one-stop solution for all your service needs.
          </motion.p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#services"
              className="inline-block bg-yellow-500 text-green-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition duration-300"
            >
              Our Services
            </a>
            <a
              href="tel:7602381428"
              className="inline-block bg-yellow-500 text-green-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      name: 'Handyman & Automotive Services 🛠️🚗',
      emoji: '🛠️',
      categories: [
        {
          title: 'Handyman Services',
          items: [
            'Basic home repairs',
            'Painting & carpentry',
            'Plumbing & electrical',
            'Flooring installation',
            'Furniture assembly',
            'Drywall repair',
          ],
        },
        {
          title: 'Automotive Services',
          items: [
            'Oil changes',
            'Brake services',
            'Tire rotations',
            'Battery replacement',
            'Fluid checks & top-ups',
            'Air filter replacement',
          ],
        },
      ],
    },
    {
      name: 'Caregiving & Personal Assistance 👵👴⚕️👨‍🦽🛁',
      emoji: '👵',
      categories: [
        {
          title: 'Caregiving Services',
          items: [
            'Companionship',
            'Meal preparation',
            'Medication reminders',
            'Light housekeeping',
            'Mobility assistance',
            'Cognitive stimulation activities',
          ],
        },
        {
          title: 'Personal Assistance',
          items: [
            'Personal errands',
            'Transportation assistance',
            'Grooming & hygiene assistance',
            'Appointment scheduling',
            'Organizing & decluttering',
            'Technology assistance',
          ],
        },
      ],
    },
    {
      name: 'Private Security & Tech Support 💻🔒🛡️🚨',
      emoji: '🔒',
      categories: [
        {
          title: 'Private Security Services',
          items: [
            'Lawfully armed guard for private property',
            'Discreet armed escorts',
            'Personal protection during daily activities',
            'Residential security patrols',
            'Event security',
            'Risk assessment and security planning',
          ],
        },
        {
          title: 'Technological Assistance',
          items: [
            'Home Wi-Fi setup and troubleshooting',
            'Smart home device installation (e.g., Ring, Nest)',
            'Computer setup and software installation',
            'Smartphone and tablet assistance',
            'Home entertainment system setup',
            'Data backup and recovery',
          ],
        },
      ],
    },
  ];

  return (
    <div id="services" className="container mx-auto px-4 py-16 relative z-10">
      <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12 scroll-animation">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-green-900 bg-opacity-80 p-6 rounded-lg shadow-lg relative overflow-hidden scroll-animation"
          >
            <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">
              {service.emoji}
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">{service.name}</h3>
              {service.categories.map((category, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="text-xl font-semibold mb-2 text-white">{category.title}</h4>
                  <ul className="list-disc list-inside">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-white">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div id="about" className="container mx-auto px-4 py-16">
      <div
        className="bg-green-900 bg-opacity-70 p-8 rounded-lg shadow-lg text-white scroll-animation"
      >
        <h1 className="text-5xl font-bold mb-8 text-center text-yellow-300 flashing-gold">
          FAMILY VALUES
        </h1>
        <p className="text-xl mb-8">
          At O'Neil's at Your Service, we take pride in our strong family values and commitment to
          our community. With over 25 years of experience, we've established a reputation for
          delivering reliable, high-quality service you can trust.
        </p>
        <h1 className="text-5xl font-bold mb-8 text-center text-yellow-300 flashing-gold">
          GENERATIONAL EXPERIENCE
        </h1>
        <p className="text-xl mb-8">
          As local service providers in the Coachella Valley and High Desert areas, we have a deep
          understanding of our community's unique needs. Our strong local roots enable us to offer
          personalized care and attention that larger companies simply can't match.
        </p>
        <h1 className="text-5xl font-bold mb-8 text-center text-yellow-300 flashing-gold">
          QUALITY SERVICE
        </h1>
        <p className="text-xl mb-4">
          Whether you require home repairs, personal assistance, or security services, you can count
          on O'Neil's at Your Service to treat you like family and consistently deliver exceptional
          results.
        </p>
      </div>
    </div>
  );
}

function RatesAvailability() {
  return (
    <div id="rates" className="container mx-auto px-4 py-16">
      <div
        className="bg-green-900 bg-opacity-70 p-8 rounded-lg shadow-lg mb-8 text-white scroll-animation"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-yellow-300">Rates</h2>
            <div className="space-y-4 text-xl mb-8">
              <p>
                <span className="font-semibold">Caregiving & Personal Assistance:</span><br />
                Services starting from $25/hour
              </p>
              <p>
                <span className="font-semibold">Private Security & Tech Support:</span><br />
                Services starting from $45/hour
              </p>
              <p>
                <span className="font-semibold">Handyman & Automotive Services:</span><br />
                Services starting from $65/hour
              </p>
            </div>
            <p className="text-sm italic">
              Rates may vary based on service complexity and duration.
            </p>
            <p className="mt-4">Please contact us for a personalized quote.</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-yellow-300">Availability</h2>
            <div className="text-xl mb-8 space-y-2">
              <p>Weekdays: 8:00 AM - 6:00 PM</p>
              <p>Weekends: 10:00 AM - 4:00 PM</p>
            </div>
            <p className="text-xl mb-4">
              For services outside of regular hours, please call us.
            </p>
            <a
              href="tel:7602381428"
              className="inline-block bg-yellow-500 text-green-900 font-bold py-3 px-6 rounded-lg text-xl hover:bg-yellow-400 transition duration-300"
            >
              (760) 238-1428
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="container mx-auto px-4 py-16">
      <div
        className="bg-green-900 bg-opacity-70 p-8 rounded-lg shadow-lg text-white text-center scroll-animation"
      >
        <h2 className="text-3xl font-semibold mb-4 text-yellow-300">Get in Touch</h2>
        <p className="text-xl mb-8">
          We'd love to hear from you! Whether you have a question about our services, pricing, or
          anything else, our team is ready to answer all your questions.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="tel:7602381428"
            className="inline-block bg-yellow-500 text-green-900 font-bold py-3 px-8 rounded-lg text-xl hover:bg-yellow-400 transition duration-300"
          >
            Call: (760) 238-1428
          </a>
          <a
            href="mailto:oneilsservice@example.com"
            className="inline-block bg-yellow-500 text-green-900 font-bold py-3 px-8 rounded-lg text-xl hover:bg-yellow-400 transition duration-300"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} O'Neil's at Your Service | Serving the Coachella Valley and High Desert for over 25 years.
          </p>
        </div>
      </div>
    </footer>
  );
}

function useScrollAnimation() {
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-animation');

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('show');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
}

function App() {
  const [clovers, setClovers] = useState([]);

  useEffect(() => {
    const newClovers = Array(50).fill(null).map(() => ({
      style: {
        top: `-${Math.random() * 20}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`,
        animationDelay: `${Math.random() * 5}s`,
      },
    }));
    setClovers(newClovers);
  }, []);

  useScrollAnimation();

  return (
    <div className="flex flex-col min-h-screen relative bg-green-800 text-white overflow-hidden">
      {clovers.map((clover, index) => (
        <Clover key={index} style={clover.style} />
      ))}
      <div className="flex-grow relative z-10">
        <Logo />
        <Navbar />
        <Home />
        <Services />
        <AboutUs />
        <RatesAvailability />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
