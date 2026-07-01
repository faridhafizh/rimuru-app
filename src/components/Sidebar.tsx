import React from 'react';
import { HomeIcon, VideoIcon, UsersIcon, NewspaperIcon } from './icons';

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="avatar" style={{ background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontWeight: 'bold' }}>T</span>
        </div>
        <h1>Tensura Dash</h1>
      </div>

      <nav>
        <a href="#" className="nav-link active">
          <HomeIcon />
          <span>Dashboard</span>
        </a>
        <a href="#" className="nav-link">
          <VideoIcon />
          <span>Episodes</span>
        </a>
        <a href="#" className="nav-link">
          <UsersIcon />
          <span>Characters</span>
        </a>
        <a href="#" className="nav-link">
          <NewspaperIcon />
          <span>News & Updates</span>
        </a>
      </nav>
    </aside>
  );
}
