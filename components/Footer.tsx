import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* KOLOM 1: IDENTITAS */}
        <div>
          <h3 className="text-2xl font-bold mb-6 tracking-wider">
            MA <span className="text-green-600">SOLEH AL MUBAROK</span>
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Mencetak generasi pemimpin masa depan yang cerdas teknologi dan berakhlak mulia.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 hover:bg-green-600 hover:text-white transition cursor-pointer">
              <Facebook size={20} />
            </div>
            <div className="w-10 h-10 rounded-full bg-pink-900/30 flex items-center justify-center text-green-400 hover:bg-pink-600 hover:text-white transition cursor-pointer">
              <Instagram size={20} />
            </div>
            <div className="w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-green-400 hover:bg-red-600 hover:text-white transition cursor-pointer">
              <Youtube size={20} />
            </div>
          </div>
        </div>

        {/* KOLOM 2 */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-green-400">Jelajahi</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Profil Sekolah</li>
            <li className="hover:text-white transition cursor-pointer">Tenaga Pengajar</li>
            <li className="hover:text-white transition cursor-pointer">Ekstrakurikuler</li>
            <li className="hover:text-white transition cursor-pointer">Prestasi Siswa</li>
          </ul>
        </div>

        {/* KOLOM 3 */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-green-400">PPDB Online</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Info Pendaftaran</li>
            <li className="hover:text-white transition cursor-pointer">Biaya Pendidikan</li>
            <li className="hover:text-white transition cursor-pointer">Beasiswa Prestasi</li>
            <li className="hover:text-white transition cursor-pointer">Download Brosur</li>
          </ul>
        </div>

        {/* KOLOM 4 */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-green-400">Hubungi Kami</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-green-500 mt-1" />
              <span>Jl. Wahidin Rt.08, Desa Gemuruh, Jambi</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-green-500" />
              <span>(021) 1234-5678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-green-500" />
              <span>info@sekolahunggulan.sch.id</span>
            </li>
            <li className="mt-4">
              <button className="w-full py-3 bg-green-600 hover:bg-green-600 rounded-lg font-bold transition">
                Chat WhatsApp Admin
              </button>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
        <p>© 2023 Madrasah Unggulan. Developed by <span className="text-white font-bold">Ahmad Rio Akbar</span>.</p>
      </div>
    </footer>
  );
}