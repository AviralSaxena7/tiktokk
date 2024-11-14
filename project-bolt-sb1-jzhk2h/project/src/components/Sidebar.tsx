import React, { useState } from 'react';
import {
  Home,
  TrendingUp,
  Users,
  Radio,
  Compass,
  Heart,
  List,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: TrendingUp, label: 'Trending', path: '/trending' },
  { icon: Compass, label: 'Recommended', path: '/recommended' },
  { icon: Radio, label: 'Go Live', path: '/live' },
  { icon: Users, label: 'Following', path: '/following' },
  { icon: Heart, label: 'Liked', path: '/liked' },
  { icon: List, label: 'Category', path: '/category' }, // New Category Option
];

export function Sidebar() {
  const location = useLocation();
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const handleBuyClick = () => {
    setSidebarVisible(false); // Hide the sidebar when the Buy button is clicked
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[240px] bg-black text-white p-4 flex flex-col gap-2 z-50 transition-transform duration-300 ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8">
          <Link to="/" className="block">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              TokClone
            </h1>
          </Link>
        </div>

        <nav className="flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-4 p-4 w-full rounded-xl transition-all
                ${
                  location.pathname === item.path
                    ? 'bg-white/10 text-white'
                    : 'hover:bg-white/5 text-gray-400 hover:text-white'
                }
              `}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/10 pt-4 text-sm text-gray-400">
          <p>© 2024 TokClone</p>
        </div>
      </aside>

      {/* Buy Button */}
      <div className="p-4">
        <button
          onClick={handleBuyClick}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Buy
        </button>
      </div>
    </>
  );
}
