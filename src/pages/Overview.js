import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { 
  CodeBracketIcon, 
  StarIcon, 
  ChartBarIcon,
  ClockIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Overview = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Projects Completed', value: '6', icon: CodeBracketIcon, color: 'text-blue-600' },
    { label: 'Client Satisfaction', value: '98%', icon: StarIcon, color: 'text-yellow-600' },
    { label: 'Years Experience', value: '1+', icon: ChartBarIcon, color: 'text-green-600' },
    { label: 'Response Time', value: '< 2h', icon: ClockIcon, color: 'text-purple-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div 
        variants={itemVariants}
        className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?w=1200&h=600&fit=crop" 
            alt="Professional workspace"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center space-x-3 mb-6"
          >
            <SparklesIcon className="h-8 w-8 text-yellow-300" />
            <span className="text-lg font-medium text-primary-100">React.js Developer</span>
          </motion.div>
          
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Building Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              Experiences
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl text-primary-100 mb-8 max-w-2xl leading-relaxed"
          >
            Building tomorrow’s web — fast, scalable, and pixel-perfect
            
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              variant="secondary" 
              size="lg" 
              className="group"
              onClick={() => navigate('/projects')}
            >
              <RocketLaunchIcon className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary-600"
              onClick={() => navigate('/contact')}
            >
              Let's Connect
            </Button>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-12 right-24 w-12 h-12 bg-yellow-300/20 rounded-full blur-lg"
        />
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={statsVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="group"
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center space-y-4">
                <motion.div 
                  // whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 ${stat.color} group-hover:shadow-lg transition-shadow`}
                >
                  <stat.icon className="h-8 w-8" />
                </motion.div>
                <div>
                  <motion.div 
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 1, type: "spring" }}
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills & Activity Grid */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Technical Skills */}
        <Card className="overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-50" />
            <div className="relative p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <CodeBracketIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technical Expertise</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { skill: 'React', level: 95, color: 'bg-blue-500' },
                  { skill: 'Node.js & Express', level: 80, color: 'bg-green-500' },
                  { skill: 'Java', level: 85, color: 'bg-indigo-500' },
                  { skill: 'SQL', level: 70, color: 'bg-purple-500' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 1.5 }}
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item.skill}</span>
                      <span className="text-gray-500 dark:text-gray-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 + 1.8, ease: "easeOut" }}
                        className={`h-full ${item.color} rounded-full shadow-sm`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 opacity-50" />
            <div className="relative p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <ChartBarIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { action: 'Launched E-commerce Platform', time: '2 days ago', type: 'project' },
                  { action: 'Published React Performance Guide', time: '1 week ago', type: 'blog' },
                  { action: 'Updated Portfolio Design', time: '2 weeks ago', type: 'update' },
                  { action: 'Released Mobile App', time: '1 month ago', type: 'project' },
                ].map((activity, index) => (
                  <motion.div 
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 2 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className={`w-3 h-3 rounded-full ${
                        activity.type === 'project' ? 'bg-green-500' :
                        activity.type === 'blog' ? 'bg-blue-500' : 'bg-purple-500'
                      }`} 
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        className="text-center"
      >
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-dashed border-gray-300 dark:border-gray-600">
          <div className="p-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-4"
            >
              <RocketLaunchIcon className="h-12 w-12 text-primary-600 mx-auto" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's collaborate and bring your vision to life with modern technology and creative solutions.
            </p>
            <Button 
              size="lg" 
              className="shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => navigate('/contact')}
            >
              Let's Work Together
            </Button>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Overview;