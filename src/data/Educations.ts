 type education = {
    id: number;
    name: string;
    time: string;
    description: string;
 };

 const educations: education[] = [
  {
    id: 1,
    name: "Universitas Budi Luhur",
    time: "2014 - 2018",
    description :"Sistem Informasi"
  },
  {
    id: 2,
    name: "SMKN 4 Tangerang",
    time: "2011 - 2014",
    description :"Rekayasa Perangkat Lunak"
  },
];

const course: education[] = [
    {
      id: 1,
      name: "Spring Boot",
      time: "2025",
      description :"UDEMY Course Programmer Zaman Now"
    },
    {
      id: 2,
      name: "Complete Web Developer",
      time: "2020",
      description :"UDEMY Course Andrei Neagoie"
    },
  ];


  export {educations, course};