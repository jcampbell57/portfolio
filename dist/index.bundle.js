"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/reset.css */ "./src/stylesheets/reset.css");
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/style.css */ "./src/stylesheets/style.css");
/* harmony import */ var _scripts_pageLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/pageLoader.js */ "./src/scripts/pageLoader.js");



(0,_scripts_pageLoader_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/scripts/Icons.js":
/*!******************************!*\
  !*** ./src/scripts/Icons.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
      'json': 'devicon-json-plain',
      'json-wordmark': 'devicon-json-plain-wordmark',
      'linkedin': 'devicon-linkedin-plain',
      'linkedin-wordmark': 'devicon-linkedin-plain-wordmark',
      'psql': 'devicon-postgresql-plain',
      'psql-wordmark': 'devicon-postgresql-plain-wordmark',
      'rails': 'devicon-rails-plain',
      'rails-wordmark': 'devicon-rails-plain-wordmark',
      'react': 'devicon-react-original',
      'react-wordmark': 'devicon-react-original-wordmark',
      'rspec': 'devicon-rspec-plain',
      'rspec-wordmark': 'devicon-rspec-plain-wordmark',
      'ruby': 'devicon-ruby-plain',
      'ruby-wordmark': 'devicon-ruby-plain-wordmark',
      'webpack': 'devicon-webpack-plain',
      'webpack-wordmark': 'devicon-webpack-plain-wordmark',
      'yaml': 'devicon-yaml-plain'
    };
  }
  devIconsLink = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    return link;
  };
  addEventListeners = icon => {
    icon.addEventListener('mouseenter', () => {
      icon.classList.toggle('colored');
    });
    icon.addEventListener('mouseleave', () => {
      icon.classList.toggle('colored');
    });
  };
  createIcon = (() => {
    var _this = this;
    return function (iconClass, iconName) {
      const newIcon = document.createElement('i');
      for (var _len = arguments.length, additionalClasses = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        additionalClasses[_key - 2] = arguments[_key];
      }
      newIcon.classList.add(iconClass, ...additionalClasses);
      newIcon.setAttribute('data-icon', iconName);
      if (!additionalClasses.includes('filterIcon') && !additionalClasses.includes('contactIcon')) {
        _this.addEventListeners(newIcon);
      }
      return newIcon;
    };
  })();
  getIcon = (() => {
    var _this2 = this;
    return function (name) {
      if (_this2.iconClasses[name]) {
        for (var _len2 = arguments.length, additionalClasses = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          additionalClasses[_key2 - 1] = arguments[_key2];
        }
        return _this2.createIcon(_this2.iconClasses[name], name, ...additionalClasses);
      }
      return null;
    };
  })();

  // SVG icons

  GmailIconSvg = (() => function () {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    for (var _len3 = arguments.length, iconClasses = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      iconClasses[_key3] = arguments[_key3];
    }
    svg.setAttributeNS(null, "class", iconClasses.join(' '));
    svg.setAttributeNS(null, "viewBox", "0 0 24 24");
    const title = document.createElementNS(svgNS, "title");
    title.textContent = "gmail";
    const path = document.createElementNS(svgNS, "path");
    path.setAttributeNS(null, "d", "M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z");
    svg.appendChild(title);
    svg.appendChild(path);
    return svg;
  })();
  OpenIconSvg = (() => function () {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    for (var _len4 = arguments.length, iconClasses = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      iconClasses[_key4] = arguments[_key4];
    }
    svg.setAttributeNS(null, "class", iconClasses.join(' '));
    svg.setAttributeNS(null, "viewBox", "0 0 24 24");
    const title = document.createElementNS(svgNS, "title");
    title.textContent = "open-in-new";
    const path = document.createElementNS(svgNS, "path");
    path.setAttributeNS(null, "d", "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z");
    svg.appendChild(title);
    svg.appendChild(path);
    return svg;
  })();
  themeToggleIconSvg = (() => function () {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    for (var _len5 = arguments.length, iconClasses = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      iconClasses[_key5] = arguments[_key5];
    }
    svg.setAttributeNS(null, "class", iconClasses.join(' '));
    svg.setAttributeNS(null, "viewBox", "0 0 24 24");
    const title = document.createElementNS(svgNS, "title");
    title.textContent = "theme-light-dark";
    const path = document.createElementNS(svgNS, "path");
    path.setAttributeNS(null, "d", "M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z");
    svg.appendChild(title);
    svg.appendChild(path);
    return svg;
  })();
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icons);

/***/ }),

/***/ "./src/scripts/displayAboutMe.js":
/*!***************************************!*\
  !*** ./src/scripts/displayAboutMe.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAboutMeContainer: () => (/* binding */ createAboutMeContainer)
/* harmony export */ });
/* harmony import */ var _assets_w1_300w_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/w1_300w.png */ "./src/assets/w1_300w.png");
/* harmony import */ var _assets_w1_600w_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/w1_600w.png */ "./src/assets/w1_600w.png");
/* harmony import */ var _assets_w1_1250w_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/w1_1250w.png */ "./src/assets/w1_1250w.png");



const createAboutMeContent = () => {
  const aboutMeContent = document.createElement('div');
  aboutMeContent.classList.add('aboutMeContent');
  const portraitImage = document.createElement('img');
  portraitImage.classList.add('portraitImage');
  portraitImage.src = _assets_w1_1250w_png__WEBPACK_IMPORTED_MODULE_2__;
  portraitImage.srcset = `${_assets_w1_1250w_png__WEBPACK_IMPORTED_MODULE_2__} 1250w,
                            ${_assets_w1_600w_png__WEBPACK_IMPORTED_MODULE_1__} 600w,
                            ${_assets_w1_300w_png__WEBPACK_IMPORTED_MODULE_0__} 300w`;
  portraitImage.sizes = `(max-width: 320px) 300px,
                           (max-width: 640px) 600px,
                           1250px`;
  portraitImage.alt = 'Portrait image.';
  const aboutMeSpacer = document.createElement('div');
  aboutMeSpacer.classList.add('aboutMeSpacer');
  const blurbContainer = document.createElement('div');
  blurbContainer.classList.add('blurbContainer');
  const aboutMeP1 = document.createElement('p');
  aboutMeP1.classList.add('aboutMeP1');
  aboutMeP1.textContent = `Hello! I'm Jason Campbell, a Full-Stack Software Developer based in the San Francisco Bay Area. My journey into the world of technology has been driven by a lifelong curiosity and passion for problem-solving.`;
  const aboutMeP2 = document.createElement('p');
  aboutMeP2.classList.add('aboutMeP2');
  aboutMeP2.textContent = `After earning a degree in Business Administration with a focus on Finance, I spent five years teaching math to middle school students. This experience honed my problem-solving, communication, and data analysis skills - all of which prove invaluable in my development work today.`;
  const aboutMeP3 = document.createElement('p');
  aboutMeP3.classList.add('aboutMeP3');
  aboutMeP3.textContent = `As my interest in technology grew, I made the decision to pivot my career towards software development. Today, I specialize in building web applications using Ruby on Rails, JavaScript, and React. My portfolio includes a full-stack social media platform, demonstrating my ability to handle both front-end and back-end development. I've also created several smaller projects, including a weather application that integrates external APIs and a chess game with a computer opponent, showcasing my problem-solving skills and ability to implement complex logic.`;
  const aboutMeP4 = document.createElement('p');
  aboutMeP4.classList.add('aboutMeP4');
  aboutMeP4.textContent = `I'm committed to writing clean, efficient code and staying current with emerging technologies. My unique background allows me to approach coding challenges with a fresh perspective, combining analytical thinking with innovative solutions. When I'm not coding, you can find me playing disc golf, hiking, attending concerts, or gaming.`;
  const aboutMeP5 = document.createElement('p');
  aboutMeP5.classList.add('aboutMeP5');
  aboutMeP5.textContent = `I'm excited about the opportunity to bring my unique blend of skills to innovative projects in the tech industry. If you're looking for a developer who combines technical expertise with strong communication skills and a fresh perspective, let's connect!`;
  blurbContainer.appendChild(aboutMeP1);
  blurbContainer.appendChild(document.createElement('br'));
  blurbContainer.appendChild(aboutMeP2);
  blurbContainer.appendChild(document.createElement('br'));
  blurbContainer.appendChild(aboutMeP3);
  blurbContainer.appendChild(document.createElement('br'));
  blurbContainer.appendChild(aboutMeP4);
  blurbContainer.appendChild(document.createElement('br'));
  blurbContainer.appendChild(aboutMeP5);
  aboutMeContent.appendChild(portraitImage);
  aboutMeContent.appendChild(aboutMeSpacer);
  aboutMeContent.appendChild(blurbContainer);
  return aboutMeContent;
};
const createAboutMeContainer = () => {
  const aboutMeBackground = document.createElement('div');
  aboutMeBackground.classList.add('aboutMeBackground');
  const aboutMeContainer = document.createElement('div');
  aboutMeContainer.classList.add('aboutMeContainer');
  aboutMeContainer.id = 'aboutme';
  const aboutMeHeader = document.createElement('h2');
  aboutMeHeader.classList.add('aboutMeHeader');
  aboutMeHeader.textContent = 'About me';
  aboutMeContainer.appendChild(aboutMeHeader);
  aboutMeContainer.appendChild(createAboutMeContent());
  aboutMeBackground.appendChild(aboutMeContainer);
  return aboutMeBackground;
};

/***/ }),

/***/ "./src/scripts/displayContact.js":
/*!***************************************!*\
  !*** ./src/scripts/displayContact.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactContainer: () => (/* binding */ createContactContainer)
/* harmony export */ });
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons */ "./src/scripts/Icons.js");

const icons = new _Icons__WEBPACK_IMPORTED_MODULE_0__["default"]();
const createConnectIcons = () => {
  const connectIcons = document.createElement('div');
  connectIcons.classList.add('connectIcons');
  const emailLink = document.createElement('a');
  emailLink.classList.add('emailLink');
  emailLink.href = 'mailto:jcampbell57@gmail.com';
  emailLink.appendChild(icons.GmailIconSvg('gmailIcon', 'contactIcon'));
  const emailText = document.createTextNode('Email');
  emailLink.appendChild(emailText);
  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/jcampbell57';
  githubLink.target = '_blank';
  githubLink.appendChild(icons.getIcon('github', 'contactIcon'));
  const githubText = document.createTextNode('Github');
  githubLink.appendChild(githubText);
  githubLink.addEventListener('mouseenter', () => githubLink.firstChild.classList.add('colored'));
  githubLink.addEventListener('mouseleave', () => githubLink.firstChild.classList.remove('colored'));
  const linkedinLink = document.createElement('a');
  linkedinLink.href = 'https://linkedin.com/in/jasonmichaelcampbell';
  linkedinLink.target = '_blank';
  linkedinLink.appendChild(icons.getIcon('linkedin', 'contactIcon'));
  const linkedinText = document.createTextNode('LinkedIn');
  linkedinLink.appendChild(linkedinText);
  linkedinLink.addEventListener('mouseenter', () => linkedinLink.firstChild.classList.add('colored'));
  linkedinLink.addEventListener('mouseleave', () => linkedinLink.firstChild.classList.remove('colored'));
  connectIcons.appendChild(emailLink);
  connectIcons.appendChild(githubLink);
  connectIcons.appendChild(linkedinLink);
  return connectIcons;
};
const createContactCard = () => {
  const contactCardContainer = document.createElement('div');
  contactCardContainer.classList.add('contactCardContainer');
  contactCardContainer.id = 'contact';
  const contactCardHeader = document.createElement('h2');
  contactCardHeader.textContent = "Lets connect!";
  contactCardContainer.appendChild(contactCardHeader);
  contactCardContainer.appendChild(createConnectIcons());
  return contactCardContainer;
};
const createContactContainer = () => {
  const contactBackground = document.createElement('div');
  contactBackground.classList.add('contactBackground');
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contactContainer');
  contactContainer.appendChild(createContactCard());
  contactBackground.appendChild(contactContainer);
  return contactBackground;
};

/***/ }),

/***/ "./src/scripts/displayIntro.js":
/*!*************************************!*\
  !*** ./src/scripts/displayIntro.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createIntroContainer: () => (/* binding */ createIntroContainer)
/* harmony export */ });
/* harmony import */ var _assets_h4_sq_300w_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/h4_sq_300w.png */ "./src/assets/h4_sq_300w.png");
/* harmony import */ var _assets_h4_sq_600w_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/h4_sq_600w.png */ "./src/assets/h4_sq_600w.png");
/* harmony import */ var _assets_h4_sq_1250w_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/h4_sq_1250w.png */ "./src/assets/h4_sq_1250w.png");
/* harmony import */ var _assets_cv_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/cv.pdf */ "./src/assets/cv.pdf");




const createIntroContainer = () => {
  const introBackground = document.createElement('div');
  introBackground.classList.add('introBackground');
  const introContainer = document.createElement('div');
  introContainer.classList.add('introContainer');
  const introImage = document.createElement('img');
  introImage.classList.add('introImage');
  introImage.src = _assets_h4_sq_1250w_png__WEBPACK_IMPORTED_MODULE_2__;
  introImage.srcset = `${_assets_h4_sq_1250w_png__WEBPACK_IMPORTED_MODULE_2__} 1250w,
                         ${_assets_h4_sq_600w_png__WEBPACK_IMPORTED_MODULE_1__} 600w,
                         ${_assets_h4_sq_300w_png__WEBPACK_IMPORTED_MODULE_0__} 300w`;
  introImage.sizes = `(max-width: 320px) 300px,
                        (max-width: 640px) 600px
                        1250px`;
  introImage.alt = 'Portrait image';
  const introBlurbContainer = document.createElement('div');
  introBlurbContainer.classList.add('introBlurbContainer');
  const introHeader = document.createElement('h2');
  introHeader.classList.add('introHeader');
  introHeader.textContent = 'Hello, World!';
  const introBlurb = document.createElement('p');
  introBlurb.classList.add('introBlurb');
  introBlurb.textContent = "I'm Jason Campbell, a full-stack software developer based in the San Francisco Bay Area. With a background in education and finance, I bring a unique perspective to problem-solving in tech. I am proficient in Ruby on Rails, JavaScript, and React, and I'm dedicated to continuous learning and improving code quality.";
  const introLinks = document.createElement('p');
  introLinks.classList.add('introLinks');
  const introResumeLink = document.createElement('a');
  introResumeLink.classList.add('introResumeLink');
  introResumeLink.href = _assets_cv_pdf__WEBPACK_IMPORTED_MODULE_3__;
  introResumeLink.target = '_blank';
  introResumeLink.download = 'JasonCampbell_Resume.pdf';
  introResumeLink.textContent = 'Resume';
  const introEmailLink = document.createElement('a');
  introEmailLink.classList.add('introEmailLink');
  introEmailLink.href = 'mailto:jcampbell57@gmail.com';
  introEmailLink.textContent = 'Email';
  introLinks.appendChild(introResumeLink);
  introLinks.appendChild(introEmailLink);
  introBlurbContainer.appendChild(introHeader);
  introBlurbContainer.appendChild(introBlurb);
  introBlurbContainer.appendChild(introLinks);
  introContainer.appendChild(introImage);
  introContainer.appendChild(introBlurbContainer);
  introBackground.appendChild(introContainer);
  return introBackground;
};

/***/ }),

/***/ "./src/scripts/displayProjects.js":
/*!****************************************!*\
  !*** ./src/scripts/displayProjects.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectsContainer: () => (/* binding */ createProjectsContainer),
/* harmony export */   displayAllProjects: () => (/* binding */ displayAllProjects)
/* harmony export */ });
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons */ "./src/scripts/Icons.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/scripts/projects.js");


const icons = new _Icons__WEBPACK_IMPORTED_MODULE_0__["default"]();
const createProjectCard = project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('projectCard');
  const projectImg = document.createElement('img');
  projectImg.classList.add('projectImg');
  projectImg.src = project.img.medium;
  projectImg.srcset = `${project.img.small} 300w, ${project.img.medium} 600w`;
  projectImg.sizes = `(max-width: 320px) 300px,
                        600px`;
  projectImg.alt = project.altImgText;
  const cardContent = document.createElement('div');
  cardContent.classList.add('cardContent');
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('cardHeader');
  const cardTitleLink = document.createElement('a');
  cardTitleLink.href = project.live_url;
  cardTitleLink.target = '_blank';
  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('cardTitle');
  cardTitle.textContent = project.name;
  cardTitleLink.appendChild(cardTitle);
  const cardTitleIcons = document.createElement('div');
  cardTitleIcons.classList.add('cardTitleIcons');
  const cardGithubLink = document.createElement('a');
  cardGithubLink.href = project.code_url;
  cardGithubLink.target = '_blank';
  cardGithubLink.appendChild(icons.getIcon('github', 'cardIcon'));
  const cardLiveLink = document.createElement('a');
  cardLiveLink.href = project.live_url;
  cardLiveLink.target = '_blank';
  cardLiveLink.appendChild(icons.OpenIconSvg('openIcon'));
  cardTitleIcons.appendChild(cardGithubLink);
  cardTitleIcons.appendChild(cardLiveLink);
  const descriptionLink = document.createElement('a');
  descriptionLink.href = project.live_url;
  descriptionLink.target = '_blank';
  const projectDescription = document.createElement('p');
  projectDescription.classList.add('projectDescription');
  projectDescription.textContent = project.desc;
  descriptionLink.appendChild(projectDescription);
  const cardSkillIcons = document.createElement('div');
  cardSkillIcons.classList.add('cardSkillIcons');
  project.icons.forEach(iconName => {
    const newIcon = icons.getIcon(iconName, 'cardSkillIcon');
    cardSkillIcons.appendChild(newIcon);
  });
  cardHeader.appendChild(cardTitleLink);
  cardHeader.appendChild(cardTitleIcons);
  cardContent.appendChild(cardHeader);
  cardContent.appendChild(descriptionLink);
  cardContent.appendChild(cardSkillIcons);
  projectCard.appendChild(projectImg);
  projectCard.appendChild(cardContent);
  return projectCard;
};
const displayProjects = filteredProjects => {
  const projectCardContainer = document.querySelector('.projectCardContainer');
  projectCardContainer.innerHTML = '';
  filteredProjects.forEach(project => {
    const newProjectCard = createProjectCard(project);
    projectCardContainer.appendChild(newProjectCard);
  });
};
const displayAllProjects = () => {
  displayProjects(_projects__WEBPACK_IMPORTED_MODULE_1__["default"]);
};
const filterProjectsByIcon = chosenIconName => {
  const standardizedIconName = chosenIconName.replace('-wordmark', '');
  const filteredProjects = _projects__WEBPACK_IMPORTED_MODULE_1__["default"].filter(project => project.icons.includes(standardizedIconName));
  displayProjects(filteredProjects);
};
let selectedIcon = null;
const handleIconClick = chosenIcon => {
  const iconData = chosenIcon.getAttribute('data-icon');
  const allIcons = document.querySelectorAll('.filterIconsContainer button i');
  allIcons.forEach(icon => {
    icon.classList.remove('selected', 'colored');
  });
  if (selectedIcon === chosenIcon) {
    selectedIcon = null;
    displayAllProjects();
  } else {
    chosenIcon.classList.add('selected', 'colored');
    selectedIcon = chosenIcon;
    filterProjectsByIcon(iconData);
  }
};
const createProjectsHeader = () => {
  const projectsHeaderContainer = document.createElement('div');
  projectsHeaderContainer.classList.add('projectsHeaderContainer');
  const projectsHeader = document.createElement('h2');
  projectsHeader.textContent = 'My Projects';
  const projectsSubheader = document.createElement('p');
  projectsSubheader.classList.add('projectsSubheader');
  projectsSubheader.textContent = 'filter by:';
  const filterIconsContainer = document.createElement('div');
  filterIconsContainer.classList.add('filterIconsContainer');
  const iconNames = ['html-wordmark', 'css-wordmark', 'javascript', 'react-wordmark', 'ruby-wordmark', 'rails-wordmark', 'psql-wordmark', 'webpack-wordmark', 'rspec-wordmark', 'jest', 'json', 'yaml', 'bootstrap-wordmark', 'git-wordmark', 'github-wordmark'];
  iconNames.forEach(name => {
    const button = document.createElement('button');
    const icon = icons.getIcon(name, 'filterIcon');
    button.appendChild(icon);
    button.addEventListener('mouseenter', () => {
      if (!button.firstChild.classList.contains('selected')) {
        button.firstChild.classList.add('colored');
      }
    });
    button.addEventListener('mouseleave', () => {
      if (!button.firstChild.classList.contains('selected')) {
        button.firstChild.classList.remove('colored');
      }
    });
    button.addEventListener('click', () => handleIconClick(icon));
    filterIconsContainer.appendChild(button);
  });
  projectsHeaderContainer.appendChild(projectsHeader);
  projectsHeaderContainer.appendChild(projectsSubheader);
  projectsHeaderContainer.appendChild(filterIconsContainer);
  return projectsHeaderContainer;
};
const createProjectCardContainer = () => {
  const projectCardContainer = document.createElement('div');
  projectCardContainer.classList.add('projectCardContainer');
  return projectCardContainer;
};
const createProjectsContainer = () => {
  const projectsContainer = document.createElement('div');
  projectsContainer.classList.add('projectsContainer');
  projectsContainer.id = 'projects';
  projectsContainer.appendChild(createProjectsHeader());
  projectsContainer.appendChild(createProjectCardContainer());
  return projectsContainer;
};

/***/ }),

/***/ "./src/scripts/pageLoader.js":
/*!***********************************!*\
  !*** ./src/scripts/pageLoader.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _assets_GitHub_light_32px_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/GitHub-light-32px.png */ "./src/assets/GitHub-light-32px.png");
/* harmony import */ var _assets_cv_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/cv.pdf */ "./src/assets/cv.pdf");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ "./src/scripts/Icons.js");
/* harmony import */ var _displayIntro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayIntro */ "./src/scripts/displayIntro.js");
/* harmony import */ var _displayProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayProjects */ "./src/scripts/displayProjects.js");
/* harmony import */ var _displayAboutMe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayAboutMe */ "./src/scripts/displayAboutMe.js");
/* harmony import */ var _displayContact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayContact */ "./src/scripts/displayContact.js");







