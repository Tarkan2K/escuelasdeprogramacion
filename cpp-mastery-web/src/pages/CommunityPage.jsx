import React from 'react';
import { Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CommunityPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 mx-auto mb-6">
                    <Users size={40} className="text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Comunidad
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                    Próximamente: Un espacio para conectar, compartir y crecer juntos.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-sm font-medium"
                >
                    Volver al Inicio
                </button>
            </div>
        </div>
    );
};

export default CommunityPage;
