import React, { useEffect, useState } from 'react';
import usePhotos from '../hooks/usePhotos.ts';

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const fetchPhotos = usePhotos();

  useEffect(() => {
    const updatePhotos = async () => {
      const newPhotos = await fetchPhotos(9);
      setPhotos(newPhotos);
    };

    updatePhotos();
    const interval = setInterval(updatePhotos, 10000);

    return () => clearInterval(interval);
  }, [fetchPhotos]);

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;