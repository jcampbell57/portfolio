import w1_300w from '../assets/w1_300w.png'
import w1_600w from '../assets/w1_600w.png'
import w1_1250w from '../assets/w1_1250w.png'

const createAboutMeContent = () => {
    const aboutMeContent = document.createElement('div')
    aboutMeContent.classList.add('aboutMeContent')

    const portraitImage = document.createElement('img')
    portraitImage.classList.add('portraitImage')
    portraitImage.src = w1_1250w
    portraitImage.srcset = `${w1_1250w} 1250w,
                            ${w1_600w} 600w,
                            ${w1_300w} 300w`
    portraitImage.sizes = `(max-width: 320px) 300px,
                           (max-width: 640px) 600px,
                           1250px`
    portraitImage.alt = 'Portrait image.'

    const aboutMeSpacer = document.createElement('div')
    aboutMeSpacer.classList.add('aboutMeSpacer')

    const blurbContainer = document.createElement('div')
    blurbContainer.classList.add('blurbContainer')

    const aboutMeP1 = document.createElement('p')
    aboutMeP1.classList.add('aboutMeP1')
    aboutMeP1.textContent = `Hello! My name is Jason Campbell, and I am a full-stack software developer based in the San Francisco Bay Area. My interest in technology began in middle school, when I used self-taught HTML and CSS to create a custom MySpace page to impress my friends.`

    const aboutMeP2 = document.createElement('p')
    aboutMeP2.classList.add('aboutMeP2')
    aboutMeP2.textContent = `After earning a degree in Business Administration (Finance), I spent five years as a math teacher for seventh and eighth grade students, where I utilized problem-solving and communication skills. My interest in technology continued to grow during this time, leading me to transition into software development.`

    const aboutMeP3 = document.createElement('p')
    aboutMeP3.classList.add('aboutMeP3')
    aboutMeP3.textContent = `In my free time, I enjoy playing disc golf, hiking, attending concerts, and gaming.`

    blurbContainer.appendChild(aboutMeP1)
    blurbContainer.appendChild(document.createElement('br'))
    blurbContainer.appendChild(aboutMeP2)
    blurbContainer.appendChild(document.createElement('br'))
    blurbContainer.appendChild(aboutMeP3)
    
    aboutMeContent.appendChild(portraitImage)
    aboutMeContent.appendChild(aboutMeSpacer)
    aboutMeContent.appendChild(blurbContainer)

    return aboutMeContent
}

export const createAboutMeContainer = () => {
    const aboutMeBackground = document.createElement('div')
    aboutMeBackground.classList.add('aboutMeBackground')

    const aboutMeContainer = document.createElement('div')
    aboutMeContainer.classList.add('aboutMeContainer')
    aboutMeContainer.id = 'aboutme'

    const aboutMeHeader = document.createElement('h2')
    aboutMeHeader.classList.add('aboutMeHeader')
    aboutMeHeader.textContent = 'About me'

    aboutMeContainer.appendChild(aboutMeHeader)
    aboutMeContainer.appendChild(createAboutMeContent())

    aboutMeBackground.appendChild(aboutMeContainer)

    return aboutMeBackground
}
