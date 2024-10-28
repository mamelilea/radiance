import React from 'react';

export const DetailDeteksiKulit = ({ name, description, category }) => {
    return (
        <div className='w-full min-h-screen flex font-poppins flex-col justify-center items-center pt-28 bg-blue'>
            <div className='flex flex-col items-center justify-center w-full bg-blue pb-20'>
                <h2 className='text-heading text-white'>Deteksi Kulit</h2>
                <p className='text-white text-2xl mt-2 '>Analisis cepat masalah kulit berdasarkan</p>
                <p className='text-white text-2xl mb-16'>gambar yang Anda unggah</p>
                <div className='w-[80%]'>
                    <ul className='w-full flex justify-between '>
                        <li className='flex items-center justify-center flex-col gap-5 '>
                            <img src="" alt="" className='md:w-32 md:h-28 rounded-full bg-soft-grey' />
                            Unggah Gambar
                        </li>
                        <li className='flex items-center justify-center'>
                            <img src="/public/icons/Deteksi/arrow.png" alt="" />
                        </li>
                        <li className='flex items-center justify-center flex-col gap-5'>
                            <img src="" alt="" className='md:w-32 md:h-28 rounded-full bg-soft-grey' />
                            Analisis Otomatis
                        </li>
                        <li className='flex items-center justify-center'>
                            <img src="/public/icons/Deteksi/arrow.png" alt="" />
                        </li>
                        <li className='flex items-center justify-center flex-col gap-5'>
                            <img src="" alt="" className='md:w-32 md:h-28 rounded-full bg-soft-grey' />
                            Hasil Deteksi
                        </li>
                        <li className='flex items-center justify-center'>
                            <img src="/public/icons/Deteksi/arrow.png" alt="" />
                        </li>
                        <li className='flex items-center justify-center flex-col gap-5'>
                            <img src="" alt="" className='md:w-32 md:h-28 rounded-full bg-soft-grey' />
                            Saran Perawatan
                        </li>
                        <li className='flex items-center justify-center'>
                            <img src="/public/icons/Deteksi/arrow.png" alt="" />
                        </li>
                        <li className='flex items-center justify-center flex-col gap-5'>
                            <img src="" alt="" className='md:w-32 md:h-28 rounded-full bg-soft-grey' />
                            Visualisasi Hasil
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full bg-white  flex flex-col justify-center items-center relative py-20'>
                {/* star absolute start */}
                <img src="/public/img/Deteksi/star.png" alt="" className='absolute bottom-0 left-20' />
                <img src="/public/img/Deteksi/star.png" alt="" className='absolute top-60 right-40' />
                <img src="/public/img/Deteksi/star.png" alt="" className='absolute top-64 right-20' />
                {/* star absolute end */}
                <h2 className='font-semibold text-title'>Unggah gambar atau video</h2>
                <h2 className='font-semibold text-title'>untuk mendeteksi masalah kulit</h2>
                {/* hasil img nya */}
                <div className='mt-14 w-[45vw] h-[60vh] bg-white flex items-center justify-center flex-col shadow-2xl rounded-xl p-7'>
                    <img src="/img/Deteksi/imgDummy.png" alt="" className='w-full h-full' />
                </div>
            </div>
            {/* detail */}
            <div className='w-full bg-white h-full py-20 flex items-center justify-center'>
                <div className='w-[90%] space-y-5 text-xl'>
                    <h2 className='text-blue text-heading mb-14'>Hasil Deteksi</h2>
                    <h3 className='font-semibold text-title'>Ringworm (Tinea Corporis)</h3>
                    <p className=''>
                        Ringworm adalah infeksi kulit yang disebabkan oleh jamur, ditandai dengan munculnya bercak merah melingkar, gatal, dan terkadang bersisik pada kulit. Infeksi ini bisa terjadi pada berbagai bagian tubuh, seperti kulit kepala, tubuh, kaki, atau kuku. Meskipun namanya "ringworm," kondisi ini tidak disebabkan oleh cacing, melainkan jamur dermatofit. Penyakit ini umum terjadi, terutama pada anak-anak dan orang yang sering kontak dengan hewan atau lingkungan lembap.

                    </p>
                    <h3 className='text-title font-semibold'>Kategori</h3>
                    <p>Menular</p>
                    <table className=''>
                        <tbody>
                            {/* <ul className='pl-7'>
                            <li className=' list-disc'> */}
                            <tr>
                                <td className='font-bold pr-14'>
                                    <ul className="list-disc pl-5">
                                        <li>Kontak langsung</li>
                                    </ul>
                                </td>
                                <td>: test</td>
                            </tr>
                            {/* </li>
                            <li className='list-disc'> */}
                            <tr>
                                <td className='font-bold pr-14'>
                                    <ul className="list-disc pl-5">
                                        <li>Kontak tidak langsung</li>
                                    </ul>
                                </td>
                                <td>: test</td>
                            </tr>
                            {/* </li>
                            <li className='list-disc'> */}
                            <tr>
                                <td className='font-bold pr-14'>
                                    <ul className="list-disc pl-5">
                                        <li>
                                            Kontak dengan hewan
                                        </li>
                                    </ul>
                                </td>
                                <td>: test</td>
                            </tr>
                            {/* </li>
                        </ul> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};