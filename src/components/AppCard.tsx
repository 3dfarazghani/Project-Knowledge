import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Card, { CardContent, CardImage, CardTitle, CardDescription, CardFooter } from './Card';
import Button from './Button';

interface AppCardProps {
  title: string;
  description: string;
  imageSrc: string;
  appUrl: string;
  downloadCount?: string;
  price?: string;
  isFree?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({
  title,
  description,
  imageSrc,
  appUrl,
  downloadCount,
  price,
  isFree = false,
}) => {
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
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          {downloadCount && (
            <div className="flex items-center">
              <Download size={16} className="mr-1" />
              <span>{downloadCount} downloads</span>
            </div>
          )}
          <div>
            {isFree ? (
              <span className="text-green-600 font-medium">Free</span>
            ) : (
              <span className="font-medium">{price}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="primary" 
          fullWidth 
          className="flex items-center justify-center"
          onClick={() => window.open(appUrl, '_blank')}
        >
          <span>View App</span>
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AppCard;