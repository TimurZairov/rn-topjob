import {ReactNode, createContext, useState} from 'react';
import React from 'react';

interface AppContextProps {
  vacancyCategory: string;
  setVacancyCategory: React.Dispatch<React.SetStateAction<string>>;
  vacancyName: string;
  setVacancyName: React.Dispatch<React.SetStateAction<string>>;
  vacancyCity: string;
  setVacancyCity: React.Dispatch<React.SetStateAction<string>>;
  vacancyAddress: string;
  setVacancyAddress: React.Dispatch<React.SetStateAction<string>>;
  vacancySalaryFrom: string;
  setVacancySalaryFrom: React.Dispatch<React.SetStateAction<string>>;
  vacancySalaryTo: string;
  setVacancySalaryTo: React.Dispatch<React.SetStateAction<string>>;
}

interface IAppContextProvider {
  children: ReactNode;
}

export const AppContext = createContext<AppContextProps>({
  vacancyCategory: '',
  setVacancyCategory: () => {},
  vacancyName: '',
  setVacancyName: () => {},
  vacancyCity: '',
  setVacancyCity: () => {},
  vacancyAddress: '',
  setVacancyAddress: () => {},
  vacancySalaryFrom: '',
  setVacancySalaryFrom: () => {},
  vacancySalaryTo: '',
  setVacancySalaryTo: () => {},
});

const AppContextProvider = ({children}: IAppContextProvider) => {
  const [vacancyCategory, setVacancyCategory] = useState('');
  const [vacancyName, setVacancyName] = useState('');
  const [vacancyCity, setVacancyCity] = useState('');
  const [vacancyAddress, setVacancyAddress] = useState('');
  const [vacancySalaryFrom, setVacancySalaryFrom] = useState('');
  const [vacancySalaryTo, setVacancySalaryTo] = useState('');
  return (
    <AppContext.Provider
      value={{
        vacancyCategory,
        setVacancyCategory,
        vacancyName,
        setVacancyName,
        vacancyCity,
        setVacancyCity,
        vacancyAddress,
        setVacancyAddress,
        vacancySalaryFrom,
        setVacancySalaryFrom,
        vacancySalaryTo,
        setVacancySalaryTo,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
