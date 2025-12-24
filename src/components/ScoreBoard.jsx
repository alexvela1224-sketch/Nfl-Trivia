import React from 'react';
import { Trophy, User } from 'lucide-react';

const ScoreBoard = ({ scores, currentTurn }) => {
    return (
        <div className="flex justify-center gap-8 mb-12">
            {['Alex', 'Nathan'].map((player) => (
                <div
                    key={player}
                    className={`p-6 min-w-[200px] flex flex-col items-center border-4 transition-all duration-300 bg-black ${currentTurn === player ? 'border-[var(--jeopardy-gold)] opacity-100' : 'border-[#333] opacity-50'
                        }`}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <User size={20} className={currentTurn === player ? 'text-white' : 'text-gray-500'} />
                        <span className="font-bold text-xl uppercase tracking-wider text-white">{player}</span>
                    </div>
                    <div className="text-4xl font-black text-[var(--jeopardy-gold)]">
                        ${scores[player]}
                    </div>
                    {currentTurn === player && (
                        <div className="mt-2 text-xs font-semibold text-white uppercase animate-pulse">
                            Current Turn
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ScoreBoard;
