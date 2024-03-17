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
  _id: string;
  category: string;
  companyName: string;
  createdAt: string;
  description: number;
  img: string;
  location: string;
  name: string;
  salaryFrom: number;
  salaryTo: number;
  updatedAt: string;
  workTime: string;
  salary: string;
  views: number;
};
