import comfyStore from './assets/images/comfy-store.png';
import budgetApp from './assets/images/budget-app.png';
import spaceTravel from './assets/images/space-travel.png';
import todoList from './assets/images/todo-list.jpeg';
import recipeApp from './assets/images/recipe-app.png';

const projects = [
  {
    id: 1,
    img: `${comfyStore}`,
    name: 'Ecommerce Store',
    text: 'Comfy Store is a cutting-edge e-commerce project built using JavaScript, React, React Router 6.4+, React Query, Redux Toolkit, Axios, Tailwind, and daisyui.',
    live: 'https://mhnoor-comfy-store.netlify.app/',
    code: 'https://github.com/MohamedHNoor/comfy-store',
  },
  {
    id: 2,
    img: `${budgetApp}`,
    name: 'Budget App',

    text: 'A full stack mobile application that allows users to signup and create categories and add transactions to each category. Built with Ruby, Ruby on Rails, Devise, Postgresql, Bootstrap, and deployed to heroku.',
    live: 'https://mhnoor-budget-app-4f1e29029dad.herokuapp.com/',
    code: 'https://github.com/MohamedHNoor/Budget-app',
  },
  {
    id: 3,
    img: `${spaceTravel}`,
    name: 'Space Travels',
    text: 'A front-end web application that displays SpaceX Rockets using spaceX API. Users can rent their favorite rockets and register for SpaceX missions. Built with React, Redux, HTML5/CSS3, and Rest api.',
    live: 'https://space-travelers-plum.vercel.app/',
    code: 'https://github.com/MohamedHNoor/space-travelers',
  },
  {
    id: 4,
    img: `${todoList}`,
    name: 'Todo List',
    text: 'Sleek and intuitive  Todo list app where user can add, delete, submit and edit items. This powerful application allows users to effortlessly create, manage, and track their tasks with ease. With its clean and modern user interface, organizing your daily, weekly, or monthly to-do lists has never been more enjoyable. Built with React, JavaScript, and HTML5/CSS3.',
    live: 'https://mhnoor-react-todo-app.netlify.app/',
    code: 'https://github.com/MohamedHNoor/react-todo-app',
  },
  {
    id: 5,
    img: `${recipeApp}`,
    name: 'Recipe App',
    text: 'A simple recipe app that allows users to save ingredients, keep track of their recipes and add new recipes. Offers a seamless user experience, enabling users to quickly generate a shopping list based on the ingredients they have saved. Built with Ruby on Rails, Postgresql, and deployed to Heroku.',
    live: 'https://mhnoor-recipe-app-601ed4646aba.herokuapp.com/',
    code: 'https://github.com/MohamedHNoor/recipe-app',
  },
];

export default projects;
