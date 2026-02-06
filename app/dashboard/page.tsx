"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const [siswa, setSiswa] = useState<any>(null);
  const [nilai, setNilai] = useState<any[]>([]); // TEMPAT MENAMPUNG NILAI

  // Form Data
  const [nama, setNama] = useState("");
  const [nis, setNis] = useState("");
  const [kelas, setKelas] = useState("");

  useEffect(() => {
    if (user) {
      cekDataSiswa();
    }
  }, [user]);

  async function cekDataSiswa() {
    setLoading(true);
    // 1. Ambil Data Siswa
    const { data: dataSiswa, error } = await supabase
      .from('students')
      .select('*')
      .eq('clerk_user_id', user?.id)
      .single();

    if (dataSiswa) {
      setSiswa(dataSiswa);
      
      // 2. KALAU SISWA ADA, AMBIL JUGA NILAINYA!
      const { data: dataNilai } = await supabase
        .from('grades')
        .select('*')
        .eq('student_id', dataSiswa.id); // Ambil nilai milik ID siswa ini saja

      if (dataNilai) {
        setNilai(dataNilai);
      }
    }
    setLoading(false);
  }

  async function simpanData() {
    if (!nama || !nis || !kelas) return alert("Mohon isi semua data!");
    
    const { error } = await supabase
      .from('students')
      .insert([{ 
          full_name: nama, 
          nis: nis, 
          class: kelas,
          clerk_user_id: user?.id 
        }]);

    if (error) {
      alert("Gagal menyimpan: " + error.message);
    } else {
      alert("Data berhasil disimpan!");
      cekDataSiswa();
    }
  }

  if (!isLoaded) return <div className="p-10 text-center">Memuat...</div>;
  if (!user) return <div className="p-10 text-center">Silakan Login!</div>;

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-10 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">👋 Halo, {siswa ? siswa.full_name : user.firstName}!</h1>
          <p className="text-gray-500 mt-2">Selamat datang di Sistem Informasi Akademik.</p>
        </div>

        {loading ? (
          <p>Sedang mengecek database...</p>
        ) : siswa ? (
          <div className="space-y-8">
            {/* KARTU BIODATA */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100">
              <h2 className="text-xl font-bold text-green-700 mb-4">Biodata Siswa</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><p className="text-sm text-gray-400">Nama Lengkap</p><p className="text-lg font-semibold">{siswa.full_name}</p></div>
                <div><p className="text-sm text-gray-400">Nomor Induk (NIS)</p><p className="text-lg font-semibold">{siswa.nis}</p></div>
                <div><p className="text-sm text-gray-400">Kelas</p><p className="text-lg font-semibold">{siswa.class}</p></div>
                <div><p className="text-sm text-gray-400">Status</p><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Aktif</span></div>
              </div>
            </div>

            {/* KARTU NILAI (RAPOR) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
              <h2 className="text-xl font-bold text-blue-700 mb-6">📝 Hasil Studi (Rapor)</h2>
              
              {nilai.length > 0 ? (
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-4 text-sm font-semibold text-gray-600">Mata Pelajaran</th>
                        <th className="p-4 text-sm font-semibold text-gray-600">Semester</th>
                        <th className="p-4 text-sm font-semibold text-gray-600">Nilai</th>
                        <th className="p-4 text-sm font-semibold text-gray-600">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {nilai.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition">
                          <td className="p-4 font-medium text-gray-800">{item.subject}</td>
                          <td className="p-4 text-gray-500">{item.semester}</td>
                          <td className="p-4 font-bold text-blue-600">{item.score}</td>
                          <td className="p-4">
                            {item.score >= 90 ? <span className="text-green-600 font-bold">A</span> : 
                             item.score >= 80 ? <span className="text-blue-600 font-bold">B</span> : 
                             <span className="text-red-500 font-bold">C</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-6 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-center">
                  <p className="text-gray-400">Belum ada data nilai yang diinput.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          // FORMULIR (Biarkan kode formulir yang lama tetap disini)
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
             {/* ... (Kode formulir pendaftaran sama seperti sebelumnya) ... */}
             <div className="text-center text-gray-500">Silakan Refresh Halaman jika form tidak muncul.</div>
          </div>
        )}
      </div>
    </main>
  );
}