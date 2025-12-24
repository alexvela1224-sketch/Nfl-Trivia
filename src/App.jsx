import React, { useState, useEffect } from 'react';
import ScoreBoard from './components/ScoreBoard';
import JeopardyBoard from './components/JeopardyBoard';
import QuestionModal from './components/QuestionModal';
import GameOverModal from './components/GameOverModal';
import WagerModal from './components/WagerModal';
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
  const [dailyDoubleId, setDailyDoubleId] = useState(null);
  const [showWagerModal, setShowWagerModal] = useState(false);
  const [tempQuestion, setTempQuestion] = useState(null); // Holds question while wagering

  // Audio elements
  // Using reliable MP3 sources
  const [jeopardyAudio] = useState(new Audio('https://www.myinstants.com/media/sounds/jeopardy-theme-song.mp3'));
  const [nflAudio] = useState(new Audio('https://www.myinstants.com/media/sounds/nfl.mp3'));
  const [dailyDoubleAudio] = useState(new Audio('https://www.myinstants.com/media/sounds/daily-double.mp3'));


  useEffect(() => {
    // Select a random Daily Double
    const allQuestions = initialTrivia.flatMap(cat => cat.questions);
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    // Find the actual ID based on index
    // Assuming IDs are 1-30 sequential.
    setDailyDoubleId(randomIndex + 1);

    jeopardyAudio.loop = true;
    nflAudio.loop = true;
    jeopardyAudio.volume = 0.5;
    nflAudio.volume = 0.5;

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
    if (question.id === dailyDoubleId) {
      setTempQuestion({ category, ...question });
      setShowWagerModal(true);
      setAudioSource('none');
      if (!isMuted) dailyDoubleAudio.play();
    } else {
      openQuestion({ category, ...question });
    }
  };

  const handleWager = (wagerAmount) => {
    setShowWagerModal(false);
    // Update question points just for this turn
    const wageredQuestion = { ...tempQuestion, points: wagerAmount };
    openQuestion(wageredQuestion);
  };

  const openQuestion = (question) => {
    setSelectedQuestion(question);
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
    <div className="flex flex-col h-screen max-h-screen overflow-hidden bg-black text-white relative font-sans">
      {/* Header Bar */}
      <header className="flex-none flex justify-between items-center px-6 py-4 bg-[var(--jeopardy-blue)] border-b-4 border-black z-20 shadow-md">

        {/* Left: Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="text-white hover:text-[var(--jeopardy-gold)] transition-colors p-2 rounded-full hover:bg-black/20"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
          </button>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest opacity-70 font-bold">Current Turn</span>
            <span className="text-xl font-black text-[var(--jeopardy-gold)] uppercase">{currentTurn}</span>
          </div>
        </div>

        {/* Center: Title */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase italic transform -skew-x-12" style={{ textShadow: '4px 4px 0px #000' }}>
            NFL Trivia Royale
          </h1>
        </div>

        {/* Right: Score Summary (Mini) */}
        <div className="flex items-center gap-6">
          <div className={`text-right ${currentTurn === 'Alex' ? 'opacity-100' : 'opacity-60'}`}>
            <div className="text-xs font-bold uppercase">Alex</div>
            <div className="text-xl font-black text-[var(--jeopardy-gold)]">${scores.Alex}</div>
          </div>
          <div className={`text-right ${currentTurn === 'Nathan' ? 'opacity-100' : 'opacity-60'}`}>
            <div className="text-xs font-bold uppercase">Nathan</div>
            <div className="text-xl font-black text-[var(--jeopardy-gold)]">${scores.Nathan}</div>
          </div>
        </div>
      </header>

      {/* Main Game Area */}
      <main className="flex-grow flex flex-col relative w-full h-full overflow-hidden p-4">

        {/* Board Container - Centered and Aspect Correct using Flex/Margin auto if possible, or simple grid full */}
        <div className="flex-grow w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
          <JeopardyBoard
            trivia={trivia}
            onQuestionSelect={handleQuestionSelect}
          />
        </div>
      </main>

      {selectedQuestion && (
        <QuestionModal
          category={selectedQuestion.category}
          question={selectedQuestion}
          onResult={handleResult}
          onClose={() => setSelectedQuestion(null)}
        />
      )}

      {/* Wager Modal */}
      {showWagerModal && (
        <WagerModal
          currentScore={scores[currentTurn]}
          maxWager={Math.max(scores[currentTurn], 1000)}
          onWager={handleWager}
        />
      )}

      {/* Game Over Modal */}
      {allQuestionsAnswered && (
        <GameOverModal scores={scores} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default App;
