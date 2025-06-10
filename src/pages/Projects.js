import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { 
  ArrowTopRightOnSquareIcon, // <-- replace ExternalLinkIcon
  CodeBracketIcon,
  StarIcon,
  FunnelIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const Projects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern payment processing, real-time inventory management, and advanced analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      category: 'Full-Stack',
      status: 'Completed',
      rating: 4.9,
      timeline: '6 months',
      features: ['Payment Integration', 'Admin Dashboard', 'Real-time Analytics'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: 2,
      title: 'AI-Powered Task Manager',
      description: 'Intelligent task management with AI suggestions, natural language processing, and smart scheduling algorithms.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'TypeScript', 'Tailwind'],
      category: 'AI/ML',
      status: 'In Progress',
      rating: 4.7,
      timeline: '4 months',
      features: ['AI Suggestions', 'Voice Commands', 'Smart Scheduling'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: 3,
      title: 'Real-time Weather Dashboard',
      description: 'Interactive weather platform with detailed forecasts, climate data visualization, and location-based alerts.',
      image: 'https://images.unsplash.com/photo-1508361727343-ca787442dcd7?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB', 'Socket.io'],
      category: 'Frontend',
      status: 'Completed',
      rating: 4.8,
      timeline: '3 months',
      features: ['Real-time Updates', 'Interactive Maps', 'Weather Alerts'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: 4,
      title: 'Social Media Analytics Suite',
      description: 'Comprehensive analytics platform for social media performance with automated reporting and trend analysis.',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?w=600&h=400&fit=crop',
      technologies: ['React', 'Python', 'Django', 'Chart.js', 'PostgreSQL'],
      category: 'Full-Stack',
      status: 'Completed',
      rating: 4.9,
      timeline: '8 months',
      features: ['Multi-platform Support', 'Custom Reports', 'Trend Analysis'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: 5,
      title: 'Blockchain Voting System',
      description: 'Secure, transparent voting platform using blockchain technology with biometric verification and audit trails.',
      image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=600&h=400&fit=crop',
      technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'MetaMask'],
      category: 'Blockchain',
      status: 'Completed',
      rating: 5.0,
      timeline: '10 months',
      features: ['Smart Contracts', 'Biometric Auth', 'Audit Trail'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: 6,
      title: 'AR Learning Platform',
      description: 'Augmented reality educational platform with interactive 3D models, gamification, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?w=600&h=400&fit=crop',
      technologies: ['Unity', 'ARCore', 'Firebase', 'C#', 'Blender'],
      category: 'AR/VR',
      status: 'In Development',
      rating: 4.6,
      timeline: '12 months',
      features: ['3D Interactions', 'Gamification', 'Progress Analytics'],
      liveUrl: '#',
      codeUrl: '#',
    },
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'AI/ML', 'Blockchain', 'AR/VR'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Projects</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          A showcase of innovative solutions spanning web applications, AI integrations, and cutting-edge technologies.
          Each project represents a unique challenge and learning opportunity.
        </p>
      </motion.div>

      {/* Filters and Search */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
          />
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2">
          <FunnelIcon className="h-5 w-5 text-gray-400" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={filter + searchTerm}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 border-white text-white hover:bg-white hover:text-gray-900">
                        <CodeBracketIcon className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{project.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-gray-100 dark:border-gray-700">
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Timeline</div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{project.timeline}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Category</div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{project.category}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span 
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <MagnifyingGlassIcon className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-16"
      >
        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-primary-200 dark:border-primary-800">
          <div className="p-8">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-4"
            >
              🚀
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm passionate about taking on new challenges and creating innovative solutions. 
              Let's discuss how we can bring your vision to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => navigate('/contact')}
              >
                Start a Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                View All Work
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Projects;