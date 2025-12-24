import React, { useState, useEffect } from 'react';
import ScoreBoard from './components/ScoreBoard';
import JeopardyBoard from './components/JeopardyBoard';
import QuestionModal from './components/QuestionModal';
import GameOverModal from './components/GameOverModal';
import { triviaData as initialTrivia } from './data/triviaData';
import confetti from 'canvas-confetti';
import { Trophy, Music, Volume2, VolumeX } from 'lucide-react';

const App = () => {
  const [trivia, setTrivia] = useState(initialTrivia);
  const [scores, setScores] = useState({ Alex: 0, Nathan: 0 });
  const [currentTurn, setCurrentTurn] = useState('Alex');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [audioSource, setAudioSource] = useState('jeopardy'); // 'jeopardy' or 'nfl'

  // Audio elements
  const [jeopardyAudio] = useState(new Audio('https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptoken=1_75c6bf21-9964-460d-838b-82155799a4c8'));
  const [nflAudio] = useState(new Audio('https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptoken=1_16e6d1c8-2e0e-4e9f-9fd5-79a639ff3f3a'));

  useEffect(() => {
    jeopardyAudio.loop = true;
    nflAudio.loop = true;

    return () => {
      jeopardyAudio.pause();
      nflAudio.pause();
    };
  }, []);

  useEffect(() => {
    if (isMuted) {
      jeopardyAudio.pause();
      nflAudio.pause();
    } else {
      if (audioSource === 'jeopardy') {
        nflAudio.pause();
        jeopardyAudio.play().catch(e => console.log("Audio blocked"));
      } else {
        jeopardyAudio.pause();
        nflAudio.play().catch(e => console.log("Audio blocked"));
      }
    }
  }, [isMuted, audioSource]);

  const handleQuestionSelect = (category, question) => {
    setSelectedQuestion({ category, ...question });
    // Switch to NFL music when a question is active for excitement
    setAudioSource('nfl');
  };

  // Check if game is over
  const allQuestionsAnswered = trivia.every(cat => cat.questions.every(q => q.answered));

  const handleRestart = () => {
    setScores({ Alex: 0, Nathan: 0 });
    setCurrentTurn('Alex');
    setTrivia(initialTrivia.map(cat => ({
      ...cat,
      questions: cat.questions.map(q => ({ ...q, answered: false }))
    })));
    setAudioSource('jeopardy');
  };

  const handleResult = (isCorrect) => {
    const points = selectedQuestion.points;

    if (isCorrect) {
      setScores(prev => ({
        ...prev,
        [currentTurn]: prev[currentTurn] + points
      }));
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffb81c', '#013369', '#ffffff']
      });
    } else {
      setScores(prev => ({
        ...prev,
        [currentTurn]: Math.max(0, prev[currentTurn] - points)
      }));
      // Switch turn if incorrect
      setCurrentTurn(currentTurn === 'Alex' ? 'Nathan' : 'Alex');
    }

    // Mark as answered
    setTrivia(prev => prev.map(cat => ({
      ...cat,
      questions: cat.questions.map(q =>
        q.id === selectedQuestion.id ? { ...q, answered: true } : q
      )
    })));

    setSelectedQuestion(null);
    setAudioSource('jeopardy');
  };

  return (
    <div className="min-h-screen p-8 text-white relative">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-4 bg-black border-b-4 border-black">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="text-white hover:text-nfl-gold transition-colors"
        >
          {isMuted ? <VolumeX size={32} /> : <Volume2 size={32} />}
        </button>

        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic" style={{ textShadow: '4px 4px 0px #060CE9' }}>
            NFL Trivia Royale
          </h1>
          <div className="text-nfl-gold font-bold tracking-widest text-sm">JEOPARDY! EDITION</div>
        </div>

        <div className="flex items-center gap-2">
          <Trophy className="text-nfl-gold" size={24} />
          <span className="font-bold text-xl">2010 - PRESENT</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <ScoreBoard scores={scores} currentTurn={currentTurn} />

        <JeopardyBoard
          trivia={trivia}
          onQuestionSelect={handleQuestionSelect}
        />
      </main>

      {selectedQuestion && (
        <QuestionModal
          category={selectedQuestion.category}
          question={selectedQuestion}
          onResult={handleResult}
          onClose={() => setSelectedQuestion(null)}
        />
      )}

      {/* Game Over Modal */}
      {allQuestionsAnswered && (
        <GameOverModal scores={scores} onRestart={handleRestart} />
      )}

      {/* Footer Info */}
      <footer className="mt-16 text-center text-text-secondary text-sm">
        <p>Alex vs Nathan • NFL Jeopardy Edition</p>
      </footer>
    </div>
  );
};

export default App;
