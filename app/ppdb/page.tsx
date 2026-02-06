"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { User, School, Phone, Mail, Send } from "lucide-react"; 

export default function PPDBPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => alert("Data berhasil terkirim ke Server Sekolah!"), 1000);
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Hiasan */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>

      {/* KOTAK FORMULIR */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl w-full relative z-10"
      >
        
        {/* Header Form */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Formulir Pendaftaran</h1>
          <p className="text-gray-400">Silakan isi data calon siswa dengan benar dan teliti.</p>
        </div>

        {/* Formulir Input */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Input 1: Nama Lengkap */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Nama Lengkap Siswa</label>
            {/* STRATEGI BARU: Parent Div yang punya Border, bukan Inputnya */}
            <div className="flex items-center bg-black/50 border border-gray-700 rounded-xl px-4 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
              <User className="text-gray-500 w-5 h-5 flex-shrink-0" />
              {/* Inputnya transparan & tanpa border, duduk manis di sebelah ikon */}
              <input type="text" placeholder="Contoh: Ahmad Rio" required 
                className="w-full bg-transparent border-none text-white px-4 py-3 focus:outline-none focus:ring-0 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Input 2: Asal Sekolah */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Asal Sekolah</label>
            <div className="flex items-center bg-black/50 border border-gray-700 rounded-xl px-4 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
              <School className="text-gray-500 w-5 h-5 flex-shrink-0" />
              <input type="text" placeholder="Contoh: SMP Negeri 1 Jakarta" required 
                className="w-full bg-transparent border-none text-white px-4 py-3 focus:outline-none focus:ring-0 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Input 3: No HP Ortu */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">No. WhatsApp Orang Tua</label>
            <div className="flex items-center bg-black/50 border border-gray-700 rounded-xl px-4 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
              <Phone className="text-gray-500 w-5 h-5 flex-shrink-0" />
              <input type="tel" placeholder="0812-xxxx-xxxx" required 
                className="w-full bg-transparent border-none text-white px-4 py-3 focus:outline-none focus:ring-0 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Input 4: Email */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Alamat Email</label>
            <div className="flex items-center bg-black/50 border border-gray-700 rounded-xl px-4 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
              <Mail className="text-gray-500 w-5 h-5 flex-shrink-0" />
              <input type="email" placeholder="email@contoh.com" required 
                className="w-full bg-transparent border-none text-white px-4 py-3 focus:outline-none focus:ring-0 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Input 5: Pilihan Jurusan (Radio Button) */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-gray-300 text-sm font-medium">Peminatan / Jurusan</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Tahfidz Al-Quran', 'Sains & Teknologi', 'Entrepreneurship'].map((jurusan) => (
                <label key={jurusan} className="flex items-center space-x-3 p-4 bg-black/30 border border-gray-700 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-900/10 transition">
                  <input type="radio" name="jurusan" className="w-5 h-5 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-200">{jurusan}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tombol Kirim */}
          <div className="md:col-span-2 mt-6">
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
              <Send className="w-5 h-5" />
              {submitted ? "Sedang Mengirim..." : "Kirim Pendaftaran Sekarang"}
            </button>
          </div>

        </form>

      </motion.div>
    </main>
  );
}