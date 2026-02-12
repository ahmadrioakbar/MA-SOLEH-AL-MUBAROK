'use server'

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function tambahNilai(formData: FormData) {
  
  // 1. Ambil data yang diketik di formulir
  const nama = formData.get('nama') as string;
  const mapel = formData.get('mapel') as string;
  const nilai = formData.get('nilai') as string;

  // 2. Masukkan ke tabel 'nilai_siswa'
  const { error } = await supabase.from('nilai_siswa').insert({
    nama: nama,
    pelajaran: mapel,
    nilai: parseInt(nilai),
  });

  // 3. Cek kalau ada error
  if (error) {
    console.log('Gagal menyimpan:', error);
    return { message: 'Gagal menyimpan data' };
  }

  // 4. Refresh halaman utama
  revalidatePath('/');
  
  // 5. Kembali ke halaman utama
  redirect('/');
}