import { useNavigate } from "react-router-dom";
export const LayananCard = ({ icon, layanan, desc, onClick }) => {
    const navigate = useNavigate();
    return (
        <div className="w-full bg-white rounded-lg flex flex-col items-center justify-center text-center p-10 shadow-xl" onClick={() => navigate(onClick)}>
            <img src={icon} alt="" />
            <h3 className="font-semibold mt-2 mb-4 text-xl">{layanan}</h3>
            <p>{desc}</p>   
        </div>
    );
};