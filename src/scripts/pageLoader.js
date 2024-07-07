import githubIcon from '../assets/GitHub-light-32px.png'
import cv from '../assets/cv.pdf'
import Icons from './Icons'
import { createIntroContainer } from './displayIntro'
import { createProjectsContainer, displayAllProjects } from './displayProjects'
import { createAboutMeContainer } from './displayAboutMe'
import { createContactContainer } from './displayContact'

const icons = new Icons

const createNav = () => {
    const nav = document.createElement('nav')

    const menubar = document.createElement('ul')
    menubar.classList.add('menubar')

    const menuItems = ['Projects', 'About Me', 'Contact', 'Resume']

    menuItems.forEach(menuItem => {
        const newMenuItem = document.createElement('li')
        newMenuItem.classList.add('menuItem')
        
        const menuLink = document.createElement('a')
        if (menuItem === 'Resume') {
            menuLink.href = cv
            menuLink.target = '_blank'
            menuLink.download = 'JasonCampbell_Resume.pdf'
        } else {
            menuLink.href = `#${menuItem.replace(' ', '').toLowerCase()}`
        }
        menuLink.classList.add('menuLink')
        menuLink.textContent = menuItem

        newMenuItem.appendChild(menuLink)
        menubar.appendChild(newMenuItem)
    });

    nav.appendChild(menubar)

    return nav
}

const setThemePreference = () => {
    if (localStorage.themePreference === undefined) {
        localStorage.setItem('themePreference', 'dark')
    } else if (localStorage.getItem('themePreference') !== 'dark' && localStorage.getItem('themePreference') !== 'light') {
        localStorage.setItem('themePreference', 'dark')
    }
}

const loadTheme = () => {
    const body = document.querySelector('body')
    const projectsHeaderContainer = document.querySelector('.projectsHeaderContainer')
    const filterIcons = document.querySelectorAll('.filterIcon')

    if (localStorage.getItem('themePreference') === 'dark') {
        body.classList.add('darkMode')
        projectsHeaderContainer.classList.add('darkMode')
        filterIcons.forEach(icon => {
            icon.classList.add('darkMode')
        })
    }
}

const toggleTheme = () => {
    const body = document.querySelector('body')
    const projectsHeaderContainer = document.querySelector('.projectsHeaderContainer')
    const filterIcons = document.querySelectorAll('.filterIcon')

    body.classList.toggle('darkMode')
    projectsHeaderContainer.classList.toggle('darkMode')
    filterIcons.forEach(icon => {
        icon.classList.toggle('darkMode')
    })

    const currentTheme = body.classList.contains('darkMode') ? 'dark' : 'light'
    localStorage.setItem('themePreference', currentTheme)
}

const createThemeToggleBtn = () => {
    const themeToggleBtn = document.createElement('button')
    themeToggleBtn.classList.add('themeToggleBtn')
    themeToggleBtn.appendChild(icons.themeToggleIconSvg('themeToggleIcon'))
    themeToggleBtn.addEventListener('click', () => toggleTheme())
    return themeToggleBtn
}

const createHeader = () => {
    const header = document.createElement('header')
    header.role = 'banner'

    const headerNameLink = document.createElement('a')
    headerNameLink.classList.add('headerNameLink')
    headerNameLink.href = '#top'

    const name = document.createElement('h2')
    name.classList.add('headerName', 'qwigley-regular')
    name.textContent = 'Jason Campbell'
    
    headerNameLink.appendChild(name)

    header.appendChild(headerNameLink)
    header.appendChild(createNav())
    header.appendChild(createThemeToggleBtn())

    return header
}

const createTransition = (stylingClass) => {
    const transition = document.createElement('div')
    transition.classList.add('transition', stylingClass)

    return transition
}

const createContent = () => {
    const contentContainer = document.createElement('main')
    contentContainer.role = 'main'

    contentContainer.appendChild(createIntroContainer())
    contentContainer.appendChild(createTransition('transition1'))
    contentContainer.appendChild(createProjectsContainer())
    contentContainer.appendChild(createTransition('transition2'))
    contentContainer.appendChild(createAboutMeContainer())
    contentContainer.appendChild(createContactContainer())

    return contentContainer
}

const createFooter = () => {
    const footer = document.createElement('footer')
    footer.role = 'contentinfo'

    const copyright = document.createElement('p')
    copyright.textContent = `Copyright © ${new Date().getFullYear()} jcampbell57`

    const githubLink = document.createElement('a')
    githubLink.href = 'https://github.com/jcampbell57'
    githubLink.target = '_blank'

    const newGithubIcon = document.createElement('img')
    newGithubIcon.src = githubIcon
    newGithubIcon.classList.add('githubIcon')

    githubLink.appendChild(newGithubIcon)
    footer.appendChild(copyright)
    footer.appendChild(githubLink)

    return footer
}

export default function initialize() {
    document.head.appendChild(icons.devIconsLink())
    document.body.appendChild(createHeader())
    document.body.appendChild(createContent())
    document.body.appendChild(createFooter())
    setThemePreference()
    loadTheme()
    displayAllProjects()
}
