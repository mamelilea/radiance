import { useAuth } from "@/contexts/AuthContext";
import { AuthForm } from '@/components/AuthForm';

export const Login = () => {
    const { handleLogin, error } = useAuth();

    return (
        <div className="h-screen flex items-center justify-center w-full font-poppins">
            <div className="w-1/2 bg-blue h-full flex flex-col items-center justify-center gap-10">
                <img src="/img/logo.webp" alt="" className="w-[40%] " />
                <h3 className="text-white font-bold text-3xl">For Healthy Skin</h3>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center gap-4">
                <h1 className="text-black font-bold text-5xl">Login</h1>
                <h2 className="text-black-grey font-semibold text-2xl">Selamat Datang!</h2>
                <AuthForm onSubmit={handleLogin} error={error} buttonText="Login" isRegister={false} />
                <p>Don't have an account? <a href="/register">Sign Up</a></p>
            </div>
        </div>
    );
};