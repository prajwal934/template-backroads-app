import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
export const pageLinks = [
    {id:1 ,href: '#home' , text: 'home'},
    {id:2 , href: '#about' , text: 'about'}, 
    {id:3, href: '#services' , text: 'services'},
    {id:4 , href: 'tours' , text: 'tours'},

];

export const socialLinks = [
    {id:1 , href: 'https://www.twitter.com' , icons: 'fab fa-facebook'},
    {id:2 , href: 'https://www.twitter.com' , icons: 'fab fa-twitter'},
    {id:3 , href: 'https://www.twitter.com' , icons: 'fab farespace-squa'},
    
];

export const services = [
    {id:1 , icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:2 , icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:3 , icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
];

export const tours = [
    {id:1 , image: tour1, date: 'April 28th, 2023',title: 'Tibet Adventure', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location: 'India', duration:12, cost:9000 },
    {id:2 , image: tour2, date: 'January 28th, 2023',title: 'Tibet Adventure', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location: 'US', duration:6, cost:6000 },
    {id:3 , image: tour3, date: 'December 28th, 2023',title: 'Tibet Adventure', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location: 'Hong-Kong', duration:10, cost:4300 },
    {id:4 , image: tour4, date: 'March 28th, 2023',title: 'Tibet Adventure', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location: 'China', duration:8, cost:2660 },
];

