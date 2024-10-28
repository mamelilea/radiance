import React from 'react';

export const InputField = ({ label, type = "text", name, register, error }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700">{label}</label>
            <input
                type={type}
                {...register(name)}
                className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
};