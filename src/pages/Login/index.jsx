import { useAuth } from "@/contexts/AuthContext";
import { AuthForm } from '@/components/AuthForm';

export const Login = () => {
    const { handleLogin, error } = useAuth();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <AuthForm onSubmit={handleLogin} error={error} buttonText="Login" isSignup={false}/>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
    );
};