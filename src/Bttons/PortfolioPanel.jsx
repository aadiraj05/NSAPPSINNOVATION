import React from 'react';
import { motion } from 'framer-motion';

const PortfolioPanel = ({ isOpen, onClose }) => {
  const panelVariants = {
    hidden: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const projects = [
    { title: "E-Commerce Platform", category: "Web Development", color: "bg-[#a92b4e]/10 text-[#a92b4e]" },
    { title: "Mobile Banking App", category: "Mobile Development", color: "bg-[#891737]/10 text-[#891737]" },
    { title: "Healthcare Dashboard", category: "UI/UX Design", color: "bg-[#c44569]/10 text-[#c44569]" },
    { title: "AI Chatbot Integration", category: "Innovation", color: "bg-[#6c1e2b]/10 text-[#6c1e2b]" }
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed left-0 top-0 w-full max-w-md h-full bg-white z-50 shadow-2xl"
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Panel Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#a92b4e]/10 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-[#a92b4e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-900">Portfolio</h2>
        </div>
        
        <motion.button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#a92b4e]/10 hover:text-[#a92b4e] flex items-center justify-center transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </div>

      {/* Portfolio Content */}
      <div className="p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Our Latest Projects
          </h3>
          
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:border-[#a92b4e] hover:shadow-md transition-all duration-200 cursor-pointer group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-medium text-gray-900 mb-2 group-hover:text-[#a92b4e] transition-colors duration-200">
                  {project.title}
                </h4>
                <span className={`text-xs px-2 py-1 rounded-full ${project.color} font-medium`}>
                  {project.category}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="w-full mt-6 bg-gradient-to-r from-[#a92b4e] to-[#891737] hover:from-[#891737] hover:to-[#6c1e2b] text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioPanel;
