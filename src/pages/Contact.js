import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ClockIcon,
  GlobeAltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'Web Development'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '', projectType: 'Web Development' });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'shivamani@gmail.com',
      href: 'mailto:shivamaniragipani60@gmail.com',
      description: 'Drop me a line anytime'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+19 XXXXXXXXX',
      href: 'tel:+919XXXXXXXXX',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#',
      description: 'Available for remote work'
    }
  ];

  const stats = [
    { label: 'Response Time', value: '< 24h', icon: ClockIcon },
    { label: 'Time Zone', value: 'UST', icon: GlobeAltIcon },
    { label: 'Happy Clients', value: '50+', icon: UserGroupIcon },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#', color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700' },
    { name: 'GitHub', url: '#', color: 'bg-gray-800', hoverColor: 'hover:bg-gray-900' },
    { name: 'Twitter', url: '#', color: 'bg-blue-400', hoverColor: 'hover:bg-blue-500' },
    { name: 'Dribbble', url: '#', color: 'bg-pink-500', hoverColor: 'hover:bg-pink-600' },
  ];

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'E-commerce',
    'SaaS Platform',
    'API Development',
    'Consulting',
    'Other'
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

  const updatedStats = [
    { label: 'Response Time', value: '< 24h', icon: ClockIcon },
    { label: 'Time Zone', value: 'IST', icon: GlobeAltIcon },
    { label: 'Happy Clients', value: '50+', icon: UserGroupIcon },
  ];

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
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Connect</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          Ready to turn your vision into reality? I'd love to hear about your project and discuss how we can work together to create something amazing.
        </p>
      </motion.div>

      {/* Stats Bar */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-primary-200 dark:border-primary-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {updatedStats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  <stat.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
              <p className="text-primary-100">Fill out the form below and I'll get back to you within 24 hours.</p>
            </div>
            
            <div className="p-6">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block mb-4"
                    >
                      <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Message Sent Successfully! 🎉
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                      Thank you for reaching out! I've received your message and will get back to you within 24 hours.
                    </p>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mt-6"
                    >
                      <div className="inline-flex items-center space-x-2 text-sm text-primary-600 dark:text-primary-400">
                        <ClockIcon className="h-4 w-4" />
                        <span>Expect a response soon!</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                          placeholder="Your full name"
                        />
                      </motion.div>
                      
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                          placeholder="your.email@example.com"
                        />
                      </motion.div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                        >
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all resize-none"
                        placeholder="Tell me about your project, timeline, budget, or just say hello! The more details you provide, the better I can help you."
                      />
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full relative overflow-hidden"
                        disabled={isSubmitting}
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center"
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                              />
                              Sending...
                            </motion.div>
                          ) : (
                            <motion.div
                              key="send"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center"
                            >
                              <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                              Send Message
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>

        {/* Contact Info Sidebar */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Contact Details */}
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors"
                  >
                    <contact.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">{contact.label}</div>
                    <div className="text-primary-600 dark:text-primary-400 font-medium">{contact.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{contact.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </Card>

          {/* Social Links */}
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Follow Me</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${social.color} ${social.hoverColor} text-white p-4 rounded-xl text-center font-medium transition-all duration-200 shadow-lg hover:shadow-xl`}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </Card>

          {/* Availability */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-4 h-4 bg-green-500 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Currently Available</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                <span className="font-medium text-green-600 dark:text-green-400">Accepting New Projects</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Response time:</span>
                <span className="font-medium text-gray-900 dark:text-white">Within 24 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Timezone:</span>
                <span className="font-medium text-gray-900 dark:text-white">IST (UTC+5:30)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Next availability:</span>
                <span className="font-medium text-gray-900 dark:text-white">Immediate</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;