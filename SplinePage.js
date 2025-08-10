import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import './SplinePage.css';

function SplinePage() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/app');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const overlayVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 30px rgba(255, 127, 80, 0.5)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <>
      <Navigation />
      <motion.div 
        className="spline-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.iframe
          src="https://my.spline.design/restaurantintro-38d564d0f0d3b0a46c86e5b20bfc69fe/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="3D Restaurant Scene"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

      <motion.div 
        className="overlay"
        variants={overlayVariants}
      >
        <motion.div className="welcome-text">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Welcome to Our Restaurant
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Experience culinary excellence like never before
          </motion.p>
        </motion.div>
        
        <motion.button 
          className="enter-btn"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleEnter}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            Enter Restaurant 🍽️
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
    </>
  );
}

export default SplinePage;
