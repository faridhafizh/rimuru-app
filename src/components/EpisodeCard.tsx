import React from 'react';
import Image from 'next/image';

interface EpisodeCardProps {
  item: number;
}

export function EpisodeCard({ item }: EpisodeCardProps) {
  return (
    <div className="glass-card episode-card">
      <div className="card-image-wrapper">
        <Image src="/card.png" alt="Episode Thumbnail" width={300} height={160} className="card-image" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="card-meta">Season 3 • Episode {item}</div>
      <h4 className="card-title">Slime Chronicles Pt. {item}</h4>
      <p className="card-desc">Rimuru and the citizens of Tempest prepare for the upcoming festival. Tension rises as new guests arrive.</p>
    </div>
  );
}
