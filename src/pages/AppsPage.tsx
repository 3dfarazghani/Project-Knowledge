import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import AppCard from '../components/AppCard';

// Mock apps data
const apps = [
  {
    id: '1',
    title: 'MindfulLearning',
    description: 'Guided meditation and mindfulness activities for classroom implementation.',
    imageSrc: 'https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    appUrl: '#',
    downloadCount: '12.5K',
    price: '$4.99',
    isFree: false,
    category: 'Teacher Tools',
    platforms: ['iOS', 'Android', 'Web'],
  },
  {
    id: '2',
    title: 'ReadingQuest',
    description: 'Interactive reading comprehension game for elementary students.',
    imageSrc: 'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    appUrl: '#',
    downloadCount: '34.2K',
    price: '$2.99',
    isFree: false,
    category: 'Learning Games',
    platforms: ['iOS', 'Android'],
  },
  {
    id: '3',
    title: 'ParentConnect',
    description: 'Simplified school-parent communication and progress tracking tool.',
    imageSrc: 'https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    appUrl: '#',
    downloadCount: '28.7K',
    price: '$3.99/month',
    isFree: false,
    category: 'Parent Tools',
    platforms: ['iOS', 'Android', 'Web'],
  },
  {
    id: '4',
    title: 'MathWizards',
    description: 'Adaptive math learning app with personalized problem sets.',
    imageSrc: 'https://images.pexels.com/photos/3060324/pexels-photo-3060324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    appUrl: '#',
    downloadCount: '45.1K',
    price: '$5.99',
    isFree: false,
    category: 'Learning Games',
    platforms: ['iOS', 'Android'],
  },
  {
    id: '5',
    title: 'ClassroomHelper',
    description: 'Digital assistant for classroom management and organization.',
    imageSrc: 'https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    appUrl: '#',
    downloadCount: '19.3K',
    isFree: true,
    category: 'Teacher Tools',
    platforms: ['iOS', 'Android', 'Web'],
  },
  {
    id: '6',
    title: 'ScienceExplorer',
    description: 'Interactive science experiments and simulations for all ages.',
    imageSrc: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    appUrl: '#',
    downloadCount: '22.8K',
    price: '$4.99',
    isFree: false,
    category: 'Learning Games',
    platforms: ['iOS', 'Android'],
  },
  {
    id: '7',
    title: 'HomeworkHelper',
    description: 'Organization tool for students to track assignments and deadlines.',
    imageSrc: 'https://images.pexels.com/photos/6936073/pexels-photo-6936073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    appUrl: '#',
    downloadCount: '31.5K',
    isFree: true,
    category: 'Student Tools',
    platforms: ['iOS', 'Android', 'Web'],
  },
  {
    id: '8',
    title: 'BehaviorTracker',
    description: 'Tool for monitoring and rewarding positive student behaviors.',
    imageSrc: 'https://images.pexels.com/photos/5063098/pexels-photo-5063098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    appUrl: '#',
    downloadCount: '15.2K',
    price: '$3.99',
    isFree: false,
    category: 'Teacher Tools',
    platforms: ['iOS', 'Android'],
  },
  {
    id: '9',
    title: 'EarlyReader',
    description: 'Phonics-based reading app for early childhood literacy.',
    imageSrc: 'https://images.pexels.com/photos/4861347/pexels-photo-4861347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    appUrl: '#',
    downloadCount: '26.7K',
    price: '$3.99',
    isFree: false,
    category: 'Learning Games',
    platforms: ['iOS', 'Android'],
  },
];

// Categories
const categories = [
  'All Categories',
  'Teacher Tools',
  'Parent Tools',
  'Student Tools',
  'Learning Games',
];

// Platforms
const platforms = ['All Platforms', 'iOS', 'Android', 'Web'];

const AppsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms');
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Filter apps based on search term, category, platform, and free only
  const filteredApps = apps.filter((app) => {
    const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         app.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || app.category === selectedCategory;
    
    const matchesPlatform = selectedPlatform === 'All Platforms' || 
                           app.platforms.includes(selectedPlatform);
    
    const matchesFree = !showFreeOnly || app.isFree;
    
    return matchesSearch && matchesCategory && matchesPlatform && matchesFree;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Educational Apps</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our collection of apps designed to enhance teaching, learning, and parent-school communication
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
                placeholder="Search apps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setFiltersVisible(!filtersVisible)}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Filter className="h-4 w-4 mr-1" />
                <span>{filtersVisible ? 'Hide Filters' : 'Show Filters'}</span>
              </button>
              
              <div className="flex items-center">
                <input
                  id="free-only"
                  type="checkbox"
                  checked={showFreeOnly}
                  onChange={() => setShowFreeOnly(!showFreeOnly)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="free-only" className="ml-2 text-sm text-gray-700">
                  Free Apps Only
                </label>
              </div>
            </div>

            {filtersVisible && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
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
                  <label htmlFor="platform-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Platform
                  </label>
                  <select
                    id="platform-filter"
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={selectedPlatform}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                  >
                    {platforms.map((platform) => (
                      <option key={platform} value={platform}>
                        {platform}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApps.map((app) => (
              <AppCard
                key={app.id}
                title={app.title}
                description={app.description}
                imageSrc={app.imageSrc}
                appUrl={app.appUrl}
                downloadCount={app.downloadCount}
                price={app.price}
                isFree={app.isFree}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No apps found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppsPage;