import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Users, Award, Lightbulb, LifeBuoy } from 'lucide-react';
import Hero from '../components/Hero';
import Card, { CardContent } from '../components/Card';
import Button from '../components/Button';
import BlogCard from '../components/BlogCard';

const HomePage: React.FC = () => {
  // Featured blog posts data
  const featuredBlogs = [
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
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Empowering Education Through Knowledge"
        subtitle="Comprehensive resources for teachers, parents, and educators to enhance child development and learning"
        imageSrc="https://images.pexels.com/photos/8471767/pexels-photo-8471767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        primaryButtonText="Explore Resources"
        secondaryButtonText="Learn More"
        onPrimaryClick={() => {}}
        onSecondaryClick={() => {}}
      />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources for teachers, parents, and educators
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Teacher Training */}
            <Card className="text-center">
              <CardContent>
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <BookOpen size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teacher Training</h3>
                <p className="text-gray-600 mb-4">
                  Professional development resources and courses for educators at all levels.
                </p>
                <Link to="/blog">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Child Psychology */}
            <Card className="text-center">
              <CardContent>
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <Brain size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Child Psychology</h3>
                <p className="text-gray-600 mb-4">
                  Evidence-based insights into child development, behavior, and learning styles.
                </p>
                <Link to="/blog">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Parent Systems */}
            <Card className="text-center">
              <CardContent>
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Parent Systems</h3>
                <p className="text-gray-600 mb-4">
                  Tools and strategies to support effective parenting and home learning environments.
                </p>
                <Link to="/blog">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
              <p className="mt-2 text-gray-600">
                Latest insights and resources from our experts
              </p>
            </div>
            <Link to="/blog">
              <Button variant="text">View All Articles</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                imageSrc={blog.imageSrc}
                author={blog.author}
                date={blog.date}
                readTime={blog.readTime}
                category={blog.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We're dedicated to providing the highest quality educational resources and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Knowledge</h3>
                <p className="text-gray-600">
                  All our content is created by qualified educators, child psychologists, and parenting experts with years of experience.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Research-Based Approaches</h3>
                <p className="text-gray-600">
                  Our methodologies and resources are grounded in the latest educational research and best practices.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Supportive Community</h3>
                <p className="text-gray-600">
                  Join our growing community of educators and parents to share experiences and support one another.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <LifeBuoy className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  We provide continuous support and resources to help you navigate challenges and implement effective strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Educational Approach?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of educators and parents who are already benefiting from our resources.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/blog">
              <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Explore Resources
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;