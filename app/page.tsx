"use client"; 

import { motion } from "framer-motion";
import Link from "next/link"; 
import Features from "@/components/Features"; 
import Principal from "@/components/Principal";
import Gallery from "@/components/Gallery"; 
import Stats from "@/components/Stats"; 

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      
      {/* HERO SECTION */}
      <section id="beranda" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Foto Gedung Sekolah */}
        <img 
          src="ma.jpeg"
          alt="Background MA Soleh Al Mubarok"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-0"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-10">
          
          {/* BADGE HIJAU */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex justify-center"
          >
            <span className="px-4 py-2 rounded-full border border-green-400/30 text-green-300 text-sm font-medium bg-green-900/30 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              Pendaftaran Siswa Baru Telah Dibuka
            </span>
          </motion.div>

          {/* JUDUL BESAR */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl"
          >
            Mencetak Generasi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
              Cerdas & Berkarakter
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            Bergabunglah dengan <span className="font-semibold text-white">MA Soleh Al Mubarok</span>. Platform pendidikan digital terbaik dengan kurikulum internasional dan nilai-nilai Islami.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            {/* 🔥 INI YANG SAYA UBAH: TOMBOL JADI 'DAFTAR PSMB' */}
            <Link href="/ppdb" className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-full transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-105 active:scale-95 flex items-center gap-2">
              Daftar Sekarang
            </Link>

            <a href="#profil" className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white text-lg font-bold rounded-full border border-white/20 backdrop-blur-md transition-all hover:scale-105 shadow-lg">
              Lihat Profil
            </a>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll ke bawah</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full animate-ping" />
          </div>
        </motion.div>
      </section>

      {/* Bagian Lain Tetap Ada */}
      <Features />
      <section id="profil"><Principal /></section>
      <Stats />
      <section id="galeri"><Gallery /></section>

    </main> 
  );
}