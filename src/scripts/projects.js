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
import wormhole_light_300w from '../assets/wormhole_light_300w.png'
import wormhole_light_600w from '../assets/wormhole_light_600w.png'
import wormhole_light_1250w from '../assets/wormhole_light_1250w.png'
// import wormhole_dark_300w from '../assets/wormhole_dark_300w.png'
// import wormhole_dark_600w from '../assets/wormhole_dark_600w.png'
// import wormhole_dark_1250w from '../assets/wormhole_dark_1250w.png'

const projects = [
    {
        name: 'odinbook',
        code_url: 'https://github.com/jcampbell57/odin-book-v2',
        live_url: 'https://odin-book-v2.fly.dev/',
        desc: "A relatively simple social media app. The purpose of this project is to tie together the concepts learned during the rails module of The Odin Project. This is the capstone project of The Odin Project's Ruby on Rails course.",
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
        desc: 'An application where users can input their information to generate a CV/résumé. The purpose of this project is to practing developing with react state and props.',
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
        desc: "An interactive, two player game of Battleship. The purpose of this project is to practice Test Driven Development (TDD) and tie together the concepts learned in the JavaScript module of The Odin Project. This is the capstone project of The Odin Project's JavaScript course.",
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
        desc: 'Input a city to retrieve weather information. The purpose of this project is to practice integration of an API, linter, Prettier and JavaScript compiler.',
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
        desc: 'A simple to-do list application. The purpose of this project is to practice serialization with JSON and object oriented programming.',
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
        desc: 'A restaurant page with tabbed content that uses JavaScript alone to generate all of the content on the page. The purpose of this project is to practice using JavaScript modules and webpack.',
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
        desc: 'An interactive two player Tic Tac Toe game. The purpose of this project is to practice creating clean javascript code with factory functions and modular functions.',
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
        live_url: 'https://jcampbell57.github.io/odin-library/',
        desc: 'An interactive library app. The purpose of this project is to practice using JavaScript objects and object constructors.',
        altImgText: 'Wormhole.',
        icons: ['html', 'css', 'javascript', 'json', 'git', 'github'],
        img: {
            small: wormhole_light_300w,
            medium: wormhole_light_600w,
            large: wormhole_light_1250w
        }
    },
    {
        name: 'Admin dashboard',
        code_url: 'https://github.com/jcampbell57/odin-admin-dashboard',
        live_url: 'https://jcampbell57.github.io/odin-admin-dashboard/',
        desc: "A responsive layout using CSS grid and flexbox. The purpose of this project was to practice creating an interface with CSS Grid. This is the capstone project of The Odin Project's Intermediate HTML and CSS course.",
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
        live_url: 'https://jcampbell57.github.io/odin-sign-up-form/',
        desc: 'A sign up form for a fake service. The purpose of this project was to practice form validation, css styling, and mobile styling.',
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
        code_url: 'https://github.com/jcampbell57/ruby_chess',
        live_url: 'https://replit.com/@jcampbell57/Chess#main.rb',
        desc: "A command line Chess game where two players can play against each other. The purpose of this project is to show that I can take on a project with a lot of different components. This is the capstone project of The Odin Project's Ruby course.",
        altImgText: 'Chess game.',
        icons: ['ruby', 'rspec', 'yaml', 'git', 'github'],
        img: {
            small: chess_300w,
            medium: chess_600w
        }
    },
    {
        name: 'Connect Four',
        code_url: 'https://github.com/jcampbell57/ruby_connect_four',
        live_url: 'https://replit.com/@jcampbell57/Connect-Four#main.rb',
        desc: 'A command line Connect Four game where two players can play against each other. The purpose of this project was to practice Test Driven Development (TDD) with RSpec.',
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
        code_url: 'https://github.com/jcampbell57/hangman',
        live_url: 'https://replit.com/@jcampbell57/Hangman',
        desc: 'A command line Hangman game. The purpose of this project was to practice implementation of serialization with the save game feature.',
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
        desc: 'A command line Mastermind game played against AI. The purpose of this project was to practice Object Oriented Programming (OOP).',
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
        desc: "A fully functional calculator with basic arithmetic operations that can be controlled with mouse or keyboard. This is the capstone project of The Odin Project's Foundations course.",
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
        desc: 'An Etch A Sketch app that allows users to create pixel art. The purpose of this project was to practice implementing a grid with flexbox that can by manipulated by the user.',
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
        desc: 'A fun variant of the classic Rock, Paper, Scissors game! This game is played against AI over the course of five rounds. Ther purpose of this project is to practice basic JavaScript concepts and implement a functioning user interface.',
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
