class Icons {
    constructor() {
        this.iconClasses = {
            'bootstrap': 'devicon-bootstrap-plain',
            'bootstrap-wordmark': 'devicon-bootstrap-plain-wordmark',
            'css': 'devicon-css3-plain',
            'css-wordmark': 'devicon-css3-plain-wordmark',
            'git': 'devicon-git-plain',
            'git-wordmark': 'devicon-git-plain-wordmark',
            'github': 'devicon-github-original',
            'github-wordmark': 'devicon-github-original-wordmark',
            'html': 'devicon-html5-plain',
            'html-wordmark': 'devicon-html5-plain-wordmark',
            'javascript': 'devicon-javascript-plain',
            'jest': 'devicon-jest-plain',
            'linkedin': 'devicon-linkedin-plain',
            'linkedin-wordmark': 'devicon-linkedin-plain-wordmark',
            'psql': 'devicon-postgresql-plain',
            'psql-wordmark': 'devicon-postgresql-plain-wordmark',
            'rails': 'devicon-rails-plain',
            'rails-wordmark': 'devicon-rails-plain-wordmark',
            'rspec': 'devicon-rspec-plain',
            'rspec-wordmark': 'devicon-rspec-plain-wordmark',
            'ruby': 'devicon-ruby-plain',
            'ruby-wordmark': 'devicon-ruby-plain-wordmark',
            'webpack': 'devicon-webpack-plain',
            'webpack-wordmark': 'devicon-webpack-plain-wordmark',
        }
    }

    devIconsLink = () => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.type = 'text/css'
        link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        return link
    }

    addEventListeners = (icon) => {
        icon.addEventListener('mouseenter', () => {
            icon.classList.toggle('colored')
        })
        icon.addEventListener('mouseleave', () => {
            icon.classList.toggle('colored')
        })
    }

    createIcon = (iconClass, iconName, ...additionalClasses) => {
        const newIcon = document.createElement('i')
        newIcon.classList.add(iconClass, ...additionalClasses)
        newIcon.setAttribute('data-icon', iconName)
        if (!additionalClasses.includes('filterIcon') && !additionalClasses.includes('contactIcon')) {
            this.addEventListeners(newIcon)
        }
        return newIcon
    }

    getIcon = (name, ...additionalClasses) => {
        if (this.iconClasses[name]) {
            return this.createIcon(this.iconClasses[name], name, ...additionalClasses)
        }
        return null
    }

    // SVG icons

    GmailIconSvg = (...iconClasses) => {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttributeNS(null, "class", iconClasses.join(' '));
        svg.setAttributeNS(null, "viewBox", "0 0 24 24");

        const title = document.createElementNS(svgNS, "title");
        title.textContent = "gmail";

        const path = document.createElementNS(svgNS, "path");
        path.setAttributeNS(null, "d", "M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z");

        svg.appendChild(title);
        svg.appendChild(path);

        return svg;
    }

    OpenIconSvg = (...iconClasses) => {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttributeNS(null, "class", iconClasses.join(' '));
        svg.setAttributeNS(null, "viewBox", "0 0 24 24");
    
        const title = document.createElementNS(svgNS, "title");
        title.textContent = "open-in-new";
    
        const path = document.createElementNS(svgNS, "path");
        path.setAttributeNS(null, "d", "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z");
    
        svg.appendChild(title);
        svg.appendChild(path);
    
        return svg;
    }

    themeToggleIconSvg = (...iconClasses) => {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttributeNS(null, "class", iconClasses.join(' '));
        svg.setAttributeNS(null, "viewBox", "0 0 24 24");
    
        const title = document.createElementNS(svgNS, "title");
        title.textContent = "theme-light-dark";
    
        const path = document.createElementNS(svgNS, "path");
        path.setAttributeNS(null, "d", "M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z");
    
        svg.appendChild(title);
        svg.appendChild(path);
    
        return svg;
    }
};

export default Icons
