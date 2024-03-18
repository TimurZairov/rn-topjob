import {ReactNode, createContext, useState} from 'react';
import React from 'react';

interface AppContextProps {
  //

  createName: string;
  setCreateName: React.Dispatch<React.SetStateAction<string>>;
  vacancyCity: string;
  setVacancyCity: React.Dispatch<React.SetStateAction<string>>;
  vacancyAddress: string;
  setVacancyAddress: React.Dispatch<React.SetStateAction<string>>;
  vacancySalaryFrom: string;
  setVacancySalaryFrom: React.Dispatch<React.SetStateAction<string>>;
  vacancySalaryTo: string;
  setVacancySalaryTo: React.Dispatch<React.SetStateAction<string>>;
  //create props
  isTask: boolean;
  isVacancy: boolean;
  isService: boolean;
  setIsTask: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVacancy: React.Dispatch<React.SetStateAction<boolean>>;
  setIsService: React.Dispatch<React.SetStateAction<boolean>>;

  //User
  name: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  about: string;
  category: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setAbout: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

interface IAppContextProvider {
  children: ReactNode;
}

export const AppContext = createContext<AppContextProps>({
  //vacancy

  createName: '',
  setCreateName: () => {},
  vacancyCity: '',
  setVacancyCity: () => {},
  vacancyAddress: '',
  setVacancyAddress: () => {},
  vacancySalaryFrom: '',
  setVacancySalaryFrom: () => {},
  vacancySalaryTo: '',
  setVacancySalaryTo: () => {},
  //task
  isTask: false,
  isVacancy: false,
  isService: false,
  setIsTask: () => {},
  setIsVacancy: () => {},
  setIsService: () => {},
  //user
  name: '',
  lastName: '',
  phoneNumber: '',
  city: '',
  about: '',
  category: '',
  setName: () => {},
  setLastName: () => {},
  setPhoneNumber: () => {},
  setCity: () => {},
  setAbout: () => {},
  setCategory: () => {},
});

const AppContextProvider = ({children}: IAppContextProvider) => {
  //
  const [category, setCategory] = useState('');

  const [createName, setCreateName] = useState('');
  const [vacancyCity, setVacancyCity] = useState('');
  const [vacancyAddress, setVacancyAddress] = useState('');
  const [vacancySalaryFrom, setVacancySalaryFrom] = useState('');
  const [vacancySalaryTo, setVacancySalaryTo] = useState('');
  //
  const [isTask, setIsTask] = useState<boolean>(false);
  const [isVacancy, setIsVacancy] = useState<boolean>(false);
  const [isService, setIsService] = useState<boolean>(false);
  //user
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [about, setAbout] = useState('');

  return (
    <AppContext.Provider
      value={{
        //Vacancy

        createName,
        setCreateName,
        vacancyCity,
        setVacancyCity,
        vacancyAddress,
        setVacancyAddress,
        vacancySalaryFrom,
        setVacancySalaryFrom,
        vacancySalaryTo,
        setVacancySalaryTo,
        //
        isTask,
        setIsTask,
        isVacancy,
        setIsVacancy,
        isService,
        setIsService,

        //
        name,
        lastName,
        phoneNumber,
        city,
        about,
        category,
        setName,
        setLastName,
        setPhoneNumber,
        setCity,
        setAbout,
        setCategory,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