const icons = new _Icons__WEBPACK_IMPORTED_MODULE_2__["default"]();
const createNav = () => {
  const nav = document.createElement('nav');
  const menubar = document.createElement('ul');
  menubar.classList.add('menubar');
  const menuItems = ['Projects', 'About Me', 'Contact', 'Resume'];
  menuItems.forEach(menuItem => {
    const newMenuItem = document.createElement('li');
    newMenuItem.classList.add('menuItem');
    const menuLink = document.createElement('a');
    if (menuItem === 'Resume') {
      menuLink.href = _assets_cv_pdf__WEBPACK_IMPORTED_MODULE_1__;
      menuLink.target = '_blank';
      menuLink.download = 'JasonCampbell_Resume.pdf';
    } else {
      menuLink.href = `#${menuItem.replace(' ', '').toLowerCase()}`;
    }
    menuLink.classList.add('menuLink');
    menuLink.textContent = menuItem;
    newMenuItem.appendChild(menuLink);
    menubar.appendChild(newMenuItem);
  });
  nav.appendChild(menubar);
  return nav;
};
const setThemePreference = () => {
  if (localStorage.themePreference === undefined) {
    localStorage.setItem('themePreference', 'dark');
  } else if (localStorage.getItem('themePreference') !== 'dark' && localStorage.getItem('themePreference') !== 'light') {
    localStorage.setItem('themePreference', 'dark');
  }
};
const loadTheme = () => {
  const body = document.querySelector('body');
  const projectsHeaderContainer = document.querySelector('.projectsHeaderContainer');
  const filterIcons = document.querySelectorAll('.filterIcon');
  if (localStorage.getItem('themePreference') === 'dark') {
    body.classList.add('darkMode');
    projectsHeaderContainer.classList.add('darkMode');
    filterIcons.forEach(icon => {
      icon.classList.add('darkMode');
    });
  }
};
const toggleTheme = () => {
  const body = document.querySelector('body');
  const projectsHeaderContainer = document.querySelector('.projectsHeaderContainer');
  const filterIcons = document.querySelectorAll('.filterIcon');
  body.classList.toggle('darkMode');
  projectsHeaderContainer.classList.toggle('darkMode');
  filterIcons.forEach(icon => {
    icon.classList.toggle('darkMode');
  });
  const currentTheme = body.classList.contains('darkMode') ? 'dark' : 'light';
  localStorage.setItem('themePreference', currentTheme);
};
const createThemeToggleBtn = () => {
  const themeToggleBtn = document.createElement('button');
  themeToggleBtn.classList.add('themeToggleBtn');
  themeToggleBtn.appendChild(icons.themeToggleIconSvg('themeToggleIcon'));
  themeToggleBtn.addEventListener('click', () => toggleTheme());
  return themeToggleBtn;
};
const createHeader = () => {
  const header = document.createElement('header');
  header.role = 'banner';
  const headerNameLink = document.createElement('a');
  headerNameLink.classList.add('headerNameLink');
  headerNameLink.href = '#top';
  const name = document.createElement('h2');
  name.classList.add('headerName', 'qwigley-regular');
  name.textContent = 'Jason Campbell';
  headerNameLink.appendChild(name);
  header.appendChild(headerNameLink);
  header.appendChild(createNav());
  header.appendChild(createThemeToggleBtn());
  return header;
};
const createTransition = stylingClass => {
  const transition = document.createElement('div');
  transition.classList.add('transition', stylingClass);
  return transition;
};
const createContent = () => {
  const contentContainer = document.createElement('main');
  contentContainer.role = 'main';
  contentContainer.appendChild((0,_displayIntro__WEBPACK_IMPORTED_MODULE_3__.createIntroContainer)());
  contentContainer.appendChild(createTransition('transition1'));
  contentContainer.appendChild((0,_displayProjects__WEBPACK_IMPORTED_MODULE_4__.createProjectsContainer)());
  contentContainer.appendChild(createTransition('transition2'));
  contentContainer.appendChild((0,_displayAboutMe__WEBPACK_IMPORTED_MODULE_5__.createAboutMeContainer)());
  contentContainer.appendChild((0,_displayContact__WEBPACK_IMPORTED_MODULE_6__.createContactContainer)());
  return contentContainer;
};
const createFooter = () => {
  const footer = document.createElement('footer');
  footer.role = 'contentinfo';
  const copyright = document.createElement('p');
  copyright.textContent = `Copyright © ${new Date().getFullYear()} jcampbell57`;
  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/jcampbell57';
  githubLink.target = '_blank';
  const newGithubIcon = document.createElement('img');
  newGithubIcon.src = _assets_GitHub_light_32px_png__WEBPACK_IMPORTED_MODULE_0__;
  newGithubIcon.classList.add('githubIcon');
  githubLink.appendChild(newGithubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);
  return footer;
};
function initialize() {
  document.head.appendChild(icons.devIconsLink());
  document.body.appendChild(createHeader());
  document.body.appendChild(createContent());
  document.body.appendChild(createFooter());
  setThemePreference();
  loadTheme();
  (0,_displayProjects__WEBPACK_IMPORTED_MODULE_4__.displayAllProjects)();
}

/***/ }),

/***/ "./src/scripts/projects.js":
/*!*********************************!*\
  !*** ./src/scripts/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_admindashboard_300w_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/admindashboard_300w.png */ "./src/assets/admindashboard_300w.png");
/* harmony import */ var _assets_admindashboard_600w_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/admindashboard_600w.png */ "./src/assets/admindashboard_600w.png");
/* harmony import */ var _assets_admindashboard_1250w_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/admindashboard_1250w.png */ "./src/assets/admindashboard_1250w.png");
/* harmony import */ var _assets_battleship_300w_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/battleship_300w.png */ "./src/assets/battleship_300w.png");
/* harmony import */ var _assets_battleship_600w_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/battleship_600w.png */ "./src/assets/battleship_600w.png");
/* harmony import */ var _assets_battleship_1250w_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/battleship_1250w.png */ "./src/assets/battleship_1250w.png");
/* harmony import */ var _assets_boot_roach_bomb_300w_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/boot_roach_bomb_300w.png */ "./src/assets/boot_roach_bomb_300w.png");
/* harmony import */ var _assets_boot_roach_bomb_600w_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/boot_roach_bomb_600w.png */ "./src/assets/boot_roach_bomb_600w.png");
/* harmony import */ var _assets_boot_roach_bomb_1250w_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/boot_roach_bomb_1250w.png */ "./src/assets/boot_roach_bomb_1250w.png");
/* harmony import */ var _assets_calculator_300w_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/calculator_300w.png */ "./src/assets/calculator_300w.png");
/* harmony import */ var _assets_calculator_600w_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/calculator_600w.png */ "./src/assets/calculator_600w.png");
/* harmony import */ var _assets_calculator_1250w_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/calculator_1250w.png */ "./src/assets/calculator_1250w.png");
/* harmony import */ var _assets_chess_300w_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/chess_300w.png */ "./src/assets/chess_300w.png");
/* harmony import */ var _assets_chess_600w_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/chess_600w.png */ "./src/assets/chess_600w.png");
/* harmony import */ var _assets_connect_four_300w_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/connect_four_300w.png */ "./src/assets/connect_four_300w.png");
/* harmony import */ var _assets_connect_four_600w_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/connect_four_600w.png */ "./src/assets/connect_four_600w.png");
/* harmony import */ var _assets_connect_four_1250w_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/connect_four_1250w.png */ "./src/assets/connect_four_1250w.png");
/* harmony import */ var _assets_cv_builder_300w_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/cv_builder_300w.png */ "./src/assets/cv_builder_300w.png");
/* harmony import */ var _assets_cv_builder_600w_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/cv_builder_600w.png */ "./src/assets/cv_builder_600w.png");
/* harmony import */ var _assets_cv_builder_1250w_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/cv_builder_1250w.png */ "./src/assets/cv_builder_1250w.png");
/* harmony import */ var _assets_hangman_300w_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/hangman_300w.png */ "./src/assets/hangman_300w.png");
/* harmony import */ var _assets_hangman_600w_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/hangman_600w.png */ "./src/assets/hangman_600w.png");
/* harmony import */ var _assets_hangman_1250w_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/hangman_1250w.png */ "./src/assets/hangman_1250w.png");
/* harmony import */ var _assets_mastermind_300w_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/mastermind_300w.png */ "./src/assets/mastermind_300w.png");
/* harmony import */ var _assets_mastermind_600w_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/mastermind_600w.png */ "./src/assets/mastermind_600w.png");
/* harmony import */ var _assets_odinbook_300w_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/odinbook_300w.png */ "./src/assets/odinbook_300w.png");
/* harmony import */ var _assets_odinbook_600w_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/odinbook_600w.png */ "./src/assets/odinbook_600w.png");
/* harmony import */ var _assets_odinbook_1250w_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/odinbook_1250w.png */ "./src/assets/odinbook_1250w.png");
/* harmony import */ var _assets_restaurant_300w_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/restaurant_300w.png */ "./src/assets/restaurant_300w.png");
/* harmony import */ var _assets_restaurant_600w_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/restaurant_600w.png */ "./src/assets/restaurant_600w.png");
/* harmony import */ var _assets_restaurant_1250w_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../assets/restaurant_1250w.png */ "./src/assets/restaurant_1250w.png");
/* harmony import */ var _assets_sign_up_form_300w_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../assets/sign_up_form_300w.png */ "./src/assets/sign_up_form_300w.png");
/* harmony import */ var _assets_sign_up_form_600w_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../assets/sign_up_form_600w.png */ "./src/assets/sign_up_form_600w.png");
/* harmony import */ var _assets_sign_up_form_1250w_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../assets/sign_up_form_1250w.png */ "./src/assets/sign_up_form_1250w.png");
/* harmony import */ var _assets_sketch_pad_300w_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../assets/sketch_pad_300w.png */ "./src/assets/sketch_pad_300w.png");
/* harmony import */ var _assets_sketch_pad_600w_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../assets/sketch_pad_600w.png */ "./src/assets/sketch_pad_600w.png");
/* harmony import */ var _assets_sketch_pad_1250w_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../assets/sketch_pad_1250w.png */ "./src/assets/sketch_pad_1250w.png");
/* harmony import */ var _assets_tictactoe_300w_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../assets/tictactoe_300w.png */ "./src/assets/tictactoe_300w.png");
/* harmony import */ var _assets_tictactoe_600w_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../assets/tictactoe_600w.png */ "./src/assets/tictactoe_600w.png");
/* harmony import */ var _assets_tictactoe_1250w_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../assets/tictactoe_1250w.png */ "./src/assets/tictactoe_1250w.png");
/* harmony import */ var _assets_todolist_300w_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../assets/todolist_300w.png */ "./src/assets/todolist_300w.png");
/* harmony import */ var _assets_todolist_600w_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../assets/todolist_600w.png */ "./src/assets/todolist_600w.png");
/* harmony import */ var _assets_todolist_1250w_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../assets/todolist_1250w.png */ "./src/assets/todolist_1250w.png");
/* harmony import */ var _assets_weatherserve_300w_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../assets/weatherserve_300w.png */ "./src/assets/weatherserve_300w.png");
/* harmony import */ var _assets_weatherserve_600w_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../assets/weatherserve_600w.png */ "./src/assets/weatherserve_600w.png");
/* harmony import */ var _assets_weatherserve_1250w_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../assets/weatherserve_1250w.png */ "./src/assets/weatherserve_1250w.png");
/* harmony import */ var _assets_wormhole_light_300w_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../assets/wormhole_light_300w.png */ "./src/assets/wormhole_light_300w.png");
/* harmony import */ var _assets_wormhole_light_600w_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../assets/wormhole_light_600w.png */ "./src/assets/wormhole_light_600w.png");
/* harmony import */ var _assets_wormhole_light_1250w_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../assets/wormhole_light_1250w.png */ "./src/assets/wormhole_light_1250w.png");
// Convert to class with constructer, create admin UI to add projects

// import project screenshots

















































// import wormhole_dark_300w from '../assets/wormhole_dark_300w.png'
// import wormhole_dark_600w from '../assets/wormhole_dark_600w.png'
// import wormhole_dark_1250w from '../assets/wormhole_dark_1250w.png'

