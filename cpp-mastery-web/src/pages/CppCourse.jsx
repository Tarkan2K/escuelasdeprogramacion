import React, { useState, useEffect } from 'react';
import { lessons } from '../data/lessons';
import { BookOpen, CheckCircle, Code, Terminal, ChevronRight, Menu, BrainCircuit, GraduationCap, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ExamPage from './ExamPage';
import LongExamPage from './LongExamPage';

// Intentamos importar Prism de forma segura
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';

function CppCourse() {
    const [currentLessonId, setCurrentLessonId] = useState(0); // Empezar en lección 0
    const [completedLessons, setCompletedLessons] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [view, setView] = useState('lessons'); // 'lessons' | 'exam' | 'long-exam'
    const navigate = useNavigate();

    const currentLesson = lessons.find(l => l.id === currentLessonId);

    useEffect(() => {
        if (typeof Prism !== 'undefined') {
            try {
                Prism.highlightAll();
            } catch (e) {
                console.warn("Prism highlight error:", e);
            }
        }
    }, [currentLessonId]);

    const markComplete = (id) => {
        if (!completedLessons.includes(id)) {
            setCompletedLessons([...completedLessons, id]);
        }
    };

    return (
        <div className="flex h-screen bg-[#0a0a0a] text-gray-100 font-sans overflow-hidden relative selection:bg-purple-500 selection:text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Sidebar */}
            <div className={`relative z-10 bg-gray-900/80 backdrop-blur-md border-r border-white/5 transition-all duration-300 ${isSidebarOpen ? 'w-80' : 'w-0'} flex flex-col`}>
                <div className="p-6 border-b border-gray-700 flex items-center justify-between">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        C++ Mastery
                    </h1>
                </div>

                <div className="p-4 pb-0 space-y-2">
                    <button
                        onClick={() => navigate('/')}
                        className="w-full flex items-center gap-3 p-3 rounded-lg text-sm font-bold bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:border-gray-600 transition-all border mb-4"
                    >
                        <ArrowLeft size={18} />
                        Volver al Inicio
                    </button>

                    <button
                        onClick={() => setView('exam')}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm font-bold transition-all border ${view === 'exam'
                            ? 'bg-red-900/30 border-red-500 text-red-400 shadow-lg shadow-red-900/20'
                            : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:border-gray-600'
                            }`}
                    >
                        <BrainCircuit size={18} />
                        MODO BLITZ (Random)
                    </button>

                    <button
                        onClick={() => setView('long-exam')}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm font-bold transition-all border ${view === 'long-exam'
                            ? 'bg-purple-900/30 border-purple-500 text-purple-400 shadow-lg shadow-purple-900/20'
                            : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:border-gray-600'
                            }`}
                    >
                        <GraduationCap size={18} />
                        EXÁMENES COMPLETOS
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {[...new Set(lessons.map(l => l.phase))].map(phase => {
                        const phaseLessons = lessons.filter(l => l.phase === phase);
                        if (phaseLessons.length === 0) return null;

                        return (
                            <div key={phase}>
                                <h3 className="text-xs uppercase text-gray-500 font-semibold mb-3 tracking-wider">{phase}</h3>
                                <div className="space-y-2">
                                    {phaseLessons.map(lesson => (
                                        <button
                                            key={lesson.id}
                                            onClick={() => {
                                                setCurrentLessonId(lesson.id);
                                                setView('lessons');
                                            }}
                                            className={`w-full text-left p-3 rounded-lg text-sm transition-all flex items-center justify-between group ${currentLessonId === lesson.id && view === 'lessons'
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                                                : 'hover:bg-gray-700 text-gray-300'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`p-1.5 rounded-md ${completedLessons.includes(lesson.id) ? 'bg-green-500/20 text-green-400' : 'bg-gray-700 text-gray-400'}`}>
                                                    {completedLessons.includes(lesson.id) ? <CheckCircle size={14} /> : <BookOpen size={14} />}
                                                </div>
                                                <span>{lesson.id}. {lesson.title}</span>
                                            </div>
                                            {currentLessonId === lesson.id && <ChevronRight size={16} />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="absolute top-4 left-4 z-10 p-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 rounded-md backdrop-blur-sm transition-colors"
                >
                    <Menu size={20} />
                </button>

                <div className="flex-1 overflow-y-auto p-8 lg:p-12 max-w-5xl mx-auto w-full">
                    {view === 'exam' ? (
                        <ExamPage />
                    ) : view === 'long-exam' ? (
                        <LongExamPage />
                    ) : currentLesson ? (
                        <LessonView
                            lesson={currentLesson}
                            onComplete={() => markComplete(currentLesson.id)}
                            isCompleted={completedLessons.includes(currentLesson.id)}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            Selecciona una lección para comenzar
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function LessonView({ lesson, onComplete, isCompleted }) {
    const [quizSelected, setQuizSelected] = useState(null);
    const [code, setCode] = useState(lesson.codeChallenge?.initialCode || '');
    const [feedback, setFeedback] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    // Reset state when lesson changes
    useEffect(() => {
        setQuizSelected(null);
        setCode(lesson.codeChallenge?.initialCode || '');
        setFeedback(null);
        setShowSuccess(false);
        setShowSolution(false);
    }, [lesson.id]);

    useEffect(() => {
        if (typeof Prism !== 'undefined') {
            try {
                Prism.highlightAll();
            } catch (e) { }
        }
    }, [lesson.id, feedback, showSolution]);

    const handleQuizSubmit = (index) => {
        setQuizSelected(index);
        if (index === lesson.quiz.correctAnswer) {
            // If there is no code challenge, completing the quiz completes the lesson
            if (!lesson.codeChallenge) {
                setShowSuccess(true);
                onComplete();
            }
        }
    };

    const runCode = () => {
        if (!lesson.codeChallenge) return;

        if (lesson.codeChallenge.expectedRegex.test(code)) {
            setFeedback({ type: 'success', msg: '¡Código Correcto! Has dominado este concepto.' });
            setShowSuccess(true);
            onComplete();
        } else {
            setFeedback({ type: 'error', msg: 'Mmm, algo no cuadra. Revisa la sintaxis e inténtalo de nuevo.' });
        }
    };

    return (
        <div className="space-y-8 pb-20">
            {/* Header */}
            <div className="border-b border-gray-800 pb-6">
                <div className="flex items-center gap-2 text-purple-400 mb-2 text-sm font-medium tracking-wider uppercase">
                    <Terminal size={16} />
                    {lesson.phase}
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">{lesson.title}</h1>
                <p className="text-xl text-gray-400 leading-relaxed">{lesson.description}</p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-purple-300 prose-a:text-blue-400 prose-code:text-purple-300 prose-pre:bg-[#1a1a1a] prose-pre:border prose-pre:border-gray-800">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {lesson.content}
                </ReactMarkdown>
            </div>


            {/* Interactive Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

                {/* Quiz */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm h-fit">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="text-purple-400" size={20} />
                        Comprobación de Conocimientos
                    </h3>
                    <p className="text-gray-300 mb-6">{lesson.quiz.question}</p>
                    <div className="space-y-3">
                        {lesson.quiz.options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleQuizSubmit(idx)}
                                className={`w-full text-left p-4 rounded-lg transition-all border ${quizSelected === idx
                                    ? idx === lesson.quiz.correctAnswer
                                        ? 'bg-green-500/20 border-green-500 text-green-300'
                                        : 'bg-red-500/20 border-red-500 text-red-300'
                                    : 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-600'
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Code Challenge - Only show if exists */}
                {lesson.codeChallenge && (
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm flex flex-col">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Code className="text-blue-400" size={20} />
                            Desafío de Código
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">{lesson.codeChallenge.instruction}</p>

                        <div className="flex-1 relative group mb-4">
                            <textarea
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                className="w-full h-48 bg-[#1e1e1e] text-gray-300 font-mono text-sm p-4 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none"
                                spellCheck="false"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={runCode}
                                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-blue-900/30"
                            >
                                Ejecutar Código
                            </button>
                            <button
                                onClick={() => setShowSolution(!showSolution)}
                                className="px-4 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold rounded-lg transition-colors"
                            >
                                {showSolution ? 'Ocultar' : 'Ver Solución'}
                            </button>
                        </div>

                        {feedback && (
                            <div className={`mt-4 p-3 rounded-lg text-sm ${feedback.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                {feedback.msg}
                            </div>
                        )}

                        {/* Solution Box */}
                        {showSolution && lesson.codeChallenge.solution && (
                            <div className="mt-6 p-4 bg-gray-900/80 rounded-lg border border-gray-600 animate-in fade-in slide-in-from-top-2">
                                <p className="text-xs text-gray-400 uppercase font-bold mb-2">Solución Correcta:</p>
                                <pre className="text-sm text-green-300 font-mono overflow-x-auto">
                                    <code>{lesson.codeChallenge.solution}</code>
                                </pre>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {
                showSuccess && (
                    <div className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl animate-bounce flex items-center gap-3">
                        <CheckCircle size={24} />
                        <div>
                            <p className="font-bold">¡Lección Completada!</p>
                            <p className="text-sm text-green-100">Continúa con la siguiente.</p>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default CppCourse;
