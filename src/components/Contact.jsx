/* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { Send, MapPin, Mail, Linkedin, Github, Facebook } from "lucide-react";
// import emailjs from "@emailjs/browser";

// export default function Contact() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [status, setStatus] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_aaep8h3",     // EmailJS service ID
//         "template_w4pugwb",    // EmailJS template ID
//         formData,
//         "2I057XQUNhM3O-RJp"      // EmailJS public key
//       )
//       .then(
//         () => {
//           setStatus("Message sent successfully!");
//           setFormData({
//             name: "",
//             email: "",
//             subject: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setStatus("Failed to send message. Please try again.");
//           console.error(error);
//         }
//       );
//   };

//   return (
//     <main className="pt-20 lg:pt-[0rem] bg-[#0f1629] text-white min-h-screen">
//       <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">

//             {/* Contact Info */}
    
//             <div className="space-y-6">

//                <div>
//                 <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                   Let's Build Something Together
//                 </h2>

//                 <p className="text-gray-300 text-lg">
//                   Interested in working together or have a project idea? Let&apos;s connect and build something amazing.
//                 </p>

//               </div>

//   {/* Email */}
//   <div className="flex items-center space-x-4">
//     <div className="bg-purple-500/10 p-3 rounded-lg">
//       <Mail className="w-6 h-6 text-purple-400" />
//     </div>

//     <div>
//       <h3 className="font-semibold">Email</h3>
//       <p className="text-gray-400">mdjahidhossain22233@gmail.com</p>
//     </div>
//   </div>

//   {/* Location */}
//   <div className="flex items-center space-x-4">
//     <div className="bg-pink-500/10 p-3 rounded-lg">
//       <MapPin className="w-6 h-6 text-pink-400" />
//     </div>

//     <div>
//       <h3 className="font-semibold">Location</h3>
//       <p className="text-gray-400">Dhaka, Bangladesh</p>
//     </div>
//   </div>

 
//  <div className="flex  gap-4">

//   {/* Facebook */}
//   <a
//     href="https://facebook.com/yourusername"
//     target="_blank"
//     className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 hover:bg-slate-700/50 transition-all duration-300 group hover:scale-[1.03]"
//   >
//     <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition">
//       <Facebook className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
//     </div>
//   </a>

//   {/* GitHub */}
//   <a
//     href="https://github.com/yourusername"
//     target="_blank"
//     className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 hover:bg-slate-700/50 transition-all duration-300 group hover:scale-[1.03]"
//   >
//     <div className="p-3 rounded-lg bg-gray-500/10 group-hover:bg-gray-500/20 transition">
//       <Github className="w-4 h-4 text-gray-300 group-hover:text-white" />
//     </div>
//   </a>

//   {/* LinkedIn */}
//   <a
//     href="https://linkedin.com/in/yourusername"
//     target="_blank"
//     className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 hover:bg-slate-700/50 transition-all duration-300 group hover:scale-[1.03]"
//   >
//     <div className="p-3 rounded-lg bg-blue-600/10 group-hover:bg-blue-600/20 transition">
//       <Linkedin className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
//     </div>
//   </a>

// </div>

// </div>

//             {/* Contact Form */}

//             <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">

//               <form onSubmit={handleSubmit} className="space-y-6">

//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                   className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                 />

//                 <input
//                   type="email"
//                   required
//                   placeholder="Your Email"
//                   className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                 />

//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700"
//                   value={formData.subject}
//                   onChange={(e) =>
//                     setFormData({ ...formData, subject: e.target.value })
//                   }
//                 />

//                 <textarea
//                   rows="4"
//                   placeholder="Your Message"
//                   className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700"
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                 />

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-lg flex items-center justify-center gap-2"
//                 >
//                   Send Message <Send size={16} />
//                 </button>

//               </form>

//               {status && (
//                 <p className="mt-4 text-center text-gray-300">{status}</p>
//               )}

//             </div>

//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Send, MapPin, Mail, Linkedin, Github, Facebook } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        "service_aaep8h3",
        "template_w4pugwb",
        formData,
        "2I057XQUNhM3O-RJp"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setLoading(false);
        },
        () => {
          setStatus("❌ Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <main className="pt-20 bg-[#0f1629] text-white min-h-screen">
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div className="space-y-8">

              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Let's Build Something Together
                </h2>

                <p className="text-gray-300 text-lg">
                  Interested in working together or have a project idea? Let's connect and build something amazing.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:mdjahidhossain22233@gmail.com"
                    className="text-gray-400 hover:text-white transition"
                  >
                    mdjahidhossain22233@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="bg-pink-500/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-pink-400" />
                </div>

                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-400">Dhaka, Bangladesh</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">

                <a
                  href="https://www.facebook.com/mdjahid.hossain.16547"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-800/40 hover:bg-slate-700/60 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5 text-blue-400" />
                </a>

                <a
                  href="https://github.com/jahid45780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-800/40 hover:bg-slate-700/60 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5 text-gray-300" />
                </a>

                <a
                  href="https://www.linkedin.com/in/md-jahid-91589a295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-800/40 hover:bg-slate-700/60 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </a>

              </div>

            </div>

            {/* RIGHT SIDE FORM */}

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl">

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition"
                />

                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition"
                />

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] hover:opacity-90 transition-all duration-300 group"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={16} className="group-hover:translate-x-1 transition" />
                </button>

              </form>

              {status && (
                <p className="mt-4 text-center text-green-400 bg-green-500/10 py-2 rounded-lg">
                  {status}
                </p>
              )}

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}