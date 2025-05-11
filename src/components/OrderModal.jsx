/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOrderParticipant } from "../services/Hooks/useOrderPartipant";
import toast from "react-hot-toast";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 20 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    y: 20,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const OrderModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { mutate: addParticipant } = useOrderParticipant();

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    addParticipant(
      { name: formData.name, email: formData.email, vendor: "fieryGrills" },
      {
        onSuccess: (data) => {
          toast.success("You have sent an email");
        },
        onError: (error) => {
          console.error(error);
          toast.error(error?.response?.data?.message || "Something went wrong");
        }
      }
    );

    console.log("Order interest submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      onClose();
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "" });
      }, 300);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center p-4 z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div 
            className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-start gap-4 items-center mb-4">
                <h2 className="text-2xl font-bold text-red-800">Join Punjabi Fiery Grill</h2>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="mb-6 text-gray-600 text-sm">
                      Enter your name and email to access our order section
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div className="flex justify-end">
                        <motion.button
                          type="button"
                          onClick={onClose}
                          className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                          whileTap={{ scale: 0.95 }}
                        >
                          Cancel
                        </motion.button>
                        <motion.button
                          type="button"
                          onClick={handleSubmit}
                          className="px-4 py-2 bg-red-800 text-white font-medium rounded hover:bg-red-900"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={!formData.name || !formData.email}
                        >
                          Submit
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success"
                    className="text-center py-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  >
                    <motion.div 
                      className="mb-4 text-green-500"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      We've received your information and will contact you soon about our tiffin service.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
