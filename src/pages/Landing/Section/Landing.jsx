import { Button } from "@/components/Button";

export const LandingSection = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center pt-20'>
            <div className='w-full min-h-[60vh] flex '>
                <div className='w-[50%] space-y-11 pt-10'>
                    <div>
                        <h1 className="font-semibold text-heading text-blue">Sekali Unggah<span className="font-semibold text-black">,</span></h1>
                        <h1 className="font-semibold text-heading text-black">Dapatkan Hasilnya!</h1>
                    </div>
                    <p className="text-sub-heading"><strong>Radiance</strong> membantu Anda mengidentifikasi masalah kulit secara akurat. Cukup unggah foto, dan dapatkan hasil analisis instan serta rekomendasi perawatan yang tepat.</p>
                    <Button onClick={""} className={"w-[65%] py-2"}>
                        Deteksi Sekarang
                    </Button>
                </div>
                <div className='w-[50%] '>
                    <img src="/img/Beranda/landing.webp" alt="" className=" h-full w-full " />
                </div>
            </div>
        </div>
    );
};