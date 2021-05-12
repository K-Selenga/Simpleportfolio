import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Selenga KOC | Web Developer', // e.g: 'Name | Developer'
  lang: 'en, tr', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Selenga KOC',
  subtitle: 'Full-Stack Web Developer ',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'My name is Selenga KOC I am a 28 years old Full-Stack Developer based in Vancouver, BC. I describe myself as a passionate developer who loves coding, open source, and the web platform.',
  paragraphTwo:
    'Beside being a web designer/developer, I am a photography hobbyist, a travel/adventure lover. When I am not working I love hanging around with my camera and capture some good snaps. Landscape and nature photography is something I really find myself enjoying',
  paragraphThree: 'Take a look into some of my works here.',
  resume: 'https://drive.google.com/file/d/1MSM03QygN2S3a5P50YJsaI5JmZpaBp_F/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tipsy.png',
    title: 'Tipsy Web Bartender',
    info: 'Capestone Project',
    info2:
      'Developed an app that helps people search cocktail recipes, create their own cocktail lists or find random or seasonal recipes.',
    url: 'https://www.loom.com/share/476f0b455aaa44f49d222c4b66e51d10',
    repo: 'https://github.com/K-Selenga/Tipsy', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'instock.png',
    title: 'Instock Warehouse',
    info2:
      'Created a platform to check inventory and stocks, show details of each item in the list.',
    info: 'Team-Project',
    url: ''https://github.com/K-Selenga/Instock'',
    repo: '' , // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'walmart4d.png',
    title: 'Walmart 4-D Hackhaton',
    info: 'Team-Project',
    info2: 'Hackhaton project of Walmart',
    repo: '',// if no repo, the button will not show up
    url: 'https://github.com/K-Selenga/Walmart-4D', 
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to contact me.',
  btn: 'Lets Talk!',
  email: 'koc.selenga@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/selengakoc',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/K-Selenga',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
