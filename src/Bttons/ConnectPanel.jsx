import React from 'react';
import { motion } from 'framer-motion';

const ConnectPanel = ({ isOpen, onClose }) => {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0-3.839l.707-.707a4 4 0 105.656-5.656l-4 4z" />
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-900">Connect</h2>
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

      {/* Panel Content */}
      <div className="p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Enter your phone number
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            We'll send you a verification code to get started.
          </p>

          <div className="space-y-4">
            <div>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a92b4e] focus:border-[#a92b4e] transition-all duration-200"
              />
            </div>

            <motion.button
              className="w-full bg-gradient-to-r from-[#a92b4e] to-[#891737] text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Request</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Terms */}
        <motion.div
          className="pt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <p className="text-xs text-gray-500">
            By continuing, you accept the{' '}
            <a href="#" className="text-[#a92b4e] hover:text-[#891737] hover:underline transition-colors duration-200">Regulations</a>
            {' '}and the{' '}
            <a href="#" className="text-[#a92b4e] hover:text-[#891737] hover:underline transition-colors duration-200">Privacy Policy</a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ConnectPanel;
