import React from 'react';
import { Link } from 'react-router-dom';
import './videoSection.css';

export default function VideoSection({ sectionTitle, multimediaData }) {
  return (
    <div className="section">
      <h2 className='title'>{sectionTitle}</h2>
      <div className="video-list">
        {multimediaData.map((item, index) => (
          <div key={index} className="video-card">
            {item.images && item.images.S && (
              <Link to={`/multimedia/${item.ID.S}`}>
                <div className="image-container">
                  <img src={item.images.S} alt={`Image ${item.ID && item.ID.S ? item.ID.S : index}`} />
                  {item.Name && item.Name.S && <p className="image-text">{item.Name.S}</p>}
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
