import React from 'react';

export const TriviaCard = ({ question, onSelect }) => {
    const isAnswered = question.answered;

    return (
        <button
            onClick={() => !isAnswered && onSelect(question)}
            disabled={isAnswered}
            className={`jeopardy-card ${isAnswered ? 'disabled' : ''}`}
        >
            {!isAnswered && (
                <span className="point-value">
                    ${question.points}
                </span>
            )}
        </button>
    );
};

const JeopardyBoard = ({ trivia, onQuestionSelect }) => {
    return (
        <div className="jeopardy-grid flex-1 w-full">
            {/* Render Categories Row first */}
            {trivia.map((cat, idx) => (
                <div key={idx} className="jeopardy-card cursor-default hover:bg-[var(--jeopardy-blue)]">
                    <h3 className="category-title">
                        {cat.category}
                    </h3>
                </div>
            ))}

            {/* Render Questions (transposed for grid layout if needed, but simple column mapping works visually if we use CSS grid flow or mapped properly. Actually standard jeopardy mapping is column based in data but row based in visual. 
            Let's keep the column structure but style them to fill the grid. 
            Wait, CSS grid flow is usually row-major. 
            Detailed fix: We need to render row by row: $200 row, $400 row, etc.
            Data is currently organized by Category. We need to transpose it.
            */}
            {/* Transpose data: Row 1 ($100), Row 2 ($200)... */}
            {[0, 1, 2, 3, 4].map((rowIndex) => (
                <React.Fragment key={rowIndex}>
                    {trivia.map((cat, catIndex) => {
                        const q = cat.questions[rowIndex];
                        return (
                            <TriviaCard
                                key={`${catIndex}-${rowIndex}`}
                                question={q}
                                onSelect={(selected) => onQuestionSelect(cat.category, selected)}
                            />
                        );
                    })}
                </React.Fragment>
            ))}
        </div>
    );
};

export default JeopardyBoard;
