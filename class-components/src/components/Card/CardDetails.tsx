import type { CardDetailsProps } from '../../types/types';
import './cardDetails.css';

export const CardDetails = ({ cat, onClose }: CardDetailsProps) => {
  const breed = cat.breeds?.[0];

  return (
    <div className="card-details-overlay">
      <div className="card-details">
        <button className="card-details__close" onClick={onClose}>
          ×
        </button>
        <div className="card-details__content">
          <div className="card-details__image">
            <img src={cat.url} alt={breed?.name || 'Cat'} />
          </div>
          <div className="card-details__info">
            <h2>{breed?.name || 'Unknown Breed'}</h2>
            <p className="description">
              {breed?.description || 'No description available'}
            </p>

            <div className="traits">
              <div className="trait">
                <span>Child Friendly:</span>
                <span>{breed?.child_friendly ?? 'N/A'}/5</span>
              </div>
              <div className="trait">
                <span>Dog Friendly:</span>
                <span>{breed?.dog_friendly ?? 'N/A'}/5</span>
              </div>
              <div className="trait">
                <span>Energy Level:</span>
                <span>{breed?.energy_level ?? 'N/A'}/5</span>
              </div>
              <div className="trait">
                <span>Intelligence:</span>
                <span>{breed?.intelligence ?? 'N/A'}/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
