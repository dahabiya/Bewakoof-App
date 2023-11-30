import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context with initial values
const DataContext = createContext();

// Custom hook to use the data context
export const useDataContext = () => {
  return useContext(DataContext);
};

// Data provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate a data fetch from an API using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate an API call (replace with your actual API call)
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();

        // Set the data in the state
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run only on mount

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};
