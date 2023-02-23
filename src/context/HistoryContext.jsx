import useLocalStorage from 'Hooks/useLocalStorage';
import { createContext, useEffect } from 'react';

export const historyContext = createContext();

const LS_KEY = 'save';

export const HistoryContext = ({ children }) => {
  const [arr, setArr] = useLocalStorage(LS_KEY, []);

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(arr));
  }, [arr]);

  return (
    <historyContext.Provider value={{ arr, setArr }}>
      {children}
    </historyContext.Provider>
  );
};
