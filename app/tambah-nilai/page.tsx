'use client';

import { useState } from 'react';

export default function TambahNilai() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Perbaikan Logika: Pakai fungsi biasa, jangan langsung di action form
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    // Anggap saja ini proses simpan nilai
    setTimeout(() => {
      setMessage("Nilai berhasil ditambahkan!");
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="min-h-screen pt-32 px-6 bg-gray-50">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Tambah Nilai Siswa</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-bold mb-1">Nama Siswa</label>
            <input type="text" name="nama" className="w-full border p-2 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Mata Pelajaran</label>
            <input type="text" name="mapel" className="w-full border p-2 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Nilai</label>
            <input type="number" name="nilai" className="w-full border p-2 rounded" required />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition"
          >
            {loading ? 'Menyimpan...' : 'Simpan Nilai'}
          </button>
        </form>

        {message && (
          <p className="mt-4 p-3 bg-green-100 text-green-700 rounded text-center font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}