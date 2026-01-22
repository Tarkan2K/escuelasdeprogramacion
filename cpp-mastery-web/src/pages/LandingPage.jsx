import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Terminal, Cpu, Globe, Lock } from 'lucide-react';

const LandingPage = () => {
    const navigate = useNavigate();

    const languages = [
        {
            id: 'cpp',
            name: 'C++',
            icon: <Terminal size={48} />,
            description: 'Domina el lenguaje de alto rendimiento por excelencia.',
            status: 'active',
            color: 'from-blue-500 to-purple-600',
            glow: 'shadow-[0_0_30px_rgba(59,130,246,0.5)]'
        },
        {
            id: 'python',
            name: 'Python',
            icon: <Cpu size={48} />,
            description: 'Inteligencia Artificial y Data Science.',
            status: 'locked',
            color: 'from-yellow-500 to-orange-600',
            glow: 'shadow-none'
        },
        {
            id: 'rust',
            name: 'Rust',
            icon: <Code2 size={48} />,
            description: 'Seguridad de memoria y concurrencia sin miedo.',
            status: 'locked',
            color: 'from-orange-700 to-red-600',
            glow: 'shadow-none'
        },
        {
            id: 'js',
            name: 'JavaScript',
            icon: <Globe size={48} />,
            description: 'Desarrollo web moderno con React y Node.',
            status: 'locked',
            color: 'from-yellow-300 to-yellow-500',
            glow: 'shadow-none'
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans selection:bg-purple-500 selection:text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
            </div>

            {/* Navbar */}
            <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5 bg-black/20 backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                        <Code2 size={20} className="text-white" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        ESCUELAS DE PROGRAMACIÓN
                    </span>
                </div>
                <div className="flex gap-6 text-sm font-medium text-gray-400">
                    <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Cursos</button>
                    <button onClick={() => navigate('/community')} className="hover:text-white transition-colors">Comunidad</button>
                    <button onClick={() => navigate('/resources')} className="hover:text-white transition-colors">Recursos</button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
                <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wide uppercase">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    Nueva Plataforma Educativa
                </div>

                <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
                        Conocimiento del mundo
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
                        para el mundo
                    </span>
                </h1>

                <p className="max-w-2xl text-lg text-gray-400 mb-12 leading-relaxed">

                </p>

                {/* Language Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                    {languages.map((lang) => (
                        <div
                            key={lang.id}
                            onClick={() => lang.status === 'active' && navigate('/cpp')}
                            className={`group relative p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300
                ${lang.status === 'active'
                                    ? 'cursor-pointer hover:border-purple-500/50 hover:bg-white/10 hover:-translate-y-1 ' + lang.glow
                                    : 'opacity-50 cursor-not-allowed grayscale hover:grayscale-0 hover:opacity-75'
                                }
              `}
                        >
                            {lang.status === 'locked' && (
                                <div className="absolute top-4 right-4 text-gray-500 group-hover:text-white transition-colors">
                                    <Lock size={16} />
                                </div>
                            )}

                            <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${lang.color} flex items-center justify-center shadow-lg`}>
                                {lang.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                                {lang.name}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {lang.description}
                            </p>

                            {lang.status === 'active' && (
                                <div className="mt-6 flex items-center text-sm font-semibold text-purple-400 group-hover:text-purple-300">
                                    Entrar al Curso <span className="ml-2">→</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
