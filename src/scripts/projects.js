// Convert to class with constructer, create admin UI to add projects

// import project screenshots
import admindashboard_300w from '../assets/admindashboard_300w.png'
import admindashboard_600w from '../assets/admindashboard_600w.png'
import admindashboard_1250w from '../assets/admindashboard_1250w.png'
import battleship_300w from '../assets/battleship_300w.png'
import battleship_600w from '../assets/battleship_600w.png'
import battleship_1250w from '../assets/battleship_1250w.png'
import boot_roach_bomb_300w from '../assets/boot_roach_bomb_300w.png'
import boot_roach_bomb_600w from '../assets/boot_roach_bomb_600w.png'
import boot_roach_bomb_1250w from '../assets/boot_roach_bomb_1250w.png'
import calculator_300w from '../assets/calculator_300w.png'
import calculator_600w from '../assets/calculator_600w.png'
import calculator_1250w from '../assets/calculator_1250w.png'
import chess_300w from '../assets/chess_300w.png'
import chess_600w from '../assets/chess_600w.png'
import connect_four_300w from '../assets/connect_four_300w.png'
import connect_four_600w from '../assets/connect_four_600w.png'
import connect_four_1250w from '../assets/connect_four_1250w.png'
import cv_builder_300w from '../assets/cv_builder_300w.png'
import cv_builder_600w from '../assets/cv_builder_600w.png'
import cv_builder_1250w from '../assets/cv_builder_1250w.png'
import hangman_300w from '../assets/hangman_300w.png'
import hangman_600w from '../assets/hangman_600w.png'
import hangman_1250w from '../assets/hangman_1250w.png'
import mastermind_300w from '../assets/mastermind_300w.png'
import mastermind_600w from '../assets/mastermind_600w.png'
import odinbook_300w from '../assets/odinbook_300w.png'
import odinbook_600w from '../assets/odinbook_600w.png'
import odinbook_1250w from '../assets/odinbook_1250w.png'
import restaurant_300w from '../assets/restaurant_300w.png'
import restaurant_600w from '../assets/restaurant_600w.png'
import restaurant_1250w from '../assets/restaurant_1250w.png'
import sign_up_form_300w from '../assets/sign_up_form_300w.png'
import sign_up_form_600w from '../assets/sign_up_form_600w.png'
import sign_up_form_1250w from '../assets/sign_up_form_1250w.png'
import sketch_pad_300w from '../assets/sketch_pad_300w.png'
import sketch_pad_600w from '../assets/sketch_pad_600w.png'
import sketch_pad_1250w from '../assets/sketch_pad_1250w.png'
import tictactoe_300w from '../assets/tictactoe_300w.png'
import tictactoe_600w from '../assets/tictactoe_600w.png'
import tictactoe_1250w from '../assets/tictactoe_1250w.png'
import todolist_300w from '../assets/todolist_300w.png'
import todolist_600w from '../assets/todolist_600w.png'
import todolist_1250w from '../assets/todolist_1250w.png'
import weatherserve_300w from '../assets/weatherserve_300w.png'
import weatherserve_600w from '../assets/weatherserve_600w.png'
import weatherserve_1250w from '../assets/weatherserve_1250w.png'
import wormhole_light_300w from '../assets/wormhole_light_1250w.png'
import wormhole_light_600w from '../assets/wormhole_light_1250w.png'
import wormhole_light_1250w from '../assets/wormhole_light_1250w.png'
// import wormhole_dark_300w from '../assets/wormhole_dark_1250w.png'
// import wormhole_dark_600w from '../assets/wormhole_dark_1250w.png'
// import wormhole_dark_1250w from '../assets/wormhole_dark_1250w.png'