const projects = [{
  name: 'odinbook',
  code_url: 'https://github.com/jcampbell57/odin-book-v2',
  live_url: 'https://odin-book-v2.fly.dev/',
  desc: "A relatively simple social media app. The purpose of this project is to tie together the concepts learned during the rails module of The Odin Project. This is the capstone project of The Odin Project's Ruby on Rails course.",
  altImgText: 'Odinbook user page.',
  icons: ['html', 'bootstrap', 'ruby', 'rails', 'psql', 'webpack', 'git', 'github'],
  img: {
    small: _assets_odinbook_300w_png__WEBPACK_IMPORTED_MODULE_25__,
    medium: _assets_odinbook_600w_png__WEBPACK_IMPORTED_MODULE_26__,
    large: _assets_odinbook_1250w_png__WEBPACK_IMPORTED_MODULE_27__
  }
}, {
  name: 'CV Builder',
  code_url: 'https://github.com/jcampbell57/cv-builder',
  live_url: 'https://fascinating-pegasus-6a0514.netlify.app/',
  desc: 'An application where users can input their information to generate a CV/résumé. The purpose of this project is to practing developing with react state and props.',
  altImgText: 'Battleship gameplay',
  icons: ['css', 'javascript', 'react', 'json', 'git', 'github'],
  img: {
    small: _assets_cv_builder_300w_png__WEBPACK_IMPORTED_MODULE_17__,
    medium: _assets_cv_builder_600w_png__WEBPACK_IMPORTED_MODULE_18__,
    large: _assets_cv_builder_1250w_png__WEBPACK_IMPORTED_MODULE_19__
  }
}, {
  name: 'Naval Warfare',
  code_url: 'https://github.com/jcampbell57/naval-warfare',
  live_url: 'https://jcampbell57.github.io/naval-warfare/',
  desc: "An interactive, two player game of Battleship. The purpose of this project is to practice Test Driven Development (TDD) and tie together the concepts learned in the JavaScript module of The Odin Project. This is the capstone project of The Odin Project's JavaScript course.",
  altImgText: 'Battleship gameplay',
  icons: ['css', 'javascript', 'jest', 'webpack', 'git', 'github'],
  img: {
    small: _assets_battleship_300w_png__WEBPACK_IMPORTED_MODULE_3__,
    medium: _assets_battleship_600w_png__WEBPACK_IMPORTED_MODULE_4__,
    large: _assets_battleship_1250w_png__WEBPACK_IMPORTED_MODULE_5__
  }
}, {
  name: 'Weatherserve',
  code_url: 'https://github.com/jcampbell57/weather-app',
  live_url: 'https://jcampbell57.github.io/weather-app/',
  desc: 'Input a city to retrieve weather information. The purpose of this project is to practice integration of an API, linter, Prettier and JavaScript compiler.',
  altImgText: 'Weatherserve user page.',
  icons: ['css', 'javascript', 'webpack', 'json', 'git', 'github'],
  img: {
    small: _assets_weatherserve_300w_png__WEBPACK_IMPORTED_MODULE_43__,
    medium: _assets_weatherserve_600w_png__WEBPACK_IMPORTED_MODULE_44__,
    large: _assets_weatherserve_1250w_png__WEBPACK_IMPORTED_MODULE_45__
  }
}, {
  name: 'Things To Do',
  code_url: 'https://github.com/jcampbell57/odin-todo-list',
  live_url: 'https://jcampbell57.github.io/odin-todo-list/',
  desc: 'A simple to-do list application. The purpose of this project is to practice serialization with JSON and object oriented programming.',
  altImgText: 'Todo list.',
  icons: ['css', 'javascript', 'webpack', 'json', 'git', 'github'],
  img: {
    small: _assets_todolist_300w_png__WEBPACK_IMPORTED_MODULE_40__,
    medium: _assets_todolist_600w_png__WEBPACK_IMPORTED_MODULE_41__,
    large: _assets_todolist_1250w_png__WEBPACK_IMPORTED_MODULE_42__
  }
}, {
  name: 'Middle Ring Restaurant',
  code_url: 'https://github.com/jcampbell57/odin-restaurant-page',
  live_url: 'https://jcampbell57.github.io/odin-restaurant-page/',
  desc: 'A restaurant page with tabbed content that uses JavaScript alone to generate all of the content on the page. The purpose of this project is to practice using JavaScript modules and webpack.',
  altImgText: 'Middle Ring Restaurant Page.',
  icons: ['css', 'javascript', 'webpack', 'git', 'github'],
  img: {
    small: _assets_restaurant_300w_png__WEBPACK_IMPORTED_MODULE_28__,
    medium: _assets_restaurant_600w_png__WEBPACK_IMPORTED_MODULE_29__,
    large: _assets_restaurant_1250w_png__WEBPACK_IMPORTED_MODULE_30__
  }
}, {
  name: 'Tic Tac Toe',
  code_url: 'https://github.com/jcampbell57/odin-tic-tac-toe',
  live_url: 'https://jcampbell57.github.io/odin-tic-tac-toe/',
  desc: 'An interactive two player Tic Tac Toe game. The purpose of this project is to practice creating clean javascript code with factory functions and modular functions.',
  altImgText: 'Tic Tac Toe.',
  icons: ['html', 'css', 'javascript', 'git', 'github'],
  img: {
    small: _assets_tictactoe_300w_png__WEBPACK_IMPORTED_MODULE_37__,
    medium: _assets_tictactoe_600w_png__WEBPACK_IMPORTED_MODULE_38__,
    large: _assets_tictactoe_1250w_png__WEBPACK_IMPORTED_MODULE_39__
  }
}, {
  name: 'Wormhole',
  code_url: 'https://github.com/jcampbell57/odin-library',
  live_url: 'https://jcampbell57.github.io/odin-library/',
  desc: 'An interactive library app. The purpose of this project is to practice using JavaScript objects and object constructors.',
  altImgText: 'Wormhole.',
  icons: ['html', 'css', 'javascript', 'json', 'git', 'github'],
  img: {
    small: _assets_wormhole_light_300w_png__WEBPACK_IMPORTED_MODULE_46__,
    medium: _assets_wormhole_light_600w_png__WEBPACK_IMPORTED_MODULE_47__,
    large: _assets_wormhole_light_1250w_png__WEBPACK_IMPORTED_MODULE_48__
  }
}, {
  name: 'Admin dashboard',
  code_url: 'https://github.com/jcampbell57/odin-admin-dashboard',
  live_url: 'https://jcampbell57.github.io/odin-admin-dashboard/',
  desc: "A responsive layout using CSS grid and flexbox. The purpose of this project was to practice creating an interface with CSS Grid. This is the capstone project of The Odin Project's Intermediate HTML and CSS course.",
  altImgText: 'Admin dashboard.',
  icons: ['html', 'css', 'git', 'github'],
  img: {
    small: _assets_admindashboard_300w_png__WEBPACK_IMPORTED_MODULE_0__,
    medium: _assets_admindashboard_600w_png__WEBPACK_IMPORTED_MODULE_1__,
    large: _assets_admindashboard_1250w_png__WEBPACK_IMPORTED_MODULE_2__
  }
}, {
  name: 'Sign-up Form',
  code_url: 'https://github.com/jcampbell57/odin-sign-up-form',
  live_url: 'https://jcampbell57.github.io/odin-sign-up-form/',
  desc: 'A sign up form for a fake service. The purpose of this project was to practice form validation, css styling, and mobile styling.',
  altImgText: 'Sign-up form.',
  icons: ['html', 'css', 'javascript', 'git', 'github'],
  img: {
    small: _assets_sign_up_form_300w_png__WEBPACK_IMPORTED_MODULE_31__,
    medium: _assets_sign_up_form_600w_png__WEBPACK_IMPORTED_MODULE_32__,
    large: _assets_sign_up_form_1250w_png__WEBPACK_IMPORTED_MODULE_33__
  }
}, {
  name: 'Chess',
  code_url: 'https://github.com/jcampbell57/ruby_chess',
  live_url: 'https://replit.com/@jcampbell57/Chess#main.rb',
  desc: "A command line Chess game where two players can play against each other. The purpose of this project is to show that I can take on a project with a lot of different components. This is the capstone project of The Odin Project's Ruby course.",
  altImgText: 'Chess game.',
  icons: ['ruby', 'rspec', 'yaml', 'git', 'github'],
  img: {
    small: _assets_chess_300w_png__WEBPACK_IMPORTED_MODULE_12__,
    medium: _assets_chess_600w_png__WEBPACK_IMPORTED_MODULE_13__
  }
}, {
  name: 'Connect Four',
  code_url: 'https://github.com/jcampbell57/ruby_connect_four',
  live_url: 'https://replit.com/@jcampbell57/Connect-Four#main.rb',
  desc: 'A command line Connect Four game where two players can play against each other. The purpose of this project was to practice Test Driven Development (TDD) with RSpec.',
  altImgText: 'Connect Four game.',
  icons: ['ruby', 'rspec', 'git', 'github'],
  img: {
    small: _assets_connect_four_300w_png__WEBPACK_IMPORTED_MODULE_14__,
    medium: _assets_connect_four_600w_png__WEBPACK_IMPORTED_MODULE_15__,
    large: _assets_connect_four_1250w_png__WEBPACK_IMPORTED_MODULE_16__
  }
}, {
  name: 'Hangman',
  code_url: 'https://github.com/jcampbell57/hangman',
  live_url: 'https://replit.com/@jcampbell57/Hangman',
  desc: 'A command line Hangman game. The purpose of this project was to practice implementation of serialization with the save game feature.',
  altImgText: 'Hangman game.',
  icons: ['ruby', 'yaml', 'git', 'github'],
  img: {
    small: _assets_hangman_300w_png__WEBPACK_IMPORTED_MODULE_20__,
    medium: _assets_hangman_600w_png__WEBPACK_IMPORTED_MODULE_21__,
    large: _assets_hangman_1250w_png__WEBPACK_IMPORTED_MODULE_22__
  }
}, {
  name: 'Mastermind',
  code_url: 'https://github.com/jcampbell57/ruby_mastermind',
  live_url: 'https://replit.com/@jcampbell57/FirmGullibleSystems#main.rb',
  desc: 'A command line Mastermind game played against AI. The purpose of this project was to practice Object Oriented Programming (OOP).',
  altImgText: 'Mastermind game.',
  icons: ['ruby', 'git', 'github'],
  img: {
    small: _assets_mastermind_300w_png__WEBPACK_IMPORTED_MODULE_23__,
    medium: _assets_mastermind_600w_png__WEBPACK_IMPORTED_MODULE_24__
  }
}, {
  name: 'Calculator',
  code_url: 'https://github.com/jcampbell57/odin-calculator',
  live_url: 'https://jcampbell57.github.io/odin-calculator/',
  desc: "A fully functional calculator with basic arithmetic operations that can be controlled with mouse or keyboard. This is the capstone project of The Odin Project's Foundations course.",
  altImgText: 'Mastermind game.',
  icons: ['html', 'css', 'javascript', 'git', 'github'],
  img: {
    small: _assets_calculator_300w_png__WEBPACK_IMPORTED_MODULE_9__,
    medium: _assets_calculator_600w_png__WEBPACK_IMPORTED_MODULE_10__,
    large: _assets_calculator_1250w_png__WEBPACK_IMPORTED_MODULE_11__
  }
}, {
  name: 'Sketch Pad',
  code_url: 'https://github.com/jcampbell57/odin-etch-a-sketch',
  live_url: 'https://jcampbell57.github.io/odin-etch-a-sketch/',
  desc: 'An Etch A Sketch app that allows users to create pixel art. The purpose of this project was to practice implementing a grid with flexbox that can by manipulated by the user.',
  altImgText: 'Mastermind game.',
  icons: ['html', 'css', 'javascript', 'git', 'github'],
  img: {
    small: _assets_sketch_pad_300w_png__WEBPACK_IMPORTED_MODULE_34__,
    medium: _assets_sketch_pad_600w_png__WEBPACK_IMPORTED_MODULE_35__,
    large: _assets_sketch_pad_1250w_png__WEBPACK_IMPORTED_MODULE_36__
  }
}, {
  name: 'Boot Roach Bomb',
  code_url: 'https://github.com/jcampbell57/odin-rock-paper-scissors',
  live_url: 'https://jcampbell57.github.io/odin-rock-paper-scissors/',
  desc: 'A fun variant of the classic Rock, Paper, Scissors game! This game is played against AI over the course of five rounds. Ther purpose of this project is to practice basic JavaScript concepts and implement a functioning user interface.',
  altImgText: 'Mastermind game.',
  icons: ['html', 'css', 'javascript', 'git', 'github'],
  img: {
    small: _assets_boot_roach_bomb_300w_png__WEBPACK_IMPORTED_MODULE_6__,
    medium: _assets_boot_roach_bomb_600w_png__WEBPACK_IMPORTED_MODULE_7__,
    large: _assets_boot_roach_bomb_1250w_png__WEBPACK_IMPORTED_MODULE_8__
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/reset.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/reset.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Qwigley&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Variables */

:root {
    --primary-blue: rgb(0, 123, 255);
    --light-blue: rgb(224, 247, 255);
    --dark-blue: rgb(0, 64, 133);
    --panel-background: hsl(0, 0%, 100%, 0.2);

    --background-color: lightgray;
    --background-color-dark: gray;

    --selection-hover: hsla(0, 0%, 100%, 0.1);
    --selection-active: hsla(0, 0%, 100%, 0.2);

    --box-shadow: 2px 2px 6px rgb(32, 32, 32);
    --box-shadow-hover: 2px 2px 6px black;
    --box-shadow-active: 1px 1px 6px black;

    --dark-font-color: rgb(32, 32, 32);
    --dark-font-hover: black;
    --light-font-color: whitesmoke;
    --light-font-hover: white;

    /* css dark blues */
    --default-dark-blue: darkblue;
    --default-midnight-blue: midnightblue;
    --default-navy: navy;

    /* css light blues */
    --default-cornflower-blue: cornflowerblue;
    --default-deep-sky-blue: deepskyblue;
    --default-dodger-blue: dodgerblue;
    --default-light-sky-blue: lightskyblue;
    --default-sky-blue: skyblue;

    /* css very lights */
    --default-alice-blue: aliceblue;
    --default-azure: azure;
    --default-light-blue: lightblue;
    --default-light-cyan: lightcyan;
    --default-mint-cream: mintcream;
    --default-pale-turquoise: paleturquoise;
    --default-powder-blue: powderblue;
    --default-snow: snow;
    --default-white: white;
}

/* Default stylings */

* {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif !important;
}

.qwigley-regular {
    font-size: 3rem;
    font-family: "Qwigley", cursive !important;
    font-weight: 400;
    font-style: normal;
}

h1 {
    font-size: 2em;
    font-weight: bold;
    margin: 0.67em 0;
}

h2 {
    font-size: 1.5em;
    font-weight: bold;
}

h3 {
    font-size: 1.17em;
    font-weight: bold;
}

h4 {
    font-weight: bold;
  }

a {
    color: inherit;
    text-decoration: none;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

/* SVG styling */

.gmailIcon {
    height: 1.8rem;
    fill: var(--light-font-color);
}

.gmailIcon:hover {
    fill: firebrick;
}

.openIcon {
    width: 2rem;
    fill: var(--light-font-color)
}

.openIcon:hover {
    fill: black
}

.themeToggleIcon {
    width: 2rem;
    fill: var(--light-font-color)
}

/* Page styling */

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--background-color);
    color: var(--light-font-color);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    line-height: normal;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

/* Dark mode styling */

body.darkMode {
    background-color: var(--background-color-dark);
}

.projectsHeaderContainer.darkMode {
    color: var(--light-font-color);
}

.filterIcon.darkMode {
    color: var(--light-font-color);
}

/* Header styling */

header {
    height: 4rem;
    display: flex;
    align-items: center;
    background-color: var(--dark-blue);
}

.headerName {
    padding: 0 2vw;
    padding-top: 1rem;
}

nav {
    height: 100%;
    margin-left: auto;
}

.menubar {
    height: 100%;
    display: flex;
}

.menuLink {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 2vw;
}

.menuLink:hover {
    background-color: var(--selection-hover);
    cursor: pointer;
}

.menuLink:active {
    background-color: var(--selection-active);
}

.themeToggleBtn {
    height: 100%;
    padding: 0 2vw;
}

.themeToggleBtn:hover {
    background-color: var(--selection-hover);
}

.themeToggleBtn:active {
    background-color: var(--selection-active);
}

.themeToggleBtn:hover > .themeToggleIcon {
    fill: var(--light-font-hover);
}

/* Content styling */

/* Intro styling */

.introBackground {
    background-color: var(--dark-blue);
    width: 100%;
    box-sizing: border-box;
    padding: 4vw;
    padding-bottom: 0;
    display: flex;
    justify-content: center;
}

.introContainer {
    max-width: 1250px;
    font-size: 1.3rem;
    display: flex;
    gap: 5vw;
    align-items: center;
}

.introImage {
    height: min(30vw, 500px);
    width: min(30vw, 500px);
    border-radius: min(15vw, 250px);
    box-shadow: var(--box-shadow);
}

.introHeader {
    margin-bottom: 2rem;
}

.introBlurb {
    margin-bottom: 2rem;
}

.introLinks {
    display: flex;
    align-items: center;
    gap: 2rem;
    text-decoration: underline;
    text-underline-offset: 0.6vh;
}

.introLinks > a:hover {
    color: var(--light-font-hover);
}

.transition1 {
    height: 4rem;
    width: 100%;
    background-color: var(--dark-blue);
    clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
}

/* Projects styling */

.projectsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 4vw;
    padding-top: 0;
}

.projectsHeaderContainer {
    color: var(--dark-font-color);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    text-align: center;
    width: 100%;
}

.projectsSubheader {
    font-size: 0.9rem;
}

.filterIconsContainer > button {
    margin: 0 0.8rem;
    margin-bottom: 0.8rem;
}

.filterIcon {
    font-size: 3rem;
}

.projectCardContainer {
    max-width: min(1250px, 100%);
    display: grid;
    grid-gap: clamp(1rem, 2vw, 2rem);
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

/* Project card styling */

.projectCard {
    background-color: var(--panel-background);
    border-radius: 8px;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    box-shadow: var(--box-shadow);
}

.projectCard:hover {
    box-shadow: var(--box-shadow-hover);
}

.projectCard:active {
    box-shadow: var(--box-shadow-active);
}

.projectImage {
    width: 100%;
}

.cardContent {
    background-color: var(--dark-blue);
    flex: 1;
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.cardHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cardTitle:hover {
    color: var(--light-font-hover) ;
}

.cardTitleIcons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
}

.cardTitleIcons > a {
    display: flex;
}

.cardIcon {
    font-size: 1.7rem;
}

.projectDescription {
    font-size: 1.1rem;
}

.projectDescription:hover {
    color: var(--light-font-hover);
}

.cardSkillIcons {
    margin-top: auto;
    display: flex;
    gap: 0.4rem;
}

.cardSkillIcon {
    font-size: 1.4rem;
}

.transition2 {
    height: 4rem;
    width: 100%;
    background-color: var(--dark-blue);
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%);
}

/* About me styling */

.aboutMeBackground {
    background-color: var(--dark-blue);
    padding: 0 4vw;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
}

.aboutMeContainer {
    max-width: 1250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.portraitImage {
    width: 40vw;
    max-width: 90vw;
    max-width: min(90vw, 640px);    
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    margin-left: min(2vw, 2rem);
    margin-bottom: min(1vw, 1rem);

    /* for text wrap: */
    float: right;
}

.aboutMeHeader {
    text-align: center;
    margin: 1rem 0;
}

.aboutMeSpacer { 
    height: 4vh;
}

.blurbContainer {
    background-color: var(--panel-background);
    box-shadow: var(--box-shadow);
    border-radius: 8px;
    padding: 0.8rem;
    font-size: 1.3rem;
    margin-right: 5vw;
}

/* Contact card styling */

.contactBackground {
    background-color: var(--dark-blue);
    padding: 4vw;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
}

.contactContainer {
    width: 100%;
    max-width: 1250px;
}

.contactCardContainer {
    background-color: var(--panel-background);
    box-shadow: var(--box-shadow);
    border-radius: 8px;
    padding: 1rem 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    /* width: 100%; */
    box-sizing: border-box;
}

.connectIcons {
    font-size: 1.4rem;

    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: center;
    width: 100%;
}

.connectIcons > a {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.4rem;
    border-radius: 6px;
}

.connectIcons > a:hover {
    color: var(--light-font-hover);
    background-color: var(--selection-hover);
}

.connectIcons > a:active {
    color: var(--light-font-hover);
    background-color: var(--selection-active);
}

.emailLink:hover > .gmailIcon {
    fill: firebrick
}

/* Footer styling */

footer {
    background-color: var(--dark-blue);
    height: 3rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

footer > a {
    display: flex;
}

.githubIcon {
    height: 24px;
    transition: transform 0.3s ease-in-out;
}

.githubIcon:hover {
    transform: rotate(-360deg) scale(1.2);
}

/* Mobile support */

@media only screen and (max-width: 700px) {
    nav {
        display: none;
    }

    .themeToggleBtn {
        margin-left: auto;
    }

    .introContainer {
        flex-direction: column;
    }

    .introImage {
        height: 90vw;
        width: 90vw;
        border-radius: 45vw;
    }

    .aboutMeContent {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .portraitImage {
        margin: unset;
        width: 90vw;
    }

    .aboutMeSpacer {
        height: 5vw;
    }

    .blurbContainer {
        margin: unset;
    }
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Qwigley&display=swap');\n\n/* Variables */\n\n:root {\n    --primary-blue: rgb(0, 123, 255);\n    --light-blue: rgb(224, 247, 255);\n    --dark-blue: rgb(0, 64, 133);\n    --panel-background: hsl(0, 0%, 100%, 0.2);\n\n    --background-color: lightgray;\n    --background-color-dark: gray;\n\n    --selection-hover: hsla(0, 0%, 100%, 0.1);\n    --selection-active: hsla(0, 0%, 100%, 0.2);\n\n    --box-shadow: 2px 2px 6px rgb(32, 32, 32);\n    --box-shadow-hover: 2px 2px 6px black;\n    --box-shadow-active: 1px 1px 6px black;\n\n    --dark-font-color: rgb(32, 32, 32);\n    --dark-font-hover: black;\n    --light-font-color: whitesmoke;\n    --light-font-hover: white;\n\n    /* css dark blues */\n    --default-dark-blue: darkblue;\n    --default-midnight-blue: midnightblue;\n    --default-navy: navy;\n\n    /* css light blues */\n    --default-cornflower-blue: cornflowerblue;\n    --default-deep-sky-blue: deepskyblue;\n    --default-dodger-blue: dodgerblue;\n    --default-light-sky-blue: lightskyblue;\n    --default-sky-blue: skyblue;\n\n    /* css very lights */\n    --default-alice-blue: aliceblue;\n    --default-azure: azure;\n    --default-light-blue: lightblue;\n    --default-light-cyan: lightcyan;\n    --default-mint-cream: mintcream;\n    --default-pale-turquoise: paleturquoise;\n    --default-powder-blue: powderblue;\n    --default-snow: snow;\n    --default-white: white;\n}\n\n/* Default stylings */\n\n* {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif !important;\n}\n\n.qwigley-regular {\n    font-size: 3rem;\n    font-family: \"Qwigley\", cursive !important;\n    font-weight: 400;\n    font-style: normal;\n}\n\nh1 {\n    font-size: 2em;\n    font-weight: bold;\n    margin: 0.67em 0;\n}\n\nh2 {\n    font-size: 1.5em;\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.17em;\n    font-weight: bold;\n}\n\nh4 {\n    font-weight: bold;\n  }\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n\nbutton {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n}\n\n/* SVG styling */\n\n.gmailIcon {\n    height: 1.8rem;\n    fill: var(--light-font-color);\n}\n\n.gmailIcon:hover {\n    fill: firebrick;\n}\n\n.openIcon {\n    width: 2rem;\n    fill: var(--light-font-color)\n}\n\n.openIcon:hover {\n    fill: black\n}\n\n.themeToggleIcon {\n    width: 2rem;\n    fill: var(--light-font-color)\n}\n\n/* Page styling */\n\nhtml {\n    scroll-behavior: smooth;\n}\n\nbody {\n    background-color: var(--background-color);\n    color: var(--light-font-color);\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    line-height: normal;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n}\n\n/* Dark mode styling */\n\nbody.darkMode {\n    background-color: var(--background-color-dark);\n}\n\n.projectsHeaderContainer.darkMode {\n    color: var(--light-font-color);\n}\n\n.filterIcon.darkMode {\n    color: var(--light-font-color);\n}\n\n/* Header styling */\n\nheader {\n    height: 4rem;\n    display: flex;\n    align-items: center;\n    background-color: var(--dark-blue);\n}\n\n.headerName {\n    padding: 0 2vw;\n    padding-top: 1rem;\n}\n\nnav {\n    height: 100%;\n    margin-left: auto;\n}\n\n.menubar {\n    height: 100%;\n    display: flex;\n}\n\n.menuLink {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding: 0 2vw;\n}\n\n.menuLink:hover {\n    background-color: var(--selection-hover);\n    cursor: pointer;\n}\n\n.menuLink:active {\n    background-color: var(--selection-active);\n}\n\n.themeToggleBtn {\n    height: 100%;\n    padding: 0 2vw;\n}\n\n.themeToggleBtn:hover {\n    background-color: var(--selection-hover);\n}\n\n.themeToggleBtn:active {\n    background-color: var(--selection-active);\n}\n\n.themeToggleBtn:hover > .themeToggleIcon {\n    fill: var(--light-font-hover);\n}\n\n/* Content styling */\n\n/* Intro styling */\n\n.introBackground {\n    background-color: var(--dark-blue);\n    width: 100%;\n    box-sizing: border-box;\n    padding: 4vw;\n    padding-bottom: 0;\n    display: flex;\n    justify-content: center;\n}\n\n.introContainer {\n    max-width: 1250px;\n    font-size: 1.3rem;\n    display: flex;\n    gap: 5vw;\n    align-items: center;\n}\n\n.introImage {\n    height: min(30vw, 500px);\n    width: min(30vw, 500px);\n    border-radius: min(15vw, 250px);\n    box-shadow: var(--box-shadow);\n}\n\n.introHeader {\n    margin-bottom: 2rem;\n}\n\n.introBlurb {\n    margin-bottom: 2rem;\n}\n\n.introLinks {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    text-decoration: underline;\n    text-underline-offset: 0.6vh;\n}\n\n.introLinks > a:hover {\n    color: var(--light-font-hover);\n}\n\n.transition1 {\n    height: 4rem;\n    width: 100%;\n    background-color: var(--dark-blue);\n    clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);\n}\n\n/* Projects styling */\n\n.projectsContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    padding: 4vw;\n    padding-top: 0;\n}\n\n.projectsHeaderContainer {\n    color: var(--dark-font-color);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    text-align: center;\n    width: 100%;\n}\n\n.projectsSubheader {\n    font-size: 0.9rem;\n}\n\n.filterIconsContainer > button {\n    margin: 0 0.8rem;\n    margin-bottom: 0.8rem;\n}\n\n.filterIcon {\n    font-size: 3rem;\n}\n\n.projectCardContainer {\n    max-width: min(1250px, 100%);\n    display: grid;\n    grid-gap: clamp(1rem, 2vw, 2rem);\n    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n}\n\n/* Project card styling */\n\n.projectCard {\n    background-color: var(--panel-background);\n    border-radius: 8px;\n    overflow: hidden;\n\n    display: flex;\n    flex-direction: column;\n\n    box-shadow: var(--box-shadow);\n}\n\n.projectCard:hover {\n    box-shadow: var(--box-shadow-hover);\n}\n\n.projectCard:active {\n    box-shadow: var(--box-shadow-active);\n}\n\n.projectImage {\n    width: 100%;\n}\n\n.cardContent {\n    background-color: var(--dark-blue);\n    flex: 1;\n    padding: 0.8rem;\n    display: flex;\n    flex-direction: column;\n    gap: 0.8rem;\n}\n\n.cardHeader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.cardTitle:hover {\n    color: var(--light-font-hover) ;\n}\n\n.cardTitleIcons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.4rem;\n}\n\n.cardTitleIcons > a {\n    display: flex;\n}\n\n.cardIcon {\n    font-size: 1.7rem;\n}\n\n.projectDescription {\n    font-size: 1.1rem;\n}\n\n.projectDescription:hover {\n    color: var(--light-font-hover);\n}\n\n.cardSkillIcons {\n    margin-top: auto;\n    display: flex;\n    gap: 0.4rem;\n}\n\n.cardSkillIcon {\n    font-size: 1.4rem;\n}\n\n.transition2 {\n    height: 4rem;\n    width: 100%;\n    background-color: var(--dark-blue);\n    clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%);\n}\n\n/* About me styling */\n\n.aboutMeBackground {\n    background-color: var(--dark-blue);\n    padding: 0 4vw;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n}\n\n.aboutMeContainer {\n    max-width: 1250px;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.portraitImage {\n    width: 40vw;\n    max-width: 90vw;\n    max-width: min(90vw, 640px);    \n    border-radius: 8px;\n    box-shadow: var(--box-shadow);\n    margin-left: min(2vw, 2rem);\n    margin-bottom: min(1vw, 1rem);\n\n    /* for text wrap: */\n    float: right;\n}\n\n.aboutMeHeader {\n    text-align: center;\n    margin: 1rem 0;\n}\n\n.aboutMeSpacer { \n    height: 4vh;\n}\n\n.blurbContainer {\n    background-color: var(--panel-background);\n    box-shadow: var(--box-shadow);\n    border-radius: 8px;\n    padding: 0.8rem;\n    font-size: 1.3rem;\n    margin-right: 5vw;\n}\n\n/* Contact card styling */\n\n.contactBackground {\n    background-color: var(--dark-blue);\n    padding: 4vw;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n}\n\n.contactContainer {\n    width: 100%;\n    max-width: 1250px;\n}\n\n.contactCardContainer {\n    background-color: var(--panel-background);\n    box-shadow: var(--box-shadow);\n    border-radius: 8px;\n    padding: 1rem 2rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    align-items: center;\n\n    /* width: 100%; */\n    box-sizing: border-box;\n}\n\n.connectIcons {\n    font-size: 1.4rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 0.4rem;\n    align-items: center;\n    width: 100%;\n}\n\n.connectIcons > a {\n    display: flex;\n    gap: 0.4rem;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 0.4rem;\n    border-radius: 6px;\n}\n\n.connectIcons > a:hover {\n    color: var(--light-font-hover);\n    background-color: var(--selection-hover);\n}\n\n.connectIcons > a:active {\n    color: var(--light-font-hover);\n    background-color: var(--selection-active);\n}\n\n.emailLink:hover > .gmailIcon {\n    fill: firebrick\n}\n\n/* Footer styling */\n\nfooter {\n    background-color: var(--dark-blue);\n    height: 3rem;\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\nfooter > a {\n    display: flex;\n}\n\n.githubIcon {\n    height: 24px;\n    transition: transform 0.3s ease-in-out;\n}\n\n.githubIcon:hover {\n    transform: rotate(-360deg) scale(1.2);\n}\n\n/* Mobile support */\n\n@media only screen and (max-width: 700px) {\n    nav {\n        display: none;\n    }\n\n    .themeToggleBtn {\n        margin-left: auto;\n    }\n\n    .introContainer {\n        flex-direction: column;\n    }\n\n    .introImage {\n        height: 90vw;\n        width: 90vw;\n        border-radius: 45vw;\n    }\n\n    .aboutMeContent {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .portraitImage {\n        margin: unset;\n        width: 90vw;\n    }\n\n    .aboutMeSpacer {\n        height: 5vw;\n    }\n\n    .blurbContainer {\n        margin: unset;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/stylesheets/reset.css":
/*!***********************************!*\
  !*** ./src/stylesheets/reset.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/GitHub-light-32px.png":
/*!******************************************!*\
  !*** ./src/assets/GitHub-light-32px.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "266ca63177bca6f330a7.png";

/***/ }),

/***/ "./src/assets/admindashboard_1250w.png":
/*!*********************************************!*\
  !*** ./src/assets/admindashboard_1250w.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "742f9e0dfb895121d33d.png";

/***/ }),

/***/ "./src/assets/admindashboard_300w.png":
/*!********************************************!*\
  !*** ./src/assets/admindashboard_300w.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7b2f82a8e6dd044e946.png";

/***/ }),

/***/ "./src/assets/admindashboard_600w.png":
/*!********************************************!*\
  !*** ./src/assets/admindashboard_600w.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9a38fea8dd661adf97d.png";

/***/ }),

/***/ "./src/assets/battleship_1250w.png":
/*!*****************************************!*\
  !*** ./src/assets/battleship_1250w.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cea230a1efe1b9378c84.png";

/***/ }),

/***/ "./src/assets/battleship_300w.png":
/*!****************************************!*\
  !*** ./src/assets/battleship_300w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0254e63acb1eebd5846a.png";

/***/ }),

/***/ "./src/assets/battleship_600w.png":
/*!****************************************!*\
  !*** ./src/assets/battleship_600w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ddf3bd7975f003dc2ae.png";

/***/ }),

/***/ "./src/assets/boot_roach_bomb_1250w.png":
/*!**********************************************!*\
  !*** ./src/assets/boot_roach_bomb_1250w.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aef66e8ef3e9f430b93e.png";

/***/ }),

/***/ "./src/assets/boot_roach_bomb_300w.png":
/*!*********************************************!*\
  !*** ./src/assets/boot_roach_bomb_300w.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bc5c498952b3fa6df1d.png";

/***/ }),

/***/ "./src/assets/boot_roach_bomb_600w.png":
/*!*********************************************!*\
  !*** ./src/assets/boot_roach_bomb_600w.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36883e261b9587d59e80.png";

/***/ }),

/***/ "./src/assets/calculator_1250w.png":
/*!*****************************************!*\
  !*** ./src/assets/calculator_1250w.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4872e6f7ac99cafcd3a0.png";

/***/ }),

/***/ "./src/assets/calculator_300w.png":
/*!****************************************!*\
  !*** ./src/assets/calculator_300w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fb2b6d10f5ef679802c.png";

/***/ }),

/***/ "./src/assets/calculator_600w.png":
/*!****************************************!*\
  !*** ./src/assets/calculator_600w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ded08fbbb9cf3178428.png";

/***/ }),

/***/ "./src/assets/chess_300w.png":
/*!***********************************!*\
  !*** ./src/assets/chess_300w.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93df62a6d1a9d2266624.png";

/***/ }),

/***/ "./src/assets/chess_600w.png":
/*!***********************************!*\
  !*** ./src/assets/chess_600w.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83e419876326fc86b9b6.png";

/***/ }),

/***/ "./src/assets/connect_four_1250w.png":
/*!*******************************************!*\
  !*** ./src/assets/connect_four_1250w.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "895863d6bbb3b82e8b9d.png";

/***/ }),

/***/ "./src/assets/connect_four_300w.png":
/*!******************************************!*\
  !*** ./src/assets/connect_four_300w.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70339d0a61cb405bbf56.png";

/***/ }),

/***/ "./src/assets/connect_four_600w.png":
/*!******************************************!*\
  !*** ./src/assets/connect_four_600w.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bad1bbbe4217507c5d1.png";

/***/ }),

/***/ "./src/assets/cv.pdf":
/*!***************************!*\
  !*** ./src/assets/cv.pdf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cv.pdf";

/***/ }),

/***/ "./src/assets/cv_builder_1250w.png":
/*!*****************************************!*\
  !*** ./src/assets/cv_builder_1250w.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dac4e3c453f50e73c1be.png";

/***/ }),

/***/ "./src/assets/cv_builder_300w.png":
/*!****************************************!*\
  !*** ./src/assets/cv_builder_300w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9e317fc0cbaaf777c7b.png";

/***/ }),

/***/ "./src/assets/cv_builder_600w.png":
/*!****************************************!*\
  !*** ./src/assets/cv_builder_600w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fb55a985cabba9a38d5.png";

/***/ }),

/***/ "./src/assets/h4_sq_1250w.png":
/*!************************************!*\
  !*** ./src/assets/h4_sq_1250w.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88c4d7f44180dff8017a.png";

/***/ }),

