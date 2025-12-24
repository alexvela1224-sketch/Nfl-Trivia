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
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-nfl-gold/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-blue/30 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-12">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="glass-panel p-3 hover:bg-white/10 transition-colors"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} className="text-nfl-gold" />}
        </button>

        <h1 className="nfl-title m-0">NFL Trivia Royale</h1>

        <div className="flex items-center gap-2 glass-panel px-4 py-2 border border-nfl-gold/30">
          <Trophy className="text-nfl-gold" size={20} />
          <span className="font-bold">2010 - PRESENT</span>
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
