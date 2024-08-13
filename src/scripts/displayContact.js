import Icons from './Icons'
const icons = new Icons

const createConnectIcons = () => {
    const connectIcons = document.createElement('div')
    connectIcons.classList.add('connectIcons')

    const emailLink = document.createElement('a')
    emailLink.classList.add('emailLink')
    emailLink.href = 'mailto:jcampbell57@gmail.com'
    emailLink.appendChild(icons.GmailIconSvg('gmailIcon', 'contactIcon'))
    const emailText = document.createTextNode('Email')
    emailLink.appendChild(emailText)
    
    const githubLink = document.createElement('a')
    githubLink.href = 'https://github.com/jcampbell57'
    githubLink.target = '_blank'
    githubLink.appendChild(icons.getIcon('github', 'contactIcon'))
    const githubText = document.createTextNode('Github')
    githubLink.appendChild(githubText)
    githubLink.addEventListener('mouseenter', () => githubLink.firstChild.classList.add('colored'))
    githubLink.addEventListener('mouseleave', () => githubLink.firstChild.classList.remove('colored'))

    const linkedinLink = document.createElement('a')
    linkedinLink.href = 'https://linkedin.com/in/jasonmichaelcampbell'
    linkedinLink.target = '_blank'
    linkedinLink.appendChild(icons.getIcon('linkedin', 'contactIcon'))
    const linkedinText = document.createTextNode('LinkedIn')
    linkedinLink.appendChild(linkedinText)
    linkedinLink.addEventListener('mouseenter', () => linkedinLink.firstChild.classList.add('colored'))
    linkedinLink.addEventListener('mouseleave', () => linkedinLink.firstChild.classList.remove('colored'))

    connectIcons.appendChild(emailLink)
    connectIcons.appendChild(githubLink)
    connectIcons.appendChild(linkedinLink)

    return connectIcons
}

const createContactCard = () => {
    const contactCardContainer = document.createElement('div')
    contactCardContainer.classList.add('contactCardContainer')
    contactCardContainer.id = 'contact'

    const contactCardHeader = document.createElement('h2')
    contactCardHeader.textContent = "Lets connect!"

    contactCardContainer.appendChild(contactCardHeader)
    contactCardContainer.appendChild(createConnectIcons())

    return contactCardContainer
}

export const createContactContainer = () => {
    const contactBackground = document.createElement('div')
    contactBackground.classList.add('contactBackground')

    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contactContainer')
    contactContainer.appendChild(createContactCard())

    contactBackground.appendChild(contactContainer)

    return contactBackground
}
