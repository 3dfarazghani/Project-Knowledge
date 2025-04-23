import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import Card, { CardContent, CardImage } from './Card';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  imageSrc,
  author,
  date,
  readTime,
  category,
}) => {
  return (
    <Card hover className="h-full flex flex-col">
      <Link to={`/blog/${id}`}>
        <CardImage 
          src={imageSrc} 
          alt={title} 
          className="h-48"
        />
      </Link>
      <CardContent className="flex-grow flex flex-col">
        <div className="mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        <Link to={`/blog/${id}`} className="block mb-2">
          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 flex-grow">
          {excerpt}
        </p>
        <div className="flex flex-wrap text-sm text-gray-500 mt-2 border-t pt-3">
          <div className="flex items-center mr-4">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;