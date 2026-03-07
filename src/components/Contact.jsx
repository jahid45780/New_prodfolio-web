/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_aaep8h3",     // EmailJS service ID
        "template_w4pugwb",    // EmailJS template ID
        formData,
        "2I057XQUNhM3O-RJp"      // EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <main className="pt-20 lg:pt-[0rem] bg-[#0f1629] text-white min-h-screen">
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Contact Info */}
            <div className="space-y-8">

              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>

                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop me a message!
                </p>

              </div>

              <div className="space-y-6">

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">mdjahidhossain22233@gmail.com</p>
                  </div>

                </div>

                <div className="flex items-center space-x-4">

                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">  Dhaka Bangladesh</p>
                  </div>

                </div>

              </div>

            </div>

            {/* Contact Form */}

            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  Send Message <Send size={16} />
                </button>

              </form>

              {status && (
                <p className="mt-4 text-center text-gray-300">{status}</p>
              )}

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}