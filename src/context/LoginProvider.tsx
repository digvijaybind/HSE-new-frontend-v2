import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactElement,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserData = createContext({
  userData: { hasLoggedIn: false },
  updateUserData: (data: any) => {},
});

export const loginContext = () => {
  return useContext(UserData);
};

export const UserDataProvider = ({ children }: { children: ReactElement }) => {
  const [userData, setUserData] = useState({
    hasLoggedIn: false,
  });

  useEffect(() => {
    const loadUserInterests = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUserInterests();
  }, []);

  const updateUserData = async (data: any) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
    setUserData(data);
  };

  return (
    <UserData.Provider value={{ userData, updateUserData }}>
      {children}
    </UserData.Provider>
  );
};
