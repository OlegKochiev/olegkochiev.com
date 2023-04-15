import React, {useState, useEffect} from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? JSON.parse(stored) : initialValue);
  }, [initialValue, key]);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue] as const;
}
