"use client"
import { useEffect, useState } from "react";
import { Star, MessageSquareText } from 'lucide-react';
import { Card, CardContent } from "../ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi
} from "../ui/carousel";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image: string;
}

const userReviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "This app changed my cooking game! I love how it suggests recipes based on what I have in my fridge.",
    image: "https://i.pinimg.com/736x/dd/12/1a/dd121a54a3fe95a0562b7c9cf2e5c085.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment: "The Recipe helped me prepare a fantastic dinner for my in-laws. The step-by-step instructions were so clear!",
    image: "https://i.pinimg.com/736x/9c/60/a6/9c60a6e943413db941770b93a1406eb6.jpg"
  },
  {
    id: 3,
    name: "Emma Thompson",
    rating: 4,
    comment: "Very intuitive interface and helpful tips. Would be perfect with more international cuisine options.",
    image: "https://i.pinimg.com/736x/7c/4e/b3/7c4eb3028584398de5ab364b50ca369b.jpg"
  },
  {
    id: 4,
    name: "David Rodriguez",
    rating: 5,
    comment: "As someone who struggles in the kitchen, this app has been a lifesaver. The meal planning feature is excellent!",
    image: "https://i.pinimg.com/736x/7f/ad/4e/7fad4e3a961c45ba15a2a66c820a9cce.jpg"
  },
  {
    id: 5,
    name: "Olivia Taylor",
    rating: 5,
    comment: "I've tried many cooking apps but this one stands out. The recipe suggestions are always spot on and the UI is beautiful.",
    image: "https://i.pinimg.com/736x/09/f6/ae/09f6aefa3b5b069c4709606034cb9ab4.jpg"
  }
];

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  return (
    <>
      {Array(5).fill(0).map((_, i) => (
        <Star 
          key={i} 
          size={18} 
          fill={i < rating ? "#FFD700" : "none"} 
          color={i < rating ? "#FFD700" : "#666"} 
        />
      ))}
    </>
  );
};

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
      <CardContent className="flex flex-col p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-medium text-white">{review.name}</h4>
            <div className="flex mt-1">
              <RatingStars rating={review.rating} />
            </div>
          </div>
        </div>
        <p className="text-sm opacity-90 italic">&quot;{review.comment}&quot;</p>
      </CardContent>
    </Card>
  );
};

const ReviewsCarousel: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel 
      setApi={setApi}
      className="w-full"
      opts={{
        align: "center",
        loop: true
      }}
    >
      <CarouselContent>
        {userReviews.map((review) => (
          <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
            <ReviewCard review={review} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

const ReviewsSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black/90 to-[#051853] text-white px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 80">
            <MessageSquareText size={25} className="inline mr-2" color="green"/>
            What Our Users Say
        </h2>
        <p className="text-sm md:text-base opacity-80 max-w-2xl mx-auto">
          See how The Recipe is helping home cooks transform their kitchen experience
        </p>
      </div>
      
      <div className="w-full max-w-4xl mx-auto">
        <ReviewsCarousel />
      </div>
    </section>
  );
};

export default ReviewsSection;