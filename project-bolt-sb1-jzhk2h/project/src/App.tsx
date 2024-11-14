import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Feed } from './components/Feed';
import { ProductPage } from './components/ProductPage';
import { LiveStream } from './components/LiveStream';

export function App() {
  return (
    <Router>
      <div className="flex bg-black min-h-screen">
        <Sidebar />
        <div className="flex-1 ml-[240px] sm:ml-0">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/live" element={<LiveStream />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}