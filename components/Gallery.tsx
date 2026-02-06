"use client";
import { motion } from "framer-motion";

// Data Foto (Kita pakai Unsplash biar HD)
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000&auto=format&fit=crop",
    title: "Upacara Bendera",
    category: "Disiplin & Patriotisme",
    size: "md:col-span-2 md:row-span-2", // Foto Besar (Kotak Utama)
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?q=80&w=1000&auto=format&fit=crop",
    title: "Kelas Coding",
    category: "Teknologi",
    size: "md:col-span-1 md:row-span-1", // Foto Kecil
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
    title: "Laboratorium Sains",
    category: "Penelitian",
    size: "md:col-span-1 md:row-span-2", // Foto Tinggi (Potrait)
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544963151-fb47c1a6e309?q=80&w=1000&auto=format&fit=crop",
    title: "Ekskul Memanah",
    category: "Olahraga Sunnah",
    size: "md:col-span-1 md:row-span-1", // Foto Kecil
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1427504746696-ea5abd7dfe4d?q=80&w=1000&auto=format&fit=crop",
    title: "Perpustakaan Digital",
    category: "Literasi",
    size: "md:col-span-1 md:row-span-1", // Foto Kecil
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-black relative">
      
      {/* Header Galeri */}
      <div className="text-center mb-16 px-6">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-semibold tracking-widest uppercase text-sm"
        >
          Dokumentasi
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mt-2"
        >
          Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">School</span>
        </motion.h2>
      </div>

      {/* MASONRY GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group rounded-2xl overflow-hidden cursor-pointer ${item.size}`}
          >
            {/* Gambar */}
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay Hitam (Muncul saat Hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-blue-400 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.category}
              </p>
              <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Tombol Lihat Selengkapnya */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300">
          Lihat Semua Galeri →
        </button>
      </div>

    </section>
  );
}