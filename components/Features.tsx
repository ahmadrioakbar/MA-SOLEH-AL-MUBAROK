"use client";
import { motion } from "framer-motion";
// Kita import ikon profesional dari sini
import { Globe, BookOpen, Bot, MonitorPlay } from "lucide-react";

const features = [
  {
    title: "Kurikulum Cambridge",
    desc: "Standar pendidikan internasional untuk mencetak pemimpin global.",
    icon: <Globe className="w-12 h-12 text-blue-400" />, // Ikon Globe
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Tahfidz & Akhlak",
    desc: "Program khusus hafalan Al-Qur'an dengan metode mutqin.",
    icon: <BookOpen className="w-12 h-12 text-green-400" />, // Ikon Buku
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Coding & Robotics",
    desc: "Ekskul wajib coding sejak dini menggunakan kurikulum Silicon Valley.",
    icon: <Bot className="w-12 h-12 text-purple-400" />, // Ikon Robot
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Smart Classroom",
    desc: "Setiap kelas dilengkapi iPad, Smart TV, dan AC High-Tech.",
    icon: <MonitorPlay className="w-12 h-12 text-orange-400" />, // Ikon Layar
    color: "from-orange-500 to-red-500",
  },
];

export default function Features() {
  return (
    // Tambahkan ID 'keunggulan' disini supaya bisa dipanggil menu
    <section id="keunggulan" className="py-24 bg-black relative overflow-hidden">
      
      <div className="text-center mb-16 relative z-10 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Kenapa Memilih Kami?
        </motion.h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Kombinasi sempurna antara teknologi canggih dan nilai-nilai spiritual.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="p-1 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden group cursor-pointer"
          >
            <div className="bg-black/90 h-full p-8 rounded-xl relative overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
              
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-30 blur-2xl transition-opacity rounded-full -mr-10 -mt-10`}></div>

              {/* Tampilkan Ikon Disini */}
              <div className="mb-6">{item.icon}</div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}