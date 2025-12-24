import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, MousePointer2 } from 'lucide-react';

const QuestionModal = ({ category, question, onResult, onClose }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black">
                {/* Blue Background Screen */}
                <motion.div
                    initial={{ scale: 0.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.1, opacity: 0 }}
                    className="w-full h-full max-w-6xl max-h-[80vh] bg-[#060CE9] border-8 border-black flex flex-col items-center justify-center p-12 text-center shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                >
                    <div className="mb-12">
                        <span className="text-white font-bold uppercase tracking-widest text-2xl drop-shadow-md">
                            {category} • <span className="text-[var(--jeopardy-gold)]">${question.points}</span>
                        </span>
                    </div>

                    <h2 className="text-6xl font-bold text-white uppercase leading-tight mb-16" style={{ textShadow: '4px 4px 0px black' }}>
                        {question.question}
                    </h2>

                    <div className="flex flex-col items-center gap-8 w-full">
                        {!showAnswer ? (
                            <button
                                onClick={() => setShowAnswer(true)}
                                className="group flex flex-col items-center gap-4 transition-all"
                            >
                                <div className="text-[var(--jeopardy-gold)] text-2xl font-bold uppercase tracking-widest animate-pulse">
                                    Click to reveal answer
                                </div>
                            </button>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col items-center gap-12 w-full max-w-3xl"
                            >
                                <div className="text-center w-full">
                                    <div className="text-white/50 text-xl uppercase font-bold mb-4 tracking-wider">Answer</div>
                                    <div className="text-5xl font-black text-[var(--jeopardy-gold)] uppercase py-4" style={{ textShadow: '3px 3px 0px black' }}>
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
