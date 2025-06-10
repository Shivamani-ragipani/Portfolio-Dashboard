import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { closeSidebar } from '../store/slices/sidebarSlice';
import { 
  HomeIcon, 
  FolderIcon, 
  EnvelopeIcon,
  XMarkIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import Button from './Button';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.sidebar);
  
  const menuItems = [
    { path: '/', icon: HomeIcon, label: 'Overview', description: 'Dashboard & Stats' },
    { path: '/projects', icon: FolderIcon, label: 'Projects', description: 'Featured Work' },
    { path: '/contact', icon: EnvelopeIcon, label: 'Contact', description: 'Get In Touch' },
  ];
  
  const sidebarVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <>
      {/* Overlay for all screen sizes */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity z-40"
            onClick={() => dispatch(closeSidebar())}
          />
        )}
      </AnimatePresence>
      
      {/* Sidebar for all screen sizes */}
      <motion.div 
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-lg shadow-lg" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1"
                >
                  <SparklesIcon className="h-4 w-4 text-yellow-400" />
                </motion.div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Developer Dashboard</p>
              </div>
            </motion.div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dispatch(closeSidebar())}
              className="p-2 lg:hidden"
            >
              <XMarkIcon className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  custom={index}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                >
                  <NavLink
                    to={item.path}
                    onClick={() => window.innerWidth < 1024 && dispatch(closeSidebar())}
                    className={({ isActive }) =>
                      `group flex items-center space-x-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/50 dark:to-purple-900/50 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800 shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-2 rounded-lg transition-colors ${
                            isActive 
                              ? 'bg-primary-100 dark:bg-primary-800/50' 
                              : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'
                          }`}
                        >
                          <item.icon className="h-5 w-5 flex-shrink-0" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
                        </div>
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="w-2 h-2 bg-primary-600 rounded-full"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </nav>
          
          {/* Footer */}
          <motion.div 
            className="p-6 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 rounded-xl p-4 border border-primary-200 dark:border-primary-800">
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Available for hire</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Ready for new projects</div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="text-xs text-gray-400 dark:text-gray-500">
                Portfolio Dashboard v2.0
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                Built with React
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;