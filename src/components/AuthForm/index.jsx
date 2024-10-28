import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from '../../data/AuthSchema'
import { InputField } from '@/components/InputField';
import { Button } from '@/components/Button';

export const AuthForm = ({ onSubmit, error, buttonText, isSignup }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(authSchema(isSignup)),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto mt-10">
            {isSignup && (
                <InputField label="Username" name="username" register={register} error={errors.username} />
            )}
            <InputField label="Email" name="email" register={register} error={errors.email} />
            <InputField label="Password" name="password" type="password" register={register} error={errors.password} />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <Button type="submit" className="mt-4">{buttonText}</Button>
        </form>
    );
};