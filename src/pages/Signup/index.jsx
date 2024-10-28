import { useAuth } from "@/contexts/AuthContext";
import { AuthForm } from '@/components/AuthForm';

export const Signup = () => {
    const { handleSignup, error } = useAuth();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <AuthForm onSubmit={handleSignup} error={error} buttonText="Sign Up" isSignup={true}/>

            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};