/***/ "./src/assets/h4_sq_300w.png":
/*!***********************************!*\
  !*** ./src/assets/h4_sq_300w.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0715e56d06333de39294.png";

/***/ }),

/***/ "./src/assets/h4_sq_600w.png":
/*!***********************************!*\
  !*** ./src/assets/h4_sq_600w.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be1ecc7f7caa1a187832.png";

/***/ }),

/***/ "./src/assets/hangman_1250w.png":
/*!**************************************!*\
  !*** ./src/assets/hangman_1250w.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f6b1ebdceedee17d33e.png";

/***/ }),

/***/ "./src/assets/hangman_300w.png":
/*!*************************************!*\
  !*** ./src/assets/hangman_300w.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f34b50dcf1b883d92ef.png";

/***/ }),

/***/ "./src/assets/hangman_600w.png":
/*!*************************************!*\
  !*** ./src/assets/hangman_600w.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f36d2c1e039985daa32.png";

/***/ }),

/***/ "./src/assets/mastermind_300w.png":
/*!****************************************!*\
  !*** ./src/assets/mastermind_300w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79b238a8f8f29e9e7f5e.png";

/***/ }),

/***/ "./src/assets/mastermind_600w.png":
/*!****************************************!*\
  !*** ./src/assets/mastermind_600w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b23fa020058b0b6e131e.png";

/***/ }),

/***/ "./src/assets/odinbook_1250w.png":
/*!***************************************!*\
  !*** ./src/assets/odinbook_1250w.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44d9c8225ea85ec3b386.png";

/***/ }),

/***/ "./src/assets/odinbook_300w.png":
/*!**************************************!*\
  !*** ./src/assets/odinbook_300w.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3eec73ba16b98f616be3.png";

/***/ }),

/***/ "./src/assets/odinbook_600w.png":
/*!**************************************!*\
  !*** ./src/assets/odinbook_600w.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ba0253f7d3ba0ec77f2.png";

/***/ }),

/***/ "./src/assets/restaurant_1250w.png":
/*!*****************************************!*\
  !*** ./src/assets/restaurant_1250w.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0ca822841efcc3a9426.png";

/***/ }),

/***/ "./src/assets/restaurant_300w.png":
/*!****************************************!*\
  !*** ./src/assets/restaurant_300w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7f8a5a7dce4a31ed402.png";

/***/ }),

/***/ "./src/assets/restaurant_600w.png":
/*!****************************************!*\
  !*** ./src/assets/restaurant_600w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61cbb3406dc396f9c809.png";

/***/ }),

/***/ "./src/assets/sign_up_form_1250w.png":
/*!*******************************************!*\
  !*** ./src/assets/sign_up_form_1250w.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "761b7557518b948f2bb5.png";

/***/ }),

/***/ "./src/assets/sign_up_form_300w.png":
/*!******************************************!*\
  !*** ./src/assets/sign_up_form_300w.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "129cdade56a3c0a0803a.png";

/***/ }),

/***/ "./src/assets/sign_up_form_600w.png":
/*!******************************************!*\
  !*** ./src/assets/sign_up_form_600w.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d90babe11e67d511d0fd.png";

/***/ }),

/***/ "./src/assets/sketch_pad_1250w.png":
/*!*****************************************!*\
  !*** ./src/assets/sketch_pad_1250w.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d01566def851b5cc559.png";

/***/ }),

/***/ "./src/assets/sketch_pad_300w.png":
/*!****************************************!*\
  !*** ./src/assets/sketch_pad_300w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c3ff2a3dc6e19bbfd92.png";

/***/ }),

/***/ "./src/assets/sketch_pad_600w.png":
/*!****************************************!*\
  !*** ./src/assets/sketch_pad_600w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95c115d31a2298f73a79.png";

/***/ }),

/***/ "./src/assets/tictactoe_1250w.png":
/*!****************************************!*\
  !*** ./src/assets/tictactoe_1250w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ecf9cc0f749ea7002d5.png";

/***/ }),

/***/ "./src/assets/tictactoe_300w.png":
/*!***************************************!*\
  !*** ./src/assets/tictactoe_300w.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85069b9bbcb4d3810479.png";

/***/ }),

/***/ "./src/assets/tictactoe_600w.png":
/*!***************************************!*\
  !*** ./src/assets/tictactoe_600w.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb6ebaa92d5289e235a2.png";

/***/ }),

/***/ "./src/assets/todolist_1250w.png":
/*!***************************************!*\
  !*** ./src/assets/todolist_1250w.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d834be7d72108c10682.png";

/***/ }),

/***/ "./src/assets/todolist_300w.png":
/*!**************************************!*\
  !*** ./src/assets/todolist_300w.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8670c5dc925ecda2bf9b.png";

/***/ }),

/***/ "./src/assets/todolist_600w.png":
/*!**************************************!*\
  !*** ./src/assets/todolist_600w.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89638bbdde36771146f5.png";

/***/ }),

/***/ "./src/assets/w1_1250w.png":
/*!*********************************!*\
  !*** ./src/assets/w1_1250w.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5972e0aff039190617ff.png";

/***/ }),

/***/ "./src/assets/w1_300w.png":
/*!********************************!*\
  !*** ./src/assets/w1_300w.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69745a566f63165fb03e.png";

/***/ }),

/***/ "./src/assets/w1_600w.png":
/*!********************************!*\
  !*** ./src/assets/w1_600w.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0c1cf7a982c535723a4.png";

/***/ }),

/***/ "./src/assets/weatherserve_1250w.png":
/*!*******************************************!*\
  !*** ./src/assets/weatherserve_1250w.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34b03d844ac4c90258f0.png";

/***/ }),

/***/ "./src/assets/weatherserve_300w.png":
/*!******************************************!*\
  !*** ./src/assets/weatherserve_300w.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80848a828f25dde58861.png";

/***/ }),

/***/ "./src/assets/weatherserve_600w.png":
/*!******************************************!*\
  !*** ./src/assets/weatherserve_600w.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3c69de8e1d5196a8f9d.png";

/***/ }),

/***/ "./src/assets/wormhole_light_1250w.png":
/*!*********************************************!*\
  !*** ./src/assets/wormhole_light_1250w.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64603db2ebc39819c21a.png";

/***/ }),

/***/ "./src/assets/wormhole_light_300w.png":
/*!********************************************!*\
  !*** ./src/assets/wormhole_light_300w.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbdb06aa07dc3a3b4c09.png";

/***/ }),

