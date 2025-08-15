import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import angularLogo from '../assets/angular.svg';
import cplusplusLogo from '../assets/cplusplus.svg';
import css3Logo from '../assets/css3.svg';
import dockerLogo from '../assets/docker.svg';
import html5Logo from '../assets/html5.svg';
import htmxLogo from '../assets/htmx.svg';
import javascriptLogo from '../assets/javascript.svg';
import kerasLogo from '../assets/keras.svg';
import kubernetesLogo from '../assets/kubernetes.svg';
import nodejsLogo from '../assets/nodedotjs.svg';
import { useNavigate } from 'react-router-dom';

const icons = [
  { src: angularLogo, alt: 'Angular', style: { top: '20%', left: '25%' } },
  { src: cplusplusLogo, alt: 'C++', style: { top: '20%', right: '15%' } },
  { src: css3Logo, alt: 'CSS3', style: { top: '30%', left: '10%' } },
  { src: dockerLogo, alt: 'Docker', style: { bottom: '20%', left: '20%' } },
  { src: html5Logo, alt: 'HTML5', style: { top: '50%', right: '10%' } },
  { src: htmxLogo, alt: 'HTMX', style: { bottom: '10%', left: '30%' } },
  { src: javascriptLogo, alt: 'JavaScript', style: { bottom: '15%', right: '25%' } },
  { src: kerasLogo, alt: 'Keras', style: { bottom: '30%', left: '30%' } },
  { src: kubernetesLogo, alt: 'Kubernetes', style: { top: '15%', right: '40%' } },
  { src: nodejsLogo, alt: 'Node.js', style: { top: '40%', left: '60%' } },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 0.3, scale: 1, transition: { duration: 0.5 } },
};

const Home = () => {
  const [cookieConsent, setCookieConsent] = useState(false);
    const navigate = useNavigate
    ();

  // Check for cookie consent in local storage on load
  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (consent === "true") {
      setCookieConsent(true);
    }
  }, []);

  // Accept cookies and set the cookie in local storage
  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 30 }); // Expires in 30 days
    setCookieConsent(true); // Hide the banner
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-animated">
      {/* Black line below navbar */}
      <div className="w-full h-[2px] bg-black absolute top-0"></div>

      <motion.h1 
        className="text-5xl font-bold leading-snug z-10 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I build <span className="text-yellow-500">Useful</span>,<br />
        <span className="text-blue-500">Creative</span> and<br />
        <span className="text-green-500">Impactful</span> apps.
      </motion.h1>

      <motion.p
        className="text-lg mt-4 text-gray-700 max-w-md z-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Tech-savvy developer crafting sleek, responsive, and solid apps. Skilled in multiple frameworks and languages,
        I aim to make things work beautifully.
      </motion.p>

      {/* Icon Container with Fixed Positioning */}
      <motion.div
        className="absolute inset-0 icon-container z-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {icons.map((icon, index) => (
          <motion.div 
            key={index} 
            variants={iconVariants} 
            className="icon absolute"
            style={icon.style}
            whileHover={{ scale: 1.1 }}
          >
            <img 
              src={icon.src} 
              alt={icon.alt} 
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 opacity-50 mix-blend-lighten"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Buttons in one row */}
      <motion.div className="flex space-x-4 mt-10 z-10 relative">
        <motion.button
          onClick={() => navigate('/projects')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-8 py-3 text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600"
        >
          View My Work
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-8 py-3 text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600"
        >
          View Github
        </motion.button>
      </motion.div>

      {/* Cookie Consent Banner */}
      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4 px-6 flex justify-between items-center z-50">
          <p>
            This website uses cookies to improve your experience. By using this site, you agree to our{" "}
            <a href="/privacy" className="underline text-blue-400">Privacy Policy</a>.
          </p>
          <button
            onClick={handleAcceptCookies}
            className="bg-green-500 px-4 py-2 rounded-lg shadow hover:bg-green-600"
          >
            Accept
          </button>
        </div>
      )}
    </section>
  );
};

export default Home;
