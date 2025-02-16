import homeLifeV1 from '../../public/images/home-life-v1.png'
import homeLifeV2 from '../../public/images/home-life-v2.png'
import hlegals from '../../public/images/hlegals.png'
import cfmoto from '../../public/images/cfmoto.png'
import bastetCar from '../../public/images/bastetCar.png'
import aron from '../../public/images/aron.png'
import brandingX from '../../public/images/brandingX.png'


export const skills = [
    { id: 1, progress: 100, skillName: 'ES6' },
    { id: 2, progress: 75, skillName: 'GitHub' },
    { id: 3, progress: 75, skillName: 'React' },
    { id: 4, progress: 75, skillName: 'GIT' },
    { id: 5, progress: 100, skillName: 'DOM' },
    { id: 6, progress: 75, skillName: 'JavaScript' },
    { id: 7, progress: 50, skillName: 'NPM' },
    { id: 8, progress: 100, skillName: 'JSON' },
    { id: 9, progress: 100, skillName: 'HTML5' },
    { id: 10, progress: 100, skillName: 'CSS' },
    { id: 11, progress: 100, skillName: 'SCSS' },
    { id: 12, progress: 100, skillName: 'Tailwind' },
    { id: 13, progress: 100, skillName: 'Bootstrap' },
    { id: 14, progress: 100, skillName: 'REST API' },
    { id: 15, progress: 50, skillName: 'Sanity' },
    { id: 16, progress: 25, skillName: 'TypeScript' },
];

export const projects = [
    {
        id: 1,
        photo: homeLifeV1,
        title: 'Home Life v1',
        date: '4.2021',
        url: 'https://vadimlevadko.github.io/my-site/projects/home_life_1/',
        description:
            'In 2021, I started learning Front-End development. I independently coded and\n' +
            'launched my first project, mastering modern technologies and principles of\n' +
            'responsive design',
    },
    {
        id: 2,
        photo: homeLifeV2,
        title: 'Home Life v2',
        date: '4.2021',
        url: 'https://vadimlevadko.github.io/my-site/projects/home_life_2/',
        description:
            'In my second project, I focused on HTML and CSS layout. I created a\n' +
            'responsive interface and improved code structure.\n',
    },
    {
        id: 3,
        photo: hlegals,
        title: 'Hlegals',
        date: '8.2021',
        url: 'https://vadimlevadko.github.io/my-site/projects/hlegals/',
        description:
            'My first multi-page website. I used HTML and CSS for layout, created page\n' +
            'structure, and implemented responsive design.',
    },
    {
        id: 4,
        photo: cfmoto,
        title: 'CFMOTO',
        date: '3.2022',
        url: 'https://vadimlevadko.github.io/my-site/projects/cfmoto/',
        description:
            'After extensive study of JavaScript, I decided to test my skills in layout and\n' +
            'apply the knowledge I gained in practice',
    },
    {
        id: 5,
        photo: bastetCar,
        title: 'Bastet Car',
        date: '7.2022',
        url: 'https://vadimlevadko.github.io/my-site/projects/basterCar/',
        description:
            'After extensive study of JavaScript, I decided to try layout again. I liked a\n' +
            'design with an unconventional layout, so I learned something new and\n' +
            'applied that knowledge in practice',
    },
    {
        id: 6,
        photo: aron,
        title: 'Aron',
        url: 'https://vadimlevadko.github.io/my-site/projects/aron/',
        description:
            'I coded a website based on a ready-made layout, using HTML and CSS. I created\n' +
            'responsive layout, keeping all design details in mind',
    },
    {
        id: 7,
        photo: brandingX,
        title: 'Branding X',
        url: 'https://vadimlevadko.github.io/my-site/projects/branding-X/',
        description:
            'I learned to create various shapes using CSS, relying solely on properties for size,\n' +
            'borders, and positioning',
    },
]