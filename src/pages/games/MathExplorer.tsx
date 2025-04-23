import React, { useState, useEffect } from 'react';
import { Trophy, Star, Timer, Heart } from 'lucide-react';
import Button from '../../components/Button';
import { useAuthStore } from '../../store/authStore';

interface MathProblem {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  timeLimit: number;
}

const problems: MathProblem[] = [
  {
    id: '1',
    question: 'What is 8 × 7?',
    options: ['54', '56', '58', '60'],
    correctAnswer: '56',
    difficulty: 'easy',
    points: 10,
    timeLimit: 30,
  },
  {
    id: '2',
    question: 'If a triangle has angles measuring 45° and 45°, what is the measure of the third angle?',
    options: ['45°', '60°', '90°', '180°'],
    correctAnswer: '90°',
    difficulty: 'medium',
    points: 20,
    timeLimit: 45,
  },
  {
    id: '3',
    question: 'Solve for x: 2x + 5 = 13',
    options: ['3', '4', '6', '8'],
    correctAnswer: '4',
    difficulty: 'medium',
    points: 20,
    timeLimit: 45,
  },
];

const MathExplorer: React.FC = () => {
  const [currentProblem, setCurrentProblem] = useState<MathProblem | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const { user } = useAuthStore();

  useEffect(() => {
    if (!currentProblem && !gameOver && lives > 0) {
      const randomProblem = problems[Math.floor(Math.random() * problems.length)];
      setCurrentProblem(randomProblem);
      setTimeLeft(randomProblem.timeLimit);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  }, [currentProblem, gameOver, lives]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (currentProblem && timeLeft > 0 && !showFeedback) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentProblem, timeLeft, showFeedback]);

  const handleTimeout = () => {
    setLives((prev) => prev - 1);
    setConsecutiveCorrect(0);
    setShowFeedback(true);
    setTimeout(() => {
      setCurrentProblem(null);
    }, 2000);
  };

  const handleAnswer = (answer: string) => {
    if (!currentProblem || showFeedback) return;

    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === currentProblem.correctAnswer) {
      const bonus = Math.floor(timeLeft / 5);
      const points = currentProblem.points + bonus;
      setScore((prev) => prev + points);
      setConsecutiveCorrect((prev) => prev + 1);
    } else {
      setLives((prev) => prev - 1);
      setConsecutiveCorrect(0);
    }

    setTimeout(() => {
      setCurrentProblem(null);
    }, 2000);
  };

  const restartGame = () => {
    setScore(0);
    setLives(3);
    setGameOver(false);
    setConsecutiveCorrect(0);
    setCurrentProblem(null);
  };

  if (lives === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Game Over!</h2>
          <p className="text-xl text-gray-600 mb-8">Final Score: {score}</p>
          <Button variant="primary" onClick={restartGame}>
            Play Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Game Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-xl font-bold">{score}</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-red-500 mr-2" />
                <span className="text-xl font-bold">{lives}</span>
              </div>
            </div>
            {consecutiveCorrect >= 3 && (
              <div className="flex items-center text-yellow-500">
                <Star className="h-6 w-6 mr-1" />
                <span className="font-bold">Hot Streak! x{consecutiveCorrect}</span>
              </div>
            )}
          </div>
        </div>

        {/* Current Problem */}
        {currentProblem && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-between items-center mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                currentProblem.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                currentProblem.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {currentProblem.difficulty.charAt(0).toUpperCase() + currentProblem.difficulty.slice(1)}
              </span>
              <div className="flex items-center">
                <Timer className="h-5 w-5 text-gray-500 mr-2" />
                <span className={`font-mono text-lg ${timeLeft <= 5 ? 'text-red-600' : 'text-gray-600'}`}>
                  {timeLeft}s
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {currentProblem.question}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {currentProblem.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                  className={`p-4 text-lg font-medium rounded-lg transition-colors duration-200 ${
                    showFeedback
                      ? option === currentProblem.correctAnswer
                        ? 'bg-green-100 text-green-800 border-green-500'
                        : option === selectedAnswer
                        ? 'bg-red-100 text-red-800 border-red-500'
                        : 'bg-gray-100 text-gray-800 border-gray-300'
                      : 'bg-white border-2 border-gray-300 hover:border-blue-500 text-gray-800'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showFeedback && (
              <div className="mt-6 text-center">
                {selectedAnswer === currentProblem.correctAnswer ? (
                  <p className="text-green-600 font-medium">
                    Correct! +{currentProblem.points} points
                  </p>
                ) : (
                  <p className="text-red-600 font-medium">
                    Incorrect. The correct answer was {currentProblem.correctAnswer}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MathExplorer;