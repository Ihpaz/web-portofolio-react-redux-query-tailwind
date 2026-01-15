export type ResumesType = {
  id: number;
  title: string;
  description: string;
  skills: string[];
  link?: string;
  image: string;
  images?: string[];
}

const Resumes: ResumesType[] = [
  {
    id: 0,
    title: "WMS(Warehouse Management System) for KFC",
    description: "A comprehensive warehouse management system for KFC that handles incoming and outgoing stock, production cycles, stock reconciliation, and delivery orders to outlets. Key features include inventory tracking and detailed analysis of goods movement",
    skills: ["Spring Boot", "Angular", "Jasper", "Oracle"],
    image: 'wms-1.png',
    images: ['wms-1.png', 'wms-2.png']
  },
  {
    id: 1,
    title: "LMS (Cyber Threat Intelligent) for KEMHAN",
    description: "LMS for learning about F5, Cyfirma, and CVE via video, PDF, and practice. Integrated with F5 (network firewall) and Cyfirma (threat landscape management) to create a dashboard for students to analyze threats and practice CVEs. Includes quizzes and progress tracking.",
    skills: ["Laravel", "Vue Js", "Cyfirma API", "Socket IO", "Mysql"],
    link: "https://cyseclms.com/login",
    image: 'lms-1.png',
    images: ['lms-1.png', 'lms-1.png', 'lms-1.png']
  },
  {
    id: 2,
    title: "Konsultrik",
    description: "Consultancy platform for electricity engineering with PLN engineers via chat, Zoom, and onsite meetings. Integrated with Firebase, Zoom API, and Iconpay payment gateway, using Socket IO for real-time status updates.",
    skills: ["Laravel", "Vue Js", "Firestore", "Socket IO", "Zoom API", "Postgresql", "Iconpay"],
    link: "https://konsultrik.plne.co.id/",
    image: 'konsultrik-1.png',
    images: ['konsultrik-1.png', 'konsultrik-1.png', 'konsultrik-1.png']
  },
  {
    id: 3,
    title: "SSO Server & Advance Threat Detection System",
    description: "SSO server and threat detection system integrated with F5 API for monitoring unusual traffic and sending notifications via Telegram API.",
    skills: ["Laravel", "Vue Js", "Mysql", "F5 API"],
    image: 'sso-1.png',
    images: ['sso-1.png', 'sso-1.png', 'sso-1.png']
  },
  {
    id: 4,
    title: "SolAce HRIS",
    description: "Web and mobile HRIS system for attendance, leave, business travel, e-learning, KPI tracking, etc.",
    skills: ["Nest JS", "Angular", "SQL Server", "Ionic"],
    link: "https://tinyurl.com/36j8b2ta",
    image: 'solace-1.jpg',
    images: ['solace-1.jpg', 'solace-1.jpg', 'solace-1.jpg']
  },
  {
    id: 5,
    title: "Inventory Apps For PT Liwayway",
    description: "Inventory management system for tracking goods entering and exiting warehouses using scanners, delivery orders, and stock opname.",
    skills: ["Nest JS", "Angular", "Ionic", "SQL Server"],
    link: "https://tinyurl.com/3tu3rcfw",
    image: 'inventory-1.png',
    images: ['inventory-1.png', 'inventory-2.png']
  },
  {
    id: 6,
    title: "Outlet Management System",
    description: "Dashboard for monitoring Golden Lamian outlets activities, fetching data from Google Spreadsheet API, and generating analytics dashboards.",
    skills: ["Nest JS", "Angular", "Mysql"],
    link: "https://github.com/Ihpaz/operationfrontend",
    image: 'operations-1.png',
    images: ['operations-1.png', 'operations-1.png', 'operations-1.png']
  },
  {
    id: 7,
    title: "Booking Flight API",
    description: "Create Booking Flight API for E-Travel APP PLN ICON integrated with Drupadi API",
    skills: ["Spring Boot", "SQL Server"],
    image: 'fligh-1.png',
    images: ['fligh-1.png', 'fligh-1.png', 'fligh-1.png']
  },
  {
    id: 8,
    title: "SIAP (Sistem Informasi Aplikasi Perkebunan)",
    description: "ERP system for palm oil plantations including HRIS, accounting, sales, inventory, and weighbridge system.",
    skills: ["Codeigniter", "PHP", "Postgresql", "VB", "Postgresql"],
    image: 'siap-1.jpg',
    images: ['siap-1.jpg', 'siap-1.jpg', 'siap-1.jpg']
  },
  {
    id: 9,
    title: "Web for Managing New IKN PLN Building Opening Guests",
    description: "Web application for managing guest lists, rundown, panoramic and 3D views for the new IKN PLN building opening.",
    skills: ["Laravel", "Vue Js", "Mysql"],
    link: "https://dev-ikn.air.id",
    image: 'ikn-1.png',
    images: ['ikn-1.png', 'ikn-1.png', 'ikn-1.png']
  },
  {
    id: 10,
    title: "EMS (Electricity Monitoring System)",
    description: "Electricity Monitoring System for monitoring electricity usage , outage , billing etc.",
    skills: ["Spring Boot", "SQL Server"],
    link: "https://dev-ikn.air.id",
    image: 'ems-1.png',
    images: ['ems-1.png', 'ems-1.png', 'ems-1.png']
  },
  {
    id: 11,
    title: "Portofolio Website",
    description: "My portofolio website was build using React Js with react-router, react-query , redux-toolkit and tailwindcss",
    skills: ["React Js"],
    link: "https://dev-ikn.air.id",
    image: 'portofolio-1.png',
    images: ['portofolio-1.png', 'portofolio-1.png', 'portofolio-1.png']
  },
  {
    id: 12,
    title: "Dashboard Monitoring and Integration KFC Data to Netsuite",
    description: "Dashboard for monitoring KFC data and integrating it with Netsuite, including real-time data synchronization and analytics.",
    skills: ["Spring Boot", "Angular", "Netsuite API", "Oracle"],
    image: 'apintegrasi2.png',
    images: ['apintegrasi2.png', 'apintegrasi2.png', 'apintegrasi2.png']
  },
];


export const categories = ["All", "Laravel", "Vue Js", "Nest JS", "Angular", "Codeigniter", "Spring Boot", "React Js"];

export default Resumes;

