"use client";

import { useState } from "react";
import { Input } from "../ui/input";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ fullname: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className=" px-4 py-12 lg:px-60  ">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700/30">
        <h2 className="text-4xl font-bold text-amber-500 text-center mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-center mb-4">
          Have a question or want to work together? Drop me a message!
        </p>
        <hr className="mb-2" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block  font-medium text-textPrimary"
            >
              Full Name
            </label>
            <Input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border-gray-700 focus:border-amber-500 focus:ring-amber-500 rounded-lg transition-all duration-200"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block font-medium text-textPrimary"
            >
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border-gray-700 focus:border-amber-500 focus:ring-amber-500 rounded-lg transition-all duration-200"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block  font-medium text-textPrimary"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border p-4 focus:border-amber-500 focus:ring-amber-500 rounded-lg transition-all duration-200 resize-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-lg font-medium 
            hover:from-amber-600 hover:to-amber-700 transform hover:scale-[1.02] transition-all duration-200 
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-8"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>

          {submitStatus === "success" && (
            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-green-500 text-sm text-center font-medium">
                Message sent successfully! Thank you for reaching out.
              </p>
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-500 text-sm text-center font-medium">
                Failed to send message. Please try again or contact me directly.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
