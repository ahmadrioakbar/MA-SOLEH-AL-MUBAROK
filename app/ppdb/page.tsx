'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ivkatcmuhhwwjicykwuk.supabase.co';
const supabaseKey = 'sb_publishable_P6j8X90tSfuMPqWgZDg2MA_KS41z9fw'; 
const supabase = createClient(supabaseUrl, supabaseKey);

export default function PendaftaranPSMB() {
  const [loading, setLoading] = useState(false);
  const [sukses, setSukses] = useState(false);

  const [formData, setFormData] = useState({
    nama_lengkap: '', nisn: '', nik: '', asal_sekolah: '',
    tempat_lahir: '', tanggal_lahir: '', jenis_kelamin: 'Laki-laki', agama: 'Islam',
    hobi: '', cita_cita: '', anak_ke: '', jumlah_saudara: '', no_hp_siswa: '', email: '',
    yang_membiayai: 'Orang Tua', nomor_kk: '', nama_kepala_keluarga: '',
    nama_ayah: '', status_ayah: 'Masih Hidup', nik_ayah: '', tempat_lahir_ayah: '', tanggal_lahir_ayah: '', pekerjaan_ayah: '', penghasilan_ayah: '', no_hp_ayah: '',
    nama_ibu: '', status_ibu: 'Masih Hidup', nik_ibu: '', tempat_lahir_ibu: '', tanggal_lahir_ibu: '', pekerjaan_ibu: '', penghasilan_ibu: '', no_hp_ibu: '',
    nama_wali: '', no_hp_wali: '', alamat_lengkap: '', status_tempat_tinggal: 'Milik Sendiri', jarak_ke_sekolah: '', transportasi: '', waktu_tempuh: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('psmb_registrants').insert([formData]);
    setLoading(false);
    if (error) {
      alert('Gagal simpan data: ' + error.message);
    } else {
      setSukses(true);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {sukses ? (
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center border-t-8 border-green-600">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Pendaftaran Berhasil! ✅</h2>
            <p className="text-gray-600 mb-8 text-lg">Data Ananda telah kami terima dalam sistem.</p>
            <button onClick={() => window.location.reload()} className="bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg">Daftar Siswa Lain</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-4xl font-black text-gray-900 uppercase">Formulir Pendaftaran</h1>
              <p className="text-gray-600 font-bold mt-1">MA SOLEH AL MUBAROK - 2026/2027</p>
            </div>

            {/* BAGIAN 1: DATA SISWA */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <span className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">1</span>
                <h3 className="text-xl font-bold text-gray-900">Data Pribadi Siswa</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="label-fixed">Nama Lengkap (Sesuai Ijazah)</label>
                  <input type="text" name="nama_lengkap" required className="input-fixed" onChange={handleChange} placeholder="Ketik Nama Lengkap..." />
                </div>
                <div>
                  <label className="label-fixed">NISN</label>
                  <input type="number" name="nisn" required className="input-fixed" onChange={handleChange} placeholder="Contoh: 0097xxx" />
                </div>
                <div>
                  <label className="label-fixed">NIK</label>
                  <input type="number" name="nik" required className="input-fixed" onChange={handleChange} placeholder="16 Digit NIK" />
                </div>
                <div>
                  <label className="label-fixed">Tempat Lahir</label>
                  <input type="text" name="tempat_lahir" required className="input-fixed" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-fixed">Tanggal Lahir</label>
                  <input type="date" name="tanggal_lahir" required className="input-fixed" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-fixed">Jenis Kelamin</label>
                  <select name="jenis_kelamin" className="input-fixed" onChange={handleChange}>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div>
                  <label className="label-fixed">Asal Sekolah</label>
                  <input type="text" name="asal_sekolah" required className="input-fixed" onChange={handleChange} placeholder="Nama SMP/MTs" />
                </div>
              </div>
            </div>

            {/* BAGIAN 2: DATA ORANG TUA */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <span className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">2</span>
                <h3 className="text-xl font-bold text-gray-900">Data Orang Tua</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="label-fixed">Nomor KK</label>
                  <input type="number" name="nomor_kk" className="input-fixed" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-fixed">Kepala Keluarga</label>
                  <input type="text" name="nama_kepala_keluarga" className="input-fixed" onChange={handleChange} />
                </div>
              </div>

              {/* AYAH */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-300 mb-6">
                <h4 className="font-bold text-blue-700 mb-4 border-b pb-2">Identitas Ayah Kandung</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="nama_ayah" placeholder="Nama Ayah" className="input-fixed-mini" onChange={handleChange} />
                  <input type="number" name="nik_ayah" placeholder="NIK Ayah" className="input-fixed-mini" onChange={handleChange} />
                  <input type="text" name="tempat_lahir_ayah" placeholder="Tempat Lahir Ayah" className="input-fixed-mini" onChange={handleChange} />
                  <input type="date" name="tanggal_lahir_ayah" className="input-fixed-mini" onChange={handleChange} />
                  <input type="text" name="pekerjaan_ayah" placeholder="Pekerjaan" className="input-fixed-mini" onChange={handleChange} />
                  <input type="tel" name="no_hp_ayah" placeholder="No. HP Ayah" className="input-fixed-mini" onChange={handleChange} />
                </div>
              </div>

              {/* IBU */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-300">
                <h4 className="font-bold text-pink-700 mb-4 border-b pb-2">Identitas Ibu Kandung</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="nama_ibu" placeholder="Nama Ibu" className="input-fixed-mini" onChange={handleChange} />
                  <input type="number" name="nik_ibu" placeholder="NIK Ibu" className="input-fixed-mini" onChange={handleChange} />
                  <input type="text" name="tempat_lahir_ibu" placeholder="Tempat Lahir Ibu" className="input-fixed-mini" onChange={handleChange} />
                  <input type="date" name="tanggal_lahir_ibu" className="input-fixed-mini" onChange={handleChange} />
                  <input type="text" name="pekerjaan_ibu" placeholder="Pekerjaan" className="input-fixed-mini" onChange={handleChange} />
                  <input type="tel" name="no_hp_ibu" placeholder="No. HP Ibu" className="input-fixed-mini" onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* BAGIAN 3: KONTAK WA UTAMA */}
            <div className="bg-amber-50 p-6 md:p-8 rounded-2xl shadow-md border-2 border-amber-400">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">📞 No. WhatsApp Utama</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="label-fixed">Pemilik Nomor</label>
                  <input type="text" name="nama_wali" required className="input-fixed bg-white" onChange={handleChange} placeholder="Contoh: Ayah / Ibu" />
                </div>
                <div>
                  <label className="label-fixed">Nomor WhatsApp</label>
                  <input type="tel" name="no_hp_wali" required className="input-fixed bg-white" onChange={handleChange} placeholder="0812xxxx" />
                </div>
              </div>
            </div>

            {/* TOMBOL SIMPAN */}
            <div className="pt-6">
              <button type="submit" disabled={loading} className="w-full py-4 rounded-2xl bg-green-700 text-white font-black text-xl shadow-xl hover:bg-green-800 transition active:scale-95">
                {loading ? 'MENYIMPAN...' : 'KIRIM PENDAFTARAN 🚀'}
              </button>
            </div>
          </form>
        )}
      </div>

      <style jsx>{`
        .label-fixed {
          @apply block text-sm font-black text-gray-900 mb-2 antialiased;
        }
        .input-fixed {
          @apply w-full px-4 py-3 rounded-xl border-2 border-gray-400 bg-white text-gray-900 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition font-bold placeholder-gray-400;
        }
        .input-fixed-mini {
          @apply w-full px-3 py-2 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:border-blue-600 outline-none transition font-bold text-sm placeholder-gray-400;
        }
      `}</style>
    </div>
  );
}