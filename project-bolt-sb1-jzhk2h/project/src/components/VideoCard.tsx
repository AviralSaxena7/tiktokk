import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Music2, ShoppingBag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  username: string;
  description: string;
  songName: string;
  videoUrl: string;
  likes: number;
  comments: string;
  shares: string;
  userImage: string;
  productId: string;
  price: string;
}

export function VideoCard({
  username,
  description,
  songName,
  videoUrl,
  likes,
  comments,
  shares,
  userImage,
  productId,
  price,
}: VideoCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(likes);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative h-screen w-full max-w-[800px] mx-auto p-4 bg-black snap-center rounded-xl overflow-hidden shadow-lg">
      <video
        src={videoUrl}
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
        loop
        muted
        autoPlay
        playsInline
      />

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1 text-white">
            <div className="flex items-center gap-2">
              <img
                src={userImage}
                alt={`User avatar of ${username}`}
                className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm md:text-base truncate">@{username}</h3>
                <p className="text-xs md:text-sm opacity-90 line-clamp-2">{description}</p>
                <div className="flex items-center gap-1 text-xs md:text-sm mt-1">
                  <Music2 size={14} />
                  <span className="truncate">{songName}</span>
                </div>
                <div className="mt-2 text-lg md:text-xl font-bold text-green-400">
                  ${price}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center text-white">
            <button 
              className="flex flex-col items-center gap-1" 
              onClick={handleLikeClick}
            >
              <div className={`${isLiked ? 'bg-red-500' : 'bg-white/10'} p-2 md:p-3 rounded-full transition-colors`}>
                <Heart 
                  size={20} 
                  className={`md:w-6 md:h-6 ${isLiked ? 'fill-white' : ''}`} 
                />
              </div>
              <span className="text-[10px] md:text-xs">{likeCount}</span>
            </button>

            <button className="flex flex-col items-center gap-1">
              <div className="bg-white/10 p-2 md:p-3 rounded-full">
                <MessageCircle size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="text-[10px] md:text-xs">{comments}</span>
            </button>

            <button className="flex flex-col items-center gap-1">
              <div className="bg-white/10 p-2 md:p-3 rounded-full">
                <Share2 size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="text-[10px] md:text-xs">{shares}</span>
            </button>

            <Link
              to={`/product/${productId}`}
              className="flex flex-col items-center gap-1"
              aria-label="Buy product"
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 md:p-3 rounded-full animate-pulse">
                <ShoppingBag size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="text-[10px] md:text-xs font-bold">Buy Now</span>
            </Link>

            <button className="flex flex-col items-center gap-1">
              <div className="bg-white/20 p-2 md:p-3 rounded-full">
                <Sparkles size={20} className="md:w-6 md:h-6" />
              </div>
              <span className="text-[10px] md:text-xs">Try On</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}