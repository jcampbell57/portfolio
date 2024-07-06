import Icons from './Icons'
import projects from './projects'

const icons = new Icons

const createProjectCard = (project) => {
    const projectCard = document.createElement('div')
    projectCard.classList.add('projectCard')

    const projectImg = document.createElement('img')
    projectImg.classList.add('projectImg')
    projectImg.src = project.img.medium
    projectImg.srcset = `${project.img.small} 300w, ${project.img.medium} 600w`
    projectImg.sizes = `(max-width: 320px) 300px,
                        600px`
    projectImg.alt = project.altImgText

    const cardContent = document.createElement('div')
    cardContent.classList.add('cardContent')

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('cardHeader')

    const cardTitleLink = document.createElement('a')
    cardTitleLink.href = project.live_url
    cardTitleLink.target = '_blank'

    const cardTitle = document.createElement('h3')
    cardTitle.classList.add('cardTitle')
    cardTitle.textContent = project.name

    cardTitleLink.appendChild(cardTitle)

    const cardTitleIcons = document.createElement('div')
    cardTitleIcons.classList.add('cardTitleIcons')

    const cardGithubLink = document.createElement('a')
    cardGithubLink.href = project.code_url
    cardGithubLink.target = '_blank'
    cardGithubLink.appendChild(icons.getIcon('github', 'cardIcon'))

    const cardLiveLink = document.createElement('a')
    cardLiveLink.href = project.live_url
    cardLiveLink.target = '_blank'
    cardLiveLink.appendChild(icons.OpenIconSvg('openIcon'))

    cardTitleIcons.appendChild(cardGithubLink)
    cardTitleIcons.appendChild(cardLiveLink)

    const descriptionLink = document.createElement('a')
    descriptionLink.href = project.live_url
    descriptionLink.target = '_blank'

    const projectDescription = document.createElement('p')
    projectDescription.classList.add('projectDescription')
    projectDescription.textContent = project.desc

    descriptionLink.appendChild(projectDescription)

    const cardSkillIcons = document.createElement('div')
    cardSkillIcons.classList.add('cardSkillIcons')
    project.icons.forEach(iconName => {
        const newIcon = icons.getIcon(iconName, 'cardSkillIcon')
        cardSkillIcons.appendChild(newIcon) 
    })

    cardHeader.appendChild(cardTitleLink)
    cardHeader.appendChild(cardTitleIcons)

    cardContent.appendChild(cardHeader)
    cardContent.appendChild(descriptionLink)
    cardContent.appendChild(cardSkillIcons)

    projectCard.appendChild(projectImg)
    projectCard.appendChild(cardContent)

    return projectCard
}

const displayProjects = (filteredProjects) => {
    const projectCardContainer = document.querySelector('.projectCardContainer')
    projectCardContainer.innerHTML = ''
    filteredProjects.forEach(project => {
        const newProjectCard = createProjectCard(project)
        projectCardContainer.appendChild(newProjectCard)
    })
}

export const displayAllProjects = () => {
    displayProjects(projects)
}

const filterProjectsByIcon = (chosenIconName) => {
    const standardizedIconName = chosenIconName.replace('-wordmark', '')
    const filteredProjects = projects.filter(project => project.icons.includes(standardizedIconName))
    displayProjects(filteredProjects)
}

let selectedIcon = null
const handleIconClick = (chosenIcon) => {
    const iconData = chosenIcon.getAttribute('data-icon')
    const allIcons = document.querySelectorAll('.filterIconsContainer button i')

    allIcons.forEach(icon => {
        icon.classList.remove('selected', 'colored')
    })

    if (selectedIcon === chosenIcon) {
        selectedIcon = null
        displayAllProjects()
    } else {
        chosenIcon.classList.add('selected', 'colored')
        selectedIcon = chosenIcon
        filterProjectsByIcon(iconData)
    }
}

const createProjectsHeader = () => {
    const projectsHeaderContainer = document.createElement('div')
    projectsHeaderContainer.classList.add('projectsHeaderContainer')

    const projectsHeader = document.createElement('h2')
    projectsHeader.textContent = 'My Projects'

    const projectsSubheader = document.createElement('p')
    projectsSubheader.classList.add('projectsSubheader')
    projectsSubheader.textContent = 'filter by:'

    const filterIconsContainer = document.createElement('div')
    filterIconsContainer.classList.add('filterIconsContainer')

    const iconNames = ['html-wordmark', 'css-wordmark', 'javascript', 'bootstrap-wordmark', 'ruby-wordmark', 'rails-wordmark', 'psql-wordmark', 'webpack-wordmark', 'rspec-wordmark', 'git-wordmark', 'github-wordmark', 'jest']
    iconNames.forEach(name => {
        const button = document.createElement('button')
        const icon = icons.getIcon(name, 'filterIcon')
        button.appendChild(icon)
        button.addEventListener('mouseenter', () => {
            if (!button.firstChild.classList.contains('selected')) {
                button.firstChild.classList.add('colored')
            }
        })
        button.addEventListener('mouseleave', () => {
            if (!button.firstChild.classList.contains('selected')) {
                button.firstChild.classList.remove('colored')
            }
        })
        button.addEventListener('click', () => handleIconClick(icon))
        filterIconsContainer.appendChild(button)
    })

    projectsHeaderContainer.appendChild(projectsHeader)
    projectsHeaderContainer.appendChild(projectsSubheader)    
    projectsHeaderContainer.appendChild(filterIconsContainer)    

    return projectsHeaderContainer
}

const createProjectCardContainer = () => {
    const projectCardContainer = document.createElement('div')
    projectCardContainer.classList.add('projectCardContainer')

    return projectCardContainer
}

export const createProjectsContainer = () => {
    const projectsContainer = document.createElement('div')
    projectsContainer.classList.add('projectsContainer')
    projectsContainer.id = 'projects'

    projectsContainer.appendChild(createProjectsHeader())
    projectsContainer.appendChild(createProjectCardContainer())

    return projectsContainer
}
