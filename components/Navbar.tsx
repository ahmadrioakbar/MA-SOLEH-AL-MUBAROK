"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
// IMPORT KOMPONEN CLERK
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO & NAMA SEKOLAH */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer z-50 relative group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-105 duration-300">
            <Image 
              src="/logo.png" 
              alt="Logo Sekolah"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-xl md:text-2xl font-bold text-white tracking-wider">
            MA <span className="text-green-500">SOLEH AL MUBAROK</span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/#beranda" className="text-gray-300 hover:text-green-400 transition hover:scale-105 font-medium text-sm tracking-wide">Beranda</Link>
          <Link href="/#profil" className="text-gray-300 hover:text-green-400 transition hover:scale-105 font-medium text-sm tracking-wide">Profil</Link>
          <Link href="/#keunggulan" className="text-gray-300 hover:text-green-400 transition hover:scale-105 font-medium text-sm tracking-wide">Keunggulan</Link>
          <Link href="/#galeri" className="text-gray-300 hover:text-green-400 transition hover:scale-105 font-medium text-sm tracking-wide">Galeri</Link>
          
          {/* (Tombol Kuning Sudah Dihapus Disini) */}

          {/* LOGIKA LOGIN */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition shadow-lg shadow-green-500/30 cursor-pointer">
                Login Siswa
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

        </div>

        {/* TOMBOL HAMBURGER (HP) */}
        <div className="md:hidden z-50 flex items-center gap-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MENU MOBILE */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
            <Link href="/#beranda" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-green-400 transition">Beranda</Link>
            <Link href="/#profil" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-green-400 transition">Profil</Link>
            <Link href="/#keunggulan" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-green-400 transition">Keunggulan</Link>
            <Link href="/#galeri" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-green-400 transition">Galeri</Link>
            
            {/* (Tombol Kuning HP Sudah Dihapus Disini) */}

            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold text-xl transition">
                  Login Siswa
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        )}
      </div>
    </nav>
  );
}