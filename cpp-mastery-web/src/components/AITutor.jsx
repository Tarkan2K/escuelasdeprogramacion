import React, { useState, useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import { MessageSquare, X, Send, Bot, User, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-cpp';

const AITutor = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: '/api/chat',
    });
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
    }, [messages, isOpen]);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-gradient-to-r from-purple-900/50 to-blue-900/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg">
                                    <Bot size={18} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Tutor IA</h3>
                                    <p className="text-xs text-purple-300 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        En línea
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.length === 0 && (
                                <div className="text-center mt-10 opacity-50">
                                    <Terminal size={48} className="mx-auto mb-4 text-purple-500/50" />
                                    <p className="text-sm text-gray-400">
                                        Hola, soy tu Tutor de C++. <br />
                                        Pregúntame sobre punteros, referencias, o por qué `void main` es ilegal.
                                    </p>
                                </div>
                            )}

                            {messages.map((m) => (
                                <div
                                    key={m.id}
                                    className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${m.role === 'user' ? 'bg-gray-700' : 'bg-purple-900/50 border border-purple-500/30'
                                        }`}>
                                        {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                                    </div>
                                    <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${m.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-tr-none'
                                            : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                                        }`}>
                                        <div className="prose prose-invert prose-sm max-w-none">
                                            {/* Simple markdown rendering could be added here or just text */}
                                            {m.content.split('\n').map((line, i) => (
                                                <p key={i} className="mb-1 last:mb-0">{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center">
                                        <Bot size={14} />
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-black/40 backdrop-blur-md">
                            <div className="relative flex items-center">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Escribe tu duda de C++..."
                                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-gray-600"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 p-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white rounded-lg transition-colors"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30 border border-white/10 text-white hover:shadow-purple-500/50 transition-all"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
};

export default AITutor;
