import { tambahNilai } from "../actions";
import Link from "next/link";

export default function HalamanTambah() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-start">
      
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        
        {/* Judul Halaman */}
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-900">
          📝 Input Nilai Siswa
        </h1>

        {/* Formulir */}
        <form action={tambahNilai} className="flex flex-col gap-4">
          
          {/* Input Nama */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Siswa</label>
            <input 
              type="text" 
              name="nama" 
              placeholder="Contoh: Budi Santoso" 
              required 
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-black"
            />
          </div>

          {/* Input Mata Pelajaran */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mata Pelajaran</label>
            <select name="mapel" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-black">
              <option value="Matematika">Matematika</option>
              <option value="Bahasa Indonesia">Bahasa Indonesia</option>
              <option value="Bahasa Arab">Bahasa Arab</option>
              <option value="Fiqih">Fiqih</option>
              <option value="Sejarah">Sejarah</option>
            </select>
          </div>

          {/* Input Nilai */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nilai (0-100)</label>
            <input 
              type="number" 
              name="nilai" 
              placeholder="90" 
              required 
              min="0"
              max="100"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-black"
            />
          </div>

          {/* Tombol Simpan */}
          <button 
            type="submit" 
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            💾 SIMPAN NILAI
          </button>

        </form>

        {/* Tombol Kembali */}
        <div className="mt-4 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-blue-600 underline">
            &larr; Kembali ke Daftar Nilai
          </Link>
        </div>

      </div>
    </div>
  );
}