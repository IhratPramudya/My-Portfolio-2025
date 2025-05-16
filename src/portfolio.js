/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ihrat Pramudya",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ihrat Pramudya",
    type: "website",
    url: "https://github.com/IhratPramudya",
  },
};

//Home Page
const greeting = {
  title: "Ihrat Pramudya",
  logo_name: "Ihrat Pramudya",
  nickname: "Ihrat",
  subTitle:
    "Saya memiliki Passion yang sangat kuat dalam bidang Software Engineer",
  resumeLink:
    "https://drive.google.com/file/d/1xpjt4KBZMWaoySYBZJKos-KH-1VUJ_sm/view?usp=sharing",
  portfolio_repository: "https://github.com/IhratPramudya",
  githubProfile: "https://github.com/IhratPramudya",
};

const vision = {
  text:
    "Menjadi web developer yang inovatif dan berorientasi pada solusi, menciptakan aplikasi web yang efisien, responsif, dan berdampak luas.",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/IhratPramudya",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/ihrat-pramudya",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@TutorKampusku",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:pramudyaihrat@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/IhratPramudya/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universitas Bina Sarana Informatika",
      subtitle: "Teknik dan Informatika",
      logo_path: "UBSI_logo.png",
      alt_name: "Universitas BSI",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://pmbubsi.id/kampus/index-main.html",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Front End Development Expert",
      subtitle: "- Dicoding Academy",
      logo_path: "dicoding_logo.jpg",
      certificate_link: "https://www.dicoding.com/certificates/4EXG9999DZRL",
      alt_name: "Dicoding Indonesia",
      color_code: "#8C151599",
    },
    {
      title: "Belajar Fundamental Front-End Web Development",
      subtitle: "- Dicoding Academy",
      logo_path: "dicoding_logo.jpg",
      certificate_link: "https://www.dicoding.com/certificates/81P2G0K3QPOY",
      alt_name: "Fundamental Front End",
      color_code: "#00000099",
    },
    {
      title: "Belajar Dasar Pemrogramman Javascript",
      subtitle: "- Dicoding Academy",
      logo_path: "dicoding_logo.jpg",
      certificate_link: "https://www.dicoding.com/certificates/N9ZO69NMDXG5",
      alt_name: "Dasar Javascript",
      color_code: "#0C9D5899",
    },
    {
      title: "Web Development",
      subtitle: "- Angela Yu",
      logo_path: "udemy_logo.jpg",
      certificate_link:
        "https://ude.my/UC-161caa2a-a3a3-45ff-8a1a-a8279020a029",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Belajar FUndamental Aplikasi Web dengan React",
      subtitle: "- Dicoding Academy",
      logo_path: "dicoding_logo.jpg",
      certificate_link: "https://www.dicoding.com/certificates/L4PQGE634ZO1",
      alt_name: "Fundamental React Development",
      color_code: "#D83B0199",
    },
    {
      title: "belajar Fundamental Aplikasi Back-End",
      subtitle: "- Dicoding Academy",
      logo_path: "dicoding_logo.jpg",
      certificate_link: "https://www.dicoding.com/certificates/N9ZO69996XG5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      subtitle: "- System Adminitrator",
      logo_path: "redhat_logo.jpg",
      certificate_link:
        "https://www.credly.com/badges/9a96d6f8-4b95-4fb0-856c-76472ab63ade/linked_in_profile",
      alt_name: "RedHat",
      color_code: "#0C9D5899",
    },
    {
      title: "Authentication and Authorization in React",
      subtitle: "- PluralSight",
      logo_path: "pluralsight_logo.jpg",
      certificate_link:
        "https://id.search.yahoo.com/search?fr=mcafee&type=E210ID885G0&p=pluralsight",
      alt_name: "Pluralsight",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Designer and Software Developer. I have also worked with some well established companies mostly. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack",
          company: "",
          company_url: "https://www.dicoding.com/",
          logo_path: "nptel_logo.png",
          duration: "June 2023 - 2023",
          location: "Indonesia",
          description: "--",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Red Hat Certified Administrator",
          company: "Redhat",
          company_url: "https://www.redhat.com/en",
          logo_path: "redhat_logo.png",
          duration: "May 2023 - Nov 2023",
          location: "Batam, Indonesia",
          description:
            "Saya mengikuti sebuah program sertifikasi bergengsi yang diikuti oleh lebih dari 1.000 peserta, dengan tujuan untuk mendapatkan sertifikasi Linux Red Hat, salah satu sertifikasi paling diakui dalam dunia sistem operasi berbasis Linux. Dalam prosesnya, seluruh peserta harus melalui tahapan seleksi yang ketat, di mana hanya 200 peserta terbaik yang berhasil lolos ke tahap ujian akhir. Ujian ini dirancang untuk mengukur kemampuan teknis secara mendalam, mulai dari administrasi sistem hingga manajemen jaringan berbasis Linux. Keikutsertaan dalam program ini menjadi pengalaman yang sangat berharga, karena tidak hanya menantang secara teknis, tetapi juga mempertemukan saya dengan para profesional IT dari berbagai latar belakang.",
          color: "#ee3c26",
        },
        {
          title: "Hybrid Cloud & AI",
          company: "Infinite Learning indonesia",
          company_url: "https://www.infinitelearning.id/",
          logo_path: "infinite_logo.png",
          duration: "May 2023 - Nov 2023",
          location: "Batam, Indonesia",
          description:
            "Saya membangun sebuah aplikasi cerdas yang dirancang khusus untuk membantu petani dalam mendeteksi penyakit pada daun tanaman jagung secara lebih cepat dan akurat. Aplikasi ini memanfaatkan teknologi pengolahan citra (image processing) dan pembelajaran mesin (machine learning) untuk menganalisis kondisi daun berdasarkan gambar yang diunggah oleh pengguna. Sistem ini dikembangkan sebagai solusi atas kebutuhan petani terhadap sistem pengawasan tanaman berbasis citra digital, yang mampu memberikan deteksi dini terhadap gejala penyakit daun. Dengan adanya aplikasi ini, diharapkan petani dapat mengambil tindakan preventif atau penanganan lebih cepat sebelum penyakit menyebar luas, sehingga dapat meningkatkan produktivitas dan mengurangi potensi kerugian hasil panen.",
          color: "#ee3c26",
        },
        {
          title: "Front End & Back End",
          company: "Dicoding Indonesia.",
          company_url: "https://www.dicoding.com/",
          logo_path: "dicoding_logo.jpg",
          duration: "June 2022 - Des 2022",
          location: "Bandung, Indonesia",
          description:
            "Saya mengikuti program magang dalam proyek pengembangan aplikasi IRIS, sebuah sistem berbasis teknologi yang dirancang untuk memenuhi kebutuhan spesifik pengguna dalam pengelolaan data atau layanan digital. Dalam proyek ini, saya tergabung dalam tim yang terdiri dari empat anggota, di mana saya berperan aktif dalam tim pengembangan API (Application Programming Interface). Kami bekerja sama untuk merancang dan membangun sistem backend yang efisien dan terstruktur, serta menerapkan metode perancangan perangkat lunak yang sistematis seperti software development lifecycle, termasuk tahap analisis kebutuhan, perancangan arsitektur, implementasi, dan pengujian. Pengalaman ini memberikan pemahaman mendalam tentang kolaborasi tim dalam pengembangan perangkat lunak nyata dan penerapan praktik terbaik dalam membangun layanan digital yang skalabel dan dapat diandalkan.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Ihrat.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you build app React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: " Depok, Jawa Barat, Indonesia",
    locality: "Depok",
    country: "Indonesia",
    region: "Jawa Barat",
    postalCode: "0",
    streetAddress: "Pondok Cina",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/ZiPRT8XGQzLhj1Ah8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  vision,
};
