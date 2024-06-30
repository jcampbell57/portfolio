// Convert to class with constructer, create admin UI to add projects

// import project screenshots
import admindashboard_300w from '../assets/admindashboard_300w.png'
import admindashboard_600w from '../assets/admindashboard_600w.png'
import admindashboard_1250w from '../assets/admindashboard_1250w.png'
import battleship_300w from '../assets/battleship_300w.png'
import battleship_600w from '../assets/battleship_600w.png'
import battleship_1250w from '../assets/battleship_1250w.png'
import chess_300w from '../assets/chess_300w.png'
import chess_600w from '../assets/chess_600w.png'
import mastermind_300w from '../assets/mastermind_300w.png'
import mastermind_600w from '../assets/mastermind_600w.png'
import odinbook_300w from '../assets/odinbook_300w.png'
import odinbook_600w from '../assets/odinbook_600w.png'
import odinbook_1250w from '../assets/odinbook_1250w.png'
import restaurant_300w from '../assets/restaurant_300w.png'
import restaurant_600w from '../assets/restaurant_600w.png'
import restaurant_1250w from '../assets/restaurant_1250w.png'
import tictactoe_300w from '../assets/tictactoe_300w.png'
import tictactoe_600w from '../assets/tictactoe_600w.png'
import tictactoe_1250w from '../assets/tictactoe_1250w.png'
import todolist_300w from '../assets/todolist_300w.png'
import todolist_600w from '../assets/todolist_600w.png'
import todolist_1250w from '../assets/todolist_1250w.png'
import weatherserve_300w from '../assets/weatherserve_300w.png'
import weatherserve_600w from '../assets/weatherserve_600w.png'
import weatherserve_1250w from '../assets/weatherserve_1250w.png'

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
        desc: 'Input a city to retrieve weather information.',
        altImgText: 'Weatherserve user page.',
        icons: ['css', 'javascript', 'webpack', 'git', 'github'],
        img: {
            small: weatherserve_300w,
            medium: weatherserve_600w,
            large: weatherserve_1250w
        }
    },
    {
        name: 'Todo list',
        code_url: 'https://github.com/jcampbell57/odin-todo-list',
        live_url: 'https://jcampbell57.github.io/odin-todo-list/',
        desc: 'A todo list app.',
        altImgText: 'Todo list.',
        icons: ['css', 'javascript', 'webpack', 'git', 'github'],
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
        desc: 'A Tic Tac Toe game.',
        altImgText: 'Tic Tac Toe.',
        icons: ['html', 'css', 'javascript', 'git', 'github'],
        img: {
            small: tictactoe_300w,
            medium: tictactoe_600w,
            large: tictactoe_1250w
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
]

export default projects
