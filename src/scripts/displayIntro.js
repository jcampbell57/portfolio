import h4_sq_300w from '../assets/h4_sq_300w.png'
import h4_sq_600w from '../assets/h4_sq_600w.png'
import h4_sq_1250w from '../assets/h4_sq_1250w.png'
import cv from '../assets/cv.pdf'

export const createIntroContainer = () => {
    const introBackground = document.createElement('div')
    introBackground.classList.add('introBackground')

    const introContainer = document.createElement('div')
    introContainer.classList.add('introContainer')

    const introImage = document.createElement('img')
    introImage.classList.add('introImage')
    introImage.src = h4_sq_1250w
    introImage.srcset = `${h4_sq_1250w} 1250w,
                         ${h4_sq_600w} 600w,
                         ${h4_sq_300w} 300w`
    introImage.sizes = `(max-width: 320px) 300px,
                        (max-width: 640px) 600px
                        1250px`
    introImage.alt = 'Portrait image'

    const introBlurbContainer = document.createElement('div')
    introBlurbContainer.classList.add('introBlurbContainer')

    const introHeader = document.createElement('h2')
    introHeader.classList.add('introHeader')
    introHeader.textContent = 'Hello, World!'

    const introBlurb = document.createElement('p')
    introBlurb.classList.add('introBlurb')
    introBlurb.textContent = "I'm Jason Campbell, a full-stack software developer based in the San Francisco Bay Area. With a background in education and finance, I bring a unique perspective to problem-solving in tech. I am proficient in Ruby on Rails, JavaScript, and React, and I'm dedicated to continuous learning and improving code quality."

    const introLinks = document.createElement('p')
    introLinks.classList.add('introLinks')

    const introResumeLink = document.createElement('a')
    introResumeLink.classList.add('introResumeLink')
    introResumeLink.href = cv
    introResumeLink.target = '_blank'
    introResumeLink.download = 'JasonCampbell_Resume.pdf'
    introResumeLink.textContent = 'Resume'

    const introEmailLink = document.createElement('a')
    introEmailLink.classList.add('introEmailLink')
    introEmailLink.href = 'mailto:jcampbell57@gmail.com'
    introEmailLink.textContent = 'Email'

    introLinks.appendChild(introResumeLink)
    introLinks.appendChild(introEmailLink)  

    introBlurbContainer.appendChild(introHeader)
    introBlurbContainer.appendChild(introBlurb)
    introBlurbContainer.appendChild(introLinks)

    introContainer.appendChild(introImage)
    introContainer.appendChild(introBlurbContainer)

    introBackground.appendChild(introContainer)

    return introBackground
}
