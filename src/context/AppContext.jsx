import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

const URL = 'https://asylum-be.onrender.com';

const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    try {
      const res = await axios.get(`${URL}/fiscalSummary`);
      return res.data;
    } catch (error) {
      console.error('Error fetching fiscal data:', error);
      return null;
    }
  };

  const getCitizenshipResults = async () => {
    try {
      const res = await axios.get(`${URL}/citizenshipSummary`);
      return res.data;
    } catch (error) {
      console.error('Error fetching citizenship data:', error);
      return null;
    }
  };

  const fetchData = async () => {
    try {
      const [fiscalData, citizenshipData] = await Promise.all([
        getFiscalData(),
        getCitizenshipResults(),
      ]);
      if (fiscalData && citizenshipData) {
        const combinedData = {
          ...fiscalData,
          citizenshipResults: citizenshipData.citizenshipResults,
        };
        setGraphData(combinedData);
      }
    } catch (error) {
      console.error('Error fetching combined data:', error);
    } finally {
      setIsDataLoading(false);
    }
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => 
    graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
