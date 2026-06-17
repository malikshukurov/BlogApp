'use client';

import { useState, useMemo } from 'react';

export function useSearch(initialData = []) {
  const [searchTerm, setSearchTerm] = useState('');

  // Performans üçün axtarışı useMemo ilə keşləyirik
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return initialData;
    
    const query = searchTerm.toLowerCase();
    return initialData.filter(
      (item) =>
        item.title?.toLowerCase().includes(query) ||
        item.body?.toLowerCase().includes(query)
    );
  }, [searchTerm, initialData]);

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
  };
}