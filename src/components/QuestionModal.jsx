import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, MousePointer2 } from 'lucide-react';

const QuestionModal = ({ category, question, onResult, onClose }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 20 }}
                    className="glass-panel w-full max-w-2xl p-12 relative z-10 border-2 border-nfl-gold/30"
                >
                    <div className="text-center mb-8">
                        <span className="text-nfl-gold font-bold uppercase tracking-widest text-sm">
                            {category} • ${question.points}
                        </span>
                    </div>

                    <h2 className="text-3xl font-bold text-center mb-12 leading-tight">
                        {question.question}
                    </h2>

                    <div className="flex flex-col items-center gap-8">
                        {!showAnswer ? (
                            <button
                                onClick={() => setShowAnswer(true)}
                                className="group flex flex-col items-center gap-4 transition-all"
                            >
                                <div className="w-16 h-16 rounded-full bg-nfl-gold flex items-center justify-center text-secondary-blue group-hover:scale-110 transition-transform">
                                    <MousePointer2 size={32} />
                                </div>
                                <span className="text-nfl-gold font-bold uppercase tracking-widest text-sm">
                                    Click to reveal answer
                                </span>
                            </button>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col items-center gap-12 w-full"
                            >
                                <div className="text-center">
                                    <div className="text-text-secondary text-sm uppercase font-bold mb-4 tracking-tighter">Answer</div>
                                    <div className="text-4xl font-black text-white bg-white/5 py-4 px-8 rounded-xl border border-white/10">
                                        {question.answer}
                                    </div>
                                </div>

                                <div className="flex gap-4 w-full">
                                    <button
                                        onClick={() => onResult(true)}
                                        className="flex-1 flex items-center justify-center gap-2 bg-turf-green hover:bg-green-600 text-white py-4 rounded-xl font-bold text-xl transition-colors"
                                    >
                                        <Check size={28} /> CORRECT
                                    </button>
                                    <button
                                        onClick={() => onResult(false)}
                                        className="flex-1 flex items-center justify-center gap-2 bg-nfl-red hover:bg-red-600 text-white py-4 rounded-xl font-bold text-xl transition-colors"
                                    >
                                        <X size={28} /> INCORRECT
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default QuestionModal;
