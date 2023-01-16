import { createContext, useState, useEffect } from 'react';
import { getAllCategoriesAsync } from '../api';


export const UserContext = createContext({
  cars: [],
  setCars: () => null,
});

export const UserProvider = ({children}) => {
  const [cars, setCars] = useState([]);
  const value = { cars, setCars };

  useEffect(() => {
    const catchData = async () => {
      try {
          const data = await getAllCategoriesAsync();
          setCars(data)
        } catch (e) {
            console.log(e);
            alert('Error at API =/');
          }
        };
    catchData();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}