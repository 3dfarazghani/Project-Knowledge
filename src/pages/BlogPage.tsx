import React, { useState } from 'react';
import { Search } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';

// Mock blog data
const blogPosts = [
  {
    id: '1',
    title: 'Understanding Child Development Milestones',
    excerpt: 'Learn about key developmental milestones and how to support your child through each stage.',
    imageSrc: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Dr. Emma Johnson',
    date: 'June 15, 2025',
    readTime: '5 min read',
    category: 'Child Psychology',
  },
  {
    id: '2',
    title: 'Effective Classroom Management Techniques',
    excerpt: 'Discover proven strategies to create a positive learning environment and manage classroom behavior.',
    imageSrc: 'https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Mark Davis',
    date: 'June 10, 2025',
    readTime: '7 min read',
    category: 'Teacher Training',
  },
  {
    id: '3',
    title: 'Building Strong Parent-Teacher Relationships',
    excerpt: 'Tips for fostering effective communication and collaboration between parents and educators.',
    imageSrc: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Sarah Miller',
    date: 'June 5, 2025',
    readTime: '6 min read',
    category: 'Parent Systems',
  },
  {
    id: '4',
    title: 'The Impact of Technology on Child Learning',
    excerpt: 'Explore how digital tools can enhance education while maintaining healthy boundaries.',
    imageSrc: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Dr. James Wilson',
    date: 'May 28, 2025',
    readTime: '8 min read',
    category: 'Education Technology',
  },
  {
    id: '5',
    title: 'Supporting Children with Learning Differences',
    excerpt: 'Strategies for creating inclusive educational environments for all learning styles.',
    imageSrc: 'https://images.pexels.com/photos/8923211/pexels-photo-8923211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Dr. Alicia Rodriguez',
    date: 'May 20, 2025',
    readTime: '9 min read',
    category: 'Inclusive Education',
  },
  {
    id: '6',
    title: 'Fostering Emotional Intelligence in Children',
    excerpt: 'Learn how to help children develop crucial emotional and social skills for success.',
    imageSrc: 'https://images.pexels.com/photos/8535207/pexels-photo-8535207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Dr. Michael Chang',
    date: 'May 15, 2025',
    readTime: '6 min read',
    category: 'Child Psychology',
  },
  {
    id: '7',
    title: 'Navigating Challenging Behaviors in the Classroom',
    excerpt: 'Evidence-based approaches to address and redirect challenging student behaviors.',
    imageSrc: 'https://images.pexels.com/photos/8617775/pexels-photo-8617775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Jennifer Adams',
    date: 'May 8, 2025',
    readTime: '7 min read',
    category: 'Teacher Training',
  },
  {
    id: '8',
    title: 'Creating Effective Home Learning Environments',
    excerpt: 'Tips for parents to design spaces and routines that support learning at home.',
    imageSrc: 'https://images.pexels.com/photos/4260325/pexels-photo-4260325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Rebecca Foster',
    date: 'May 1, 2025',
    readTime: '5 min read',
    category: 'Parent Systems',
  },
  {
    id: '9',
    title: 'The Science of Early Brain Development',
    excerpt: 'Understanding how early experiences shape brain architecture and child development.',
    imageSrc: 'https://images.pexels.com/photos/7790766/pexels-photo-7790766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Dr. Thomas Wright',
    date: 'April 25, 2025',
    readTime: '8 min read',
    category: 'Child Psychology',
  },
];

// Categories
const categories = [
  'All Categories',
  'Child Psychology',
  'Teacher Training',
  'Parent Systems',
  'Education Technology',
  'Inclusive Education',
];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Page change handler
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Educational Insights & Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert articles on teacher training, child psychology, and effective parenting strategies
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to first page on search
                  }}
                />
              </div>
            </div>
            <div className="w-full md:w-64">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1); // Reset to first page on category change
                }}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {currentPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  imageSrc={post.imageSrc}
                  author={post.author}
                  date={post.date}
                  readTime={post.readTime}
                  category={post.category}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="inline-flex rounded-md shadow">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`relative inline-flex items-center px-4 py-2 border ${
                        currentPage === i + 1
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      } text-sm font-medium`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Categories');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;