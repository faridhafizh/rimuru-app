import React from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon } from './icons';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="top-header">
      <button className="mobile-menu-btn" onClick={onMenuClick}>
        <MenuIcon />
      </button>
      
      <div className="search-bar">
        <div className="search-icon"><SearchIcon /></div>
        <input type="text" placeholder="Search episodes, characters..." />
      </div>

      <div className="profile-widget">
        <div style={{ padding: '0 0.5rem', fontWeight: '500' }}>Admin</div>
        <Image src="/avatar.png" alt="Profile" width={40} height={40} className="avatar" />
      </div>
    </header>
  );
}
