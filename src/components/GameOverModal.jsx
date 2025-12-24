import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

const GameOverModal = ({ scores, onRestart }) => {
    const winner = scores.Alex > scores.Nathan ? 'Alex' : scores.Nathan > scores.Alex ? 'Nathan' : 'Tie';

    // Trigger big confetti on mount
    React.useEffect(() => {
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ffb81c', '#013369']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ffb81c', '#013369']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10 glass-panel p-12 max-w-2xl w-full text-center border-2 border-nfl-gold"
            >
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="inline-block mb-8 p-6 rounded-full bg-nfl-gold/20 border-2 border-nfl-gold text-nfl-gold"
                >
                    <Trophy size={64} />
                </motion.div>

                <h2 className="text-xl font-bold text-nfl-gold uppercase tracking-widest mb-4">
                    Game Over
                </h2>

                <h1 className="text-5xl font-black text-white mb-2">
                    {winner === 'Tie' ? "It's a Tie!" : `${winner} Wins!`}
                </h1>

                <p className="text-text-secondary mb-12 text-xl">
                    Final Score: <span className="text-white font-bold">${scores[winner]}</span>
                </p>

                <div className="flex gap-8 justify-center mb-12">
                    <div className="text-center p-4 glass-panel min-w-[150px]">
                        <div className="text-sm text-text-secondary uppercase font-bold mb-2">Alex</div>
                        <div className="text-2xl font-black">${scores.Alex}</div>
                    </div>
                    <div className="text-center p-4 glass-panel min-w-[150px]">
                        <div className="text-sm text-text-secondary uppercase font-bold mb-2">Nathan</div>
                        <div className="text-2xl font-black">${scores.Nathan}</div>
                    </div>
                </div>

                <button
                    onClick={onRestart}
                    className="bg-nfl-gold hover:bg-[#eaa300] text-secondary-blue font-black text-xl py-4 px-12 rounded-full uppercase tracking-wider flex items-center gap-3 mx-auto transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,184,28,0.4)]"
                >
                    <RefreshCw size={24} />
                    Play Again
                </button>
            </motion.div>
        </div>
    );
};

export default GameOverModal;
