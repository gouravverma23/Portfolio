import React from 'react';
import './ShootingStars.css';

const ShootingStars = React.memo(() => {
  return (
    <div className="shooting-stars-container" aria-hidden="true">
      <div className="shooting-star star-1"></div>
      <div className="shooting-star star-2"></div>
      <div className="shooting-star star-3"></div>
      <div className="shooting-star star-4"></div>
      <div className="shooting-star star-5"></div>
      <div className="shooting-star star-6"></div>
      <div className="shooting-star star-7"></div>
      <div className="shooting-star star-8"></div>
    </div>
  );
});

ShootingStars.displayName = 'ShootingStars';

export default ShootingStars;
