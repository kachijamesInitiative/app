import React from 'react'
import NavBar from './NavBar'
import { motion } from "framer-motion";
import { Play, Camera, Newspaper } from "lucide-react";
function Media() {
  const mediaItems = [
    {
      type: "Video",
      icon: <Play className="w-6 h-6" />, 
      title: "Community Empowerment Outreach",
      description: "Highlights from our latest outreach programme supporting women and children.",
      thumbnail: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    },
    {
      type: "Gallery",
      icon: <Camera className="w-6 h-6" />, 
      title: "Initiative in Action",
      description: "A visual story of the hope we bring to underserved communities.",
      thumbnail: "https://images.unsplash.com/photo-1543362906-acfc16c67564",
    },
    {
      type: "Press",
      icon: <Newspaper className="w-6 h-6" />, 
      title: "News & Publications",
      description: "Verified press releases and published media features about our work.",
      thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white py-20 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-orange-600"
        >
          Media Center
        </motion.h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Explore videos, gallery images, and publications showcasing the impact of the Kachi Aghasili Initiative.
        </p>
      </div>

      {/* Media Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {mediaItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="rounded-2xl shadow-lg overflow-hidden group bg-white"
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 text-orange-600 font-semibold mb-2">
                {item.icon}
                <span>{item.type}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>

              <button className="mt-4 inline-block px-5 py-2 bg-orange-600 text-white rounded-xl shadow hover:bg-orange-700 transition-all">
                View More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-20 bg-orange-50 rounded-3xl p-10 text-center shadow-inner">
        <h2 className="text-3xl font-bold text-orange-700">Stay Updated</h2>
        <p className="text-gray-700 mt-3 max-w-xl mx-auto">
          Subscribe to receive the latest news, media releases, and impact stories directly from the Kachi Aghasili Initiative.
        </p>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:w-96 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="px-6 py-3 bg-orange-600 text-white rounded-xl shadow hover:bg-orange-700 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Media