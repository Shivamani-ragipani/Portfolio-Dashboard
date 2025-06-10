import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  const layoutVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const mainVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300"
      variants={layoutVariants}
      initial="initial"
      animate="animate"
    >
      <Navbar />
      <div className="flex">
        <Sidebar />
        <motion.main 
          className="flex-1 lg:ml-0 relative"
          variants={mainVariants}
          initial="initial"
          animate="animate"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-100/30 to-purple-100/30 dark:from-primary-900/10 dark:to-purple-900/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 45,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-indigo-100/30 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Outlet />
            </motion.div>
          </div>
        </motion.main>
      </div>
    </motion.div>
  );
};

export default Layout;