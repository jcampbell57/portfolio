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
    aboutMeP1.textContent = `Hello! I'm Jason Campbell, a Full-Stack Software Developer based in the San Francisco Bay Area. My journey into the world of technology has been driven by a lifelong curiosity and passion for problem-solving.`

    const aboutMeP2 = document.createElement('p')
    aboutMeP2.classList.add('aboutMeP2')
    aboutMeP2.textContent = `After earning a degree in Business Administration with a focus on Finance, I spent five years teaching math to middle school students. This experience honed my problem-solving, communication, and data analysis skills - all of which prove invaluable in my development work today.`

    const aboutMeP3 = document.createElement('p')
    aboutMeP3.classList.add('aboutMeP3')
    aboutMeP3.textContent = `As my interest in technology grew, I made the decision to pivot my career towards software development. Today, I specialize in building web applications using Ruby on Rails, JavaScript, and React. My portfolio includes a full-stack social media platform, demonstrating my ability to handle both front-end and back-end development. I've also created several smaller projects, including a weather application that integrates external APIs and a chess game with a computer opponent, showcasing my problem-solving skills and ability to implement complex logic.`

    const aboutMeP4 = document.createElement('p')
    aboutMeP4.classList.add('aboutMeP4')
    aboutMeP4.textContent = `I'm committed to writing clean, efficient code and staying current with emerging technologies. My unique background allows me to approach coding challenges with a fresh perspective, combining analytical thinking with innovative solutions. When I'm not coding, you can find me playing disc golf, hiking, attending concerts, or gaming.`

    const aboutMeP5 = document.createElement('p')
    aboutMeP5.classList.add('aboutMeP5')
    aboutMeP5.textContent = `I'm excited about the opportunity to bring my unique blend of skills to innovative projects in the tech industry. If you're looking for a developer who combines technical expertise with strong communication skills and a fresh perspective, let's connect!`

    blurbContainer.appendChild(aboutMeP1)
    blurbContainer.appendChild(document.createElement('br'))
    blurbContainer.appendChild(aboutMeP2)
    blurbContainer.appendChild(document.createElement('br'))
    blurbContainer.appendChild(aboutMeP3)
    blurbContainer.appendChild(document.createElement('br'))
    blurbContainer.appendChild(aboutMeP4)
    blurbContainer.appendChild(document.createElement('br'))
    blurbContainer.appendChild(aboutMeP5)
    
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
