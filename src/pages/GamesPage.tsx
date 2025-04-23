import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import GameCard from '../components/GameCard';

// Mock games data
const games = [
  {
    id: '1',
    title: 'Phonics Adventure',
    description: 'An interactive journey through the world of phonics for early readers.',
    imageSrc: 'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gameUrl: '#',
    playerCount: '1 player',
    rating: 4.8,
    ageRange: '4-7',
    category: 'Literacy',
  },
  {
    id: '2',
    title: 'Math Explorer',
    description: 'Solve puzzles and earn rewards while mastering foundational math concepts.',
    imageSrc: 'https://images.pexels.com/photos/3060324/pexels-photo-3060324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gameUrl: '#',
    playerCount: '1-2 players',
    rating: 4.5,
    ageRange: '6-9',
    category: 'Mathematics',
  },
  {
    id: '3',
    title: 'Science Lab',
    description: 'Conduct virtual experiments and learn scientific principles through play.',
    imageSrc: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gameUrl: '#',
    playerCount: '1-4 players',
    rating: 4.7,
    ageRange: '8-12',
    category: 'Science',
  },
  {
    id: '4',
    title: 'Emotion Quest',
    description: 'Help children identify and understand emotions through storytelling and challenges.',
    imageSrc: 'https://images.pexels.com/photos/3807737/pexels-photo-3807737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gameUrl: '#',
    playerCount: '1 player',
    rating: 4.6,
    ageRange: '5-10',
    category: 'Social-Emotional',
  },
  {
    id: '5',
    title: 'Vocabulary Challenge',
    description: 'Expand vocabulary through fun word games and interactive puzzles.',
    imageSrc: 'https://images.pexels.com/photos/276205/pexels-photo-276205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gameUrl: '#',
    playerCount: '1-6 players',
    rating: 4.4,
    ageRange: '8-14',
    category: 'Literacy',
  },
  {
    id: '6',
    title: 'Historical Time Travelers',
    description: 'Travel through different time periods and learn about historical events and figures.',
    imageSrc: 'https://images.pexels.com/photos/4348633/pexels-photo-4348633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gameUrl: '#',
    playerCount: '1-3 players',
    rating: 4.3,
    ageRange: '9-13',
    category: 'History',
  },
  {
    id: '7',
    title: 'Coding Wizards',
    description: 'Learn programming concepts through puzzle solving and game creation.',
    imageSrc: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gameUrl: '#',
    playerCount: '1 player',
    rating: 4.9,
    ageRange: '10-16',
    category: 'STEM',
  },
  {
    id: '8',
    title: 'Nature Explorer',
    description: 'Discover the wonders of ecology and environmental science through interactive gameplay.',
    imageSrc: 'https://images.pexels.com/photos/4916298/pexels-photo-4916298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gameUrl: '#',
    playerCount: '1-2 players',
    rating: 4.5,
    ageRange: '7-12',
    category: 'Science',
  },
  {
    id: '9',
    title: 'Music Maker',
    description: 'Create music while learning about rhythm, notes, and musical instruments.',
    imageSrc: 'https://images.pexels.com/photos/4709822/pexels-photo-4709822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gameUrl: '#',
    playerCount: '1-4 players',
    rating: 4.7,
    ageRange: '5-12',
    category: 'Arts',
  },
];

// Categories
const categories = [
  'All Categories',
  'Literacy',
  'Mathematics',
  'Science',
  'Social-Emotional',
  'History',
  'STEM',
  'Arts',
];

// Age ranges
const ageRanges = [
  'All Ages',
  '3-5',
  '6-9',
  '10-13',
  '14+',
];

const GamesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedAgeRange, setSelectedAgeRange] = useState('All Ages');
  const [minRating, setMinRating] = useState(0);
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Helper function to check if a game's age range falls within the selected filter
  const isInAgeRange = (gameAgeRange: string, filterRange: string) => {
    if (filterRange === 'All Ages') return true;
    
    const [gameLow, gameHigh] = gameAgeRange.split('-').map(Number);
    
    if (filterRange === '3-5') return gameLow >= 3 && gameHigh <= 5;
    if (filterRange === '6-9') return gameLow <= 9 && gameHigh >= 6;
    if (filterRange === '10-13') return gameLow <= 13 && gameHigh >= 10;
    if (filterRange === '14+') return gameHigh >= 14;
    
    return false;
  };

  // Filter games based on search term, category, age range, and minimum rating
  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || game.category === selectedCategory;
    
    const matchesAgeRange = isInAgeRange(game.ageRange, selectedAgeRange);
    
    const matchesRating = game.rating >= minRating;
    
    return matchesSearch && matchesCategory && matchesAgeRange && matchesRating;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Educational Games</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fun and interactive games that make learning engaging for children of all ages
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <button
                onClick={() => setFiltersVisible(!filtersVisible)}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Filter className="h-4 w-4 mr-1" />
                <span>{filtersVisible ? 'Hide Filters' : 'Show Filters'}</span>
              </button>
            </div>

            {filtersVisible && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    id="category-filter"
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="age-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Age Range
                  </label>
                  <select
                    id="age-filter"
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={selectedAgeRange}
                    onChange={(e) => setSelectedAgeRange(e.target.value)}
                  >
                    {ageRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="rating-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Minimum Rating
                  </label>
                  <select
                    id="rating-filter"
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                  >
                    <option value={0}>Any Rating</option>
                    <option value={3}>3+ Stars</option>
                    <option value={4}>4+ Stars</option>
                    <option value={4.5}>4.5+ Stars</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                description={game.description}
                imageSrc={game.imageSrc}
                gameUrl={game.gameUrl}
                playerCount={game.playerCount}
                rating={game.rating}
                ageRange={game.ageRange}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No games found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamesPage;