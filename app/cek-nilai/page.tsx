'use client'; 

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// --- SETUP SUPABASE (Hardcode) ---
const supabaseUrl = 'https://ivkatcmuhhwwjicykwuk.supabase.co';
const supabaseKey = 'sb_publishable_P6j8X90tSfuMPqWgZDg2MA_KS41z9fw'; // <--- JANGAN LUPA ISI INI LAGI YA PAK
const supabase = createClient(supabaseUrl, supabaseKey);

export default function CekNilai() {
  const [nilai, setNilai] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function ambilData() {
      const { data, error } = await supabase.from('grades').select('*');
      if (data) setNilai(data);
      setLoading(false);
    }
    ambilData();
  }, []);

  return (
    // PERBAIKAN 1: Tambah 'pt-32' supaya konten turun ke bawah (tidak nabrak navbar)
    <div className="min-h-screen bg-gray-100 pt-32 pb-10 px-4 sm:px-6">
      
      {/* Container Utama */}
      <div className="max-w-5xl mx-auto">
        
        {/* Header Halaman (Di luar kartu) */}
        <div className="mb-6 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-800">Transkrip Nilai Siswa</h1>
          <p className="text-gray-500 mt-2">Semester Ganjil Tahun Ajaran 2025/2026</p>
        </div>

        {/* KARTU TABEL */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          
          {/* Judul Tabel dengan Garis Hijau di Kiri */}
          <div className="bg-white px-6 py-5 border-b border-gray-200 flex justify-between items-center border-l-4 border-green-600">
            <h2 className="text-lg font-semibold text-gray-700">
              Rincian Mata Pelajaran
            </h2>
            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
              Aktif
            </span>
          </div>

          {/* ISI TABEL */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-600 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="px-6 py-4 text-left">Mata Pelajaran</th>
                  <th className="px-6 py-4 text-center">Semester</th>
                  <th className="px-6 py-4 text-center">KKM</th>
                  <th className="px-6 py-4 text-center">Nilai Akhir</th>
                  <th className="px-6 py-4 text-center">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500 animate-pulse">
                      Sedang memuat data...
                    </td>
                  </tr>
                ) : (
                  nilai.map((item: any, index) => (
                    <tr key={item.id} className={`hover:bg-gray-50 transition ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                      {/* Kolom Mapel */}
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {item.subject}
                      </td>
                      
                      {/* Kolom Semester */}
                      <td className="px-6 py-4 text-center text-gray-500">
                        {item.semester}
                      </td>

                      {/* Kolom KKM (Contoh Statis) */}
                      <td className="px-6 py-4 text-center text-gray-400">
                        75
                      </td>

                      {/* Kolom Nilai (Besar & Tebal) */}
                      <td className="px-6 py-4 text-center">
                        <span className={`text-lg font-bold ${item.score >= 90 ? 'text-green-600' : 'text-gray-800'}`}>
                          {item.score}
                        </span>
                      </td>

                      {/* Kolom Badge Status */}
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          item.score >= 75 
                            ? 'bg-green-100 text-green-700 border border-green-200' 
                            : 'bg-red-100 text-red-700 border border-red-200'
                        }`}>
                          {item.score >= 75 ? 'TUNTAS' : 'BELUM TUNTAS'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {/* Footer Tabel */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
            <button className="text-sm text-gray-600 hover:text-green-700 font-medium flex items-center gap-2 transition">
              🖨️ Cetak Raport
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}