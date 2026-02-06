"use client";
import { motion } from "framer-motion";

export default function Principal() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden relative">
      
      {/* Hiasan Background (Lingkaran samar) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* KOLOM KIRI: FOTO */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Kotak Hiasan di belakang foto */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-6 scale-95 opacity-50 blur-sm"></div>
          
          {/* Foto Kepala Sekolah */}
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
            alt="Kepala Sekolah" 
            className="relative rounded-2xl shadow-2xl w-full object-cover border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
          />
          
          {/* Label Nama */}
          <div className="absolute -bottom-6 -right-6 bg-white text-black px-6 py-4 rounded-xl shadow-xl">
            <p className="font-bold text-lg">Bayu Setiawan Prambudi, M.Pd</p>
            <p className="text-sm text-gray-600">Kepala Madrasah</p>
          </div>
        </motion.div>

        {/* KOLOM KANAN: TEKS */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1 w-12 bg-blue-500 rounded-full"></span>
            <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Sambutan Kepala Sekolah</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Mewujudkan Pendidikan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Berkelas Dunia
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            "Di Madrasah Unggulan, kami tidak hanya mengajarkan ilmu pengetahuan, tetapi juga menanamkan adab. Kami percaya bahwa teknologi dan iman harus berjalan beriringan untuk menghadapi tantangan masa depan."
          </p>

          <p className="text-gray-400 italic border-l-4 border-purple-500 pl-4">
            "Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan, Anda dapat mengubah dunia."
          </p>

        </motion.div>

      </div>
    </section>
  );
}