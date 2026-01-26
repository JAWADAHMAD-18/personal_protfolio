import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactOption from "../contact/ContactOption";
import {  FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const message = "Hi Jawad, I found your portfolio and I want some services from you.";

  const contactOptions = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "jawadahmad5618@gmail.com",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=jawadahmad5618@gmail.com&su=Portfolio%20Inquiry&body=${encodeURIComponent(message)}`
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+92 303 7741461",
      href: `https://wa.me/923037741461?text=${encodeURIComponent(message)}`,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "JAWADAHMAD-18",
      href: "https://github.com/JAWADAHMAD-18",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "jawad-ahmad-18",
      href: "https://www.linkedin.com/in/jawad-tech/",
    },
  ];

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitStatus({ type: "error", message: "Please enter your name" });
      return false;
    }
    if (!formData.email.trim()) {
      setSubmitStatus({ type: "error", message: "Please enter your email" });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return false;
    }
    if (!formData.message.trim()) {
      setSubmitStatus({ type: "error", message: "Please enter a message" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! Thank you for contacting me.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  return (
    <section className="py-12 rounded-[2rem] my-8 mx-auto w-[97vw] max-w-[97vw]">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl mb-8 text-center flex items-center justify-center">
          <FaEnvelope className="mr-2 text-accent" />
          Contact Me
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Contact Options */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-text-primary mb-6">
              Get in Touch
            </h4>
            {contactOptions.map((option, index) => (
              <ContactOption
                key={option.label}
                icon={option.icon}
                label={option.label}
                value={option.value}
                href={option.href}
                index={index}
              />
            ))}
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h4 className="text-xl font-semibold text-text-primary mb-6">
              Send a Message
            </h4>
            <motion.form
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="w-full"
            >
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-section text-text-primary border border-accent/30 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-section text-text-primary border border-accent/30 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-section text-text-primary border border-accent/30 focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>
              {submitStatus && (
                <div
                  className={`mb-4 p-3 rounded-lg text-center ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-[#f7c873] text-white font-semibold py-3 rounded-lg hover:from-[#f7c873] hover:to-accent transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
