'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// --- SETUP SUPABASE ---
const supabaseUrl = 'https://ivkatcmuhhwwjicykwuk.supabase.co';
const supabaseKey = 'sb_publishable_P6j8X90tSfuMPqWgZDg2MA_KS41z9fw'; 
const supabase = createClient(supabaseUrl, supabaseKey);

export default function PendaftaranPSMB() {
  const [loading, setLoading] = useState(false);
  const [sukses, setSukses] = useState(false);

  // DATA FORMULIR LENGKAP (SESUAI DATABASE TERBARU)
  const [formData, setFormData] = useState({
    // SISWA
    nama_lengkap: '', nisn: '', nik: '', asal_sekolah: '',
    tempat_lahir: '', tanggal_lahir: '', jenis_kelamin: 'Laki-laki', agama: 'Islam',
    hobi: '', cita_cita: '', anak_ke: '', jumlah_saudara: '', no_hp_siswa: '', email: '',
    yang_membiayai: 'Orang Tua',
    
    // KELUARGA
    nomor_kk: '', nama_kepala_keluarga: '',
    
    // AYAH
    nama_ayah: '', status_ayah: 'Masih Hidup', nik_ayah: '', 
    tempat_lahir_ayah: '', tanggal_lahir_ayah: '', 
    pekerjaan_ayah: '', penghasilan_ayah: '', no_hp_ayah: '',
    
    // IBU
    nama_ibu: '', status_ibu: 'Masih Hidup', nik_ibu: '', 
    tempat_lahir_ibu: '', tanggal_lahir_ibu: '', 
    pekerjaan_ibu: '', penghasilan_ibu: '', no_hp_ibu: '',

    // WALI & ALAMAT
    nama_wali: '', no_hp_wali: '',
    alamat_lengkap: '', status_tempat_tinggal: 'Milik Sendiri', jarak_ke_sekolah: '', transportasi: '', waktu_tempuh: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    
    // Kirim data ke tabel 'psmb_registrants'
    const { error } = await supabase.from('psmb_registrants').insert([formData]);
    
    setLoading(false);
    if (error) {
      console.error(error);
      alert('Gagal simpan data: ' + error.message);
    } else {
      setSukses(true);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-32 pb-20 px-4 md:px-8">
      
      {/* JUDUL HALAMAN */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-800 uppercase tracking-tight">Formulir Pendaftaran Siswa</h1>
        <p className="text-gray-500 mt-2 font-medium">MA SOLEH AL MUBAROK - TAHUN PELAJARAN 2026/2027</p>
      </div>

      <div className="max-w-5xl mx-auto">
        
        {sukses ? (
          <div className="bg-white p-12 rounded-2xl shadow-xl text-center border-t-8 border-green-500 animate-in fade-in zoom-in duration-300">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-green-700 mb-2">Alhamdulillah!</h2>
            <p className="text-gray-600 mb-8 text-lg font-medium">Data pendaftaran Ananda berhasil kami simpan.</p>
            <button onClick={() => window.location.reload()} className="bg-green-600 text-white px-10 py-3 rounded-full font-bold shadow-lg hover:bg-green-700 transition">
              Daftar Siswa Lain
            </button>
          </div>
        ) : (

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* 1. DATA PRIBADI SISWA */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-5">
                <span className="bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-md">1</span>
                <h3 className="text-2xl font-bold text-gray-800 tracking-tight">Data Pribadi Siswa</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="label-form">Nama Lengkap (Sesuai Ijazah)</label>
                  <input type="text" name="nama_lengkap" required className="input-form" onChange={handleChange} placeholder="Masukkan Nama Lengkap Siswa" />
                </div>
                <div>
                  <label className="label-form">NISN</label>
                  <input type="number" name="nisn" required className="input-form" onChange={handleChange} placeholder="10 Digit Angka" />
                </div>
                <div>
                  <label className="label-form">NIK (Nomor Induk Kependudukan)</label>
                  <input type="number" name="nik" required className="input-form" onChange={handleChange} placeholder="16 Digit Angka" />
                </div>
                <div>
                  <label className="label-form">Tempat Lahir</label>
                  <input type="text" name="tempat_lahir" required className="input-form" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-form">Tanggal Lahir</label>
                  <input type="date" name="tanggal_lahir" required className="input-form" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-form">Jenis Kelamin</label>
                  <select name="jenis_kelamin" className="input-form" onChange={handleChange}>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div>
                  <label className="label-form">Asal Sekolah</label>
                  <input type="text" name="asal_sekolah" required className="input-form" onChange={handleChange} placeholder="Nama SMP / MTs" />
                </div>
              </div>
            </div>

            {/* 2. DATA KELUARGA & ORANG TUA */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-5">
                <span className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-md">2</span>
                <h3 className="text-2xl font-bold text-gray-800 tracking-tight">Data Keluarga</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="label-form">Nomor KK (Kartu Keluarga)</label>
                  <input type="number" name="nomor_kk" required className="input-form" onChange={handleChange} placeholder="16 Digit Nomor KK" />
                </div>
                <div>
                  <label className="label-form">Nama Kepala Keluarga</label>
                  <input type="text" name="nama_kepala_keluarga" required className="input-form" onChange={handleChange} />
                </div>
              </div>
              
              {/* --- BAGIAN AYAH --- */}
              <div className="bg-blue-50/50 p-6 rounded-2xl border-2 border-blue-100 mb-8">
                <h4 className="font-bold text-blue-900 mb-5 text-xl flex items-center gap-2">👨 Identitas Ayah Kandung</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="label-mini">Nama Lengkap Ayah</label>
                    <input type="text" name="nama_ayah" className="input-white" onChange={handleChange} />
                  </div>
                  <div>
                    <label className="label-mini">NIK Ayah</label>
                    <input type="number" name="nik_ayah" className="input-white" onChange={handleChange} />
                  </div>
                  <div>
                    <label className="label-mini">No. HP / WA Ayah</label>
                    <input type="tel" name="no_hp_ayah" className="input-white" onChange={handleChange} />
                  </div>
                  <div>
                    <label className="label-mini">Tempat Lahir Ayah</label>
                    <input type="text" name="tempat_lahir_ayah" className="input-white" onChange={handleChange} />
                  </div>
                  <div>
                    <label className="label-mini">Tanggal Lahir Ayah</label>
                    <input type="date" name="tanggal_lahir_ayah" className="input-white" onChange={handleChange} />
                  </div>
                  <div>
                    <label className="label-mini">Pekerjaan Ayah</label>
                    <input type="text" name="pekerjaan_ayah" className="input-white" onChange={handleChange} />
                  </div>
                  <div>
                    <label className="label-mini">Penghasilan Rata-rata</label>
                    <select name="penghasilan_ayah" className="input-white" onChange={handleChange}>
                      <option value="">- Pilih Penghasilan -</option>
                      <option value="< 1jt">Di bawah Rp 1.000.000</option>
                      <option value="1jt-3jt">Rp 1.000.000 - Rp 3.000.000</option>
                      <option value="> 3jt">Di atas Rp 3.000.000</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* --- BAGIAN IBU --- */}
              <div className="bg-pink-50/50 p-6 rounded-2xl border-2 border-pink-100">
                <h4 className="font-bold text-pink-900 mb-5 text-xl flex items-center gap-2">👩 Identitas Ibu Kandung</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="label-mini">Nama Lengkap Ibu</label>
                    <input type="text" name="nama_ibu" className="input-white" onChange={handleChange} />
                  </div>
                  <div>
                    <label className="label-mini">NIK Ibu</label>
                    <input type="number" name="nik_ibu" className="input-white" onChange={handleChange} />
                  </div>
                  <div>
                    <label className="label-mini">No. HP / WA Ibu</label>
                    <input type="tel" name="no_hp_ibu" className="input-white" onChange={handleChange} />
                  </div>
                  <div>
                    <label className="label-mini">Tempat Lahir Ibu</label>
                    <input type="text" name="tempat_lahir_ibu" className="input-white" onChange={handleChange} />
                  </div>
                  <div>
                    <label className="label-mini">Tanggal Lahir Ibu</label>
                    <input type="date" name="tanggal_lahir_ibu" className="input-white" onChange={handleChange} />
                  </div>
                  <div>
                    <label className="label-mini">Pekerjaan Ibu</label>
                    <input type="text" name="pekerjaan_ibu" className="input-white" onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. KONTAK WALI (PENTING UNTUK NOTIFIKASI) */}
            <div className="bg-amber-50 p-6 md:p-10 rounded-2xl shadow-sm border-2 border-amber-200">
              <h3 className="text-2xl font-bold text-amber-900 mb-2 flex items-center gap-3">📞 Kontak WhatsApp Utama</h3>
              <p className="text-amber-700 font-medium mb-6 italic">Wajib diisi untuk pengiriman informasi kelulusan melalui WhatsApp.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-form">Nama Pemilik Nomor</label>
                  <input type="text" name="nama_wali" required className="input-white border-amber-300" onChange={handleChange} placeholder="Contoh: Ayah / Ibu / Kakak" />
                </div>
                <div>
                  <label className="label-form">Nomor WhatsApp (Aktif)</label>
                  <input type="tel" name="no_hp_wali" required className="input-white border-amber-300" onChange={handleChange} placeholder="08XXXXXXXXXX" />
                </div>
              </div>
            </div>

            {/* 4. ALAMAT & TEMPAT TINGGAL */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-5">
                <span className="bg-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-md">3</span>
                <h3 className="text-2xl font-bold text-gray-800 tracking-tight">Alamat & Transportasi</h3>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="label-form">Alamat Lengkap (Jl, Dusun, RT/RW, Desa, Kec)</label>
                  <textarea name="alamat_lengkap" required className="input-form h-28" onChange={handleChange} placeholder="Masukkan alamat domisili saat ini"></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div>
                     <label className="label-form">Jarak ke Madrasah</label>
                     <input type="text" name="jarak_ke_sekolah" className="input-form" onChange={handleChange} placeholder="Contoh: 2 KM" />
                   </div>
                   <div>
                     <label className="label-form">Transportasi Utama</label>
                     <input type="text" name="transportasi" className="input-form" onChange={handleChange} placeholder="Motor / Jalan Kaki" />
                   </div>
                   <div>
                     <label className="label-form">Status Rumah</label>
                     <select name="status_tempat_tinggal" className="input-form" onChange={handleChange}>
                       <option value="Milik Sendiri">Milik Sendiri</option>
                       <option value="Sewa / Kontrak">Sewa / Kontrak</option>
                       <option value="Menumpang">Rumah Orang Tua / Menumpang</option>
                     </select>
                   </div>
                </div>
              </div>
            </div>

            {/* TOMBOL KIRIM FINAL */}
            <div className="pt-6 pb-12">
              <button 
                type="submit" 
                disabled={loading} 
                className="w-full bg-green-700 text-white font-extrabold text-xl py-5 rounded-2xl shadow-2xl hover:bg-green-800 transition transform active:scale-95 shadow-green-900/20"
              >
                {loading ? '⏳ SEDANG MENGIRIM DATA...' : '🚀 KIRIM FORMULIR PENDAFTARAN SEKARANG'}
              </button>
              <p className="text-center text-gray-400 mt-4 text-sm font-medium">© 2026 MA SOLEH AL MUBAROK - Sistem Informasi PPDB Digital</p>
            </div>

          </form>
        )}
      </div>

      {/* CSS KHUSUS UNTUK FORMULIR */}
      <style jsx>{`
        .label-form {
          @apply block text-sm font-bold text-gray-700 mb-2;
        }
        .label-mini {
          @apply block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide;
        }
        .input-form {
          @apply w-full border-2 border-gray-300 p-3 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-600 outline-none text-gray-900 bg-gray-50 transition-all font-medium;
        }
        .input-white {
          @apply w-full border-2 border-gray-200 p-3 rounded-xl outline-none text-gray-900 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium;
        }
      `}</style>
    </div>
  );
}