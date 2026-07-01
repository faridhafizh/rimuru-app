import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="hero-section glass-card" style={{ padding: 0 }}>
      <Image src="/hero.png" alt="Jura Tempest Federation" fill className="hero-bg" priority />
      <div className="hero-overlay"></div>
      <div className="hero-content" style={{ padding: '2.5rem' }}>
        <h2 className="hero-title">Welcome to Tempest</h2>
        <p className="hero-subtitle">Get the latest updates, episode recaps, and character lore from the Jura Tempest Federation.</p>
      </div>
    </section>
  );
}
