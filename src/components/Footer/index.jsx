import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

export const Footer = () => {
  return (
    <div className='bg-blue h-32 flex items-center justify-center w-full font-poppins'>
      <div className='w-[80%] h-full flex items-center justify-start px-14 gap-32'>
        <div className='h-full py-7'>
          <img src="/img/logo.webp" alt="Logo Radiance" className='h-full' />
        </div>
        <div className='text-white font-semibold flex gap-16 text-sm'>
          <ul className='gap-3 flex flex-col'>
            <li>DETEKSI KULIT</li>
            <li>SARAN PERAWATAN</li>
            <li>VISUALISASI HASIL</li>
          </ul>

          <ul className='gap-3 flex flex-col'>
            <li>BIBLIOTEK</li>
            <li>KONSULTASI</li>
            <li>RIWAYAT DETEKSI</li>
          </ul>

          <ul className='gap-3 flex flex-col'>
            <li>TENTANG KAMI</li>
            <li>KONTAK KAMI</li>
          </ul>
        </div>
      </div>
      <div className='w-[20%] py-10 flex items-center justify-center gap-10 border-l-2 border-l-white h-[60%] text-white font-semibold'>
        <a href="" >
          <CiInstagram className='size-10' />
        </a>
        <a href="" >
          <CiLinkedin className='size-10' />
        </a>
      </div>
    </div>
  );
};