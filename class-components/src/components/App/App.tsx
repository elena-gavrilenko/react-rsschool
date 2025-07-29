import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { API_KEY, CATS_URL } from '../constants/constants';

export const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [cats, setCats] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const loadData = async (breedId: string, page: number) => {
    setIsLoading(true);
    try {
      const limit = breedId.trim() ? 1 : 10;
      let apiUrl = `${CATS_URL}limit=${limit}&has_breeds=1&page=${page}`;

      if (breedId.trim()) {
        apiUrl += `&breed_ids=${breedId.trim()}`;
      }

      const response = await fetch(apiUrl, {
        headers: { 'x-api-key': API_KEY },
      });

      const data = await response.json();
      const totalCount = parseInt(
        response.headers.get('pagination-count') || '0',
        10
      );

      setCats(data);
      setTotalPages(Math.ceil(totalCount / 10));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const breed = searchParams.get('breed') || '';
    const page = parseInt(searchParams.get('page') || '0', 10);
    loadData(breed, page);
  }, [searchParams]);

  const handleSearch = (query: string) => {
    setSearchParams({
      breed: query,
      page: '0',
    });
  };

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      const breed = prev.get('breed') || '';
      return { breed, page: page.toString() };
    });
  };

  const currentPage = parseInt(searchParams.get('page') || '0', 10);

  return (
    <>
      <Header onSearchQueryChange={handleSearch} isLoading={isLoading} />
      <Main
        cats={cats}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
