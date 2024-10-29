import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from '../../data/AuthSchema'
import { InputField } from '@/components/InputField';
import { Button } from '@/components/Button';

export const AuthForm = ({ onSubmit, error, buttonText, isRegister }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(authSchema(isRegister)),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto mt-10">
            {isRegister && (
                    <div className='w-full flex justify-between gap-5'>
                        <InputField label="First Name" name="first_name" register={register} error={errors.first_name} />
                        <InputField label="Last Name" name="last_name" register={register} error={errors.last_name} />
                    </div>
            )}
            <InputField label="Email" name="email" register={register} error={errors.email} />
            <InputField label="Password" name="password" type="password" register={register} error={errors.password} />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <Button type="submit" className="mt-4 py-3 bg-black-grey w-full ">{buttonText}</Button>
        </form>
    );
};