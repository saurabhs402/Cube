import { useCallback } from 'react';

const usePhotos = () => {
  const fetchPhotos = useCallback(async (count: number) => {
    // Replace this with an actual API call to fetch photos
    const photos = Array.from({ length: count }, (_, i) => 
      `https://picsum.photos/200/200?random=${Date.now() + i}`
    );
    return photos;
  }, []);

  return fetchPhotos;
};

export default usePhotos;