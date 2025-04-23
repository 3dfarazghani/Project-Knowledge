import React from 'react';
import { Users, Star, ArrowRight } from 'lucide-react';
import Card, { CardContent, CardImage, CardTitle, CardDescription, CardFooter } from './Card';
import Button from './Button';

interface GameCardProps {
  title: string;
  description: string;
  imageSrc: string;
  gameUrl: string;
  playerCount?: string;
  rating?: number;
  ageRange?: string;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  imageSrc,
  gameUrl,
  playerCount,
  rating,
  ageRange,
}) => {
  // Render stars based on rating
  const renderStars = () => {
    if (!rating) return null;
    
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={16} className="text-yellow-400 fill-current" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star size={16} className="text-yellow-400" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star size={16} className="text-yellow-400 fill-current" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <Card hover className="h-full flex flex-col">
      <CardImage 
        src={imageSrc} 
        alt={title} 
        className="h-48"
      />
      <CardContent className="flex-grow">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="mb-4">{description}</CardDescription>
        
        <div className="flex flex-wrap justify-between text-sm text-gray-500 mb-3">
          {playerCount && (
            <div className="flex items-center mr-3 mb-2">
              <Users size={16} className="mr-1" />
              <span>{playerCount}</span>
            </div>
          )}
          
          {ageRange && (
            <div className="mb-2">
              <span>Ages: {ageRange}</span>
            </div>
          )}
        </div>
        
        {rating && (
          <div className="flex items-center mb-4">
            <div className="flex mr-1">
              {renderStars()}
            </div>
            <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          variant="secondary" 
          fullWidth 
          className="flex items-center justify-center"
          onClick={() => window.open(gameUrl, '_blank')}
        >
          <span>Play Game</span>
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;