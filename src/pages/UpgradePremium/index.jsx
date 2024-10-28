import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Alert } from "@/components/Alert";

export const UpgradePremium = () => {
    const { user, upgradeToPremium } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const handleUpgrade = async () => {
        setIsLoading(true);

        try {
            upgradeToPremium();
            Alert.showSuccess('Upgrade ke premium berhasil! Selamat menikmati fitur premium.');
        } catch (error) {
            Alert.showError('Upgrade gagal. Silakan coba lagi nanti.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Upgrade ke Premium</h2>
                <p className="text-gray-600 text-center mb-4">
                    Nikmati semua fitur premium dengan meng-upgrade akun Anda!
                </p>

                <button
                    onClick={handleUpgrade}
                    disabled={isLoading}
                    className={`w-full py-2 px-4 rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    {isLoading ? 'Memproses...' : 'Upgrade Sekarang'}
                </button>
            </div>
        </div>
    );
};