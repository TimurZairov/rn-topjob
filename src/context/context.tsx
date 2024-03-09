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
  isTask: boolean;
  isVacancy: boolean;
  isService: boolean;
  setIsTask: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVacancy: React.Dispatch<React.SetStateAction<boolean>>;
  setIsService: React.Dispatch<React.SetStateAction<boolean>>;
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
  //
  isTask: false,
  isVacancy: false,
  isService: false,
  setIsTask: () => {},
  setIsVacancy: () => {},
  setIsService: () => {},
});

const AppContextProvider = ({children}: IAppContextProvider) => {
  const [vacancyCategory, setVacancyCategory] = useState('');
  const [vacancyName, setVacancyName] = useState('');
  const [vacancyCity, setVacancyCity] = useState('');
  const [vacancyAddress, setVacancyAddress] = useState('');
  const [vacancySalaryFrom, setVacancySalaryFrom] = useState('');
  const [vacancySalaryTo, setVacancySalaryTo] = useState('');
  const [isTask, setIsTask] = useState<boolean>(false);
  const [isVacancy, setIsVacancy] = useState<boolean>(false);
  const [isService, setIsService] = useState<boolean>(false);
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
        isTask,
        setIsTask,
        isVacancy,
        setIsVacancy,
        isService,
        setIsService,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
