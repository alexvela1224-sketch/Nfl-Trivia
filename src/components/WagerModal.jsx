import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WagerModal = ({ maxWager, currentScore, onWager }) => {
    const [wager, setWager] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onWager(Math.max(5, Math.min(wager, maxWager)));
    };

    const handleTrueDailyDouble = () => {
        setWager(maxWager);
        // We can either auto-submit or let them click the button. Let's start by setting the value.
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className="bg-[var(--jeopardy-blue)] border-8 border-black p-12 max-w-xl w-full text-center shadow-[0_0_100px_rgba(255,184,28,0.5)]"
            >
                <div className="text-[var(--jeopardy-gold)] font-black text-4xl uppercase mb-8 tracking-widest animate-pulse">
                    Daily Double!
                </div>

                <div className="text-white text-xl mb-8 font-bold uppercase">
                    You can wager up to <span className="text-[var(--jeopardy-gold)]">${maxWager}</span>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input
                        type="number"
                        value={wager}
                        onChange={(e) => setWager(parseInt(e.target.value) || 0)}
                        min="5"
                        max={maxWager}
                        className="bg-black text-white text-6xl font-black text-center p-4 border-4 border-white focus:border-[var(--jeopardy-gold)] outline-none"
                        autoFocus
                    />

                    <div className="flex gap-4 justify-center">
                        <button
                            type="button"
                            onClick={handleTrueDailyDouble}
                            className="bg-nfl-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded uppercase text-sm tracking-wider transition-colors"
                        >
                            True Daily Double
                        </button>
                        <button
                            type="submit"
                            className="bg-[var(--jeopardy-gold)] hover:bg-[#eaa300] text-black font-black py-3 px-8 rounded uppercase text-xl tracking-wider transition-colors"
                        >
                            Wager
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default WagerModal;
