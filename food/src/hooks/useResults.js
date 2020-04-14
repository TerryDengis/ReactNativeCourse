import { useState, useEffect } from 'react';

import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      setErrorMessage('');
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          location: 'san jose',
          term: searchTerm,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Somethng went wrong, try again later');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
