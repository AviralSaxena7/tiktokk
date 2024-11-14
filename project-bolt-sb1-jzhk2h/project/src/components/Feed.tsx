// Feed.js
import React from 'react';
import { VideoCard } from './VideoCard';

const videos = [
  {
    username: 'fashionista',
    description: '🌟 NEW DROP: Limited Edition Summer Collection! Grab yours now! #fashion',
    songName: 'Summer Vibes - Fashion Beat',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
    likes: 0,  // Ensure likes is a number
    comments: '0',
    shares: '0',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    productId: 'summer-dress-001',
    price: '59.99',
  },
  {
    username: 'techgeek',
    description: '🎮 Next-gen Gaming Headphones with 3D Audio! #tech #gaming',
    songName: 'Tech Review - Gaming Series',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
    likes: 0,  // Ensure likes is a number
    comments: '0',
    shares: '0',
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
    productId: 'gaming-headset-002',
    price: '129.99',
  },
  {
    username: 'beautyguru',
    description: '💄 Revolutionary 24h Matte Lipstick - Waterproof & Smudge-free! #beauty',
    songName: 'Glam Time - Beauty Beats',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-serving-dinner-442-large.mp4',
    likes: 0,  // Ensure likes is a number
    comments: '0',
    shares: '0',
    userImage: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150',
    productId: 'matte-lipstick-003',
    price: '24.99',
  },
];

export function Feed() {
  return (
    <div className="h-[calc(100vh-4rem)] w-full overflow-y-scroll snap-y snap-mandatory">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}
