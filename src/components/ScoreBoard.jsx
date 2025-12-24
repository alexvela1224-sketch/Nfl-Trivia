import React from 'react';
import { Trophy, User } from 'lucide-react';

const ScoreBoard = ({ scores, currentTurn }) => {
    return (
        <div className="flex justify-center gap-8 mb-12">
            {['Alex', 'Nathan'].map((player) => (
                <div
                    key={player}
                    className={`glass-panel p-6 min-w-[200px] flex flex-col items-center border-b-4 transition-all duration-300 ${currentTurn === player ? 'border-nfl-gold scale-110' : 'border-transparent opacity-70'
                        }`}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <User size={20} className={currentTurn === player ? 'text-nfl-gold' : 'text-text-secondary'} />
                        <span className="font-bold text-xl uppercase tracking-wider">{player}</span>
                    </div>
                    <div className="text-4xl font-black text-nfl-gold">
                        ${scores[player]}
                    </div>
                    {currentTurn === player && (
                        <div className="mt-2 text-xs font-semibold text-nfl-gold uppercase animate-pulse">
                            Current Turn
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ScoreBoard;
