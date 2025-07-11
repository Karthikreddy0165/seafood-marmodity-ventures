'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  type ContactFormFields = {
    fullName: string;
    email: string;
    company: string;
    phone: string;
    message: string;
    _gotcha: string;
  };

  const [formData, setFormData] = useState<ContactFormFields>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    _gotcha: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormFields>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors: Partial<ContactFormFields> = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);

    try {
      const response = await fetch('https://formspree.io/f/xwpbgwny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          _gotcha: '',
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 border border-white/20"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
        Send us a Message
      </h3>

      {/* Hidden honeypot field */}
      <input
        type="text"
        name="_gotcha"
        value={formData._gotcha}
        onChange={handleChange}
        className="hidden"
      />

      {[
        {
          label: 'Full Name',
          name: 'fullName',
          type: 'text',
          placeholder: 'Your full name',
        },
        {
          label: 'Email Address',
          name: 'email',
          type: 'email',
          placeholder: 'your@email.com',
        },
        {
          label: 'Company Name',
          name: 'company',
          type: 'text',
          placeholder: 'Your company name',
        },
        {
          label: 'Phone Number',
          name: 'phone',
          type: 'tel',
          placeholder: '+91 98765 43210',
        },
      ].map((field, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <label className="block text-white font-semibold mb-2 text-sm md:text-base">
            {field.label}
          </label>
          <motion.input
            name={field.name}
            type={field.type}
            value={formData[field.name as keyof ContactFormFields]}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            className="w-full px-4 py-3 md:py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            placeholder={field.placeholder}
          />
          {errors[field.name as keyof typeof errors] && (
            <p className="text-red-400 text-sm mt-1">
              {errors[field.name as keyof typeof errors]}
            </p>
          )}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <label className="block text-white font-semibold mb-2 text-sm md:text-base">
          Message
        </label>
        <motion.textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          whileFocus={{ scale: 1.02 }}
          className="w-full px-4 py-3 md:py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none"
          placeholder="Tell us about your seafood requirements..."
        ></motion.textarea>
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
        )}
      </motion.div>

      <motion.button
        type="submit"
        disabled={sending}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-6 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
      >
        {sending ? 'Sending...' : 'Send Message'}
      </motion.button>

      {submitted && (
        <p className="text-green-400 text-center text-sm mt-4">
          ✅ Thank you! Your message has been sent.
        </p>
      )}
    </motion.form>
  );
};

export default ContactForm;
