import React from 'react';
import './videoSection.css';

export default function VideoSection({ sectionTitle, multimediaData }) {
  return (
    <div className="section">
      <h2 className='title'>{sectionTitle}</h2>
      <div className="video-list">
        {multimediaData.map((item, index) => (
          <div key={index} className="video-card">
            {item.images && item.images.S && (
              <img src={item.images.S} alt={`Image ${item.ID && item.ID.S ? item.ID.S : index}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
