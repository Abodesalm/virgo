const api = "https://3bod.netlify.app/api";
//const api = "http://localhost:3000/api";

interface emploeesData {
  id: String;
  fullName: String;
  birthDate: Date;
  address: String;
  photo: String;
  phoneNumber: String;
  email: String;
  jopTitle: String;
  department: String;
  salary: number;
  joinDate: Date;
  notes: String;
  empDuration: number;
  age: number;
  absences: Date[];
  thisAbsences: Date[];
  cv: String;
}

const fakeData: emploeesData[] = [
  {
    id: "1",
    fullName: "Abdullah Ahmad",
    birthDate: "2006,December,13",
    address: "Deir-Ezzor , Syria",
    photo: "https://zed-games-api.onrender.com/img/games/boomerang-fu.jpg",
    phoneNumber: "+963 997 203 291",
    email: "abodesalm45@gmail.com",
    jopTitle: "programmer",
    department: "programming",
    salary: 350,
    joinDate: "2022,june,15",
    notes: "loremm ipsum dolor sur lorem ipsum dolor sur so ror de",
    empDuration: 652,
    age: 17,
    absences: [],
    thisAbsences: [],
    cv: "https://cv.example.com",
  },
  {
    id: "2",
    fullName: "Ahmad Almahmoud",
    birthDate: "1998,April,28",
    address: "Mekkah , KSA",
    photo: "https://zed-games-api.onrender.com/img/games/boomerang-fu.jpg",
    phoneNumber: "+966 955 425 154",
    email: "khaled@example.com",
    jopTitle: "designer",
    department: "marketing",
    salary: 300,
    joinDate: "2020,january,3",
    notes: "loremm ipsum dolor sur lorem ipsum dolor sur so ror de",
    empDuration: 1342,
    age: 16,
    absences: [],
    thisAbsences: [],
    cv: "https://cv.example.com",
  },
  {
    id: "3",
    fullName: "khaled Alkhalaf",
    birthDate: "1998,April,28",
    address: "Hamburg , Germany",
    photo: "https://zed-games-api.onrender.com/img/games/boomerang-fu.jpg",
    phoneNumber: "+49 955 4425 154",
    email: "khaled@example.com",
    jopTitle: "designer",
    department: "marketing",
    salary: 400,
    joinDate: "2020,january,3",
    notes: "loremm ipsum dolor sur lorem ipsum dolor sur so ror de",
    empDuration: 1342,
    age: 26,
    absences: [],
    thisAbsences: [],
    cv: "https://cv.example.com",
  },
  {
    id: "4",
    fullName: "Bashar Alsakhr",
    birthDate: "1998,April,28",
    address: "Jerusalem , Palestine",
    photo: "https://zed-games-api.onrender.com/img/games/boomerang-fu.jpg",
    phoneNumber: "+966 955 425 154",
    email: "khaled@example.com",
    jopTitle: "cyber security",
    department: "IT",
    salary: 500,
    joinDate: "2020,january,3",
    notes: "loremm ipsum dolor sur lorem ipsum dolor sur so ror de",
    empDuration: 1342,
    age: 20,
    absences: [],
    thisAbsences: [],
    cv: "https://cv.example.com",
  },
  {
    id: "5",
    fullName: "Omar Salim",
    birthDate: "2003,April,28",
    address: "Damascus , Syria",
    photo: "https://zed-games-api.onrender.com/img/games/boomerang-fu.jpg",
    phoneNumber: "+963 955 425 154",
    email: "omar@example.com",
    jopTitle: "Web Developer",
    department: "IT",
    salary: 260,
    joinDate: "2021,january,3",
    notes: "loremm ipsum dolor sur lorem ipsum dolor sur so ror de",
    empDuration: 942,
    age: 20,
    absences: [],
    thisAbsences: [],
    cv: "https://cv.example.com",
  },
  /*   {
    id: "2",
    fullName: "",
    birthDate: "",
    address: "",
    photo: "https://zed-games-api.onrender.com/img/games/boomerang-fu.jpg",
    phoneNumber: "",
    Email: "",
    jopTitle: "",
    department: "",
    salary: 1,
    joinDate: "",
    notes: "",
    empDuration: 1,
    age: 1,
    absences: [],
    thisAbsences: [],
  }, */
];

const fakeStats = {
  salaries: 2600,
  emploees: 16,
  departments: 7,
};

const comDetails = {
  name: "Valve Corporation",
  mainAddress: "8354 john st. , sedny , Australia",
  owner: "Gabe Nuelle",
};

export { api, fakeStats, fakeData, comDetails };
