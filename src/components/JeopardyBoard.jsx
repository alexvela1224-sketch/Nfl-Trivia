import React from 'react';

export const TriviaCard = ({ question, onSelect }) => {
    const isAnswered = question.answered;

    return (
        <button
            onClick={() => !isAnswered && onSelect(question)}
            disabled={isAnswered}
            className={`glass-panel h-24 flex items-center justify-center transition-all duration-300 ${isAnswered
                    ? 'opacity-20 cursor-not-allowed scale-95'
                    : 'hover:scale-105 hover:bg-[rgba(255,184,28,0.1)] hover:border-nfl-gold'
                }`}
        >
            <span className={`text-2xl font-black ${isAnswered ? 'text-text-secondary' : 'text-nfl-gold'}`}>
                {isAnswered ? '-' : `$${question.points}`}
            </span>
        </button>
    );
};

const JeopardyBoard = ({ trivia, onQuestionSelect }) => {
    return (
        <div className="grid grid-cols-6 gap-4 w-full max-w-7xl mx-auto px-4">
            {trivia.map((cat, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                    <div className="glass-panel p-4 h-20 flex items-center justify-center text-center border-b-2 border-nfl-gold">
                        <h3 className="text-sm font-bold uppercase tracking-tight leading-tight">
                            {cat.category}
                        </h3>
                    </div>
                    {cat.questions.map((q) => (
                        <TriviaCard
                            key={q.id}
                            question={q}
                            onSelect={(selected) => onQuestionSelect(cat.category, selected)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default JeopardyBoard;
