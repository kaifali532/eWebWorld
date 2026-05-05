import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = "This field is required";
    } else {
      delete newErrors[name];
    }

    if (name === 'email' && value.trim() && !validateEmail(value)) {
      newErrors[name] = "Please enter a valid e-mail address";
    }

    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation on submit
    let currentErrors: Record<string, string> = {};
    if (!formData.name.trim()) currentErrors.name = "This field is required";
    if (!formData.email.trim()) currentErrors.email = "This field is required";
    else if (!validateEmail(formData.email)) currentErrors.email = "Please enter a valid e-mail address";
    if (!formData.message.trim()) currentErrors.message = "This field is required";

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const inputClasses = (hasError: boolean) => `
    bg-gray-50 dark:bg-slate-900 border rounded px-4 py-3 text-sm outline-none transition-colors w-full text-gray-900 dark:text-slate-300
    ${hasError 
      ? 'border-red-500 dark:border-red-500 focus:border-red-600 focus:ring-0' 
      : 'border-gray-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-0'
    }
  `;

  return (
    <div className="bg-white dark:bg-[#0A0C10] min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-[1024px] px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[10px] font-bold text-gray-500 dark:text-slate-500 uppercase tracking-[0.25em] mb-4">Contact</h3>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's talk about your project.
            </h1>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-12 leading-relaxed">
              Have a question or want to work together? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 dark:bg-slate-900/50 rounded flex items-center justify-center text-blue-600 dark:text-blue-500 border border-transparent dark:border-slate-800/50">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">Email us</h3>
                  <p className="text-xs text-gray-600 dark:text-slate-400 mt-1">hello@ewebworld.com</p>
                  <p className="text-xs text-gray-600 dark:text-slate-400">careers@ewebworld.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 dark:bg-slate-900/50 rounded flex items-center justify-center text-blue-600 dark:text-blue-500 border border-transparent dark:border-slate-800/50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">Call us</h3>
                  <p className="text-xs text-gray-600 dark:text-slate-400 mt-1">+1 (555) 123-4567</p>
                  <p className="text-[10px] text-gray-500 dark:text-slate-500 mt-1 uppercase tracking-widest">Mon-Fri 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 dark:bg-slate-900/50 rounded flex items-center justify-center text-blue-600 dark:text-blue-500 border border-transparent dark:border-slate-800/50">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">Visit us</h3>
                  <p className="text-xs text-gray-600 dark:text-slate-400 mt-1">100 Tech Square, Suite 400<br/>New York, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="neon-card-wrapper"
          >
            <div className="neon-card-inner p-8 bg-gray-50 dark:bg-[#0B0F1A]">
            <h3 className="text-[10px] font-bold text-gray-500 dark:text-slate-500 uppercase tracking-[0.25em] mb-6">Send an Inquiry</h3>
            
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-600 dark:text-slate-400">Thanks for reaching out. We'll be in touch shortly.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name field */}
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClasses(!!errors.name)}
                        placeholder="Name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-[10px] text-red-500 uppercase tracking-wider font-bold">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email field */}
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClasses(!!errors.email)}
                        placeholder="Email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-[10px] text-red-500 uppercase tracking-wider font-bold">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputClasses(!!errors.message)} resize-none`}
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-[10px] text-red-500 uppercase tracking-wider font-bold">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full py-3 text-[10px] uppercase tracking-[0.3em] font-bold rounded transition-all
                      ${isSubmitting 
                        ? 'bg-blue-400 text-white cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-500 text-white'
                      }
                    `}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
