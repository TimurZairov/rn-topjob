export type User = {
  __v: number;
  _id: string;
  categoryTag: string[];
  city: string;
  createdAt: string;
  dislikes: number;
  email: string;
  image: string;
  images: string[];
  likes: number;
  password: string;
  updatedAt: string;
  userVacancies: string[];
  reviews: number;
};

export type Vacancy = {
  __v: number;
  _id: string;
  category: string[];
  companyName: string;
  createdAt: string;
  description: number;
  img: string;
  location: string;
  name: string[];
  salary: number;
  updatedAt: string;
  workTime: string[];
  views: number;
};

// {"__v": 0,
//  "_id": "65e46c05990635d3289a500d",
//   "category": "meneger",
//    "companyName": "Big COmpany",
//     "createdAt": "2024-03-03T12:24:37.274Z",
//      "description": "work at home or from anywhere",
//       "img": "",
//        "location": "Tashkent",
//         "name": "New work at home",
//          "salary": "20 000 000",
//           "updatedAt": "2024-03-03T12:24:37.274Z",
//            "views": 0,
//             "workTime": "fulltime"
