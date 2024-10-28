import { LayananCard } from "@/components/Card/LayananCard";
import { dataLayanan } from "@/constans";

export const LayananSection = () => {
    
    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-14'>
            <h1 className='text-heading font-semibold'>Layanan apa di <span className='text-blue'>Radiance?</span></h1>
            <div className="grid grid-cols-3 gap-4 p-5">
                {dataLayanan.map((item, index) => (
                    <LayananCard
                        key={index}
                        icon={item.icon}
                        layanan={item.layanan}
                        desc={item.desc}
                        onClick={item.onClick}
                    />
                ))}
            </div>
        </div>
    );
};