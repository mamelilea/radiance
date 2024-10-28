import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const KataMerekaSection = () => {

    const slides = [
        {
            id: 1,
            img: "https://picsum.photos/200/300",
            desc: "Radiance bener-bener ngebantu! Cuma upload foto, terus langsung dapet analisis kulit dan saran perawatan yang pas. Kulitku jadi jauh lebih baik setelah ngikutin rekomendasinya. Simpel dan praktis banget!",
            name: "John Doe",
            age: "25",
        },
        {
            id: 2,
            img: "https://picsum.photos/200/300",
            desc: "Radiance bener-bener bikin semuanya lebih mudah! Tinggal upload foto, langsung dapat analisis detail tentang kondisi kulit, plus saran perawatan yang cocok. Kulitku terasa lebih sehat dan glowing setelah coba rekomendasinya. Praktis dan hasilnya nyata banget!",
            name: "Vadila Tana",
            age: "25",
        },
        {
            id: 3,
            img: "https://picsum.photos/200/300",
            desc: "Pakai Radiance beneran bikin perawatan kulit jadi gampang! Cuma perlu unggah foto, langsung dapet analisis kulit yang akurat dan saran perawatan yang sesuai. Setelah coba, kulitku jauh lebih bersih dan terawat. Sangat praktis dan hasilnya cepet kelihatan!",
            name: "Joseph Roro",
            age: "25",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide((prevSlide) => prevSlide - 1);
        }
    };

    return (
        <div className='min-h-screen w-[90%] flex flex-col items-center justify-start z-20 relative '>
            <h1 className='text-heading text-blue font-semibold mb-2'>Kata <span className='text-black'>Mereka</span></h1>
            <hr className='w-28 h-2 bg-blue rounded-full mb-5' />
            <p className='text-sub-heading text-center w-[45%]'>Pengalaman nyata dari mereka yang telah menemukan solusi kulitnya bersama Radiance</p>
            <div className='w-full h-full mt-10 flex flex-col items-center'>
                <div className='relative flex justify-center w-full'>
                    <div className="flex items-center justify-center w-[80%] h-[50vh] bg-white rounded-2xl shadow-xl px-10 py-14">
                        <div className="w-full h-full flex">
                            <div className='w-3/12 h-full flex justify-center items-center'>
                                <img src={slides[currentSlide].img} alt="" className='rounded-full w-40 h-40' />
                            </div>
                            <div className=' text-sub-heading w-9/12 h-full flex flex-col items-start justify-between px-3 py-10'>
                                <p>"{slides[currentSlide].desc}"</p>
                                <div>
                                    <h2 className="text-xl font-bold text-blue mt-4">{slides[currentSlide].name}</h2>
                                    <span>{slides[currentSlide].age} tahun</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={prevSlide}
                        className={` text-7xl absolute top-1/2 left-0 transform -translate-y-1/2  text-soft-grey p-2 rounded-full ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        disabled={currentSlide === 0}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className=" text-7xl absolute top-1/2 right-0 transform -translate-y-1/2  text-soft-grey p-2 rounded-full"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};