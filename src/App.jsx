import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Set up axios defaults
axios.defaults.baseURL = 'http://localhost:8080';

function Clover({ style }) {
  return (
    <div 
      className="fixed text-4x1 animate-fall"
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
          <li><a href="#rates" className="hover:text-yellow-300 transition duration-300">Rates & Availability</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Home() {
  const [services, setServices] = useState([
    {
      name: 'Handyman 🪛🔨💪',
      emoji: '🏠',
      services: [
        'Basic home repairs',
        'Painting & carpentry',
        'Plumbing & electrical',
        'Flooring installation',
        'Furniture assembly',
        'Drywall repair',
        'Windows & doors',
        'General maintenance',
        'Solar Installation',
        'On-Site Welding'
      ]
    },
    {
      name: 'Caregiving ⚕️👨‍🦽🛁',
      emoji: '👵👴',
      services: [
        'Personal assistance',
        'Companionship',
        'Meal preparation',
        'Medication reminders',
        'Light housekeeping',
        'Transportation assistance',
        'Grooming & hygiene assistance',
        'Mobility assistance',
        'Errands & shopping',
        'Cognitive stimulation activities'
      ]
    },
    {
      name: 'Automotive 🔧🚗🔩',
      emoji: '🚗',
      services: [
        'Oil changes',
        'Brake services',
        'Tire rotations',
        'Battery replacement',
        'Fluid checks & top-ups',
        'Air filter replacement',
        'Spark plug replacement',
        'Belt & hose inspection',
        'Headlight & taillight replacement',
        'Windshield wiper replacement'
      ]
    }
  ]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        if (response.data.services && response.data.services.length > 0) {
          setServices(response.data.services);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div id="home" className="container mx-auto px-4 py-4 relative z-10">
      <div className="text-center mb-8 relative">
        <div className="relative inline-block p-2">
          <p className="text-2xl text-white mb-4 px-6 py-2">
            Services start at $30!
          </p>
          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%]" viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="135" cy="45" rx="130" ry="40" fill="none" stroke="gold" strokeWidth="2" strokeDasharray="540" strokeDashoffset="540">
              <animate attributeName="stroke-dashoffset" from="540" to="0" dur="4s" fill="freeze" />
            </ellipse>
          </svg>
        </div>
        <div className="flex items-center justify-center mt-8">
          <a 
            href="#rates" 
            className="inline-block bg-yellow-500 text-green-900 font-bold py-3 px-6 rounded-lg text-xl hover:bg-yellow-400 transition duration-300 glow-button"
          >
            View Rates & Availability
          </a>
          <span className="mx-4 text-white text-xl">or</span>
          <a 
            href="tel:7602381428" 
            className="inline-block bg-yellow-500 text-green-900 font-bold py-3 px-6 rounded-lg text-xl hover:bg-yellow-400 transition duration-300 glow-button ml-2.5"
          >
            Call (760) 238-1428
          </a>
        </div>
      </div>
      
      <section className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((category) => (
            <div key={category.name} className="bg-green-900 bg-opacity-70 p-6 rounded-lg shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10 transition-all duration-300 ease-in-out group-hover:opacity-20 group-hover:scale-150">
                {category.emoji}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 text-yellow-300">{category.name}</h3>
                <ul className="list-disc list-inside">
                  {category.services.map((service, index) => (
                    <li key={index} className="text-white">{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function AboutUs() {
  return (
    <div id="about" className="container mx-auto px-4 py-16">
      <div className="bg-green-900 bg-opacity-70 p-8 rounded-lg shadow-lg text-white">
      <h1 className="text-5xl font-bold mb-8 text-center text-yellow-300 animate-pulse flashing-gold">FAMILY VALUES</h1>
        <p className="text-xl mb-4">
          At O'Neil's at Your Service, we take pride in our strong family values and commitment to our community. With over 25 years of experience, we've established a reputation for delivering reliable, high-quality service you can trust.
        </p>
        <h1 className="text-5xl font-bold mb-8 text-center text-yellow-300 animate-pulse flashing-gold">GENERATIONAL EXPERIENCE</h1>
        <p className="text-xl mb-4">
          As local service providers in the Coachella Valley and High Desert areas, we have a deep understanding of our community's unique needs. Our strong local roots enable us to offer personalized care and attention that larger companies simply can't match.
        </p>
        <h1 className="text-5xl font-bold mb-8 text-center text-yellow-300 animate-pulse flashing-gold">QUALITY SERVICE</h1>
        <p className="text-xl mb-4">
          Whether you require home repairs, personal assistance, or automotive maintenance, you can count on O'Neil's at Your Service to treat you like family and consistently deliver exceptional results.
        </p>
      </div>
    </div>
  );
}

function RatesAvailability() {
  return (
    <div id="rates" className="container mx-auto px-4 py-16">
      <div className="bg-green-900 bg-opacity-70 p-8 rounded-lg shadow-lg mb-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-yellow-300">Rates</h2>
            <div className="space-y-4 text-xl mb-8">
              <p>
                <span className="font-semibold">Caregiving:</span><br />
                Private care starting from $30/hour
              </p>
              <p>
                <span className="font-semibold">Handyman:</span><br />
                Home repairs starting from $60/hour
              </p>
              <p>
                <span className="font-semibold">Automotive:</span><br />
                Mobile mechanic starting from $90/hour
              </p>
            </div>
            <p className="text-sm italic">Rates may vary based on service complexity and duration.</p>
            <p className="mt-4">Please contact us for a personalized quote.</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-yellow-300">Availability</h2>
            <p className="text-xl mb-4">Our services are available:</p>
            <div className="text-xl mb-8 space-y-2">
              <p>Weekdays: 8:00 AM - 6:00 PM</p>
              <p>Weekends: 10:00 AM - 4:00 PM</p>
              <p>(Emergency services available)</p>
            </div>
            <p className="text-xl mb-4">For emergency services outside of regular hours, please call us.</p>
            <a 
              href="tel:7602381428" 
              className="inline-block bg-yellow-500 text-green-900 font-bold py-3 px-6 rounded-lg text-xl hover:bg-yellow-400 transition duration-300 glow-button"
            >
              (760) 238-1428
            </a>
          </div>
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
            &copy; O'Neil's at Your Service | Serving the Coachella Valley and High Desert for over 25 years.
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [clovers, setClovers] = useState([]);

  useEffect(() => {
    const newClovers = Array(100).fill(null).map(() => ({
      style: {
        top: `-${Math.random() * 20}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`,
      }
    }));
    setClovers(newClovers);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative bg-green-800 text-white overflow-hidden">
      {clovers.map((clover, index) => (
        <Clover key={index} style={clover.style} />
      ))}
      <div className="flex-grow relative z-10">
        <Logo />
        <Navbar />
        <Home />
        <AboutUs />
        <RatesAvailability />
      </div>
      <Footer />
    </div>
  );
}

export default App;