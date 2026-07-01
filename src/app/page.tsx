'use client';
import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { EpisodeCard } from '@/components/EpisodeCard';
import { VideoIcon } from '@/components/icons';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} />

      <main className="main-content">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <Hero />

        <h3 className="section-title">
          <VideoIcon /> Latest Episodes
        </h3>
        
        <div className="grid-container">
          {[1, 2, 3, 4].map((item) => (
            <EpisodeCard key={item} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
