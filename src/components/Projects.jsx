
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Github, ExternalLink, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {

  const [filter, setFilter] = useState("all");

  const projects = [

    // start backend project

    {
      title: "Tour Management",
      description:
        "💖 Modern Tour Management Backend with SSL Payments & Admin Dashboard",
      type: "backend",
      tags: ["Node JS", "ExpressJS", "TypeScript",  "Library"],
      api: [
        "POST /api/love/create",
        "GET /api/love",
        "DELETE /api/love/:id"
      ],
      links: {
        github: "https://github.com/jahid45780/Tour-Server",
        // demo: "https://minimal-app-snowy.vercel.app"
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2MO6uBmhGeZGvQSrw7NMVy2TW1LLbcDT0A&s"
    },

    {
      title: "Library Backend",
      description:
        "A Node.js + Express + MongoDB backend for a library management system. Provides APIs to manage books and borrowing functionality.",
      type: "backend",
      tags: ["Node JS", "ExpressJS", "TypeScript",  "Library"],
      api: [
        "POST /api/auth/login",
        "GET /api/bookings",
        "POST /api/bookings"
      ],
      links: {
        github: "https://github.com/jahid45780/-Love_Library_server",
        demo: "minimal-library-server-ass5.vercel.app"
      },
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240701150157/Backend-Development.webp"
    },

    // start front project

    {
    title: "A Lightweight JavaScript Library",
     type: "frontend",
    description:
      " A lightweight love library that helps you build modern, reactive, and dynamic hearts 💖 on the web.",
    tags: ["JavaScript",  "typescript", "React", "Library"],
    links: {
      github: "https://github.com/jahid45780/Love_Library_front", 
      githubServer: "https://github.com/jahid45780/-Love_Library_server",
      demo: "https://minimal-app-snowy.vercel.app",
    },
    image:"https://i.ibb.co.com/RWwfdNj/Screenshot-4.png",
    featured: true,
  },

  {
    title: "E-commerce Website JB_Booking",
    type: "fullstack",
    description: "Full stack booking platform built with modern web technologies.",
    tags: ["React", "Node.js",  "MongoDB"],
    links: {
      github: "https://github.com/jahid45780/JB-Booking-Client",
      demo: "https://jb-booking-29f8e.web.app",
    },
    image: "https://i.ibb.co/5WMjx05/434008021-437764225323106-1756247123103651093-n.png",
  },

    {
    title: "Welcome to the BlessedMonth of Ramadan",
     type: "frontend",
    description: "Full stack booking platform built with modern web technologies.",
    tags: ["React","typescript",],
    links: {
      github: "https://github.com/jahid45780/ramadan-web",
      demo: "https://ramadan-web-ruby.vercel.app/",
    },
    image: "https://i.ibb.co.com/R4H7gTnv/Screenshot-5.png",
  },

  {
    title: "E-commerce Website Bike_Word",
     type: "fullstack",
    description: "Modern bike marketplace website with responsive UI.",
    tags: ["React", "E-commerce", "Tailwind"],
    links: {
      github: "https://github.com/jahid45780/Bike_Word_Client",
      demo: "https://bike-word.vercel.app",
    },
    image: "https://i.ibb.co/WxjDrJJ/452307462-2517755975084991-2627788061562128089-n.png",
  },

  {
    title: "React JS Website Bangler Khrisi",
    type: "frontend",
    description: "Agriculture based information website built using React.",
    tags: ["React", "API", "JavaScript"],
    links: {
      github: "https://github.com/jahid45780/bangler_khrisi",
      demo: "https://bangler-khrisi.web.app",
    },
    image: "https://i.ibb.co/HpF3mG8/448872375-416789734684783-4986924758388445742-n.png",
  },

  {
    title: "JavaScript Website PH_Tube",
    type: "frontend",
    description: "Video platform clone built with pure JavaScript.",
    tags: ["JavaScript", "API", "Frontend"],
    links: {
      github: "https://github.com/jahid45780/PH_tube",
      demo: "http://phrero-tube.surge.sh",
    },
    image: "https://i.ibb.co.com/tpV8pDVP/Screenshot-1.png",
  },

  {
    title: "React Portfolio Website",
    type: "frontend",
    description: "Personal developer portfolio website built with React.",
    tags: ["React", "Portfolio", "Tailwind"],
    links: {
      github: "",
      demo: "https://md-jahid.vercel.app",
    },
    image: "https://i.ibb.co.com/YnKB7YN/Screenshot-2.png",
  },

  {
    title: "React Food Booking Website",
    type: "frontend",
    description: "Restaurant booking application with modern UI.",
    tags: ["React", "Booking", "Web"],
    links: {
      github: "https://github.com/jahid45780/wedding-management",
      demo: "https://resturent-booking-jade.vercel.app/",
    },
    image: "https://i.ibb.co/pwxRqJB/6PzHgZ8h.jpg",
  },

  {
    title: "JavaScript Weather Website",
    description: "Weather forecast website using external weather API.",
    tags: ["JavaScript", "API", "Weather"],
    links: {
      github: "https://github.com/jahid45780/PRODIGY_TaskNubber-4",
      demo: "https://weather-azure-rho.vercel.app",
    },
    image: "https://i.ibb.co.com/SXBP0XRp/Screenshot-3.png",
  },

  {
    title: "React Project Good Food",
    type: "frontend",
    description: "Food ordering UI built with React.",
    tags: ["React", "Food", "UI"],
    links: {
      github: "https://github.com/jahid45780/Food-Project",
      demo: "https://colo-khiya-asi.vercel.app/",
    },
    image: "https://i.ibb.co/w7SNxSS/B9VD0Ga9.jpg",
  },

  {
    title: "React Project Ant Shop",
    description: "Modern online shop interface built with React.",
    tags: ["React", "Shop", "Ecommerce"],
    links: {
      github: "https://github.com/jahid45780/Ant-shop",
      demo: "https://ant-shop-swart.vercel.app",
    },
    image: "https://i.ibb.co/FhRHjq7/ENa1jz3h.jpg",
  },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <div className="pt-40 min-h-screen bg-[#0f1629] p-8 text-slate-100">

      {/* FILTER BUTTONS */}

      <div className="flex justify-center gap-4 mb-16 flex-wrap">

        {["all", "frontend", "backend", "fullstack"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all
            ${
              filter === item
                ? "bg-emerald-400 text-black"
                : "bg-slate-700 hover:bg-slate-600"
            }`}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto space-y-12">

        {filteredProjects.map((project, index) => (

          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px]
            bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500
            bg-[length:400%_400%] animate-gradient-xy
            hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >

            {/* IMAGE */}

            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* CARD */}

            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">

              <MacOsButtons />

              <CardHeader>

                <div className="flex justify-between items-start">

                  <div>

                    <div className="text-emerald-400 text-sm font-mono mb-2 uppercase">

                      {project.type === "frontend" && "Frontend Project"}
                      {project.type === "backend" && "Backend API"}
                      {project.type === "fullstack" && "Fullstack Project"}

                    </div>

                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>

                  </div>

                  {/* ICON LINKS */}

                  <div className="flex gap-4">

                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={22} />
                      </a>
                    )}

                    {project.links.githubServer && (
                      <a
                        href={project.links.githubServer}
                        className="text-slate-400 hover:text-yellow-400 transition-all duration-300 transform hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Server size={22} />
                      </a>
                    )}

                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}

                  </div>

                </div>

              </CardHeader>

              <CardContent className="mt-4">

                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* TAGS */}

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full
                      bg-gradient-to-r from-emerald-400 to-cyan-500
                      text-gray-900 shadow-lg hover:shadow-xl
                      hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* API ENDPOINT PREVIEW */}

                {project.api && (
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm space-y-1">

                    {project.api.map((endpoint, i) => (
                      <div key={i} className="text-green-400">
                        {endpoint}
                      </div>
                    ))}

                  </div>
                )}

              </CardContent>

            </Card>

          </div>

        ))}

      </div>
    </div>
  );
};

export default ProjectShowcase;

