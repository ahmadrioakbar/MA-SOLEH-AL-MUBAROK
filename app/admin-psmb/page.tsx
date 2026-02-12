'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// --- SETUP SUPABASE ---
const supabaseUrl = 'https://ivkatcmuhhwwjicykwuk.supabase.co';
// Ganti dengan kunci Bapak yang tadi dipakai di formulir
const supabaseKey = 'sb_publishable_P6j8X90tSfuMPqWgZDg2MA_KS41z9fw'; 
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AdminPSMB() {
  const [siswa, setSiswa] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Ambil Data saat halaman dibuka
  useEffect(() => {
    fetchSiswa();
  }, []);

  async function fetchSiswa() {
    setLoading(true);
    // Mengambil data urut dari yang paling baru daftar
    const { data, error } = await supabase
      .from('psmb_registrants')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error:', error);
      alert('Gagal mengambil data.');
    } else {
      setSiswa(data || []);
    }
    setLoading(false);
  }

  // Fungsi Kirim WA Otomatis
  const kirimWA = (namaSiswa: string, noHp: string) => {
    // Ubah 08... jadi 628...
    let hpBersih = noHp.replace(/\D/g, ''); // Hapus spasi/strip
    if (hpBersih.startsWith('0')) {
      hpBersih = '62' + hpBersih.slice(1);
    }

    const pesan = `Assalamualaikum, Wali Murid dari ananda *${namaSiswa}*.%0A%0AKami dari Panitia PSMB MA Soleh Al Mubarok ingin menginformasikan bahwa data pendaftaran telah kami terima.%0A%0AMohon konfirmasi kelengkapan berkas.%0ATerima kasih.`;
    
    // Buka WhatsApp Web/App
    window.open(`https://wa.me/${hpBersih}?text=${pesan}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-32 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Dashboard */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard PPDB 🎓</h1>
            <p className="text-gray-500">Panel Admin Penerimaan Siswa Baru</p>
          </div>
          <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
            <span className="block text-xs text-gray-400 uppercase tracking-wide">Total Pendaftar</span>
            <span className="text-2xl font-bold text-green-600">{siswa.length} Siswa</span>
          </div>
        </div>

        {/* Tabel Data */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between">
            <h2 className="font-semibold text-gray-700">Data Masuk Terbaru</h2>
            <button 
              onClick={fetchSiswa} 
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              🔄 Refresh Data
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Siswa</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asal Sekolah</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wali Murid</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500 animate-pulse">
                      Sedang memuat data dari database...
                    </td>
                  </tr>
                ) : siswa.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                      Belum ada pendaftar masuk.
                    </td>
                  </tr>
                ) : (
                  siswa.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition">
                      {/* Tanggal */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(item.created_at).toLocaleDateString('id-ID')}
                      </td>
                      
                      {/* Nama Siswa */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-gray-900">{item.nama_lengkap}</div>
                        <div className="text-xs text-gray-500">NISN: {item.nisn}</div>
                      </td>

                      {/* Asal Sekolah */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item.asal_sekolah}
                      </td>

                      {/* Data Wali */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{item.nama_wali}</div>
                        <div className="text-xs text-gray-500">{item.no_hp_wali}</div>
                      </td>

                      {/* Tombol Aksi */}
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button
                          onClick={() => kirimWA(item.nama_lengkap, item.no_hp_wali)}
                          className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 mx-auto border border-green-200 transition"
                        >
                          <span>💬</span> Hubungi Ortu
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}