/***/ "./src/assets/wormhole_light_600w.png":
/*!********************************************!*\
  !*** ./src/assets/wormhole_light_600w.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52faf5ec4b51e863740b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0dBQWtHLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLEtBQUssT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGNBQWMsV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxL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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2NyaXB0cy9JY29ucy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2NyaXB0cy9kaXNwbGF5QWJvdXRNZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2NyaXB0cy9kaXNwbGF5Q29udGFjdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2NyaXB0cy9kaXNwbGF5SW50cm8uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvZGlzcGxheVByb2plY3RzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3JpcHRzL3BhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlc2hlZXRzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlc2hlZXRzL3Jlc2V0LmNzcz8wZjEwIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5jc3M/YmZmYyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXNoZWV0cy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL3NjcmlwdHMvcGFnZUxvYWRlci5qcydcblxuaW5pdGlhbGl6ZSgpXG4iLCJjbGFzcyBJY29ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWNvbkNsYXNzZXMgPSB7XG4gICAgICAgICAgICAnYm9vdHN0cmFwJzogJ2Rldmljb24tYm9vdHN0cmFwLXBsYWluJyxcbiAgICAgICAgICAgICdib290c3RyYXAtd29yZG1hcmsnOiAnZGV2aWNvbi1ib290c3RyYXAtcGxhaW4td29yZG1hcmsnLFxuICAgICAgICAgICAgJ2Nzcyc6ICdkZXZpY29uLWNzczMtcGxhaW4nLFxuICAgICAgICAgICAgJ2Nzcy13b3JkbWFyayc6ICdkZXZpY29uLWNzczMtcGxhaW4td29yZG1hcmsnLFxuICAgICAgICAgICAgJ2dpdCc6ICdkZXZpY29uLWdpdC1wbGFpbicsXG4gICAgICAgICAgICAnZ2l0LXdvcmRtYXJrJzogJ2Rldmljb24tZ2l0LXBsYWluLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICdnaXRodWInOiAnZGV2aWNvbi1naXRodWItb3JpZ2luYWwnLFxuICAgICAgICAgICAgJ2dpdGh1Yi13b3JkbWFyayc6ICdkZXZpY29uLWdpdGh1Yi1vcmlnaW5hbC13b3JkbWFyaycsXG4gICAgICAgICAgICAnaHRtbCc6ICdkZXZpY29uLWh0bWw1LXBsYWluJyxcbiAgICAgICAgICAgICdodG1sLXdvcmRtYXJrJzogJ2Rldmljb24taHRtbDUtcGxhaW4td29yZG1hcmsnLFxuICAgICAgICAgICAgJ2phdmFzY3JpcHQnOiAnZGV2aWNvbi1qYXZhc2NyaXB0LXBsYWluJyxcbiAgICAgICAgICAgICdqZXN0JzogJ2Rldmljb24tamVzdC1wbGFpbicsXG4gICAgICAgICAgICAnanNvbic6ICdkZXZpY29uLWpzb24tcGxhaW4nLFxuICAgICAgICAgICAgJ2pzb24td29yZG1hcmsnOiAnZGV2aWNvbi1qc29uLXBsYWluLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICdsaW5rZWRpbic6ICdkZXZpY29uLWxpbmtlZGluLXBsYWluJyxcbiAgICAgICAgICAgICdsaW5rZWRpbi13b3JkbWFyayc6ICdkZXZpY29uLWxpbmtlZGluLXBsYWluLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICdwc3FsJzogJ2Rldmljb24tcG9zdGdyZXNxbC1wbGFpbicsXG4gICAgICAgICAgICAncHNxbC13b3JkbWFyayc6ICdkZXZpY29uLXBvc3RncmVzcWwtcGxhaW4td29yZG1hcmsnLFxuICAgICAgICAgICAgJ3JhaWxzJzogJ2Rldmljb24tcmFpbHMtcGxhaW4nLFxuICAgICAgICAgICAgJ3JhaWxzLXdvcmRtYXJrJzogJ2Rldmljb24tcmFpbHMtcGxhaW4td29yZG1hcmsnLFxuICAgICAgICAgICAgJ3JlYWN0JzogJ2Rldmljb24tcmVhY3Qtb3JpZ2luYWwnLFxuICAgICAgICAgICAgJ3JlYWN0LXdvcmRtYXJrJzogJ2Rldmljb24tcmVhY3Qtb3JpZ2luYWwtd29yZG1hcmsnLFxuICAgICAgICAgICAgJ3JzcGVjJzogJ2Rldmljb24tcnNwZWMtcGxhaW4nLFxuICAgICAgICAgICAgJ3JzcGVjLXdvcmRtYXJrJzogJ2Rldmljb24tcnNwZWMtcGxhaW4td29yZG1hcmsnLFxuICAgICAgICAgICAgJ3J1YnknOiAnZGV2aWNvbi1ydWJ5LXBsYWluJyxcbiAgICAgICAgICAgICdydWJ5LXdvcmRtYXJrJzogJ2Rldmljb24tcnVieS1wbGFpbi13b3JkbWFyaycsXG4gICAgICAgICAgICAnd2VicGFjayc6ICdkZXZpY29uLXdlYnBhY2stcGxhaW4nLFxuICAgICAgICAgICAgJ3dlYnBhY2std29yZG1hcmsnOiAnZGV2aWNvbi13ZWJwYWNrLXBsYWluLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICd5YW1sJzogJ2Rldmljb24teWFtbC1wbGFpbicsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXZJY29uc0xpbmsgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCdcbiAgICAgICAgbGluay50eXBlID0gJ3RleHQvY3NzJ1xuICAgICAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2Rldmljb24ubWluLmNzcydcbiAgICAgICAgcmV0dXJuIGxpbmtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycyA9IChpY29uKSA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZSgnY29sb3JlZCcpXG4gICAgICAgIH0pXG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZSgnY29sb3JlZCcpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlSWNvbiA9IChpY29uQ2xhc3MsIGljb25OYW1lLCAuLi5hZGRpdGlvbmFsQ2xhc3NlcykgPT4ge1xuICAgICAgICBjb25zdCBuZXdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgICAgIG5ld0ljb24uY2xhc3NMaXN0LmFkZChpY29uQ2xhc3MsIC4uLmFkZGl0aW9uYWxDbGFzc2VzKVxuICAgICAgICBuZXdJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1pY29uJywgaWNvbk5hbWUpXG4gICAgICAgIGlmICghYWRkaXRpb25hbENsYXNzZXMuaW5jbHVkZXMoJ2ZpbHRlckljb24nKSAmJiAhYWRkaXRpb25hbENsYXNzZXMuaW5jbHVkZXMoJ2NvbnRhY3RJY29uJykpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMobmV3SWNvbilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3SWNvblxuICAgIH1cblxuICAgIGdldEljb24gPSAobmFtZSwgLi4uYWRkaXRpb25hbENsYXNzZXMpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaWNvbkNsYXNzZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUljb24odGhpcy5pY29uQ2xhc3Nlc1tuYW1lXSwgbmFtZSwgLi4uYWRkaXRpb25hbENsYXNzZXMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBTVkcgaWNvbnNcblxuICAgIEdtYWlsSWNvblN2ZyA9ICguLi5pY29uQ2xhc3NlcykgPT4ge1xuICAgICAgICBjb25zdCBzdmdOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInN2Z1wiKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiY2xhc3NcIiwgaWNvbkNsYXNzZXMuam9pbignICcpKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcImdtYWlsXCI7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJwYXRoXCIpO1xuICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZFwiLCBcIk0yMCwxOEgxOFY5LjI1TDEyLDEzTDYsOS4yNVYxOEg0VjZINS4yTDEyLDEwLjI1TDE4LjgsNkgyME0yMCw0SDRDMi44OSw0IDIsNC44OSAyLDZWMThBMiwyIDAgMCwwIDQsMjBIMjBBMiwyIDAgMCwwIDIyLDE4VjZDMjIsNC44OSAyMS4xLDQgMjAsNFpcIik7XG5cbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuXG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuXG4gICAgT3Blbkljb25TdmcgPSAoLi4uaWNvbkNsYXNzZXMpID0+IHtcbiAgICAgICAgY29uc3Qgc3ZnTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJzdmdcIik7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImNsYXNzXCIsIGljb25DbGFzc2VzLmpvaW4oJyAnKSk7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwib3Blbi1pbi1uZXdcIjtcbiAgICBcbiAgICAgICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJwYXRoXCIpO1xuICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZFwiLCBcIk0xNCwzVjVIMTcuNTlMNy43NiwxNC44M0w5LjE3LDE2LjI0TDE5LDYuNDFWMTBIMjFWM00xOSwxOUg1VjVIMTJWM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5WlwiKTtcbiAgICBcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgIFxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cblxuICAgIHRoZW1lVG9nZ2xlSWNvblN2ZyA9ICguLi5pY29uQ2xhc3NlcykgPT4ge1xuICAgICAgICBjb25zdCBzdmdOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInN2Z1wiKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiY2xhc3NcIiwgaWNvbkNsYXNzZXMuam9pbignICcpKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJ0aGVtZS1saWdodC1kYXJrXCI7XG4gICAgXG4gICAgICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicGF0aFwiKTtcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImRcIiwgXCJNNy41LDJDNS43MSwzLjE1IDQuNSw1LjE4IDQuNSw3LjVDNC41LDkuODIgNS43MSwxMS44NSA3LjUzLDEzQzQuNDYsMTMgMiwxMC41NCAyLDcuNUE1LjUsNS41IDAgMCwxIDcuNSwyTTE5LjA3LDMuNUwyMC41LDQuOTNMNC45MywyMC41TDMuNSwxOS4wN0wxOS4wNywzLjVNMTIuODksNS45M0wxMS40MSw1TDkuOTcsNkwxMC4zOSw0LjNMOSwzLjI0TDEwLjc1LDMuMTJMMTEuMzMsMS40N0wxMiwzLjFMMTMuNzMsMy4xM0wxMi4zOCw0LjI2TDEyLjg5LDUuOTNNOS41OSw5LjU0TDguNDMsOC44MUw3LjMxLDkuNTlMNy42NSw4LjI3TDYuNTYsNy40NEw3LjkyLDcuMzVMOC4zNyw2LjA2TDguODgsNy4zM0wxMC4yNCw3LjM2TDkuMTksOC4yM0w5LjU5LDkuNTRNMTksMTMuNUE1LjUsNS41IDAgMCwxIDEzLjUsMTlDMTIuMjgsMTkgMTEuMTUsMTguNiAxMC4yNCwxNy45M0wxNy45MywxMC4yNEMxOC42LDExLjE1IDE5LDEyLjI4IDE5LDEzLjVNMTQuNiwyMC4wOEwxNy4zNywxOC45M0wxNy4xMywyMi4yOEwxNC42LDIwLjA4TTE4LjkzLDE3LjM4TDIwLjA4LDE0LjYxTDIyLjI4LDE3LjE1TDE4LjkzLDE3LjM4TTIwLjA4LDEyLjQyTDE4Ljk0LDkuNjRMMjIuMjgsOS44OEwyMC4wOCwxMi40Mk05LjYzLDE4LjkzTDEyLjQsMjAuMDhMOS44NywyMi4yN0w5LjYzLDE4LjkzWlwiKTtcbiAgICBcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgIFxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zXG4iLCJpbXBvcnQgdzFfMzAwdyBmcm9tICcuLi9hc3NldHMvdzFfMzAwdy5wbmcnXG5pbXBvcnQgdzFfNjAwdyBmcm9tICcuLi9hc3NldHMvdzFfNjAwdy5wbmcnXG5pbXBvcnQgdzFfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL3cxXzEyNTB3LnBuZydcblxuY29uc3QgY3JlYXRlQWJvdXRNZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWJvdXRNZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0TWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Fib3V0TWVDb250ZW50JylcblxuICAgIGNvbnN0IHBvcnRyYWl0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHBvcnRyYWl0SW1hZ2UuY2xhc3NMaXN0LmFkZCgncG9ydHJhaXRJbWFnZScpXG4gICAgcG9ydHJhaXRJbWFnZS5zcmMgPSB3MV8xMjUwd1xuICAgIHBvcnRyYWl0SW1hZ2Uuc3Jjc2V0ID0gYCR7dzFfMTI1MHd9IDEyNTB3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dzFfNjAwd30gNjAwdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3cxXzMwMHd9IDMwMHdgXG4gICAgcG9ydHJhaXRJbWFnZS5zaXplcyA9IGAobWF4LXdpZHRoOiAzMjBweCkgMzAwcHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAobWF4LXdpZHRoOiA2NDBweCkgNjAwcHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAxMjUwcHhgXG4gICAgcG9ydHJhaXRJbWFnZS5hbHQgPSAnUG9ydHJhaXQgaW1hZ2UuJ1xuXG4gICAgY29uc3QgYWJvdXRNZVNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRNZVNwYWNlci5jbGFzc0xpc3QuYWRkKCdhYm91dE1lU3BhY2VyJylcblxuICAgIGNvbnN0IGJsdXJiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBibHVyYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdibHVyYkNvbnRhaW5lcicpXG5cbiAgICBjb25zdCBhYm91dE1lUDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhYm91dE1lUDEuY2xhc3NMaXN0LmFkZCgnYWJvdXRNZVAxJylcbiAgICBhYm91dE1lUDEudGV4dENvbnRlbnQgPSBgSGVsbG8hIEknbSBKYXNvbiBDYW1wYmVsbCwgYSBGdWxsLVN0YWNrIFNvZnR3YXJlIERldmVsb3BlciBiYXNlZCBpbiB0aGUgU2FuIEZyYW5jaXNjbyBCYXkgQXJlYS4gTXkgam91cm5leSBpbnRvIHRoZSB3b3JsZCBvZiB0ZWNobm9sb2d5IGhhcyBiZWVuIGRyaXZlbiBieSBhIGxpZmVsb25nIGN1cmlvc2l0eSBhbmQgcGFzc2lvbiBmb3IgcHJvYmxlbS1zb2x2aW5nLmBcblxuICAgIGNvbnN0IGFib3V0TWVQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGFib3V0TWVQMi5jbGFzc0xpc3QuYWRkKCdhYm91dE1lUDInKVxuICAgIGFib3V0TWVQMi50ZXh0Q29udGVudCA9IGBBZnRlciBlYXJuaW5nIGEgZGVncmVlIGluIEJ1c2luZXNzIEFkbWluaXN0cmF0aW9uIHdpdGggYSBmb2N1cyBvbiBGaW5hbmNlLCBJIHNwZW50IGZpdmUgeWVhcnMgdGVhY2hpbmcgbWF0aCB0byBtaWRkbGUgc2Nob29sIHN0dWRlbnRzLiBUaGlzIGV4cGVyaWVuY2UgaG9uZWQgbXkgcHJvYmxlbS1zb2x2aW5nLCBjb21tdW5pY2F0aW9uLCBhbmQgZGF0YSBhbmFseXNpcyBza2lsbHMgLSBhbGwgb2Ygd2hpY2ggcHJvdmUgaW52YWx1YWJsZSBpbiBteSBkZXZlbG9wbWVudCB3b3JrIHRvZGF5LmBcblxuICAgIGNvbnN0IGFib3V0TWVQMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGFib3V0TWVQMy5jbGFzc0xpc3QuYWRkKCdhYm91dE1lUDMnKVxuICAgIGFib3V0TWVQMy50ZXh0Q29udGVudCA9IGBBcyBteSBpbnRlcmVzdCBpbiB0ZWNobm9sb2d5IGdyZXcsIEkgbWFkZSB0aGUgZGVjaXNpb24gdG8gcGl2b3QgbXkgY2FyZWVyIHRvd2FyZHMgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIFRvZGF5LCBJIHNwZWNpYWxpemUgaW4gYnVpbGRpbmcgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBSdWJ5IG9uIFJhaWxzLCBKYXZhU2NyaXB0LCBhbmQgUmVhY3QuIE15IHBvcnRmb2xpbyBpbmNsdWRlcyBhIGZ1bGwtc3RhY2sgc29jaWFsIG1lZGlhIHBsYXRmb3JtLCBkZW1vbnN0cmF0aW5nIG15IGFiaWxpdHkgdG8gaGFuZGxlIGJvdGggZnJvbnQtZW5kIGFuZCBiYWNrLWVuZCBkZXZlbG9wbWVudC4gSSd2ZSBhbHNvIGNyZWF0ZWQgc2V2ZXJhbCBzbWFsbGVyIHByb2plY3RzLCBpbmNsdWRpbmcgYSB3ZWF0aGVyIGFwcGxpY2F0aW9uIHRoYXQgaW50ZWdyYXRlcyBleHRlcm5hbCBBUElzIGFuZCBhIGNoZXNzIGdhbWUgd2l0aCBhIGNvbXB1dGVyIG9wcG9uZW50LCBzaG93Y2FzaW5nIG15IHByb2JsZW0tc29sdmluZyBza2lsbHMgYW5kIGFiaWxpdHkgdG8gaW1wbGVtZW50IGNvbXBsZXggbG9naWMuYFxuXG4gICAgY29uc3QgYWJvdXRNZVA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWJvdXRNZVA0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0TWVQNCcpXG4gICAgYWJvdXRNZVA0LnRleHRDb250ZW50ID0gYEknbSBjb21taXR0ZWQgdG8gd3JpdGluZyBjbGVhbiwgZWZmaWNpZW50IGNvZGUgYW5kIHN0YXlpbmcgY3VycmVudCB3aXRoIGVtZXJnaW5nIHRlY2hub2xvZ2llcy4gTXkgdW5pcXVlIGJhY2tncm91bmQgYWxsb3dzIG1lIHRvIGFwcHJvYWNoIGNvZGluZyBjaGFsbGVuZ2VzIHdpdGggYSBmcmVzaCBwZXJzcGVjdGl2ZSwgY29tYmluaW5nIGFuYWx5dGljYWwgdGhpbmtpbmcgd2l0aCBpbm5vdmF0aXZlIHNvbHV0aW9ucy4gV2hlbiBJJ20gbm90IGNvZGluZywgeW91IGNhbiBmaW5kIG1lIHBsYXlpbmcgZGlzYyBnb2xmLCBoaWtpbmcsIGF0dGVuZGluZyBjb25jZXJ0cywgb3IgZ2FtaW5nLmBcblxuICAgIGNvbnN0IGFib3V0TWVQNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGFib3V0TWVQNS5jbGFzc0xpc3QuYWRkKCdhYm91dE1lUDUnKVxuICAgIGFib3V0TWVQNS50ZXh0Q29udGVudCA9IGBJJ20gZXhjaXRlZCBhYm91dCB0aGUgb3Bwb3J0dW5pdHkgdG8gYnJpbmcgbXkgdW5pcXVlIGJsZW5kIG9mIHNraWxscyB0byBpbm5vdmF0aXZlIHByb2plY3RzIGluIHRoZSB0ZWNoIGluZHVzdHJ5LiBJZiB5b3UncmUgbG9va2luZyBmb3IgYSBkZXZlbG9wZXIgd2hvIGNvbWJpbmVzIHRlY2huaWNhbCBleHBlcnRpc2Ugd2l0aCBzdHJvbmcgY29tbXVuaWNhdGlvbiBza2lsbHMgYW5kIGEgZnJlc2ggcGVyc3BlY3RpdmUsIGxldCdzIGNvbm5lY3QhYFxuXG4gICAgYmx1cmJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZVAxKVxuICAgIGJsdXJiQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpXG4gICAgYmx1cmJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZVAyKVxuICAgIGJsdXJiQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpXG4gICAgYmx1cmJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZVAzKVxuICAgIGJsdXJiQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpXG4gICAgYmx1cmJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZVA0KVxuICAgIGJsdXJiQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpXG4gICAgYmx1cmJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZVA1KVxuICAgIFxuICAgIGFib3V0TWVDb250ZW50LmFwcGVuZENoaWxkKHBvcnRyYWl0SW1hZ2UpXG4gICAgYWJvdXRNZUNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRNZVNwYWNlcilcbiAgICBhYm91dE1lQ29udGVudC5hcHBlbmRDaGlsZChibHVyYkNvbnRhaW5lcilcblxuICAgIHJldHVybiBhYm91dE1lQ29udGVudFxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQWJvdXRNZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBhYm91dE1lQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRNZUJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnYWJvdXRNZUJhY2tncm91bmQnKVxuXG4gICAgY29uc3QgYWJvdXRNZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRNZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dE1lQ29udGFpbmVyJylcbiAgICBhYm91dE1lQ29udGFpbmVyLmlkID0gJ2Fib3V0bWUnXG5cbiAgICBjb25zdCBhYm91dE1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGFib3V0TWVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXRNZUhlYWRlcicpXG4gICAgYWJvdXRNZUhlYWRlci50ZXh0Q29udGVudCA9ICdBYm91dCBtZSdcblxuICAgIGFib3V0TWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZUhlYWRlcilcbiAgICBhYm91dE1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0TWVDb250ZW50KCkpXG5cbiAgICBhYm91dE1lQmFja2dyb3VuZC5hcHBlbmRDaGlsZChhYm91dE1lQ29udGFpbmVyKVxuXG4gICAgcmV0dXJuIGFib3V0TWVCYWNrZ3JvdW5kXG59XG4iLCJpbXBvcnQgSWNvbnMgZnJvbSAnLi9JY29ucydcbmNvbnN0IGljb25zID0gbmV3IEljb25zXG5cbmNvbnN0IGNyZWF0ZUNvbm5lY3RJY29ucyA9ICgpID0+IHtcbiAgICBjb25zdCBjb25uZWN0SWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbm5lY3RJY29ucy5jbGFzc0xpc3QuYWRkKCdjb25uZWN0SWNvbnMnKVxuXG4gICAgY29uc3QgZW1haWxMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgZW1haWxMaW5rLmNsYXNzTGlzdC5hZGQoJ2VtYWlsTGluaycpXG4gICAgZW1haWxMaW5rLmhyZWYgPSAnbWFpbHRvOmpjYW1wYmVsbDU3QGdtYWlsLmNvbSdcbiAgICBlbWFpbExpbmsuYXBwZW5kQ2hpbGQoaWNvbnMuR21haWxJY29uU3ZnKCdnbWFpbEljb24nLCAnY29udGFjdEljb24nKSlcbiAgICBjb25zdCBlbWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRW1haWwnKVxuICAgIGVtYWlsTGluay5hcHBlbmRDaGlsZChlbWFpbFRleHQpXG4gICAgXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcnXG4gICAgZ2l0aHViTGluay50YXJnZXQgPSAnX2JsYW5rJ1xuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoaWNvbnMuZ2V0SWNvbignZ2l0aHViJywgJ2NvbnRhY3RJY29uJykpXG4gICAgY29uc3QgZ2l0aHViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdHaXRodWInKVxuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViVGV4dClcbiAgICBnaXRodWJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiBnaXRodWJMaW5rLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY29sb3JlZCcpKVxuICAgIGdpdGh1YkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IGdpdGh1YkxpbmsuZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xvcmVkJykpXG5cbiAgICBjb25zdCBsaW5rZWRpbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBsaW5rZWRpbkxpbmsuaHJlZiA9ICdodHRwczovL2xpbmtlZGluLmNvbS9pbi9qYXNvbm1pY2hhZWxjYW1wYmVsbCdcbiAgICBsaW5rZWRpbkxpbmsudGFyZ2V0ID0gJ19ibGFuaydcbiAgICBsaW5rZWRpbkxpbmsuYXBwZW5kQ2hpbGQoaWNvbnMuZ2V0SWNvbignbGlua2VkaW4nLCAnY29udGFjdEljb24nKSlcbiAgICBjb25zdCBsaW5rZWRpblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTGlua2VkSW4nKVxuICAgIGxpbmtlZGluTGluay5hcHBlbmRDaGlsZChsaW5rZWRpblRleHQpXG4gICAgbGlua2VkaW5MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiBsaW5rZWRpbkxpbmsuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb2xvcmVkJykpXG4gICAgbGlua2VkaW5MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBsaW5rZWRpbkxpbmsuZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xvcmVkJykpXG5cbiAgICBjb25uZWN0SWNvbnMuYXBwZW5kQ2hpbGQoZW1haWxMaW5rKVxuICAgIGNvbm5lY3RJY29ucy5hcHBlbmRDaGlsZChnaXRodWJMaW5rKVxuICAgIGNvbm5lY3RJY29ucy5hcHBlbmRDaGlsZChsaW5rZWRpbkxpbmspXG5cbiAgICByZXR1cm4gY29ubmVjdEljb25zXG59XG5cbmNvbnN0IGNyZWF0ZUNvbnRhY3RDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3RDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0Q2FyZENvbnRhaW5lcicpXG4gICAgY29udGFjdENhcmRDb250YWluZXIuaWQgPSAnY29udGFjdCdcblxuICAgIGNvbnN0IGNvbnRhY3RDYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGNvbnRhY3RDYXJkSGVhZGVyLnRleHRDb250ZW50ID0gXCJMZXRzIGNvbm5lY3QhXCJcblxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkSGVhZGVyKVxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbm5lY3RJY29ucygpKVxuXG4gICAgcmV0dXJuIGNvbnRhY3RDYXJkQ29udGFpbmVyXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb250YWN0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3RCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0QmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdjb250YWN0QmFja2dyb3VuZCcpXG5cbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RDb250YWluZXInKVxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdENhcmQoKSlcblxuICAgIGNvbnRhY3RCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpXG5cbiAgICByZXR1cm4gY29udGFjdEJhY2tncm91bmRcbn1cbiIsImltcG9ydCBoNF9zcV8zMDB3IGZyb20gJy4uL2Fzc2V0cy9oNF9zcV8zMDB3LnBuZydcbmltcG9ydCBoNF9zcV82MDB3IGZyb20gJy4uL2Fzc2V0cy9oNF9zcV82MDB3LnBuZydcbmltcG9ydCBoNF9zcV8xMjUwdyBmcm9tICcuLi9hc3NldHMvaDRfc3FfMTI1MHcucG5nJ1xuaW1wb3J0IGN2IGZyb20gJy4uL2Fzc2V0cy9jdi5wZGYnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJbnRyb0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRyb0JhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGludHJvQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdpbnRyb0JhY2tncm91bmQnKVxuXG4gICAgY29uc3QgaW50cm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGludHJvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludHJvQ29udGFpbmVyJylcblxuICAgIGNvbnN0IGludHJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGludHJvSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW50cm9JbWFnZScpXG4gICAgaW50cm9JbWFnZS5zcmMgPSBoNF9zcV8xMjUwd1xuICAgIGludHJvSW1hZ2Uuc3Jjc2V0ID0gYCR7aDRfc3FfMTI1MHd9IDEyNTB3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICR7aDRfc3FfNjAwd30gNjAwdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAke2g0X3NxXzMwMHd9IDMwMHdgXG4gICAgaW50cm9JbWFnZS5zaXplcyA9IGAobWF4LXdpZHRoOiAzMjBweCkgMzAwcHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAobWF4LXdpZHRoOiA2NDBweCkgNjAwcHhcbiAgICAgICAgICAgICAgICAgICAgICAgIDEyNTBweGBcbiAgICBpbnRyb0ltYWdlLmFsdCA9ICdQb3J0cmFpdCBpbWFnZSdcblxuICAgIGNvbnN0IGludHJvQmx1cmJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGludHJvQmx1cmJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW50cm9CbHVyYkNvbnRhaW5lcicpXG5cbiAgICBjb25zdCBpbnRyb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBpbnRyb0hlYWRlci5jbGFzc0xpc3QuYWRkKCdpbnRyb0hlYWRlcicpXG4gICAgaW50cm9IZWFkZXIudGV4dENvbnRlbnQgPSAnSGVsbG8sIFdvcmxkISdcblxuICAgIGNvbnN0IGludHJvQmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbnRyb0JsdXJiLmNsYXNzTGlzdC5hZGQoJ2ludHJvQmx1cmInKVxuICAgIGludHJvQmx1cmIudGV4dENvbnRlbnQgPSBcIkknbSBKYXNvbiBDYW1wYmVsbCwgYSBmdWxsLXN0YWNrIHNvZnR3YXJlIGRldmVsb3BlciBiYXNlZCBpbiB0aGUgU2FuIEZyYW5jaXNjbyBCYXkgQXJlYS4gV2l0aCBhIGJhY2tncm91bmQgaW4gZWR1Y2F0aW9uIGFuZCBmaW5hbmNlLCBJIGJyaW5nIGEgdW5pcXVlIHBlcnNwZWN0aXZlIHRvIHByb2JsZW0tc29sdmluZyBpbiB0ZWNoLiBJIGFtIHByb2ZpY2llbnQgaW4gUnVieSBvbiBSYWlscywgSmF2YVNjcmlwdCwgYW5kIFJlYWN0LCBhbmQgSSdtIGRlZGljYXRlZCB0byBjb250aW51b3VzIGxlYXJuaW5nIGFuZCBpbXByb3ZpbmcgY29kZSBxdWFsaXR5LlwiXG5cbiAgICBjb25zdCBpbnRyb0xpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaW50cm9MaW5rcy5jbGFzc0xpc3QuYWRkKCdpbnRyb0xpbmtzJylcblxuICAgIGNvbnN0IGludHJvUmVzdW1lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGludHJvUmVzdW1lTGluay5jbGFzc0xpc3QuYWRkKCdpbnRyb1Jlc3VtZUxpbmsnKVxuICAgIGludHJvUmVzdW1lTGluay5ocmVmID0gY3ZcbiAgICBpbnRyb1Jlc3VtZUxpbmsudGFyZ2V0ID0gJ19ibGFuaydcbiAgICBpbnRyb1Jlc3VtZUxpbmsuZG93bmxvYWQgPSAnSmFzb25DYW1wYmVsbF9SZXN1bWUucGRmJ1xuICAgIGludHJvUmVzdW1lTGluay50ZXh0Q29udGVudCA9ICdSZXN1bWUnXG5cbiAgICBjb25zdCBpbnRyb0VtYWlsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGludHJvRW1haWxMaW5rLmNsYXNzTGlzdC5hZGQoJ2ludHJvRW1haWxMaW5rJylcbiAgICBpbnRyb0VtYWlsTGluay5ocmVmID0gJ21haWx0bzpqY2FtcGJlbGw1N0BnbWFpbC5jb20nXG4gICAgaW50cm9FbWFpbExpbmsudGV4dENvbnRlbnQgPSAnRW1haWwnXG5cbiAgICBpbnRyb0xpbmtzLmFwcGVuZENoaWxkKGludHJvUmVzdW1lTGluaylcbiAgICBpbnRyb0xpbmtzLmFwcGVuZENoaWxkKGludHJvRW1haWxMaW5rKSAgXG5cbiAgICBpbnRyb0JsdXJiQ29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvSGVhZGVyKVxuICAgIGludHJvQmx1cmJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW50cm9CbHVyYilcbiAgICBpbnRyb0JsdXJiQ29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvTGlua3MpXG5cbiAgICBpbnRyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb0ltYWdlKVxuICAgIGludHJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvQmx1cmJDb250YWluZXIpXG5cbiAgICBpbnRyb0JhY2tncm91bmQuYXBwZW5kQ2hpbGQoaW50cm9Db250YWluZXIpXG5cbiAgICByZXR1cm4gaW50cm9CYWNrZ3JvdW5kXG59XG4iLCJpbXBvcnQgSWNvbnMgZnJvbSAnLi9JY29ucydcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzJ1xuXG5jb25zdCBpY29ucyA9IG5ldyBJY29uc1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0Q2FyZCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDYXJkJylcblxuICAgIGNvbnN0IHByb2plY3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHByb2plY3RJbWcuY2xhc3NMaXN0LmFkZCgncHJvamVjdEltZycpXG4gICAgcHJvamVjdEltZy5zcmMgPSBwcm9qZWN0LmltZy5tZWRpdW1cbiAgICBwcm9qZWN0SW1nLnNyY3NldCA9IGAke3Byb2plY3QuaW1nLnNtYWxsfSAzMDB3LCAke3Byb2plY3QuaW1nLm1lZGl1bX0gNjAwd2BcbiAgICBwcm9qZWN0SW1nLnNpemVzID0gYChtYXgtd2lkdGg6IDMyMHB4KSAzMDBweCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDYwMHB4YFxuICAgIHByb2plY3RJbWcuYWx0ID0gcHJvamVjdC5hbHRJbWdUZXh0XG5cbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZENvbnRlbnQnKVxuXG4gICAgY29uc3QgY2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXJkSGVhZGVyJylcblxuICAgIGNvbnN0IGNhcmRUaXRsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBjYXJkVGl0bGVMaW5rLmhyZWYgPSBwcm9qZWN0LmxpdmVfdXJsXG4gICAgY2FyZFRpdGxlTGluay50YXJnZXQgPSAnX2JsYW5rJ1xuXG4gICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkVGl0bGUnKVxuICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZVxuXG4gICAgY2FyZFRpdGxlTGluay5hcHBlbmRDaGlsZChjYXJkVGl0bGUpXG5cbiAgICBjb25zdCBjYXJkVGl0bGVJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZFRpdGxlSWNvbnMuY2xhc3NMaXN0LmFkZCgnY2FyZFRpdGxlSWNvbnMnKVxuXG4gICAgY29uc3QgY2FyZEdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBjYXJkR2l0aHViTGluay5ocmVmID0gcHJvamVjdC5jb2RlX3VybFxuICAgIGNhcmRHaXRodWJMaW5rLnRhcmdldCA9ICdfYmxhbmsnXG4gICAgY2FyZEdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoaWNvbnMuZ2V0SWNvbignZ2l0aHViJywgJ2NhcmRJY29uJykpXG5cbiAgICBjb25zdCBjYXJkTGl2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBjYXJkTGl2ZUxpbmsuaHJlZiA9IHByb2plY3QubGl2ZV91cmxcbiAgICBjYXJkTGl2ZUxpbmsudGFyZ2V0ID0gJ19ibGFuaydcbiAgICBjYXJkTGl2ZUxpbmsuYXBwZW5kQ2hpbGQoaWNvbnMuT3Blbkljb25TdmcoJ29wZW5JY29uJykpXG5cbiAgICBjYXJkVGl0bGVJY29ucy5hcHBlbmRDaGlsZChjYXJkR2l0aHViTGluaylcbiAgICBjYXJkVGl0bGVJY29ucy5hcHBlbmRDaGlsZChjYXJkTGl2ZUxpbmspXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBkZXNjcmlwdGlvbkxpbmsuaHJlZiA9IHByb2plY3QubGl2ZV91cmxcbiAgICBkZXNjcmlwdGlvbkxpbmsudGFyZ2V0ID0gJ19ibGFuaydcblxuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RGVzY3JpcHRpb24nKVxuICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY1xuXG4gICAgZGVzY3JpcHRpb25MaW5rLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbilcblxuICAgIGNvbnN0IGNhcmRTa2lsbEljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkU2tpbGxJY29ucy5jbGFzc0xpc3QuYWRkKCdjYXJkU2tpbGxJY29ucycpXG4gICAgcHJvamVjdC5pY29ucy5mb3JFYWNoKGljb25OYW1lID0+IHtcbiAgICAgICAgY29uc3QgbmV3SWNvbiA9IGljb25zLmdldEljb24oaWNvbk5hbWUsICdjYXJkU2tpbGxJY29uJylcbiAgICAgICAgY2FyZFNraWxsSWNvbnMuYXBwZW5kQ2hpbGQobmV3SWNvbikgXG4gICAgfSlcblxuICAgIGNhcmRIZWFkZXIuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlTGluaylcbiAgICBjYXJkSGVhZGVyLmFwcGVuZENoaWxkKGNhcmRUaXRsZUljb25zKVxuXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZEhlYWRlcilcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxpbmspXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZFNraWxsSWNvbnMpXG5cbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0SW1nKVxuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KVxuXG4gICAgcmV0dXJuIHByb2plY3RDYXJkXG59XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChmaWx0ZXJlZFByb2plY3RzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENhcmRDb250YWluZXInKVxuICAgIHByb2plY3RDYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgZmlsdGVyZWRQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Q2FyZCA9IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpXG4gICAgICAgIHByb2plY3RDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RDYXJkKVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgZGlzcGxheVByb2plY3RzKHByb2plY3RzKVxufVxuXG5jb25zdCBmaWx0ZXJQcm9qZWN0c0J5SWNvbiA9IChjaG9zZW5JY29uTmFtZSkgPT4ge1xuICAgIGNvbnN0IHN0YW5kYXJkaXplZEljb25OYW1lID0gY2hvc2VuSWNvbk5hbWUucmVwbGFjZSgnLXdvcmRtYXJrJywgJycpXG4gICAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWNvbnMuaW5jbHVkZXMoc3RhbmRhcmRpemVkSWNvbk5hbWUpKVxuICAgIGRpc3BsYXlQcm9qZWN0cyhmaWx0ZXJlZFByb2plY3RzKVxufVxuXG5sZXQgc2VsZWN0ZWRJY29uID0gbnVsbFxuY29uc3QgaGFuZGxlSWNvbkNsaWNrID0gKGNob3Nlbkljb24pID0+IHtcbiAgICBjb25zdCBpY29uRGF0YSA9IGNob3Nlbkljb24uZ2V0QXR0cmlidXRlKCdkYXRhLWljb24nKVxuICAgIGNvbnN0IGFsbEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlckljb25zQ29udGFpbmVyIGJ1dHRvbiBpJylcblxuICAgIGFsbEljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnLCAnY29sb3JlZCcpXG4gICAgfSlcblxuICAgIGlmIChzZWxlY3RlZEljb24gPT09IGNob3Nlbkljb24pIHtcbiAgICAgICAgc2VsZWN0ZWRJY29uID0gbnVsbFxuICAgICAgICBkaXNwbGF5QWxsUHJvamVjdHMoKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNob3Nlbkljb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnLCAnY29sb3JlZCcpXG4gICAgICAgIHNlbGVjdGVkSWNvbiA9IGNob3Nlbkljb25cbiAgICAgICAgZmlsdGVyUHJvamVjdHNCeUljb24oaWNvbkRhdGEpXG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0c0hlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdHNIZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNIZWFkZXJDb250YWluZXInKVxuXG4gICAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgcHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSAnTXkgUHJvamVjdHMnXG5cbiAgICBjb25zdCBwcm9qZWN0c1N1YmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHByb2plY3RzU3ViaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzU3ViaGVhZGVyJylcbiAgICBwcm9qZWN0c1N1YmhlYWRlci50ZXh0Q29udGVudCA9ICdmaWx0ZXIgYnk6J1xuXG4gICAgY29uc3QgZmlsdGVySWNvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpbHRlckljb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlckljb25zQ29udGFpbmVyJylcblxuICAgIGNvbnN0IGljb25OYW1lcyA9IFsnaHRtbC13b3JkbWFyaycsICdjc3Mtd29yZG1hcmsnLCAnamF2YXNjcmlwdCcsICdyZWFjdC13b3JkbWFyaycsICdydWJ5LXdvcmRtYXJrJywgJ3JhaWxzLXdvcmRtYXJrJywgJ3BzcWwtd29yZG1hcmsnLCAnd2VicGFjay13b3JkbWFyaycsICdyc3BlYy13b3JkbWFyaycsICdqZXN0JywgJ2pzb24nLCAneWFtbCcsICdib290c3RyYXAtd29yZG1hcmsnLCAnZ2l0LXdvcmRtYXJrJywgJ2dpdGh1Yi13b3JkbWFyayddXG4gICAgaWNvbk5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IGljb24gPSBpY29ucy5nZXRJY29uKG5hbWUsICdmaWx0ZXJJY29uJylcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFidXR0b24uZmlyc3RDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb2xvcmVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbG9yZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVJY29uQ2xpY2soaWNvbikpXG4gICAgICAgIGZpbHRlckljb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgcHJvamVjdHNIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpXG4gICAgcHJvamVjdHNIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNTdWJoZWFkZXIpICAgIFxuICAgIHByb2plY3RzSGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpbHRlckljb25zQ29udGFpbmVyKSAgICBcblxuICAgIHJldHVybiBwcm9qZWN0c0hlYWRlckNvbnRhaW5lclxufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0Q2FyZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdENhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdENhcmRDb250YWluZXInKVxuXG4gICAgcmV0dXJuIHByb2plY3RDYXJkQ29udGFpbmVyXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0c0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNDb250YWluZXInKVxuICAgIHByb2plY3RzQ29udGFpbmVyLmlkID0gJ3Byb2plY3RzJ1xuXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdHNIZWFkZXIoKSlcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q2FyZENvbnRhaW5lcigpKVxuXG4gICAgcmV0dXJuIHByb2plY3RzQ29udGFpbmVyXG59XG4iLCJpbXBvcnQgZ2l0aHViSWNvbiBmcm9tICcuLi9hc3NldHMvR2l0SHViLWxpZ2h0LTMycHgucG5nJ1xuaW1wb3J0IGN2IGZyb20gJy4uL2Fzc2V0cy9jdi5wZGYnXG5pbXBvcnQgSWNvbnMgZnJvbSAnLi9JY29ucydcbmltcG9ydCB7IGNyZWF0ZUludHJvQ29udGFpbmVyIH0gZnJvbSAnLi9kaXNwbGF5SW50cm8nXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0c0NvbnRhaW5lciwgZGlzcGxheUFsbFByb2plY3RzIH0gZnJvbSAnLi9kaXNwbGF5UHJvamVjdHMnXG5pbXBvcnQgeyBjcmVhdGVBYm91dE1lQ29udGFpbmVyIH0gZnJvbSAnLi9kaXNwbGF5QWJvdXRNZSdcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RDb250YWluZXIgfSBmcm9tICcuL2Rpc3BsYXlDb250YWN0J1xuXG5jb25zdCBpY29ucyA9IG5ldyBJY29uc1xuXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcblxuICAgIGNvbnN0IG1lbnViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgbWVudWJhci5jbGFzc0xpc3QuYWRkKCdtZW51YmFyJylcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFsnUHJvamVjdHMnLCAnQWJvdXQgTWUnLCAnQ29udGFjdCcsICdSZXN1bWUnXVxuXG4gICAgbWVudUl0ZW1zLmZvckVhY2gobWVudUl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBuZXdNZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbmV3TWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgaWYgKG1lbnVJdGVtID09PSAnUmVzdW1lJykge1xuICAgICAgICAgICAgbWVudUxpbmsuaHJlZiA9IGN2XG4gICAgICAgICAgICBtZW51TGluay50YXJnZXQgPSAnX2JsYW5rJ1xuICAgICAgICAgICAgbWVudUxpbmsuZG93bmxvYWQgPSAnSmFzb25DYW1wYmVsbF9SZXN1bWUucGRmJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUxpbmsuaHJlZiA9IGAjJHttZW51SXRlbS5yZXBsYWNlKCcgJywgJycpLnRvTG93ZXJDYXNlKCl9YFxuICAgICAgICB9XG4gICAgICAgIG1lbnVMaW5rLmNsYXNzTGlzdC5hZGQoJ21lbnVMaW5rJylcbiAgICAgICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSBtZW51SXRlbVxuXG4gICAgICAgIG5ld01lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVMaW5rKVxuICAgICAgICBtZW51YmFyLmFwcGVuZENoaWxkKG5ld01lbnVJdGVtKVxuICAgIH0pO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnViYXIpXG5cbiAgICByZXR1cm4gbmF2XG59XG5cbmNvbnN0IHNldFRoZW1lUHJlZmVyZW5jZSA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRoZW1lUHJlZmVyZW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZVByZWZlcmVuY2UnLCAnZGFyaycpXG4gICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWVQcmVmZXJlbmNlJykgIT09ICdkYXJrJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWVQcmVmZXJlbmNlJykgIT09ICdsaWdodCcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lUHJlZmVyZW5jZScsICdkYXJrJylcbiAgICB9XG59XG5cbmNvbnN0IGxvYWRUaGVtZSA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgcHJvamVjdHNIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNIZWFkZXJDb250YWluZXInKVxuICAgIGNvbnN0IGZpbHRlckljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlckljb24nKVxuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZVByZWZlcmVuY2UnKSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZGFya01vZGUnKVxuICAgICAgICBwcm9qZWN0c0hlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYXJrTW9kZScpXG4gICAgICAgIGZpbHRlckljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2RhcmtNb2RlJylcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0hlYWRlckNvbnRhaW5lcicpXG4gICAgY29uc3QgZmlsdGVySWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVySWNvbicpXG5cbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmtNb2RlJylcbiAgICBwcm9qZWN0c0hlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrTW9kZScpXG4gICAgZmlsdGVySWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrTW9kZScpXG4gICAgfSlcblxuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrTW9kZScpID8gJ2RhcmsnIDogJ2xpZ2h0J1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZVByZWZlcmVuY2UnLCBjdXJyZW50VGhlbWUpXG59XG5cbmNvbnN0IGNyZWF0ZVRoZW1lVG9nZ2xlQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IHRoZW1lVG9nZ2xlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0aGVtZVRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCd0aGVtZVRvZ2dsZUJ0bicpXG4gICAgdGhlbWVUb2dnbGVCdG4uYXBwZW5kQ2hpbGQoaWNvbnMudGhlbWVUb2dnbGVJY29uU3ZnKCd0aGVtZVRvZ2dsZUljb24nKSlcbiAgICB0aGVtZVRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVRoZW1lKCkpXG4gICAgcmV0dXJuIHRoZW1lVG9nZ2xlQnRuXG59XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIGhlYWRlci5yb2xlID0gJ2Jhbm5lcidcblxuICAgIGNvbnN0IGhlYWRlck5hbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgaGVhZGVyTmFtZUxpbmsuY2xhc3NMaXN0LmFkZCgnaGVhZGVyTmFtZUxpbmsnKVxuICAgIGhlYWRlck5hbWVMaW5rLmhyZWYgPSAnI3RvcCdcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJOYW1lJywgJ3F3aWdsZXktcmVndWxhcicpXG4gICAgbmFtZS50ZXh0Q29udGVudCA9ICdKYXNvbiBDYW1wYmVsbCdcbiAgICBcbiAgICBoZWFkZXJOYW1lTGluay5hcHBlbmRDaGlsZChuYW1lKVxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlck5hbWVMaW5rKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGhlbWVUb2dnbGVCdG4oKSlcblxuICAgIHJldHVybiBoZWFkZXJcbn1cblxuY29uc3QgY3JlYXRlVHJhbnNpdGlvbiA9IChzdHlsaW5nQ2xhc3MpID0+IHtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0cmFuc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nLCBzdHlsaW5nQ2xhc3MpXG5cbiAgICByZXR1cm4gdHJhbnNpdGlvblxufVxuXG5jb25zdCBjcmVhdGVDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICBjb250ZW50Q29udGFpbmVyLnJvbGUgPSAnbWFpbidcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW50cm9Db250YWluZXIoKSlcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRyYW5zaXRpb24oJ3RyYW5zaXRpb24xJykpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0c0NvbnRhaW5lcigpKVxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVHJhbnNpdGlvbigndHJhbnNpdGlvbjInKSlcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0TWVDb250YWluZXIoKSlcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RDb250YWluZXIoKSlcblxuICAgIHJldHVybiBjb250ZW50Q29udGFpbmVyXG59XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgIGZvb3Rlci5yb2xlID0gJ2NvbnRlbnRpbmZvJ1xuXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gamNhbXBiZWxsNTdgXG5cbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1NydcbiAgICBnaXRodWJMaW5rLnRhcmdldCA9ICdfYmxhbmsnXG5cbiAgICBjb25zdCBuZXdHaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBuZXdHaXRodWJJY29uLnNyYyA9IGdpdGh1Ykljb25cbiAgICBuZXdHaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoJ2dpdGh1Ykljb24nKVxuXG4gICAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChuZXdHaXRodWJJY29uKVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspXG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChpY29ucy5kZXZJY29uc0xpbmsoKSlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGVudCgpKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpXG4gICAgc2V0VGhlbWVQcmVmZXJlbmNlKClcbiAgICBsb2FkVGhlbWUoKVxuICAgIGRpc3BsYXlBbGxQcm9qZWN0cygpXG59XG4iLCIvLyBDb252ZXJ0IHRvIGNsYXNzIHdpdGggY29uc3RydWN0ZXIsIGNyZWF0ZSBhZG1pbiBVSSB0byBhZGQgcHJvamVjdHNcblxuLy8gaW1wb3J0IHByb2plY3Qgc2NyZWVuc2hvdHNcbmltcG9ydCBhZG1pbmRhc2hib2FyZF8zMDB3IGZyb20gJy4uL2Fzc2V0cy9hZG1pbmRhc2hib2FyZF8zMDB3LnBuZydcbmltcG9ydCBhZG1pbmRhc2hib2FyZF82MDB3IGZyb20gJy4uL2Fzc2V0cy9hZG1pbmRhc2hib2FyZF82MDB3LnBuZydcbmltcG9ydCBhZG1pbmRhc2hib2FyZF8xMjUwdyBmcm9tICcuLi9hc3NldHMvYWRtaW5kYXNoYm9hcmRfMTI1MHcucG5nJ1xuaW1wb3J0IGJhdHRsZXNoaXBfMzAwdyBmcm9tICcuLi9hc3NldHMvYmF0dGxlc2hpcF8zMDB3LnBuZydcbmltcG9ydCBiYXR0bGVzaGlwXzYwMHcgZnJvbSAnLi4vYXNzZXRzL2JhdHRsZXNoaXBfNjAwdy5wbmcnXG5pbXBvcnQgYmF0dGxlc2hpcF8xMjUwdyBmcm9tICcuLi9hc3NldHMvYmF0dGxlc2hpcF8xMjUwdy5wbmcnXG5pbXBvcnQgYm9vdF9yb2FjaF9ib21iXzMwMHcgZnJvbSAnLi4vYXNzZXRzL2Jvb3Rfcm9hY2hfYm9tYl8zMDB3LnBuZydcbmltcG9ydCBib290X3JvYWNoX2JvbWJfNjAwdyBmcm9tICcuLi9hc3NldHMvYm9vdF9yb2FjaF9ib21iXzYwMHcucG5nJ1xuaW1wb3J0IGJvb3Rfcm9hY2hfYm9tYl8xMjUwdyBmcm9tICcuLi9hc3NldHMvYm9vdF9yb2FjaF9ib21iXzEyNTB3LnBuZydcbmltcG9ydCBjYWxjdWxhdG9yXzMwMHcgZnJvbSAnLi4vYXNzZXRzL2NhbGN1bGF0b3JfMzAwdy5wbmcnXG5pbXBvcnQgY2FsY3VsYXRvcl82MDB3IGZyb20gJy4uL2Fzc2V0cy9jYWxjdWxhdG9yXzYwMHcucG5nJ1xuaW1wb3J0IGNhbGN1bGF0b3JfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL2NhbGN1bGF0b3JfMTI1MHcucG5nJ1xuaW1wb3J0IGNoZXNzXzMwMHcgZnJvbSAnLi4vYXNzZXRzL2NoZXNzXzMwMHcucG5nJ1xuaW1wb3J0IGNoZXNzXzYwMHcgZnJvbSAnLi4vYXNzZXRzL2NoZXNzXzYwMHcucG5nJ1xuaW1wb3J0IGNvbm5lY3RfZm91cl8zMDB3IGZyb20gJy4uL2Fzc2V0cy9jb25uZWN0X2ZvdXJfMzAwdy5wbmcnXG5pbXBvcnQgY29ubmVjdF9mb3VyXzYwMHcgZnJvbSAnLi4vYXNzZXRzL2Nvbm5lY3RfZm91cl82MDB3LnBuZydcbmltcG9ydCBjb25uZWN0X2ZvdXJfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL2Nvbm5lY3RfZm91cl8xMjUwdy5wbmcnXG5pbXBvcnQgY3ZfYnVpbGRlcl8zMDB3IGZyb20gJy4uL2Fzc2V0cy9jdl9idWlsZGVyXzMwMHcucG5nJ1xuaW1wb3J0IGN2X2J1aWxkZXJfNjAwdyBmcm9tICcuLi9hc3NldHMvY3ZfYnVpbGRlcl82MDB3LnBuZydcbmltcG9ydCBjdl9idWlsZGVyXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy9jdl9idWlsZGVyXzEyNTB3LnBuZydcbmltcG9ydCBoYW5nbWFuXzMwMHcgZnJvbSAnLi4vYXNzZXRzL2hhbmdtYW5fMzAwdy5wbmcnXG5pbXBvcnQgaGFuZ21hbl82MDB3IGZyb20gJy4uL2Fzc2V0cy9oYW5nbWFuXzYwMHcucG5nJ1xuaW1wb3J0IGhhbmdtYW5fMTI1MHcgZnJvbSAnLi4vYXNzZXRzL2hhbmdtYW5fMTI1MHcucG5nJ1xuaW1wb3J0IG1hc3Rlcm1pbmRfMzAwdyBmcm9tICcuLi9hc3NldHMvbWFzdGVybWluZF8zMDB3LnBuZydcbmltcG9ydCBtYXN0ZXJtaW5kXzYwMHcgZnJvbSAnLi4vYXNzZXRzL21hc3Rlcm1pbmRfNjAwdy5wbmcnXG5pbXBvcnQgb2RpbmJvb2tfMzAwdyBmcm9tICcuLi9hc3NldHMvb2RpbmJvb2tfMzAwdy5wbmcnXG5pbXBvcnQgb2RpbmJvb2tfNjAwdyBmcm9tICcuLi9hc3NldHMvb2RpbmJvb2tfNjAwdy5wbmcnXG5pbXBvcnQgb2RpbmJvb2tfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL29kaW5ib29rXzEyNTB3LnBuZydcbmltcG9ydCByZXN0YXVyYW50XzMwMHcgZnJvbSAnLi4vYXNzZXRzL3Jlc3RhdXJhbnRfMzAwdy5wbmcnXG5pbXBvcnQgcmVzdGF1cmFudF82MDB3IGZyb20gJy4uL2Fzc2V0cy9yZXN0YXVyYW50XzYwMHcucG5nJ1xuaW1wb3J0IHJlc3RhdXJhbnRfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL3Jlc3RhdXJhbnRfMTI1MHcucG5nJ1xuaW1wb3J0IHNpZ25fdXBfZm9ybV8zMDB3IGZyb20gJy4uL2Fzc2V0cy9zaWduX3VwX2Zvcm1fMzAwdy5wbmcnXG5pbXBvcnQgc2lnbl91cF9mb3JtXzYwMHcgZnJvbSAnLi4vYXNzZXRzL3NpZ25fdXBfZm9ybV82MDB3LnBuZydcbmltcG9ydCBzaWduX3VwX2Zvcm1fMTI1MHcgZnJvbSAnLi4vYXNzZXRzL3NpZ25fdXBfZm9ybV8xMjUwdy5wbmcnXG5pbXBvcnQgc2tldGNoX3BhZF8zMDB3IGZyb20gJy4uL2Fzc2V0cy9za2V0Y2hfcGFkXzMwMHcucG5nJ1xuaW1wb3J0IHNrZXRjaF9wYWRfNjAwdyBmcm9tICcuLi9hc3NldHMvc2tldGNoX3BhZF82MDB3LnBuZydcbmltcG9ydCBza2V0Y2hfcGFkXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy9za2V0Y2hfcGFkXzEyNTB3LnBuZydcbmltcG9ydCB0aWN0YWN0b2VfMzAwdyBmcm9tICcuLi9hc3NldHMvdGljdGFjdG9lXzMwMHcucG5nJ1xuaW1wb3J0IHRpY3RhY3RvZV82MDB3IGZyb20gJy4uL2Fzc2V0cy90aWN0YWN0b2VfNjAwdy5wbmcnXG5pbXBvcnQgdGljdGFjdG9lXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy90aWN0YWN0b2VfMTI1MHcucG5nJ1xuaW1wb3J0IHRvZG9saXN0XzMwMHcgZnJvbSAnLi4vYXNzZXRzL3RvZG9saXN0XzMwMHcucG5nJ1xuaW1wb3J0IHRvZG9saXN0XzYwMHcgZnJvbSAnLi4vYXNzZXRzL3RvZG9saXN0XzYwMHcucG5nJ1xuaW1wb3J0IHRvZG9saXN0XzEyNTB3IGZyb20gJy4uL2Fzc2V0cy90b2RvbGlzdF8xMjUwdy5wbmcnXG5pbXBvcnQgd2VhdGhlcnNlcnZlXzMwMHcgZnJvbSAnLi4vYXNzZXRzL3dlYXRoZXJzZXJ2ZV8zMDB3LnBuZydcbmltcG9ydCB3ZWF0aGVyc2VydmVfNjAwdyBmcm9tICcuLi9hc3NldHMvd2VhdGhlcnNlcnZlXzYwMHcucG5nJ1xuaW1wb3J0IHdlYXRoZXJzZXJ2ZV8xMjUwdyBmcm9tICcuLi9hc3NldHMvd2VhdGhlcnNlcnZlXzEyNTB3LnBuZydcbmltcG9ydCB3b3JtaG9sZV9saWdodF8zMDB3IGZyb20gJy4uL2Fzc2V0cy93b3JtaG9sZV9saWdodF8zMDB3LnBuZydcbmltcG9ydCB3b3JtaG9sZV9saWdodF82MDB3IGZyb20gJy4uL2Fzc2V0cy93b3JtaG9sZV9saWdodF82MDB3LnBuZydcbmltcG9ydCB3b3JtaG9sZV9saWdodF8xMjUwdyBmcm9tICcuLi9hc3NldHMvd29ybWhvbGVfbGlnaHRfMTI1MHcucG5nJ1xuLy8gaW1wb3J0IHdvcm1ob2xlX2RhcmtfMzAwdyBmcm9tICcuLi9hc3NldHMvd29ybWhvbGVfZGFya18zMDB3LnBuZydcbi8vIGltcG9ydCB3b3JtaG9sZV9kYXJrXzYwMHcgZnJvbSAnLi4vYXNzZXRzL3dvcm1ob2xlX2RhcmtfNjAwdy5wbmcnXG4vLyBpbXBvcnQgd29ybWhvbGVfZGFya18xMjUwdyBmcm9tICcuLi9hc3NldHMvd29ybWhvbGVfZGFya18xMjUwdy5wbmcnXG5cbmNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ29kaW5ib29rJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvb2Rpbi1ib29rLXYyJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL29kaW4tYm9vay12Mi5mbHkuZGV2LycsXG4gICAgICAgIGRlc2M6IFwiQSByZWxhdGl2ZWx5IHNpbXBsZSBzb2NpYWwgbWVkaWEgYXBwLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3QgaXMgdG8gdGllIHRvZ2V0aGVyIHRoZSBjb25jZXB0cyBsZWFybmVkIGR1cmluZyB0aGUgcmFpbHMgbW9kdWxlIG9mIFRoZSBPZGluIFByb2plY3QuIFRoaXMgaXMgdGhlIGNhcHN0b25lIHByb2plY3Qgb2YgVGhlIE9kaW4gUHJvamVjdCdzIFJ1Ynkgb24gUmFpbHMgY291cnNlLlwiLFxuICAgICAgICBhbHRJbWdUZXh0OiAnT2RpbmJvb2sgdXNlciBwYWdlLicsXG4gICAgICAgIGljb25zOiBbJ2h0bWwnLCAnYm9vdHN0cmFwJywgJ3J1YnknLCAncmFpbHMnLCAncHNxbCcsICd3ZWJwYWNrJywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogb2RpbmJvb2tfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogb2RpbmJvb2tfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiBvZGluYm9va18xMjUwd1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDViBCdWlsZGVyJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvY3YtYnVpbGRlcicsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9mYXNjaW5hdGluZy1wZWdhc3VzLTZhMDUxNC5uZXRsaWZ5LmFwcC8nLFxuICAgICAgICBkZXNjOiAnQW4gYXBwbGljYXRpb24gd2hlcmUgdXNlcnMgY2FuIGlucHV0IHRoZWlyIGluZm9ybWF0aW9uIHRvIGdlbmVyYXRlIGEgQ1YvcsOpc3Vtw6kuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCBpcyB0byBwcmFjdGluZyBkZXZlbG9waW5nIHdpdGggcmVhY3Qgc3RhdGUgYW5kIHByb3BzLicsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdCYXR0bGVzaGlwIGdhbWVwbGF5JyxcbiAgICAgICAgaWNvbnM6IFsnY3NzJywgJ2phdmFzY3JpcHQnLCAncmVhY3QnLCAnanNvbicsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IGN2X2J1aWxkZXJfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogY3ZfYnVpbGRlcl82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IGN2X2J1aWxkZXJfMTI1MHdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTmF2YWwgV2FyZmFyZScsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L25hdmFsLXdhcmZhcmUnLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vamNhbXBiZWxsNTcuZ2l0aHViLmlvL25hdmFsLXdhcmZhcmUvJyxcbiAgICAgICAgZGVzYzogXCJBbiBpbnRlcmFjdGl2ZSwgdHdvIHBsYXllciBnYW1lIG9mIEJhdHRsZXNoaXAuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCBpcyB0byBwcmFjdGljZSBUZXN0IERyaXZlbiBEZXZlbG9wbWVudCAoVEREKSBhbmQgdGllIHRvZ2V0aGVyIHRoZSBjb25jZXB0cyBsZWFybmVkIGluIHRoZSBKYXZhU2NyaXB0IG1vZHVsZSBvZiBUaGUgT2RpbiBQcm9qZWN0LiBUaGlzIGlzIHRoZSBjYXBzdG9uZSBwcm9qZWN0IG9mIFRoZSBPZGluIFByb2plY3QncyBKYXZhU2NyaXB0IGNvdXJzZS5cIixcbiAgICAgICAgYWx0SW1nVGV4dDogJ0JhdHRsZXNoaXAgZ2FtZXBsYXknLFxuICAgICAgICBpY29uczogWydjc3MnLCAnamF2YXNjcmlwdCcsICdqZXN0JywgJ3dlYnBhY2snLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiBiYXR0bGVzaGlwXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IGJhdHRsZXNoaXBfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiBiYXR0bGVzaGlwXzEyNTB3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1dlYXRoZXJzZXJ2ZScsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L3dlYXRoZXItYXBwJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL2pjYW1wYmVsbDU3LmdpdGh1Yi5pby93ZWF0aGVyLWFwcC8nLFxuICAgICAgICBkZXNjOiAnSW5wdXQgYSBjaXR5IHRvIHJldHJpZXZlIHdlYXRoZXIgaW5mb3JtYXRpb24uIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCBpcyB0byBwcmFjdGljZSBpbnRlZ3JhdGlvbiBvZiBhbiBBUEksIGxpbnRlciwgUHJldHRpZXIgYW5kIEphdmFTY3JpcHQgY29tcGlsZXIuJyxcbiAgICAgICAgYWx0SW1nVGV4dDogJ1dlYXRoZXJzZXJ2ZSB1c2VyIHBhZ2UuJyxcbiAgICAgICAgaWNvbnM6IFsnY3NzJywgJ2phdmFzY3JpcHQnLCAnd2VicGFjaycsICdqc29uJywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogd2VhdGhlcnNlcnZlXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IHdlYXRoZXJzZXJ2ZV82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IHdlYXRoZXJzZXJ2ZV8xMjUwd1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGluZ3MgVG8gRG8nLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9vZGluLXRvZG8tbGlzdCcsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9qY2FtcGJlbGw1Ny5naXRodWIuaW8vb2Rpbi10b2RvLWxpc3QvJyxcbiAgICAgICAgZGVzYzogJ0Egc2ltcGxlIHRvLWRvIGxpc3QgYXBwbGljYXRpb24uIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCBpcyB0byBwcmFjdGljZSBzZXJpYWxpemF0aW9uIHdpdGggSlNPTiBhbmQgb2JqZWN0IG9yaWVudGVkIHByb2dyYW1taW5nLicsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdUb2RvIGxpc3QuJyxcbiAgICAgICAgaWNvbnM6IFsnY3NzJywgJ2phdmFzY3JpcHQnLCAnd2VicGFjaycsICdqc29uJywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogdG9kb2xpc3RfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogdG9kb2xpc3RfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiB0b2RvbGlzdF8xMjUwd1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNaWRkbGUgUmluZyBSZXN0YXVyYW50JyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvb2Rpbi1yZXN0YXVyYW50LXBhZ2UnLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vamNhbXBiZWxsNTcuZ2l0aHViLmlvL29kaW4tcmVzdGF1cmFudC1wYWdlLycsXG4gICAgICAgIGRlc2M6ICdBIHJlc3RhdXJhbnQgcGFnZSB3aXRoIHRhYmJlZCBjb250ZW50IHRoYXQgdXNlcyBKYXZhU2NyaXB0IGFsb25lIHRvIGdlbmVyYXRlIGFsbCBvZiB0aGUgY29udGVudCBvbiB0aGUgcGFnZS4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IGlzIHRvIHByYWN0aWNlIHVzaW5nIEphdmFTY3JpcHQgbW9kdWxlcyBhbmQgd2VicGFjay4nLFxuICAgICAgICBhbHRJbWdUZXh0OiAnTWlkZGxlIFJpbmcgUmVzdGF1cmFudCBQYWdlLicsXG4gICAgICAgIGljb25zOiBbJ2NzcycsICdqYXZhc2NyaXB0JywgJ3dlYnBhY2snLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiByZXN0YXVyYW50XzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IHJlc3RhdXJhbnRfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiByZXN0YXVyYW50XzEyNTB3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RpYyBUYWMgVG9lJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvb2Rpbi10aWMtdGFjLXRvZScsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9qY2FtcGJlbGw1Ny5naXRodWIuaW8vb2Rpbi10aWMtdGFjLXRvZS8nLFxuICAgICAgICBkZXNjOiAnQW4gaW50ZXJhY3RpdmUgdHdvIHBsYXllciBUaWMgVGFjIFRvZSBnYW1lLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3QgaXMgdG8gcHJhY3RpY2UgY3JlYXRpbmcgY2xlYW4gamF2YXNjcmlwdCBjb2RlIHdpdGggZmFjdG9yeSBmdW5jdGlvbnMgYW5kIG1vZHVsYXIgZnVuY3Rpb25zLicsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdUaWMgVGFjIFRvZS4nLFxuICAgICAgICBpY29uczogWydodG1sJywgJ2NzcycsICdqYXZhc2NyaXB0JywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogdGljdGFjdG9lXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IHRpY3RhY3RvZV82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IHRpY3RhY3RvZV8xMjUwd1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdXb3JtaG9sZScsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L29kaW4tbGlicmFyeScsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9qY2FtcGJlbGw1Ny5naXRodWIuaW8vb2Rpbi1saWJyYXJ5LycsXG4gICAgICAgIGRlc2M6ICdBbiBpbnRlcmFjdGl2ZSBsaWJyYXJ5IGFwcC4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IGlzIHRvIHByYWN0aWNlIHVzaW5nIEphdmFTY3JpcHQgb2JqZWN0cyBhbmQgb2JqZWN0IGNvbnN0cnVjdG9ycy4nLFxuICAgICAgICBhbHRJbWdUZXh0OiAnV29ybWhvbGUuJyxcbiAgICAgICAgaWNvbnM6IFsnaHRtbCcsICdjc3MnLCAnamF2YXNjcmlwdCcsICdqc29uJywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogd29ybWhvbGVfbGlnaHRfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogd29ybWhvbGVfbGlnaHRfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiB3b3JtaG9sZV9saWdodF8xMjUwd1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdBZG1pbiBkYXNoYm9hcmQnLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9vZGluLWFkbWluLWRhc2hib2FyZCcsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9qY2FtcGJlbGw1Ny5naXRodWIuaW8vb2Rpbi1hZG1pbi1kYXNoYm9hcmQvJyxcbiAgICAgICAgZGVzYzogXCJBIHJlc3BvbnNpdmUgbGF5b3V0IHVzaW5nIENTUyBncmlkIGFuZCBmbGV4Ym94LiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3Qgd2FzIHRvIHByYWN0aWNlIGNyZWF0aW5nIGFuIGludGVyZmFjZSB3aXRoIENTUyBHcmlkLiBUaGlzIGlzIHRoZSBjYXBzdG9uZSBwcm9qZWN0IG9mIFRoZSBPZGluIFByb2plY3QncyBJbnRlcm1lZGlhdGUgSFRNTCBhbmQgQ1NTIGNvdXJzZS5cIixcbiAgICAgICAgYWx0SW1nVGV4dDogJ0FkbWluIGRhc2hib2FyZC4nLFxuICAgICAgICBpY29uczogWydodG1sJywgJ2NzcycsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IGFkbWluZGFzaGJvYXJkXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IGFkbWluZGFzaGJvYXJkXzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogYWRtaW5kYXNoYm9hcmRfMTI1MHdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU2lnbi11cCBGb3JtJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvb2Rpbi1zaWduLXVwLWZvcm0nLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vamNhbXBiZWxsNTcuZ2l0aHViLmlvL29kaW4tc2lnbi11cC1mb3JtLycsXG4gICAgICAgIGRlc2M6ICdBIHNpZ24gdXAgZm9ybSBmb3IgYSBmYWtlIHNlcnZpY2UuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCB3YXMgdG8gcHJhY3RpY2UgZm9ybSB2YWxpZGF0aW9uLCBjc3Mgc3R5bGluZywgYW5kIG1vYmlsZSBzdHlsaW5nLicsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdTaWduLXVwIGZvcm0uJyxcbiAgICAgICAgaWNvbnM6IFsnaHRtbCcsICdjc3MnLCAnamF2YXNjcmlwdCcsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IHNpZ25fdXBfZm9ybV8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiBzaWduX3VwX2Zvcm1fNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiBzaWduX3VwX2Zvcm1fMTI1MHdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ2hlc3MnLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9ydWJ5X2NoZXNzJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL3JlcGxpdC5jb20vQGpjYW1wYmVsbDU3L0NoZXNzI21haW4ucmInLFxuICAgICAgICBkZXNjOiBcIkEgY29tbWFuZCBsaW5lIENoZXNzIGdhbWUgd2hlcmUgdHdvIHBsYXllcnMgY2FuIHBsYXkgYWdhaW5zdCBlYWNoIG90aGVyLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3QgaXMgdG8gc2hvdyB0aGF0IEkgY2FuIHRha2Ugb24gYSBwcm9qZWN0IHdpdGggYSBsb3Qgb2YgZGlmZmVyZW50IGNvbXBvbmVudHMuIFRoaXMgaXMgdGhlIGNhcHN0b25lIHByb2plY3Qgb2YgVGhlIE9kaW4gUHJvamVjdCdzIFJ1YnkgY291cnNlLlwiLFxuICAgICAgICBhbHRJbWdUZXh0OiAnQ2hlc3MgZ2FtZS4nLFxuICAgICAgICBpY29uczogWydydWJ5JywgJ3JzcGVjJywgJ3lhbWwnLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiBjaGVzc18zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiBjaGVzc182MDB3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0Nvbm5lY3QgRm91cicsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L3J1YnlfY29ubmVjdF9mb3VyJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL3JlcGxpdC5jb20vQGpjYW1wYmVsbDU3L0Nvbm5lY3QtRm91ciNtYWluLnJiJyxcbiAgICAgICAgZGVzYzogJ0EgY29tbWFuZCBsaW5lIENvbm5lY3QgRm91ciBnYW1lIHdoZXJlIHR3byBwbGF5ZXJzIGNhbiBwbGF5IGFnYWluc3QgZWFjaCBvdGhlci4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IHdhcyB0byBwcmFjdGljZSBUZXN0IERyaXZlbiBEZXZlbG9wbWVudCAoVEREKSB3aXRoIFJTcGVjLicsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdDb25uZWN0IEZvdXIgZ2FtZS4nLFxuICAgICAgICBpY29uczogWydydWJ5JywgJ3JzcGVjJywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogY29ubmVjdF9mb3VyXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IGNvbm5lY3RfZm91cl82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IGNvbm5lY3RfZm91cl8xMjUwdyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSGFuZ21hbicsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L2hhbmdtYW4nLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vcmVwbGl0LmNvbS9AamNhbXBiZWxsNTcvSGFuZ21hbicsXG4gICAgICAgIGRlc2M6ICdBIGNvbW1hbmQgbGluZSBIYW5nbWFuIGdhbWUuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCB3YXMgdG8gcHJhY3RpY2UgaW1wbGVtZW50YXRpb24gb2Ygc2VyaWFsaXphdGlvbiB3aXRoIHRoZSBzYXZlIGdhbWUgZmVhdHVyZS4nLFxuICAgICAgICBhbHRJbWdUZXh0OiAnSGFuZ21hbiBnYW1lLicsXG4gICAgICAgIGljb25zOiBbJ3J1YnknLCAneWFtbCcsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IGhhbmdtYW5fMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogaGFuZ21hbl82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IGhhbmdtYW5fMTI1MHcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01hc3Rlcm1pbmQnLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9ydWJ5X21hc3Rlcm1pbmQnLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vcmVwbGl0LmNvbS9AamNhbXBiZWxsNTcvRmlybUd1bGxpYmxlU3lzdGVtcyNtYWluLnJiJyxcbiAgICAgICAgZGVzYzogJ0EgY29tbWFuZCBsaW5lIE1hc3Rlcm1pbmQgZ2FtZSBwbGF5ZWQgYWdhaW5zdCBBSS4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IHdhcyB0byBwcmFjdGljZSBPYmplY3QgT3JpZW50ZWQgUHJvZ3JhbW1pbmcgKE9PUCkuJyxcbiAgICAgICAgYWx0SW1nVGV4dDogJ01hc3Rlcm1pbmQgZ2FtZS4nLFxuICAgICAgICBpY29uczogWydydWJ5JywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogbWFzdGVybWluZF8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiBtYXN0ZXJtaW5kXzYwMHdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ2FsY3VsYXRvcicsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L29kaW4tY2FsY3VsYXRvcicsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9qY2FtcGJlbGw1Ny5naXRodWIuaW8vb2Rpbi1jYWxjdWxhdG9yLycsXG4gICAgICAgIGRlc2M6IFwiQSBmdWxseSBmdW5jdGlvbmFsIGNhbGN1bGF0b3Igd2l0aCBiYXNpYyBhcml0aG1ldGljIG9wZXJhdGlvbnMgdGhhdCBjYW4gYmUgY29udHJvbGxlZCB3aXRoIG1vdXNlIG9yIGtleWJvYXJkLiBUaGlzIGlzIHRoZSBjYXBzdG9uZSBwcm9qZWN0IG9mIFRoZSBPZGluIFByb2plY3QncyBGb3VuZGF0aW9ucyBjb3Vyc2UuXCIsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdNYXN0ZXJtaW5kIGdhbWUuJyxcbiAgICAgICAgaWNvbnM6IFsnaHRtbCcsICdjc3MnLCAnamF2YXNjcmlwdCcsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IGNhbGN1bGF0b3JfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogY2FsY3VsYXRvcl82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IGNhbGN1bGF0b3JfMTI1MHcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1NrZXRjaCBQYWQnLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9vZGluLWV0Y2gtYS1za2V0Y2gnLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vamNhbXBiZWxsNTcuZ2l0aHViLmlvL29kaW4tZXRjaC1hLXNrZXRjaC8nLFxuICAgICAgICBkZXNjOiAnQW4gRXRjaCBBIFNrZXRjaCBhcHAgdGhhdCBhbGxvd3MgdXNlcnMgdG8gY3JlYXRlIHBpeGVsIGFydC4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IHdhcyB0byBwcmFjdGljZSBpbXBsZW1lbnRpbmcgYSBncmlkIHdpdGggZmxleGJveCB0aGF0IGNhbiBieSBtYW5pcHVsYXRlZCBieSB0aGUgdXNlci4nLFxuICAgICAgICBhbHRJbWdUZXh0OiAnTWFzdGVybWluZCBnYW1lLicsXG4gICAgICAgIGljb25zOiBbJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiBza2V0Y2hfcGFkXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IHNrZXRjaF9wYWRfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiBza2V0Y2hfcGFkXzEyNTB3LFxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCb290IFJvYWNoIEJvbWInLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9vZGluLXJvY2stcGFwZXItc2Npc3NvcnMnLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vamNhbXBiZWxsNTcuZ2l0aHViLmlvL29kaW4tcm9jay1wYXBlci1zY2lzc29ycy8nLFxuICAgICAgICBkZXNjOiAnQSBmdW4gdmFyaWFudCBvZiB0aGUgY2xhc3NpYyBSb2NrLCBQYXBlciwgU2Npc3NvcnMgZ2FtZSEgVGhpcyBnYW1lIGlzIHBsYXllZCBhZ2FpbnN0IEFJIG92ZXIgdGhlIGNvdXJzZSBvZiBmaXZlIHJvdW5kcy4gVGhlciBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCBpcyB0byBwcmFjdGljZSBiYXNpYyBKYXZhU2NyaXB0IGNvbmNlcHRzIGFuZCBpbXBsZW1lbnQgYSBmdW5jdGlvbmluZyB1c2VyIGludGVyZmFjZS4nLFxuICAgICAgICBhbHRJbWdUZXh0OiAnTWFzdGVybWluZCBnYW1lLicsXG4gICAgICAgIGljb25zOiBbJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiBib290X3JvYWNoX2JvbWJfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogYm9vdF9yb2FjaF9ib21iXzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogYm9vdF9yb2FjaF9ib21iXzEyNTB3LFxuICAgICAgICB9XG4gICAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHNcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF3aWdsZXkmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBWYXJpYWJsZXMgKi9cblxuOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1ibHVlOiByZ2IoMCwgMTIzLCAyNTUpO1xuICAgIC0tbGlnaHQtYmx1ZTogcmdiKDIyNCwgMjQ3LCAyNTUpO1xuICAgIC0tZGFyay1ibHVlOiByZ2IoMCwgNjQsIDEzMyk7XG4gICAgLS1wYW5lbC1iYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEwMCUsIDAuMik7XG5cbiAgICAtLWJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAtLWJhY2tncm91bmQtY29sb3ItZGFyazogZ3JheTtcblxuICAgIC0tc2VsZWN0aW9uLWhvdmVyOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjEpO1xuICAgIC0tc2VsZWN0aW9uLWFjdGl2ZTogaHNsYSgwLCAwJSwgMTAwJSwgMC4yKTtcblxuICAgIC0tYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDMyLCAzMiwgMzIpO1xuICAgIC0tYm94LXNoYWRvdy1ob3ZlcjogMnB4IDJweCA2cHggYmxhY2s7XG4gICAgLS1ib3gtc2hhZG93LWFjdGl2ZTogMXB4IDFweCA2cHggYmxhY2s7XG5cbiAgICAtLWRhcmstZm9udC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xuICAgIC0tZGFyay1mb250LWhvdmVyOiBibGFjaztcbiAgICAtLWxpZ2h0LWZvbnQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgLS1saWdodC1mb250LWhvdmVyOiB3aGl0ZTtcblxuICAgIC8qIGNzcyBkYXJrIGJsdWVzICovXG4gICAgLS1kZWZhdWx0LWRhcmstYmx1ZTogZGFya2JsdWU7XG4gICAgLS1kZWZhdWx0LW1pZG5pZ2h0LWJsdWU6IG1pZG5pZ2h0Ymx1ZTtcbiAgICAtLWRlZmF1bHQtbmF2eTogbmF2eTtcblxuICAgIC8qIGNzcyBsaWdodCBibHVlcyAqL1xuICAgIC0tZGVmYXVsdC1jb3JuZmxvd2VyLWJsdWU6IGNvcm5mbG93ZXJibHVlO1xuICAgIC0tZGVmYXVsdC1kZWVwLXNreS1ibHVlOiBkZWVwc2t5Ymx1ZTtcbiAgICAtLWRlZmF1bHQtZG9kZ2VyLWJsdWU6IGRvZGdlcmJsdWU7XG4gICAgLS1kZWZhdWx0LWxpZ2h0LXNreS1ibHVlOiBsaWdodHNreWJsdWU7XG4gICAgLS1kZWZhdWx0LXNreS1ibHVlOiBza3libHVlO1xuXG4gICAgLyogY3NzIHZlcnkgbGlnaHRzICovXG4gICAgLS1kZWZhdWx0LWFsaWNlLWJsdWU6IGFsaWNlYmx1ZTtcbiAgICAtLWRlZmF1bHQtYXp1cmU6IGF6dXJlO1xuICAgIC0tZGVmYXVsdC1saWdodC1ibHVlOiBsaWdodGJsdWU7XG4gICAgLS1kZWZhdWx0LWxpZ2h0LWN5YW46IGxpZ2h0Y3lhbjtcbiAgICAtLWRlZmF1bHQtbWludC1jcmVhbTogbWludGNyZWFtO1xuICAgIC0tZGVmYXVsdC1wYWxlLXR1cnF1b2lzZTogcGFsZXR1cnF1b2lzZTtcbiAgICAtLWRlZmF1bHQtcG93ZGVyLWJsdWU6IHBvd2RlcmJsdWU7XG4gICAgLS1kZWZhdWx0LXNub3c6IHNub3c7XG4gICAgLS1kZWZhdWx0LXdoaXRlOiB3aGl0ZTtcbn1cblxuLyogRGVmYXVsdCBzdHlsaW5ncyAqL1xuXG4qIHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXG4gICAgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5xd2lnbGV5LXJlZ3VsYXIge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LWZhbWlseTogXCJRd2lnbGV5XCIsIGN1cnNpdmUgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAxLjE3ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmg0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG5hIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi8qIFNWRyBzdHlsaW5nICovXG5cbi5nbWFpbEljb24ge1xuICAgIGhlaWdodDogMS44cmVtO1xuICAgIGZpbGw6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xufVxuXG4uZ21haWxJY29uOmhvdmVyIHtcbiAgICBmaWxsOiBmaXJlYnJpY2s7XG59XG5cbi5vcGVuSWNvbiB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgZmlsbDogdmFyKC0tbGlnaHQtZm9udC1jb2xvcilcbn1cblxuLm9wZW5JY29uOmhvdmVyIHtcbiAgICBmaWxsOiBibGFja1xufVxuXG4udGhlbWVUb2dnbGVJY29uIHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBmaWxsOiB2YXIoLS1saWdodC1mb250LWNvbG9yKVxufVxuXG4vKiBQYWdlIHN0eWxpbmcgKi9cblxuaHRtbCB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleDogMTtcbn1cblxuLyogRGFyayBtb2RlIHN0eWxpbmcgKi9cblxuYm9keS5kYXJrTW9kZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1kYXJrKTtcbn1cblxuLnByb2plY3RzSGVhZGVyQ29udGFpbmVyLmRhcmtNb2RlIHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XG59XG5cbi5maWx0ZXJJY29uLmRhcmtNb2RlIHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XG59XG5cbi8qIEhlYWRlciBzdHlsaW5nICovXG5cbmhlYWRlciB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xufVxuXG4uaGVhZGVyTmFtZSB7XG4gICAgcGFkZGluZzogMCAydnc7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbm5hdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ubWVudWJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tZW51TGluayB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDJ2dztcbn1cblxuLm1lbnVMaW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24taG92ZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnVMaW5rOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWFjdGl2ZSk7XG59XG5cbi50aGVtZVRvZ2dsZUJ0biB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMnZ3O1xufVxuXG4udGhlbWVUb2dnbGVCdG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1ob3Zlcik7XG59XG5cbi50aGVtZVRvZ2dsZUJ0bjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1hY3RpdmUpO1xufVxuXG4udGhlbWVUb2dnbGVCdG46aG92ZXIgPiAudGhlbWVUb2dnbGVJY29uIHtcbiAgICBmaWxsOiB2YXIoLS1saWdodC1mb250LWhvdmVyKTtcbn1cblxuLyogQ29udGVudCBzdHlsaW5nICovXG5cbi8qIEludHJvIHN0eWxpbmcgKi9cblxuLmludHJvQmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDR2dztcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW50cm9Db250YWluZXIge1xuICAgIG1heC13aWR0aDogMTI1MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1dnc7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmludHJvSW1hZ2Uge1xuICAgIGhlaWdodDogbWluKDMwdncsIDUwMHB4KTtcbiAgICB3aWR0aDogbWluKDMwdncsIDUwMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMTV2dywgMjUwcHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG4uaW50cm9IZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5pbnRyb0JsdXJiIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uaW50cm9MaW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuNnZoO1xufVxuXG4uaW50cm9MaW5rcyA+IGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWhvdmVyKTtcbn1cblxuLnRyYW5zaXRpb24xIHtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMCUsIDAgMTAwJSk7XG59XG5cbi8qIFByb2plY3RzIHN0eWxpbmcgKi9cblxuLnByb2plY3RzQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgcGFkZGluZzogNHZ3O1xuICAgIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ucHJvamVjdHNIZWFkZXJDb250YWluZXIge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWZvbnQtY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0c1N1YmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5maWx0ZXJJY29uc0NvbnRhaW5lciA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG59XG5cbi5maWx0ZXJJY29uIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi5wcm9qZWN0Q2FyZENvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiBtaW4oMTI1MHB4LCAxMDAlKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcbn1cblxuLyogUHJvamVjdCBjYXJkIHN0eWxpbmcgKi9cblxuLnByb2plY3RDYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbC1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG4ucHJvamVjdENhcmQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctaG92ZXIpO1xufVxuXG4ucHJvamVjdENhcmQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LWFjdGl2ZSk7XG59XG5cbi5wcm9qZWN0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZENvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC44cmVtO1xufVxuXG4uY2FyZEhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmRUaXRsZTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpIDtcbn1cblxuLmNhcmRUaXRsZUljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjRyZW07XG59XG5cbi5jYXJkVGl0bGVJY29ucyA+IGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXJkSWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5wcm9qZWN0RGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4ucHJvamVjdERlc2NyaXB0aW9uOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1ob3Zlcik7XG59XG5cbi5jYXJkU2tpbGxJY29ucyB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC40cmVtO1xufVxuXG4uY2FyZFNraWxsSWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi50cmFuc2l0aW9uMiB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XG59XG5cbi8qIEFib3V0IG1lIHN0eWxpbmcgKi9cblxuLmFib3V0TWVCYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIHBhZGRpbmc6IDAgNHZ3O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFib3V0TWVDb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTI1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5wb3J0cmFpdEltYWdlIHtcbiAgICB3aWR0aDogNDB2dztcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgbWF4LXdpZHRoOiBtaW4oOTB2dywgNjQwcHgpOyAgICBcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgbWFyZ2luLWxlZnQ6IG1pbigydncsIDJyZW0pO1xuICAgIG1hcmdpbi1ib3R0b206IG1pbigxdncsIDFyZW0pO1xuXG4gICAgLyogZm9yIHRleHQgd3JhcDogKi9cbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5hYm91dE1lSGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5hYm91dE1lU3BhY2VyIHsgXG4gICAgaGVpZ2h0OiA0dmg7XG59XG5cbi5ibHVyYkNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwtYmFja2dyb3VuZCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcbn1cblxuLyogQ29udGFjdCBjYXJkIHN0eWxpbmcgKi9cblxuLmNvbnRhY3RCYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIHBhZGRpbmc6IDR2dztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWN0Q29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcbn1cblxuLmNvbnRhY3RDYXJkQ29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbC1iYWNrZ3JvdW5kKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbm5lY3RJY29ucyB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjRyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbm5lY3RJY29ucyA+IGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjRyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uY29ubmVjdEljb25zID4gYTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1ob3Zlcik7XG59XG5cbi5jb25uZWN0SWNvbnMgPiBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1hY3RpdmUpO1xufVxuXG4uZW1haWxMaW5rOmhvdmVyID4gLmdtYWlsSWNvbiB7XG4gICAgZmlsbDogZmlyZWJyaWNrXG59XG5cbi8qIEZvb3RlciBzdHlsaW5nICovXG5cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuZm9vdGVyID4gYSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmdpdGh1Ykljb24ge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmdpdGh1Ykljb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMik7XG59XG5cbi8qIE1vYmlsZSBzdXBwb3J0ICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBuYXYge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC50aGVtZVRvZ2dsZUJ0biB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC5pbnRyb0NvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmludHJvSW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDkwdnc7XG4gICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXZ3O1xuICAgIH1cblxuICAgIC5hYm91dE1lQ29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnBvcnRyYWl0SW1hZ2Uge1xuICAgICAgICBtYXJnaW46IHVuc2V0O1xuICAgICAgICB3aWR0aDogOTB2dztcbiAgICB9XG5cbiAgICAuYWJvdXRNZVNwYWNlciB7XG4gICAgICAgIGhlaWdodDogNXZ3O1xuICAgIH1cblxuICAgIC5ibHVyYkNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogdW5zZXQ7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpb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SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjs7SUFFbkIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0k7QUFDSjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF3aWdsZXkmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogVmFyaWFibGVzICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktYmx1ZTogcmdiKDAsIDEyMywgMjU1KTtcXG4gICAgLS1saWdodC1ibHVlOiByZ2IoMjI0LCAyNDcsIDI1NSk7XFxuICAgIC0tZGFyay1ibHVlOiByZ2IoMCwgNjQsIDEzMyk7XFxuICAgIC0tcGFuZWwtYmFja2dyb3VuZDogaHNsKDAsIDAlLCAxMDAlLCAwLjIpO1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLWRhcms6IGdyYXk7XFxuXFxuICAgIC0tc2VsZWN0aW9uLWhvdmVyOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjEpO1xcbiAgICAtLXNlbGVjdGlvbi1hY3RpdmU6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMik7XFxuXFxuICAgIC0tYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDMyLCAzMiwgMzIpO1xcbiAgICAtLWJveC1zaGFkb3ctaG92ZXI6IDJweCAycHggNnB4IGJsYWNrO1xcbiAgICAtLWJveC1zaGFkb3ctYWN0aXZlOiAxcHggMXB4IDZweCBibGFjaztcXG5cXG4gICAgLS1kYXJrLWZvbnQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcXG4gICAgLS1kYXJrLWZvbnQtaG92ZXI6IGJsYWNrO1xcbiAgICAtLWxpZ2h0LWZvbnQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC0tbGlnaHQtZm9udC1ob3Zlcjogd2hpdGU7XFxuXFxuICAgIC8qIGNzcyBkYXJrIGJsdWVzICovXFxuICAgIC0tZGVmYXVsdC1kYXJrLWJsdWU6IGRhcmtibHVlO1xcbiAgICAtLWRlZmF1bHQtbWlkbmlnaHQtYmx1ZTogbWlkbmlnaHRibHVlO1xcbiAgICAtLWRlZmF1bHQtbmF2eTogbmF2eTtcXG5cXG4gICAgLyogY3NzIGxpZ2h0IGJsdWVzICovXFxuICAgIC0tZGVmYXVsdC1jb3JuZmxvd2VyLWJsdWU6IGNvcm5mbG93ZXJibHVlO1xcbiAgICAtLWRlZmF1bHQtZGVlcC1za3ktYmx1ZTogZGVlcHNreWJsdWU7XFxuICAgIC0tZGVmYXVsdC1kb2RnZXItYmx1ZTogZG9kZ2VyYmx1ZTtcXG4gICAgLS1kZWZhdWx0LWxpZ2h0LXNreS1ibHVlOiBsaWdodHNreWJsdWU7XFxuICAgIC0tZGVmYXVsdC1za3ktYmx1ZTogc2t5Ymx1ZTtcXG5cXG4gICAgLyogY3NzIHZlcnkgbGlnaHRzICovXFxuICAgIC0tZGVmYXVsdC1hbGljZS1ibHVlOiBhbGljZWJsdWU7XFxuICAgIC0tZGVmYXVsdC1henVyZTogYXp1cmU7XFxuICAgIC0tZGVmYXVsdC1saWdodC1ibHVlOiBsaWdodGJsdWU7XFxuICAgIC0tZGVmYXVsdC1saWdodC1jeWFuOiBsaWdodGN5YW47XFxuICAgIC0tZGVmYXVsdC1taW50LWNyZWFtOiBtaW50Y3JlYW07XFxuICAgIC0tZGVmYXVsdC1wYWxlLXR1cnF1b2lzZTogcGFsZXR1cnF1b2lzZTtcXG4gICAgLS1kZWZhdWx0LXBvd2Rlci1ibHVlOiBwb3dkZXJibHVlO1xcbiAgICAtLWRlZmF1bHQtc25vdzogc25vdztcXG4gICAgLS1kZWZhdWx0LXdoaXRlOiB3aGl0ZTtcXG59XFxuXFxuLyogRGVmYXVsdCBzdHlsaW5ncyAqL1xcblxcbioge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXFxuICAgIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucXdpZ2xleS1yZWd1bGFyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIlF3aWdsZXlcXFwiLCBjdXJzaXZlICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjE3ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbmEge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogU1ZHIHN0eWxpbmcgKi9cXG5cXG4uZ21haWxJY29uIHtcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxuICAgIGZpbGw6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZ21haWxJY29uOmhvdmVyIHtcXG4gICAgZmlsbDogZmlyZWJyaWNrO1xcbn1cXG5cXG4ub3Blbkljb24ge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgZmlsbDogdmFyKC0tbGlnaHQtZm9udC1jb2xvcilcXG59XFxuXFxuLm9wZW5JY29uOmhvdmVyIHtcXG4gICAgZmlsbDogYmxhY2tcXG59XFxuXFxuLnRoZW1lVG9nZ2xlSWNvbiB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBmaWxsOiB2YXIoLS1saWdodC1mb250LWNvbG9yKVxcbn1cXG5cXG4vKiBQYWdlIHN0eWxpbmcgKi9cXG5cXG5odG1sIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi8qIERhcmsgbW9kZSBzdHlsaW5nICovXFxuXFxuYm9keS5kYXJrTW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItZGFyayk7XFxufVxcblxcbi5wcm9qZWN0c0hlYWRlckNvbnRhaW5lci5kYXJrTW9kZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG59XFxuXFxuLmZpbHRlckljb24uZGFya01vZGUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxufVxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG5cXG4uaGVhZGVyTmFtZSB7XFxuICAgIHBhZGRpbmc6IDAgMnZ3O1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxubmF2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm1lbnViYXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tZW51TGluayB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAydnc7XFxufVxcblxcbi5tZW51TGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1ob3Zlcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVMaW5rOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1hY3RpdmUpO1xcbn1cXG5cXG4udGhlbWVUb2dnbGVCdG4ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMnZ3O1xcbn1cXG5cXG4udGhlbWVUb2dnbGVCdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24taG92ZXIpO1xcbn1cXG5cXG4udGhlbWVUb2dnbGVCdG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWFjdGl2ZSk7XFxufVxcblxcbi50aGVtZVRvZ2dsZUJ0bjpob3ZlciA+IC50aGVtZVRvZ2dsZUljb24ge1xcbiAgICBmaWxsOiB2YXIoLS1saWdodC1mb250LWhvdmVyKTtcXG59XFxuXFxuLyogQ29udGVudCBzdHlsaW5nICovXFxuXFxuLyogSW50cm8gc3R5bGluZyAqL1xcblxcbi5pbnRyb0JhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNHZ3O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5pbnRyb0NvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTI1MHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1dnc7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnRyb0ltYWdlIHtcXG4gICAgaGVpZ2h0OiBtaW4oMzB2dywgNTAwcHgpO1xcbiAgICB3aWR0aDogbWluKDMwdncsIDUwMHB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogbWluKDE1dncsIDI1MHB4KTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcblxcbi5pbnRyb0hlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5pbnRyb0JsdXJiIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmludHJvTGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuNnZoO1xcbn1cXG5cXG4uaW50cm9MaW5rcyA+IGE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1ob3Zlcik7XFxufVxcblxcbi50cmFuc2l0aW9uMSB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwJSwgMCAxMDAlKTtcXG59XFxuXFxuLyogUHJvamVjdHMgc3R5bGluZyAqL1xcblxcbi5wcm9qZWN0c0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogNHZ3O1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyQ29udGFpbmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZm9udC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzU3ViaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5maWx0ZXJJY29uc0NvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMCAwLjhyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuXFxuLmZpbHRlckljb24ge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5wcm9qZWN0Q2FyZENvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogbWluKDEyNTBweCwgMTAwJSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNDBweCwgMWZyKSk7XFxufVxcblxcbi8qIFByb2plY3QgY2FyZCBzdHlsaW5nICovXFxuXFxuLnByb2plY3RDYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcblxcbi5wcm9qZWN0Q2FyZDpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctaG92ZXIpO1xcbn1cXG5cXG4ucHJvamVjdENhcmQ6YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1hY3RpdmUpO1xcbn1cXG5cXG4ucHJvamVjdEltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkQ29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjhyZW07XFxufVxcblxcbi5jYXJkSGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZFRpdGxlOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpIDtcXG59XFxuXFxuLmNhcmRUaXRsZUljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC40cmVtO1xcbn1cXG5cXG4uY2FyZFRpdGxlSWNvbnMgPiBhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNhcmRJY29uIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5wcm9qZWN0RGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnByb2plY3REZXNjcmlwdGlvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWhvdmVyKTtcXG59XFxuXFxuLmNhcmRTa2lsbEljb25zIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjRyZW07XFxufVxcblxcbi5jYXJkU2tpbGxJY29uIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi50cmFuc2l0aW9uMiB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcbn1cXG5cXG4vKiBBYm91dCBtZSBzdHlsaW5nICovXFxuXFxuLmFib3V0TWVCYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgcGFkZGluZzogMCA0dnc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0TWVDb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucG9ydHJhaXRJbWFnZSB7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBtYXgtd2lkdGg6IDkwdnc7XFxuICAgIG1heC13aWR0aDogbWluKDkwdncsIDY0MHB4KTsgICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIG1hcmdpbi1sZWZ0OiBtaW4oMnZ3LCAycmVtKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogbWluKDF2dywgMXJlbSk7XFxuXFxuICAgIC8qIGZvciB0ZXh0IHdyYXA6ICovXFxuICAgIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmFib3V0TWVIZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4uYWJvdXRNZVNwYWNlciB7IFxcbiAgICBoZWlnaHQ6IDR2aDtcXG59XFxuXFxuLmJsdXJiQ29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwtYmFja2dyb3VuZCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG1hcmdpbi1yaWdodDogNXZ3O1xcbn1cXG5cXG4vKiBDb250YWN0IGNhcmQgc3R5bGluZyAqL1xcblxcbi5jb250YWN0QmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIHBhZGRpbmc6IDR2dztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdENvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcXG59XFxuXFxuLmNvbnRhY3RDYXJkQ29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwtYmFja2dyb3VuZCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNvbm5lY3RJY29ucyB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb25uZWN0SWNvbnMgPiBhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjRyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5jb25uZWN0SWNvbnMgPiBhOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24taG92ZXIpO1xcbn1cXG5cXG4uY29ubmVjdEljb25zID4gYTphY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1ob3Zlcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1hY3RpdmUpO1xcbn1cXG5cXG4uZW1haWxMaW5rOmhvdmVyID4gLmdtYWlsSWNvbiB7XFxuICAgIGZpbGw6IGZpcmVicmlja1xcbn1cXG5cXG4vKiBGb290ZXIgc3R5bGluZyAqL1xcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbmZvb3RlciA+IGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ2l0aHViSWNvbiB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5naXRodWJJY29uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuLyogTW9iaWxlIHN1cHBvcnQgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAgIG5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC50aGVtZVRvZ2dsZUJ0biB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgfVxcblxcbiAgICAuaW50cm9Db250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuaW50cm9JbWFnZSB7XFxuICAgICAgICBoZWlnaHQ6IDkwdnc7XFxuICAgICAgICB3aWR0aDogOTB2dztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1dnc7XFxuICAgIH1cXG5cXG4gICAgLmFib3V0TWVDb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAucG9ydHJhaXRJbWFnZSB7XFxuICAgICAgICBtYXJnaW46IHVuc2V0O1xcbiAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgIH1cXG5cXG4gICAgLmFib3V0TWVTcGFjZXIge1xcbiAgICAgICAgaGVpZ2h0OiA1dnc7XFxuICAgIH1cXG5cXG4gICAgLmJsdXJiQ29udGFpbmVyIHtcXG4gICAgICAgIG1hcmdpbjogdW5zZXQ7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbImluaXRpYWxpemUiLCJJY29ucyIsImNvbnN0cnVjdG9yIiwiaWNvbkNsYXNzZXMiLCJkZXZJY29uc0xpbmsiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVsIiwidHlwZSIsImhyZWYiLCJhZGRFdmVudExpc3RlbmVycyIsImljb24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY3JlYXRlSWNvbiIsIl90aGlzIiwiaWNvbkNsYXNzIiwiaWNvbk5hbWUiLCJuZXdJY29uIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFkZGl0aW9uYWxDbGFzc2VzIiwiQXJyYXkiLCJfa2V5IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiaW5jbHVkZXMiLCJnZXRJY29uIiwiX3RoaXMyIiwibmFtZSIsIl9sZW4yIiwiX2tleTIiLCJHbWFpbEljb25TdmciLCJzdmdOUyIsInN2ZyIsImNyZWF0ZUVsZW1lbnROUyIsIl9sZW4zIiwiX2tleTMiLCJzZXRBdHRyaWJ1dGVOUyIsImpvaW4iLCJ0aXRsZSIsInRleHRDb250ZW50IiwicGF0aCIsImFwcGVuZENoaWxkIiwiT3Blbkljb25TdmciLCJfbGVuNCIsIl9rZXk0IiwidGhlbWVUb2dnbGVJY29uU3ZnIiwiX2xlbjUiLCJfa2V5NSIsIncxXzMwMHciLCJ3MV82MDB3IiwidzFfMTI1MHciLCJjcmVhdGVBYm91dE1lQ29udGVudCIsImFib3V0TWVDb250ZW50IiwicG9ydHJhaXRJbWFnZSIsInNyYyIsInNyY3NldCIsInNpemVzIiwiYWx0IiwiYWJvdXRNZVNwYWNlciIsImJsdXJiQ29udGFpbmVyIiwiYWJvdXRNZVAxIiwiYWJvdXRNZVAyIiwiYWJvdXRNZVAzIiwiYWJvdXRNZVA0IiwiYWJvdXRNZVA1IiwiY3JlYXRlQWJvdXRNZUNvbnRhaW5lciIsImFib3V0TWVCYWNrZ3JvdW5kIiwiYWJvdXRNZUNvbnRhaW5lciIsImlkIiwiYWJvdXRNZUhlYWRlciIsImljb25zIiwiY3JlYXRlQ29ubmVjdEljb25zIiwiY29ubmVjdEljb25zIiwiZW1haWxMaW5rIiwiZW1haWxUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJnaXRodWJMaW5rIiwidGFyZ2V0IiwiZ2l0aHViVGV4dCIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJsaW5rZWRpbkxpbmsiLCJsaW5rZWRpblRleHQiLCJjcmVhdGVDb250YWN0Q2FyZCIsImNvbnRhY3RDYXJkQ29udGFpbmVyIiwiY29udGFjdENhcmRIZWFkZXIiLCJjcmVhdGVDb250YWN0Q29udGFpbmVyIiwiY29udGFjdEJhY2tncm91bmQiLCJjb250YWN0Q29udGFpbmVyIiwiaDRfc3FfMzAwdyIsImg0X3NxXzYwMHciLCJoNF9zcV8xMjUwdyIsImN2IiwiY3JlYXRlSW50cm9Db250YWluZXIiLCJpbnRyb0JhY2tncm91bmQiLCJpbnRyb0NvbnRhaW5lciIsImludHJvSW1hZ2UiLCJpbnRyb0JsdXJiQ29udGFpbmVyIiwiaW50cm9IZWFkZXIiLCJpbnRyb0JsdXJiIiwiaW50cm9MaW5rcyIsImludHJvUmVzdW1lTGluayIsImRvd25sb2FkIiwiaW50cm9FbWFpbExpbmsiLCJwcm9qZWN0cyIsImNyZWF0ZVByb2plY3RDYXJkIiwicHJvamVjdCIsInByb2plY3RDYXJkIiwicHJvamVjdEltZyIsImltZyIsIm1lZGl1bSIsInNtYWxsIiwiYWx0SW1nVGV4dCIsImNhcmRDb250ZW50IiwiY2FyZEhlYWRlciIsImNhcmRUaXRsZUxpbmsiLCJsaXZlX3VybCIsImNhcmRUaXRsZSIsImNhcmRUaXRsZUljb25zIiwiY2FyZEdpdGh1YkxpbmsiLCJjb2RlX3VybCIsImNhcmRMaXZlTGluayIsImRlc2NyaXB0aW9uTGluayIsInByb2plY3REZXNjcmlwdGlvbiIsImRlc2MiLCJjYXJkU2tpbGxJY29ucyIsImZvckVhY2giLCJkaXNwbGF5UHJvamVjdHMiLCJmaWx0ZXJlZFByb2plY3RzIiwicHJvamVjdENhcmRDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwibmV3UHJvamVjdENhcmQiLCJkaXNwbGF5QWxsUHJvamVjdHMiLCJmaWx0ZXJQcm9qZWN0c0J5SWNvbiIsImNob3Nlbkljb25OYW1lIiwic3RhbmRhcmRpemVkSWNvbk5hbWUiLCJyZXBsYWNlIiwiZmlsdGVyIiwic2VsZWN0ZWRJY29uIiwiaGFuZGxlSWNvbkNsaWNrIiwiY2hvc2VuSWNvbiIsImljb25EYXRhIiwiZ2V0QXR0cmlidXRlIiwiYWxsSWNvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlUHJvamVjdHNIZWFkZXIiLCJwcm9qZWN0c0hlYWRlckNvbnRhaW5lciIsInByb2plY3RzSGVhZGVyIiwicHJvamVjdHNTdWJoZWFkZXIiLCJmaWx0ZXJJY29uc0NvbnRhaW5lciIsImljb25OYW1lcyIsImJ1dHRvbiIsImNvbnRhaW5zIiwiY3JlYXRlUHJvamVjdENhcmRDb250YWluZXIiLCJjcmVhdGVQcm9qZWN0c0NvbnRhaW5lciIsInByb2plY3RzQ29udGFpbmVyIiwiZ2l0aHViSWNvbiIsImNyZWF0ZU5hdiIsIm5hdiIsIm1lbnViYXIiLCJtZW51SXRlbXMiLCJtZW51SXRlbSIsIm5ld01lbnVJdGVtIiwibWVudUxpbmsiLCJ0b0xvd2VyQ2FzZSIsInNldFRoZW1lUHJlZmVyZW5jZSIsImxvY2FsU3RvcmFnZSIsInRoZW1lUHJlZmVyZW5jZSIsInVuZGVmaW5lZCIsInNldEl0ZW0iLCJnZXRJdGVtIiwibG9hZFRoZW1lIiwiYm9keSIsImZpbHRlckljb25zIiwidG9nZ2xlVGhlbWUiLCJjdXJyZW50VGhlbWUiLCJjcmVhdGVUaGVtZVRvZ2dsZUJ0biIsInRoZW1lVG9nZ2xlQnRuIiwiY3JlYXRlSGVhZGVyIiwiaGVhZGVyIiwicm9sZSIsImhlYWRlck5hbWVMaW5rIiwiY3JlYXRlVHJhbnNpdGlvbiIsInN0eWxpbmdDbGFzcyIsInRyYW5zaXRpb24iLCJjcmVhdGVDb250ZW50IiwiY29udGVudENvbnRhaW5lciIsImNyZWF0ZUZvb3RlciIsImZvb3RlciIsImNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm5ld0dpdGh1Ykljb24iLCJoZWFkIiwiYWRtaW5kYXNoYm9hcmRfMzAwdyIsImFkbWluZGFzaGJvYXJkXzYwMHciLCJhZG1pbmRhc2hib2FyZF8xMjUwdyIsImJhdHRsZXNoaXBfMzAwdyIsImJhdHRsZXNoaXBfNjAwdyIsImJhdHRsZXNoaXBfMTI1MHciLCJib290X3JvYWNoX2JvbWJfMzAwdyIsImJvb3Rfcm9hY2hfYm9tYl82MDB3IiwiYm9vdF9yb2FjaF9ib21iXzEyNTB3IiwiY2FsY3VsYXRvcl8zMDB3IiwiY2FsY3VsYXRvcl82MDB3IiwiY2FsY3VsYXRvcl8xMjUwdyIsImNoZXNzXzMwMHciLCJjaGVzc182MDB3IiwiY29ubmVjdF9mb3VyXzMwMHciLCJjb25uZWN0X2ZvdXJfNjAwdyIsImNvbm5lY3RfZm91cl8xMjUwdyIsImN2X2J1aWxkZXJfMzAwdyIsImN2X2J1aWxkZXJfNjAwdyIsImN2X2J1aWxkZXJfMTI1MHciLCJoYW5nbWFuXzMwMHciLCJoYW5nbWFuXzYwMHciLCJoYW5nbWFuXzEyNTB3IiwibWFzdGVybWluZF8zMDB3IiwibWFzdGVybWluZF82MDB3Iiwib2RpbmJvb2tfMzAwdyIsIm9kaW5ib29rXzYwMHciLCJvZGluYm9va18xMjUwdyIsInJlc3RhdXJhbnRfMzAwdyIsInJlc3RhdXJhbnRfNjAwdyIsInJlc3RhdXJhbnRfMTI1MHciLCJzaWduX3VwX2Zvcm1fMzAwdyIsInNpZ25fdXBfZm9ybV82MDB3Iiwic2lnbl91cF9mb3JtXzEyNTB3Iiwic2tldGNoX3BhZF8zMDB3Iiwic2tldGNoX3BhZF82MDB3Iiwic2tldGNoX3BhZF8xMjUwdyIsInRpY3RhY3RvZV8zMDB3IiwidGljdGFjdG9lXzYwMHciLCJ0aWN0YWN0b2VfMTI1MHciLCJ0b2RvbGlzdF8zMDB3IiwidG9kb2xpc3RfNjAwdyIsInRvZG9saXN0XzEyNTB3Iiwid2VhdGhlcnNlcnZlXzMwMHciLCJ3ZWF0aGVyc2VydmVfNjAwdyIsIndlYXRoZXJzZXJ2ZV8xMjUwdyIsIndvcm1ob2xlX2xpZ2h0XzMwMHciLCJ3b3JtaG9sZV9saWdodF82MDB3Iiwid29ybWhvbGVfbGlnaHRfMTI1MHciLCJsYXJnZSJdLCJzb3VyY2VSb290IjoiIn0=