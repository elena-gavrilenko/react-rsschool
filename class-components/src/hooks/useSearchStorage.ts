import { useState, useEffect } from 'react';

export const useSearchStorage = (key: string, initialValue: string = '') => {
  const [searchQuery, setSearchQuery] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem(key);
      return savedValue !== null ? savedValue : initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, searchQuery);
  }, [key, searchQuery]);

  const clearSearch = () => {
    localStorage.removeItem(key);
    setSearchQuery(initialValue);
  };

  return { searchQuery, setSearchQuery, clearSearch };
};
