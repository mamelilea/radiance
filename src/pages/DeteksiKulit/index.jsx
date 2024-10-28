import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Swal from 'sweetalert2';
import { Button } from '@/components/Button';

export const DeteksiKulit = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const selectedFile = acceptedFiles[0];

        if (selectedFile && selectedFile.type.startsWith('image/')) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setError(null);
        } else {
            setFile(null);
            setPreview(null);
            setError('File yang diunggah harus berupa gambar.');
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: false
    });


    const handleSubmit = () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            // Lakukan pengiriman ke server atau database
            // fetch('/your-endpoint', {
            //   method: 'POST',
            //   body: formData
            // })
            //   .then(response => response.json())
            //   .then(data => {
            //     console.log('File uploaded successfully:', data);
            //   })
            //   .catch(error => {
            //     console.error('Error uploading file:', error);
            //   });

            setTimeout(() => {
                Swal.fire({
                    title: 'Berhasil!',
                    text: 'Foto berhasil diunggah.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    setFile(null);
                    setPreview(null);
                });

                console.log('File siap dikirim:', file);
            }, 1000);
        }
    };


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
            <div className='w-full bg-white flex flex-col justify-center items-center relative py-20'>
                {/* star absolute start */}
                <img src="/public/img/Deteksi/star.png" alt="" className='absolute bottom-0 left-10' />
                <img src="/public/img/Deteksi/star.png" alt="" className='absolute top-60 right-40' />
                <img src="/public/img/Deteksi/star.png" alt="" className='absolute top-64 right-20' />
                {/* star absolute end */}
                <h2 className='font-semibold text-title'>Unggah gambar atau video</h2>
                <h2 className='font-semibold text-title'>untuk mendeteksi masalah kulit</h2>
                <div className='mt-14 w-[45vw] h-[60vh] bg-white flex items-center justify-center flex-col shadow-2xl rounded-xl gap-6 '>
                    <div
                        {...getRootProps()}
                        className={`w-[70%] h-[60%] p-6 flex items-center justify-center border-2 border-dashed rounded-lg ${isDragActive ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-soft-blue'
                            } text-center cursor-pointer`}
                    >
                        <input {...getInputProps()} />
                        {preview ? (
                            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                            <div className='flex flex-col items-center justify-center gap-6'>
                                <img src="/icons/Deteksi/upload.png" alt="" />
                                <p className="text-gray-500">Jatuhkan atau pilih file disini</p>
                            </div>
                        )}

                    </div>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    <Button onClick={handleSubmit} className={"px-10 py-3 bg-blue text-white rounded-md"} disabled={!file}>
                        Deteksi
                    </Button>
                </div>
            </div>
        </div>
    );
};