const projects = [
    {
        name: 'odinbook',
        code_url: 'https://github.com/jcampbell57/odin-book-v2',
        live_url: 'https://odin-book-v2.fly.dev/',
        desc: 'This is a simplified social media app meant to tie together the information learned during the rails module of The Odin Project.',
        altImgText: 'Odinbook user page.',
        icons: ['html', 'bootstrap', 'ruby', 'rails', 'psql', 'webpack', 'git', 'github'],
        img: {
            small: odinbook_300w,
            medium: odinbook_600w,
            large: odinbook_1250w
        }
    },
    {
        name: 'CV Builder',
        code_url: 'https://github.com/jcampbell57/cv-builder',
        live_url: 'https://fascinating-pegasus-6a0514.netlify.app/',
        desc: 'A resume building app created to practice developing with React and get used to working with state and props.',
        altImgText: 'Battleship gameplay',
        icons: ['css', 'javascript', 'react', 'json', 'git', 'github'],
        img: {
            small: cv_builder_300w,
            medium: cv_builder_600w,
            large: cv_builder_1250w
        }
    },
    {
        name: 'Naval Warfare',
        code_url: 'https://github.com/jcampbell57/naval-warfare',
        live_url: 'https://jcampbell57.github.io/naval-warfare/',
        desc: 'A battleship game meant to practice Test Driven Development (TDD) and tie together the concepts learned in the JavaScript module of The Odin Project.',
        altImgText: 'Battleship gameplay',
        icons: ['css', 'javascript', 'jest', 'webpack', 'git', 'github'],
        img: {
            small: battleship_300w,
            medium: battleship_600w,
            large: battleship_1250w
        }
    },
    {
        name: 'Weatherserve',
        code_url: 'https://github.com/jcampbell57/weather-app',
        live_url: 'https://jcampbell57.github.io/weather-app/',
        desc: 'Input a city to retrieve weather information. This project utiliazes webpack, WeatherAPI, and localStorage, as well as promises and async/await functionality',
        altImgText: 'Weatherserve user page.',
        icons: ['css', 'javascript', 'webpack', 'json', 'git', 'github'],
        img: {
            small: weatherserve_300w,
            medium: weatherserve_600w,
            large: weatherserve_1250w
        }
    },
    {
        name: 'Things To Do',
        code_url: 'https://github.com/jcampbell57/odin-todo-list',
        live_url: 'https://jcampbell57.github.io/odin-todo-list/',
        desc: 'A todo list app that allows users to organize tasks into projects. This project utilizes webpack and localStorage. Tasks into projects can both be be edited and deleted.',
        altImgText: 'Todo list.',
        icons: ['css', 'javascript', 'webpack', 'json', 'git', 'github'],
        img: {
            small: todolist_300w,
            medium: todolist_600w,
            large: todolist_1250w
        }
    },
    {
        name: 'Middle Ring Restaurant',
        code_url: 'https://github.com/jcampbell57/odin-restaurant-page',
        live_url: 'https://jcampbell57.github.io/odin-restaurant-page/',
        desc: 'A simple restaurant page developed with the purpose of getting comfortable using webpack and to practice javascript modules with tabbed content.',
        altImgText: 'Middle Ring Restaurant Page.',
        icons: ['css', 'javascript', 'webpack', 'git', 'github'],
        img: {
            small: restaurant_300w,
            medium: restaurant_600w,
            large: restaurant_1250w
        }
    },
    {
        name: 'Tic Tac Toe',
        code_url: 'https://github.com/jcampbell57/odin-tic-tac-toe',
        live_url: 'https://jcampbell57.github.io/odin-tic-tac-toe/',
        desc: 'A two-player Tic Tac Toe game. The focus of this project is to practice creating clean javascript code',
        altImgText: 'Tic Tac Toe.',
        icons: ['html', 'css', 'javascript', 'git', 'github'],
        img: {
            small: tictactoe_300w,
            medium: tictactoe_600w,
            large: tictactoe_1250w
        }
    },
    {
        name: 'Wormhole',
        code_url: 'https://github.com/jcampbell57/odin-library',
        live_url: 'https://jcampbell57.github.io/odin-library/v2/',
        desc: 'An interactive library application allows users to add and remove books, mark them as read, and sort each column of data.',
        altImgText: 'Wormhole.',
        icons: ['html', 'css', 'javascript', 'git', 'github'],
        img: {
            small: wormhole_light_300w,
            medium: wormhole_light_600w,
            large: wormhole_light_1250w
        }
    },
    {
        name: 'Admin dashboard',
        code_url: 'https://github.com/jcampbell57/odin-admin-dashboard',
        live_url: 'https://jcampbell57.github.io/odin-admin-dashboard/v2/',
        desc: 'The purpose of this project is to create a responsive layout using CSS grid and flexbox.',
        altImgText: 'Admin dashboard.',
        icons: ['html', 'css', 'git', 'github'],
        img: {
            small: admindashboard_300w,
            medium: admindashboard_600w,
            large: admindashboard_1250w
        }
    },
    {
        name: 'Sign-up Form',
        code_url: 'https://github.com/jcampbell57/odin-sign-up-form',
        live_url: 'https://jcampbell57.github.io/odin-sign-up-form/v2/',
        desc: 'A webpage developed to practicing creating, styling, and validating forms with HTML, CSS and JavaScript.',
        altImgText: 'Sign-up form.',
        icons: ['html', 'css', 'javascript', 'git', 'github'],
        img: {
            small: sign_up_form_300w,
            medium: sign_up_form_600w,
            large: sign_up_form_1250w
        }
    },
    {
        name: 'Chess',
        code_url: 'https://github.com/jcampbell57/ruby_projects/tree/main/chess',
        live_url: 'https://replit.com/@jcampbell57/Chess#main.rb',
        desc: 'The intent of this game is to show that I can take on a project with a lot of different components.',
        altImgText: 'Chess game.',
        icons: ['ruby', 'rspec', 'git', 'github'],
        img: {
            small: chess_300w,
            medium: chess_600w
        }
    },
    {
        name: 'Connect Four',
        code_url: 'https://github.com/jcampbell57/ruby_projects/tree/main/connect_four',
        live_url: 'https://replit.com/@jcampbell57/Connect-Four#main.rb',
        desc: 'The intent of this game is to practice test-driven-development with Ruby.',
        altImgText: 'Connect Four game.',
        icons: ['ruby', 'rspec', 'git', 'github'],
        img: {
            small: connect_four_300w,
            medium: connect_four_600w,
            large: connect_four_1250w,
        }
    },
    {
        name: 'Hangman',
        code_url: 'https://github.com/jcampbell57/hangman/tree/main/version_2',
        live_url: 'https://replit.com/@jcampbell57/Hangman',
        desc: 'The intent of this game is to object oriented design with Ruby and serialization of game saves with YAML.',
        altImgText: 'Hangman game.',
        icons: ['ruby', 'yaml', 'git', 'github'],
        img: {
            small: hangman_300w,
            medium: hangman_600w,
            large: hangman_1250w,
        }
    },
    {
        name: 'Mastermind',
        code_url: 'https://github.com/jcampbell57/ruby_mastermind',
        live_url: 'https://replit.com/@jcampbell57/FirmGullibleSystems#main.rb',
        desc: 'A Mastermind game played utilizing ruby command-line interface.',
        altImgText: 'Mastermind game.',
        icons: ['ruby', 'git', 'github'],
        img: {
            small: mastermind_300w,
            medium: mastermind_600w
        }
    },
    {
        name: 'Calculator',
        code_url: 'https://github.com/jcampbell57/odin-calculator',
        live_url: 'https://jcampbell57.github.io/odin-calculator/',
        desc: 'A calculator developed with the purpose of reinforcing foundational javascript knowledge.',
        altImgText: 'Mastermind game.',
        icons: ['html', 'css', 'javascript', 'git', 'github'],
        img: {
            small: calculator_300w,
            medium: calculator_600w,
            large: calculator_1250w,
        }
    },
    {
        name: 'Sketch Pad',
        code_url: 'https://github.com/jcampbell57/odin-etch-a-sketch',
        live_url: 'https://jcampbell57.github.io/odin-etch-a-sketch/',
        desc: 'An Etch-a-Sketch app featuring an interactive grid created with javascript.',
        altImgText: 'Mastermind game.',
        icons: ['html', 'css', 'javascript', 'git', 'github'],
        img: {
            small: sketch_pad_300w,
            medium: sketch_pad_600w,
            large: sketch_pad_1250w,
        }
    },
    {
        name: 'Boot Roach Bomb',
        code_url: 'https://github.com/jcampbell57/odin-rock-paper-scissors',
        live_url: 'https://jcampbell57.github.io/odin-rock-paper-scissors/',
        desc: 'One of my very first projects, a rock paper scissors game played against the computer. First player to reach a score of five wins!',
        altImgText: 'Mastermind game.',
        icons: ['html', 'css', 'javascript', 'git', 'github'],
        img: {
            small: boot_roach_bomb_300w,
            medium: boot_roach_bomb_600w,
            large: boot_roach_bomb_1250w,
        }
    },
]

export default projects
