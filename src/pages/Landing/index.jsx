import { LandingSection } from "./Section/Landing";
import { LayananSection } from "./Section/Layanan";
import { KataMerekaSection } from "./Section/KataMereka";

export const Landing = () => {
  return (
    <div className='min-h-screen bg-soft-blue w-full flex flex-col items-center font-poppins py-32'>
      <div className="w-[85%]">
        <LandingSection />
        <LayananSection />
      </div>
      <div className="w-full flex mt-20 justify-center relative items-center">
        <div className='w-[26%] rounded-l-[5rem] h-[80%] mt-14 bg-blue  right-0 z-10 absolute'></div>
        <KataMerekaSection />
      </div>
    </div>
  );
};