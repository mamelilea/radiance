import { useAuth } from "@/contexts/AuthContext";
import { AuthForm } from '@/components/AuthForm';

export const Register = () => {
    const { handleRegister, error } = useAuth();

    return (
        <div className="h-screen flex items-center justify-center w-full font-poppins">
            <div className="w-1/2 bg-blue h-full flex flex-col items-center justify-center gap-10">
                <img src="/img/logo.webp" alt="" className="w-[40%] "/>
                <h3 className="text-white font-bold text-3xl">For Healthy Skin</h3>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center gap-4">
                <h1 className="text-black font-bold text-5xl">Register</h1>
                <h2 className="text-black-grey font-semibold text-2xl">Yuk Daftarkan Akun Dibawah!</h2>
                <AuthForm onSubmit={handleRegister} error={error} buttonText="Register" isRegister={true} />
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};