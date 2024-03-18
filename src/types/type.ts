export type User = {
  __v: number;
  _id: string;
  city: string;
  createdAt: string;
  dislikes: number;
  email: string;
  name: string;
  image: string;
  images: string[];
  likes: number;
  password: string;
  updatedAt: string;
  userVacancies: string[];
  reviews: number;
  phoneNumber: string;
};

export type Vacancy = {
  __v?: number;
  _id?: string;
  category: string;
  companyName: string | undefined;
  createdAt?: string;
  description: string;
  img?: string;
  address: string;
  name: string;
  salaryFrom: string;
  salaryTo: string;
  updatedAt?: string;
  workTime?: string;
  salary?: string;
  views?: number;
  city: string;
  employmentType: string;
  userId: string | undefined;
};

export type Service = {
  __v?: number;
  _id?: string;
  category: string;
  companyName?: string;
  createdAt?: string;
  description: string;
  images?: string;
  address?: string;
  name: string;
  salaryFrom: string;
  salaryTo: string;
  updatedAt?: string;
  views?: number;
  isContract?: boolean;
  userId: string | undefined;
};
