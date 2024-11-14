import React from 'react';
import { Search, Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-[240px] h-16 bg-black/90 backdrop-blur-sm z-50 px-4 flex items-center justify-between gap-4 border-b border-white/10 sm:left-0">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-white/10 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-white/10 rounded-full">
          <Bell size={20} className="text-white" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button className="flex items-center gap-2 bg-white/10 rounded-full p-1.5 pr-4 hover:bg-white/20">
          <div className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <span className="text-white text-sm hidden sm:block">Account</span>
        </button>
      </div>
    </header>
  );
}