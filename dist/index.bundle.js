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
  aboutMeP1.textContent = `Hello! My name is Jason Campbell, and I am a full-stack software developer based in the San Francisco Bay Area. My interest in technology began in middle school, when I used self-taught HTML and CSS to create a custom MySpace page to impress my friends.`;
  const aboutMeP2 = document.createElement('p');
  aboutMeP2.classList.add('aboutMeP2');
  aboutMeP2.textContent = `After earning a degree in Business Administration (Finance), I spent five years as a math teacher for seventh and eighth grade students, where I utilized problem-solving and communication skills. My interest in technology continued to grow during this time, leading me to transition into software development.`;
  const aboutMeP3 = document.createElement('p');
  aboutMeP3.classList.add('aboutMeP3');
  aboutMeP3.textContent = `In my free time, I enjoy playing disc golf, hiking, attending concerts, and gaming.`;
  blurbContainer.appendChild(aboutMeP1);
  blurbContainer.appendChild(document.createElement('br'));
  blurbContainer.appendChild(aboutMeP2);
  blurbContainer.appendChild(document.createElement('br'));
  blurbContainer.appendChild(aboutMeP3);
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
  linkedinLink.href = 'https://linkedin.com/in/jason-campbell-51a027b8';
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
  introBlurb.textContent = 'My name is Jason Campbell, and I am a full-stack software developer based in the San Francisco Bay Area. I am a lifelong learner, eager to apply my knowledge and skills to create and improve products and services.';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtHQUFrRyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxLQUFLLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsY0FBYyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxjQUFjLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLEtBQUss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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvSWNvbnMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvZGlzcGxheUFib3V0TWUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvZGlzcGxheUNvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvZGlzcGxheUludHJvLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2NyaXB0cy9wYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3JpcHRzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZXNoZWV0cy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZXNoZWV0cy9yZXNldC5jc3M/MGYxMCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzP2JmZmMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzaGVldHMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9zdHlsZS5jc3MnO1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9zY3JpcHRzL3BhZ2VMb2FkZXIuanMnXG5cbmluaXRpYWxpemUoKVxuIiwiY2xhc3MgSWNvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmljb25DbGFzc2VzID0ge1xuICAgICAgICAgICAgJ2Jvb3RzdHJhcCc6ICdkZXZpY29uLWJvb3RzdHJhcC1wbGFpbicsXG4gICAgICAgICAgICAnYm9vdHN0cmFwLXdvcmRtYXJrJzogJ2Rldmljb24tYm9vdHN0cmFwLXBsYWluLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICdjc3MnOiAnZGV2aWNvbi1jc3MzLXBsYWluJyxcbiAgICAgICAgICAgICdjc3Mtd29yZG1hcmsnOiAnZGV2aWNvbi1jc3MzLXBsYWluLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICdnaXQnOiAnZGV2aWNvbi1naXQtcGxhaW4nLFxuICAgICAgICAgICAgJ2dpdC13b3JkbWFyayc6ICdkZXZpY29uLWdpdC1wbGFpbi13b3JkbWFyaycsXG4gICAgICAgICAgICAnZ2l0aHViJzogJ2Rldmljb24tZ2l0aHViLW9yaWdpbmFsJyxcbiAgICAgICAgICAgICdnaXRodWItd29yZG1hcmsnOiAnZGV2aWNvbi1naXRodWItb3JpZ2luYWwtd29yZG1hcmsnLFxuICAgICAgICAgICAgJ2h0bWwnOiAnZGV2aWNvbi1odG1sNS1wbGFpbicsXG4gICAgICAgICAgICAnaHRtbC13b3JkbWFyayc6ICdkZXZpY29uLWh0bWw1LXBsYWluLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICdqYXZhc2NyaXB0JzogJ2Rldmljb24tamF2YXNjcmlwdC1wbGFpbicsXG4gICAgICAgICAgICAnamVzdCc6ICdkZXZpY29uLWplc3QtcGxhaW4nLFxuICAgICAgICAgICAgJ2pzb24nOiAnZGV2aWNvbi1qc29uLXBsYWluJyxcbiAgICAgICAgICAgICdqc29uLXdvcmRtYXJrJzogJ2Rldmljb24tanNvbi1wbGFpbi13b3JkbWFyaycsXG4gICAgICAgICAgICAnbGlua2VkaW4nOiAnZGV2aWNvbi1saW5rZWRpbi1wbGFpbicsXG4gICAgICAgICAgICAnbGlua2VkaW4td29yZG1hcmsnOiAnZGV2aWNvbi1saW5rZWRpbi1wbGFpbi13b3JkbWFyaycsXG4gICAgICAgICAgICAncHNxbCc6ICdkZXZpY29uLXBvc3RncmVzcWwtcGxhaW4nLFxuICAgICAgICAgICAgJ3BzcWwtd29yZG1hcmsnOiAnZGV2aWNvbi1wb3N0Z3Jlc3FsLXBsYWluLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICdyYWlscyc6ICdkZXZpY29uLXJhaWxzLXBsYWluJyxcbiAgICAgICAgICAgICdyYWlscy13b3JkbWFyayc6ICdkZXZpY29uLXJhaWxzLXBsYWluLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICdyZWFjdCc6ICdkZXZpY29uLXJlYWN0LW9yaWdpbmFsJyxcbiAgICAgICAgICAgICdyZWFjdC13b3JkbWFyayc6ICdkZXZpY29uLXJlYWN0LW9yaWdpbmFsLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICdyc3BlYyc6ICdkZXZpY29uLXJzcGVjLXBsYWluJyxcbiAgICAgICAgICAgICdyc3BlYy13b3JkbWFyayc6ICdkZXZpY29uLXJzcGVjLXBsYWluLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICdydWJ5JzogJ2Rldmljb24tcnVieS1wbGFpbicsXG4gICAgICAgICAgICAncnVieS13b3JkbWFyayc6ICdkZXZpY29uLXJ1YnktcGxhaW4td29yZG1hcmsnLFxuICAgICAgICAgICAgJ3dlYnBhY2snOiAnZGV2aWNvbi13ZWJwYWNrLXBsYWluJyxcbiAgICAgICAgICAgICd3ZWJwYWNrLXdvcmRtYXJrJzogJ2Rldmljb24td2VicGFjay1wbGFpbi13b3JkbWFyaycsXG4gICAgICAgICAgICAneWFtbCc6ICdkZXZpY29uLXlhbWwtcGxhaW4nLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV2SWNvbnNMaW5rID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnXG4gICAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2NzcydcbiAgICAgICAgbGluay5ocmVmID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9kZXZpY29uLm1pbi5jc3MnXG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMgPSAoaWNvbikgPT4ge1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC50b2dnbGUoJ2NvbG9yZWQnKVxuICAgICAgICB9KVxuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC50b2dnbGUoJ2NvbG9yZWQnKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZUljb24gPSAoaWNvbkNsYXNzLCBpY29uTmFtZSwgLi4uYWRkaXRpb25hbENsYXNzZXMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgICAgICBuZXdJY29uLmNsYXNzTGlzdC5hZGQoaWNvbkNsYXNzLCAuLi5hZGRpdGlvbmFsQ2xhc3NlcylcbiAgICAgICAgbmV3SWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicsIGljb25OYW1lKVxuICAgICAgICBpZiAoIWFkZGl0aW9uYWxDbGFzc2VzLmluY2x1ZGVzKCdmaWx0ZXJJY29uJykgJiYgIWFkZGl0aW9uYWxDbGFzc2VzLmluY2x1ZGVzKCdjb250YWN0SWNvbicpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKG5ld0ljb24pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0ljb25cbiAgICB9XG5cbiAgICBnZXRJY29uID0gKG5hbWUsIC4uLmFkZGl0aW9uYWxDbGFzc2VzKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmljb25DbGFzc2VzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJY29uKHRoaXMuaWNvbkNsYXNzZXNbbmFtZV0sIG5hbWUsIC4uLmFkZGl0aW9uYWxDbGFzc2VzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gU1ZHIGljb25zXG5cbiAgICBHbWFpbEljb25TdmcgPSAoLi4uaWNvbkNsYXNzZXMpID0+IHtcbiAgICAgICAgY29uc3Qgc3ZnTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJzdmdcIik7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImNsYXNzXCIsIGljb25DbGFzc2VzLmpvaW4oJyAnKSk7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJnbWFpbFwiO1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicGF0aFwiKTtcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImRcIiwgXCJNMjAsMThIMThWOS4yNUwxMiwxM0w2LDkuMjVWMThINFY2SDUuMkwxMiwxMC4yNUwxOC44LDZIMjBNMjAsNEg0QzIuODksNCAyLDQuODkgMiw2VjE4QTIsMiAwIDAsMCA0LDIwSDIwQTIsMiAwIDAsMCAyMiwxOFY2QzIyLDQuODkgMjEuMSw0IDIwLDRaXCIpO1xuXG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcblxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cblxuICAgIE9wZW5JY29uU3ZnID0gKC4uLmljb25DbGFzc2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwic3ZnXCIpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJjbGFzc1wiLCBpY29uQ2xhc3Nlcy5qb2luKCcgJykpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xuICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIm9wZW4taW4tbmV3XCI7XG4gICAgXG4gICAgICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicGF0aFwiKTtcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImRcIiwgXCJNMTQsM1Y1SDE3LjU5TDcuNzYsMTQuODNMOS4xNywxNi4yNEwxOSw2LjQxVjEwSDIxVjNNMTksMTlINVY1SDEyVjNINUMzLjg5LDMgMywzLjkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVYxMkgxOVYxOVpcIik7XG4gICAgXG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG5cbiAgICB0aGVtZVRvZ2dsZUljb25TdmcgPSAoLi4uaWNvbkNsYXNzZXMpID0+IHtcbiAgICAgICAgY29uc3Qgc3ZnTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJzdmdcIik7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImNsYXNzXCIsIGljb25DbGFzc2VzLmpvaW4oJyAnKSk7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwidGhlbWUtbGlnaHQtZGFya1wiO1xuICAgIFxuICAgICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInBhdGhcIik7XG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlTlMobnVsbCwgXCJkXCIsIFwiTTcuNSwyQzUuNzEsMy4xNSA0LjUsNS4xOCA0LjUsNy41QzQuNSw5LjgyIDUuNzEsMTEuODUgNy41MywxM0M0LjQ2LDEzIDIsMTAuNTQgMiw3LjVBNS41LDUuNSAwIDAsMSA3LjUsMk0xOS4wNywzLjVMMjAuNSw0LjkzTDQuOTMsMjAuNUwzLjUsMTkuMDdMMTkuMDcsMy41TTEyLjg5LDUuOTNMMTEuNDEsNUw5Ljk3LDZMMTAuMzksNC4zTDksMy4yNEwxMC43NSwzLjEyTDExLjMzLDEuNDdMMTIsMy4xTDEzLjczLDMuMTNMMTIuMzgsNC4yNkwxMi44OSw1LjkzTTkuNTksOS41NEw4LjQzLDguODFMNy4zMSw5LjU5TDcuNjUsOC4yN0w2LjU2LDcuNDRMNy45Miw3LjM1TDguMzcsNi4wNkw4Ljg4LDcuMzNMMTAuMjQsNy4zNkw5LjE5LDguMjNMOS41OSw5LjU0TTE5LDEzLjVBNS41LDUuNSAwIDAsMSAxMy41LDE5QzEyLjI4LDE5IDExLjE1LDE4LjYgMTAuMjQsMTcuOTNMMTcuOTMsMTAuMjRDMTguNiwxMS4xNSAxOSwxMi4yOCAxOSwxMy41TTE0LjYsMjAuMDhMMTcuMzcsMTguOTNMMTcuMTMsMjIuMjhMMTQuNiwyMC4wOE0xOC45MywxNy4zOEwyMC4wOCwxNC42MUwyMi4yOCwxNy4xNUwxOC45MywxNy4zOE0yMC4wOCwxMi40MkwxOC45NCw5LjY0TDIyLjI4LDkuODhMMjAuMDgsMTIuNDJNOS42MywxOC45M0wxMi40LDIwLjA4TDkuODcsMjIuMjdMOS42MywxOC45M1pcIik7XG4gICAgXG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uc1xuIiwiaW1wb3J0IHcxXzMwMHcgZnJvbSAnLi4vYXNzZXRzL3cxXzMwMHcucG5nJ1xuaW1wb3J0IHcxXzYwMHcgZnJvbSAnLi4vYXNzZXRzL3cxXzYwMHcucG5nJ1xuaW1wb3J0IHcxXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy93MV8xMjUwdy5wbmcnXG5cbmNvbnN0IGNyZWF0ZUFib3V0TWVDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFib3V0TWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dE1lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dE1lQ29udGVudCcpXG5cbiAgICBjb25zdCBwb3J0cmFpdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBwb3J0cmFpdEltYWdlLmNsYXNzTGlzdC5hZGQoJ3BvcnRyYWl0SW1hZ2UnKVxuICAgIHBvcnRyYWl0SW1hZ2Uuc3JjID0gdzFfMTI1MHdcbiAgICBwb3J0cmFpdEltYWdlLnNyY3NldCA9IGAke3cxXzEyNTB3fSAxMjUwdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3cxXzYwMHd9IDYwMHcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt3MV8zMDB3fSAzMDB3YFxuICAgIHBvcnRyYWl0SW1hZ2Uuc2l6ZXMgPSBgKG1heC13aWR0aDogMzIwcHgpIDMwMHB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1heC13aWR0aDogNjQwcHgpIDYwMHB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgMTI1MHB4YFxuICAgIHBvcnRyYWl0SW1hZ2UuYWx0ID0gJ1BvcnRyYWl0IGltYWdlLidcblxuICAgIGNvbnN0IGFib3V0TWVTcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0TWVTcGFjZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXRNZVNwYWNlcicpXG5cbiAgICBjb25zdCBibHVyYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYmx1cmJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmx1cmJDb250YWluZXInKVxuXG4gICAgY29uc3QgYWJvdXRNZVAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWJvdXRNZVAxLmNsYXNzTGlzdC5hZGQoJ2Fib3V0TWVQMScpXG4gICAgYWJvdXRNZVAxLnRleHRDb250ZW50ID0gYEhlbGxvISBNeSBuYW1lIGlzIEphc29uIENhbXBiZWxsLCBhbmQgSSBhbSBhIGZ1bGwtc3RhY2sgc29mdHdhcmUgZGV2ZWxvcGVyIGJhc2VkIGluIHRoZSBTYW4gRnJhbmNpc2NvIEJheSBBcmVhLiBNeSBpbnRlcmVzdCBpbiB0ZWNobm9sb2d5IGJlZ2FuIGluIG1pZGRsZSBzY2hvb2wsIHdoZW4gSSB1c2VkIHNlbGYtdGF1Z2h0IEhUTUwgYW5kIENTUyB0byBjcmVhdGUgYSBjdXN0b20gTXlTcGFjZSBwYWdlIHRvIGltcHJlc3MgbXkgZnJpZW5kcy5gXG5cbiAgICBjb25zdCBhYm91dE1lUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhYm91dE1lUDIuY2xhc3NMaXN0LmFkZCgnYWJvdXRNZVAyJylcbiAgICBhYm91dE1lUDIudGV4dENvbnRlbnQgPSBgQWZ0ZXIgZWFybmluZyBhIGRlZ3JlZSBpbiBCdXNpbmVzcyBBZG1pbmlzdHJhdGlvbiAoRmluYW5jZSksIEkgc3BlbnQgZml2ZSB5ZWFycyBhcyBhIG1hdGggdGVhY2hlciBmb3Igc2V2ZW50aCBhbmQgZWlnaHRoIGdyYWRlIHN0dWRlbnRzLCB3aGVyZSBJIHV0aWxpemVkIHByb2JsZW0tc29sdmluZyBhbmQgY29tbXVuaWNhdGlvbiBza2lsbHMuIE15IGludGVyZXN0IGluIHRlY2hub2xvZ3kgY29udGludWVkIHRvIGdyb3cgZHVyaW5nIHRoaXMgdGltZSwgbGVhZGluZyBtZSB0byB0cmFuc2l0aW9uIGludG8gc29mdHdhcmUgZGV2ZWxvcG1lbnQuYFxuXG4gICAgY29uc3QgYWJvdXRNZVAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWJvdXRNZVAzLmNsYXNzTGlzdC5hZGQoJ2Fib3V0TWVQMycpXG4gICAgYWJvdXRNZVAzLnRleHRDb250ZW50ID0gYEluIG15IGZyZWUgdGltZSwgSSBlbmpveSBwbGF5aW5nIGRpc2MgZ29sZiwgaGlraW5nLCBhdHRlbmRpbmcgY29uY2VydHMsIGFuZCBnYW1pbmcuYFxuXG4gICAgYmx1cmJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZVAxKVxuICAgIGJsdXJiQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpXG4gICAgYmx1cmJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZVAyKVxuICAgIGJsdXJiQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpXG4gICAgYmx1cmJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZVAzKVxuICAgIFxuICAgIGFib3V0TWVDb250ZW50LmFwcGVuZENoaWxkKHBvcnRyYWl0SW1hZ2UpXG4gICAgYWJvdXRNZUNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRNZVNwYWNlcilcbiAgICBhYm91dE1lQ29udGVudC5hcHBlbmRDaGlsZChibHVyYkNvbnRhaW5lcilcblxuICAgIHJldHVybiBhYm91dE1lQ29udGVudFxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQWJvdXRNZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBhYm91dE1lQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRNZUJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnYWJvdXRNZUJhY2tncm91bmQnKVxuXG4gICAgY29uc3QgYWJvdXRNZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRNZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dE1lQ29udGFpbmVyJylcbiAgICBhYm91dE1lQ29udGFpbmVyLmlkID0gJ2Fib3V0bWUnXG5cbiAgICBjb25zdCBhYm91dE1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGFib3V0TWVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXRNZUhlYWRlcicpXG4gICAgYWJvdXRNZUhlYWRlci50ZXh0Q29udGVudCA9ICdBYm91dCBtZSdcblxuICAgIGFib3V0TWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZUhlYWRlcilcbiAgICBhYm91dE1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0TWVDb250ZW50KCkpXG5cbiAgICBhYm91dE1lQmFja2dyb3VuZC5hcHBlbmRDaGlsZChhYm91dE1lQ29udGFpbmVyKVxuXG4gICAgcmV0dXJuIGFib3V0TWVCYWNrZ3JvdW5kXG59XG4iLCJpbXBvcnQgSWNvbnMgZnJvbSAnLi9JY29ucydcbmNvbnN0IGljb25zID0gbmV3IEljb25zXG5cbmNvbnN0IGNyZWF0ZUNvbm5lY3RJY29ucyA9ICgpID0+IHtcbiAgICBjb25zdCBjb25uZWN0SWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbm5lY3RJY29ucy5jbGFzc0xpc3QuYWRkKCdjb25uZWN0SWNvbnMnKVxuXG4gICAgY29uc3QgZW1haWxMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgZW1haWxMaW5rLmNsYXNzTGlzdC5hZGQoJ2VtYWlsTGluaycpXG4gICAgZW1haWxMaW5rLmhyZWYgPSAnbWFpbHRvOmpjYW1wYmVsbDU3QGdtYWlsLmNvbSdcbiAgICBlbWFpbExpbmsuYXBwZW5kQ2hpbGQoaWNvbnMuR21haWxJY29uU3ZnKCdnbWFpbEljb24nLCAnY29udGFjdEljb24nKSlcbiAgICBjb25zdCBlbWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRW1haWwnKVxuICAgIGVtYWlsTGluay5hcHBlbmRDaGlsZChlbWFpbFRleHQpXG4gICAgXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcnXG4gICAgZ2l0aHViTGluay50YXJnZXQgPSAnX2JsYW5rJ1xuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoaWNvbnMuZ2V0SWNvbignZ2l0aHViJywgJ2NvbnRhY3RJY29uJykpXG4gICAgY29uc3QgZ2l0aHViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdHaXRodWInKVxuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViVGV4dClcbiAgICBnaXRodWJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiBnaXRodWJMaW5rLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY29sb3JlZCcpKVxuICAgIGdpdGh1YkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IGdpdGh1YkxpbmsuZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xvcmVkJykpXG5cbiAgICBjb25zdCBsaW5rZWRpbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBsaW5rZWRpbkxpbmsuaHJlZiA9ICdodHRwczovL2xpbmtlZGluLmNvbS9pbi9qYXNvbi1jYW1wYmVsbC01MWEwMjdiOCdcbiAgICBsaW5rZWRpbkxpbmsudGFyZ2V0ID0gJ19ibGFuaydcbiAgICBsaW5rZWRpbkxpbmsuYXBwZW5kQ2hpbGQoaWNvbnMuZ2V0SWNvbignbGlua2VkaW4nLCAnY29udGFjdEljb24nKSlcbiAgICBjb25zdCBsaW5rZWRpblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTGlua2VkSW4nKVxuICAgIGxpbmtlZGluTGluay5hcHBlbmRDaGlsZChsaW5rZWRpblRleHQpXG4gICAgbGlua2VkaW5MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiBsaW5rZWRpbkxpbmsuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb2xvcmVkJykpXG4gICAgbGlua2VkaW5MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBsaW5rZWRpbkxpbmsuZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xvcmVkJykpXG5cbiAgICBjb25uZWN0SWNvbnMuYXBwZW5kQ2hpbGQoZW1haWxMaW5rKVxuICAgIGNvbm5lY3RJY29ucy5hcHBlbmRDaGlsZChnaXRodWJMaW5rKVxuICAgIGNvbm5lY3RJY29ucy5hcHBlbmRDaGlsZChsaW5rZWRpbkxpbmspXG5cbiAgICByZXR1cm4gY29ubmVjdEljb25zXG59XG5cbmNvbnN0IGNyZWF0ZUNvbnRhY3RDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3RDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0Q2FyZENvbnRhaW5lcicpXG4gICAgY29udGFjdENhcmRDb250YWluZXIuaWQgPSAnY29udGFjdCdcblxuICAgIGNvbnN0IGNvbnRhY3RDYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGNvbnRhY3RDYXJkSGVhZGVyLnRleHRDb250ZW50ID0gXCJMZXRzIGNvbm5lY3QhXCJcblxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkSGVhZGVyKVxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbm5lY3RJY29ucygpKVxuXG4gICAgcmV0dXJuIGNvbnRhY3RDYXJkQ29udGFpbmVyXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb250YWN0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3RCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0QmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdjb250YWN0QmFja2dyb3VuZCcpXG5cbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RDb250YWluZXInKVxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdENhcmQoKSlcblxuICAgIGNvbnRhY3RCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpXG5cbiAgICByZXR1cm4gY29udGFjdEJhY2tncm91bmRcbn1cbiIsImltcG9ydCBoNF9zcV8zMDB3IGZyb20gJy4uL2Fzc2V0cy9oNF9zcV8zMDB3LnBuZydcbmltcG9ydCBoNF9zcV82MDB3IGZyb20gJy4uL2Fzc2V0cy9oNF9zcV82MDB3LnBuZydcbmltcG9ydCBoNF9zcV8xMjUwdyBmcm9tICcuLi9hc3NldHMvaDRfc3FfMTI1MHcucG5nJ1xuaW1wb3J0IGN2IGZyb20gJy4uL2Fzc2V0cy9jdi5wZGYnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJbnRyb0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRyb0JhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGludHJvQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdpbnRyb0JhY2tncm91bmQnKVxuXG4gICAgY29uc3QgaW50cm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGludHJvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludHJvQ29udGFpbmVyJylcblxuICAgIGNvbnN0IGludHJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGludHJvSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW50cm9JbWFnZScpXG4gICAgaW50cm9JbWFnZS5zcmMgPSBoNF9zcV8xMjUwd1xuICAgIGludHJvSW1hZ2Uuc3Jjc2V0ID0gYCR7aDRfc3FfMTI1MHd9IDEyNTB3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICR7aDRfc3FfNjAwd30gNjAwdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAke2g0X3NxXzMwMHd9IDMwMHdgXG4gICAgaW50cm9JbWFnZS5zaXplcyA9IGAobWF4LXdpZHRoOiAzMjBweCkgMzAwcHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAobWF4LXdpZHRoOiA2NDBweCkgNjAwcHhcbiAgICAgICAgICAgICAgICAgICAgICAgIDEyNTBweGBcbiAgICBpbnRyb0ltYWdlLmFsdCA9ICdQb3J0cmFpdCBpbWFnZSdcblxuICAgIGNvbnN0IGludHJvQmx1cmJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGludHJvQmx1cmJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW50cm9CbHVyYkNvbnRhaW5lcicpXG5cbiAgICBjb25zdCBpbnRyb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBpbnRyb0hlYWRlci5jbGFzc0xpc3QuYWRkKCdpbnRyb0hlYWRlcicpXG4gICAgaW50cm9IZWFkZXIudGV4dENvbnRlbnQgPSAnSGVsbG8sIFdvcmxkISdcblxuICAgIGNvbnN0IGludHJvQmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbnRyb0JsdXJiLmNsYXNzTGlzdC5hZGQoJ2ludHJvQmx1cmInKVxuICAgIGludHJvQmx1cmIudGV4dENvbnRlbnQgPSAnTXkgbmFtZSBpcyBKYXNvbiBDYW1wYmVsbCwgYW5kIEkgYW0gYSBmdWxsLXN0YWNrIHNvZnR3YXJlIGRldmVsb3BlciBiYXNlZCBpbiB0aGUgU2FuIEZyYW5jaXNjbyBCYXkgQXJlYS4gSSBhbSBhIGxpZmVsb25nIGxlYXJuZXIsIGVhZ2VyIHRvIGFwcGx5IG15IGtub3dsZWRnZSBhbmQgc2tpbGxzIHRvIGNyZWF0ZSBhbmQgaW1wcm92ZSBwcm9kdWN0cyBhbmQgc2VydmljZXMuJ1xuXG4gICAgY29uc3QgaW50cm9MaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGludHJvTGlua3MuY2xhc3NMaXN0LmFkZCgnaW50cm9MaW5rcycpXG5cbiAgICBjb25zdCBpbnRyb1Jlc3VtZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBpbnRyb1Jlc3VtZUxpbmsuY2xhc3NMaXN0LmFkZCgnaW50cm9SZXN1bWVMaW5rJylcbiAgICBpbnRyb1Jlc3VtZUxpbmsuaHJlZiA9IGN2XG4gICAgaW50cm9SZXN1bWVMaW5rLnRhcmdldCA9ICdfYmxhbmsnXG4gICAgaW50cm9SZXN1bWVMaW5rLmRvd25sb2FkID0gJ0phc29uQ2FtcGJlbGxfUmVzdW1lLnBkZidcbiAgICBpbnRyb1Jlc3VtZUxpbmsudGV4dENvbnRlbnQgPSAnUmVzdW1lJ1xuXG4gICAgY29uc3QgaW50cm9FbWFpbExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBpbnRyb0VtYWlsTGluay5jbGFzc0xpc3QuYWRkKCdpbnRyb0VtYWlsTGluaycpXG4gICAgaW50cm9FbWFpbExpbmsuaHJlZiA9ICdtYWlsdG86amNhbXBiZWxsNTdAZ21haWwuY29tJ1xuICAgIGludHJvRW1haWxMaW5rLnRleHRDb250ZW50ID0gJ0VtYWlsJ1xuXG4gICAgaW50cm9MaW5rcy5hcHBlbmRDaGlsZChpbnRyb1Jlc3VtZUxpbmspXG4gICAgaW50cm9MaW5rcy5hcHBlbmRDaGlsZChpbnRyb0VtYWlsTGluaykgIFxuXG4gICAgaW50cm9CbHVyYkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb0hlYWRlcilcbiAgICBpbnRyb0JsdXJiQ29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvQmx1cmIpXG4gICAgaW50cm9CbHVyYkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb0xpbmtzKVxuXG4gICAgaW50cm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW50cm9JbWFnZSlcbiAgICBpbnRyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb0JsdXJiQ29udGFpbmVyKVxuXG4gICAgaW50cm9CYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGludHJvQ29udGFpbmVyKVxuXG4gICAgcmV0dXJuIGludHJvQmFja2dyb3VuZFxufVxuIiwiaW1wb3J0IEljb25zIGZyb20gJy4vSWNvbnMnXG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cydcblxuY29uc3QgaWNvbnMgPSBuZXcgSWNvbnNcblxuY29uc3QgY3JlYXRlUHJvamVjdENhcmQgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q2FyZCcpXG5cbiAgICBjb25zdCBwcm9qZWN0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBwcm9qZWN0SW1nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbWcnKVxuICAgIHByb2plY3RJbWcuc3JjID0gcHJvamVjdC5pbWcubWVkaXVtXG4gICAgcHJvamVjdEltZy5zcmNzZXQgPSBgJHtwcm9qZWN0LmltZy5zbWFsbH0gMzAwdywgJHtwcm9qZWN0LmltZy5tZWRpdW19IDYwMHdgXG4gICAgcHJvamVjdEltZy5zaXplcyA9IGAobWF4LXdpZHRoOiAzMjBweCkgMzAwcHgsXG4gICAgICAgICAgICAgICAgICAgICAgICA2MDBweGBcbiAgICBwcm9qZWN0SW1nLmFsdCA9IHByb2plY3QuYWx0SW1nVGV4dFxuXG4gICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRDb250ZW50JylcblxuICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FyZEhlYWRlcicpXG5cbiAgICBjb25zdCBjYXJkVGl0bGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgY2FyZFRpdGxlTGluay5ocmVmID0gcHJvamVjdC5saXZlX3VybFxuICAgIGNhcmRUaXRsZUxpbmsudGFyZ2V0ID0gJ19ibGFuaydcblxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZFRpdGxlJylcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWVcblxuICAgIGNhcmRUaXRsZUxpbmsuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKVxuXG4gICAgY29uc3QgY2FyZFRpdGxlSWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmRUaXRsZUljb25zLmNsYXNzTGlzdC5hZGQoJ2NhcmRUaXRsZUljb25zJylcblxuICAgIGNvbnN0IGNhcmRHaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgY2FyZEdpdGh1YkxpbmsuaHJlZiA9IHByb2plY3QuY29kZV91cmxcbiAgICBjYXJkR2l0aHViTGluay50YXJnZXQgPSAnX2JsYW5rJ1xuICAgIGNhcmRHaXRodWJMaW5rLmFwcGVuZENoaWxkKGljb25zLmdldEljb24oJ2dpdGh1YicsICdjYXJkSWNvbicpKVxuXG4gICAgY29uc3QgY2FyZExpdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgY2FyZExpdmVMaW5rLmhyZWYgPSBwcm9qZWN0LmxpdmVfdXJsXG4gICAgY2FyZExpdmVMaW5rLnRhcmdldCA9ICdfYmxhbmsnXG4gICAgY2FyZExpdmVMaW5rLmFwcGVuZENoaWxkKGljb25zLk9wZW5JY29uU3ZnKCdvcGVuSWNvbicpKVxuXG4gICAgY2FyZFRpdGxlSWNvbnMuYXBwZW5kQ2hpbGQoY2FyZEdpdGh1YkxpbmspXG4gICAgY2FyZFRpdGxlSWNvbnMuYXBwZW5kQ2hpbGQoY2FyZExpdmVMaW5rKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgZGVzY3JpcHRpb25MaW5rLmhyZWYgPSBwcm9qZWN0LmxpdmVfdXJsXG4gICAgZGVzY3JpcHRpb25MaW5rLnRhcmdldCA9ICdfYmxhbmsnXG5cbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdERlc2NyaXB0aW9uJylcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NcblxuICAgIGRlc2NyaXB0aW9uTGluay5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBjYXJkU2tpbGxJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZFNraWxsSWNvbnMuY2xhc3NMaXN0LmFkZCgnY2FyZFNraWxsSWNvbnMnKVxuICAgIHByb2plY3QuaWNvbnMuZm9yRWFjaChpY29uTmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ljb24gPSBpY29ucy5nZXRJY29uKGljb25OYW1lLCAnY2FyZFNraWxsSWNvbicpXG4gICAgICAgIGNhcmRTa2lsbEljb25zLmFwcGVuZENoaWxkKG5ld0ljb24pIFxuICAgIH0pXG5cbiAgICBjYXJkSGVhZGVyLmFwcGVuZENoaWxkKGNhcmRUaXRsZUxpbmspXG4gICAgY2FyZEhlYWRlci5hcHBlbmRDaGlsZChjYXJkVGl0bGVJY29ucylcblxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNhcmRIZWFkZXIpXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MaW5rKVxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNhcmRTa2lsbEljb25zKVxuXG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdEltZylcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudClcblxuICAgIHJldHVybiBwcm9qZWN0Q2FyZFxufVxuXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoZmlsdGVyZWRQcm9qZWN0cykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDYXJkQ29udGFpbmVyJylcbiAgICBwcm9qZWN0Q2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGZpbHRlcmVkUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENhcmQgPSBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KVxuICAgICAgICBwcm9qZWN0Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q2FyZClcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGlzcGxheUFsbFByb2plY3RzID0gKCkgPT4ge1xuICAgIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cylcbn1cblxuY29uc3QgZmlsdGVyUHJvamVjdHNCeUljb24gPSAoY2hvc2VuSWNvbk5hbWUpID0+IHtcbiAgICBjb25zdCBzdGFuZGFyZGl6ZWRJY29uTmFtZSA9IGNob3Nlbkljb25OYW1lLnJlcGxhY2UoJy13b3JkbWFyaycsICcnKVxuICAgIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0Lmljb25zLmluY2x1ZGVzKHN0YW5kYXJkaXplZEljb25OYW1lKSlcbiAgICBkaXNwbGF5UHJvamVjdHMoZmlsdGVyZWRQcm9qZWN0cylcbn1cblxubGV0IHNlbGVjdGVkSWNvbiA9IG51bGxcbmNvbnN0IGhhbmRsZUljb25DbGljayA9IChjaG9zZW5JY29uKSA9PiB7XG4gICAgY29uc3QgaWNvbkRhdGEgPSBjaG9zZW5JY29uLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uJylcbiAgICBjb25zdCBhbGxJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJJY29uc0NvbnRhaW5lciBidXR0b24gaScpXG5cbiAgICBhbGxJY29ucy5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJywgJ2NvbG9yZWQnKVxuICAgIH0pXG5cbiAgICBpZiAoc2VsZWN0ZWRJY29uID09PSBjaG9zZW5JY29uKSB7XG4gICAgICAgIHNlbGVjdGVkSWNvbiA9IG51bGxcbiAgICAgICAgZGlzcGxheUFsbFByb2plY3RzKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaG9zZW5JY29uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJywgJ2NvbG9yZWQnKVxuICAgICAgICBzZWxlY3RlZEljb24gPSBjaG9zZW5JY29uXG4gICAgICAgIGZpbHRlclByb2plY3RzQnlJY29uKGljb25EYXRhKVxuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdHNIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RzSGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzSGVhZGVyQ29udGFpbmVyJylcblxuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gJ015IFByb2plY3RzJ1xuXG4gICAgY29uc3QgcHJvamVjdHNTdWJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwcm9qZWN0c1N1YmhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c1N1YmhlYWRlcicpXG4gICAgcHJvamVjdHNTdWJoZWFkZXIudGV4dENvbnRlbnQgPSAnZmlsdGVyIGJ5OidcblxuICAgIGNvbnN0IGZpbHRlckljb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmaWx0ZXJJY29uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJJY29uc0NvbnRhaW5lcicpXG5cbiAgICBjb25zdCBpY29uTmFtZXMgPSBbJ2h0bWwtd29yZG1hcmsnLCAnY3NzLXdvcmRtYXJrJywgJ2phdmFzY3JpcHQnLCAncmVhY3Qtd29yZG1hcmsnLCAncnVieS13b3JkbWFyaycsICdyYWlscy13b3JkbWFyaycsICdwc3FsLXdvcmRtYXJrJywgJ3dlYnBhY2std29yZG1hcmsnLCAncnNwZWMtd29yZG1hcmsnLCAnamVzdCcsICdqc29uJywgJ3lhbWwnLCAnYm9vdHN0cmFwLXdvcmRtYXJrJywgJ2dpdC13b3JkbWFyaycsICdnaXRodWItd29yZG1hcmsnXVxuICAgIGljb25OYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjb25zdCBpY29uID0gaWNvbnMuZ2V0SWNvbihuYW1lLCAnZmlsdGVySWNvbicpXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKVxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghYnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY29sb3JlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFidXR0b24uZmlyc3RDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xvcmVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlSWNvbkNsaWNrKGljb24pKVxuICAgICAgICBmaWx0ZXJJY29uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgfSlcblxuICAgIHByb2plY3RzSGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKVxuICAgIHByb2plY3RzSGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzU3ViaGVhZGVyKSAgICBcbiAgICBwcm9qZWN0c0hlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWx0ZXJJY29uc0NvbnRhaW5lcikgICAgXG5cbiAgICByZXR1cm4gcHJvamVjdHNIZWFkZXJDb250YWluZXJcbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdENhcmRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDYXJkQ29udGFpbmVyJylcblxuICAgIHJldHVybiBwcm9qZWN0Q2FyZENvbnRhaW5lclxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdHNDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzQ29udGFpbmVyJylcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pZCA9ICdwcm9qZWN0cydcblxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RzSGVhZGVyKCkpXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdENhcmRDb250YWluZXIoKSlcblxuICAgIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lclxufVxuIiwiaW1wb3J0IGdpdGh1Ykljb24gZnJvbSAnLi4vYXNzZXRzL0dpdEh1Yi1saWdodC0zMnB4LnBuZydcbmltcG9ydCBjdiBmcm9tICcuLi9hc3NldHMvY3YucGRmJ1xuaW1wb3J0IEljb25zIGZyb20gJy4vSWNvbnMnXG5pbXBvcnQgeyBjcmVhdGVJbnRyb0NvbnRhaW5lciB9IGZyb20gJy4vZGlzcGxheUludHJvJ1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdHNDb250YWluZXIsIGRpc3BsYXlBbGxQcm9qZWN0cyB9IGZyb20gJy4vZGlzcGxheVByb2plY3RzJ1xuaW1wb3J0IHsgY3JlYXRlQWJvdXRNZUNvbnRhaW5lciB9IGZyb20gJy4vZGlzcGxheUFib3V0TWUnXG5pbXBvcnQgeyBjcmVhdGVDb250YWN0Q29udGFpbmVyIH0gZnJvbSAnLi9kaXNwbGF5Q29udGFjdCdcblxuY29uc3QgaWNvbnMgPSBuZXcgSWNvbnNcblxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG5cbiAgICBjb25zdCBtZW51YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIG1lbnViYXIuY2xhc3NMaXN0LmFkZCgnbWVudWJhcicpXG5cbiAgICBjb25zdCBtZW51SXRlbXMgPSBbJ1Byb2plY3RzJywgJ0Fib3V0IE1lJywgJ0NvbnRhY3QnLCAnUmVzdW1lJ11cblxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKG1lbnVJdGVtID0+IHtcbiAgICAgICAgY29uc3QgbmV3TWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIG5ld01lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGlmIChtZW51SXRlbSA9PT0gJ1Jlc3VtZScpIHtcbiAgICAgICAgICAgIG1lbnVMaW5rLmhyZWYgPSBjdlxuICAgICAgICAgICAgbWVudUxpbmsudGFyZ2V0ID0gJ19ibGFuaydcbiAgICAgICAgICAgIG1lbnVMaW5rLmRvd25sb2FkID0gJ0phc29uQ2FtcGJlbGxfUmVzdW1lLnBkZidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVMaW5rLmhyZWYgPSBgIyR7bWVudUl0ZW0ucmVwbGFjZSgnICcsICcnKS50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICAgfVxuICAgICAgICBtZW51TGluay5jbGFzc0xpc3QuYWRkKCdtZW51TGluaycpXG4gICAgICAgIG1lbnVMaW5rLnRleHRDb250ZW50ID0gbWVudUl0ZW1cblxuICAgICAgICBuZXdNZW51SXRlbS5hcHBlbmRDaGlsZChtZW51TGluaylcbiAgICAgICAgbWVudWJhci5hcHBlbmRDaGlsZChuZXdNZW51SXRlbSlcbiAgICB9KTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51YmFyKVxuXG4gICAgcmV0dXJuIG5hdlxufVxuXG5jb25zdCBzZXRUaGVtZVByZWZlcmVuY2UgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS50aGVtZVByZWZlcmVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWVQcmVmZXJlbmNlJywgJ2RhcmsnKVxuICAgIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lUHJlZmVyZW5jZScpICE9PSAnZGFyaycgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lUHJlZmVyZW5jZScpICE9PSAnbGlnaHQnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZVByZWZlcmVuY2UnLCAnZGFyaycpXG4gICAgfVxufVxuXG5jb25zdCBsb2FkVGhlbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzSGVhZGVyQ29udGFpbmVyJylcbiAgICBjb25zdCBmaWx0ZXJJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJJY29uJylcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWVQcmVmZXJlbmNlJykgPT09ICdkYXJrJykge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmtNb2RlJylcbiAgICAgICAgcHJvamVjdHNIZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGFya01vZGUnKVxuICAgICAgICBmaWx0ZXJJY29ucy5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdkYXJrTW9kZScpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgcHJvamVjdHNIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNIZWFkZXJDb250YWluZXInKVxuICAgIGNvbnN0IGZpbHRlckljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlckljb24nKVxuXG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrTW9kZScpXG4gICAgcHJvamVjdHNIZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZGFya01vZGUnKVxuICAgIGZpbHRlckljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZSgnZGFya01vZGUnKVxuICAgIH0pXG5cbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFya01vZGUnKSA/ICdkYXJrJyA6ICdsaWdodCdcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWVQcmVmZXJlbmNlJywgY3VycmVudFRoZW1lKVxufVxuXG5jb25zdCBjcmVhdGVUaGVtZVRvZ2dsZUJ0biA9ICgpID0+IHtcbiAgICBjb25zdCB0aGVtZVRvZ2dsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGhlbWVUb2dnbGVCdG4uY2xhc3NMaXN0LmFkZCgndGhlbWVUb2dnbGVCdG4nKVxuICAgIHRoZW1lVG9nZ2xlQnRuLmFwcGVuZENoaWxkKGljb25zLnRoZW1lVG9nZ2xlSWNvblN2ZygndGhlbWVUb2dnbGVJY29uJykpXG4gICAgdGhlbWVUb2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVUaGVtZSgpKVxuICAgIHJldHVybiB0aGVtZVRvZ2dsZUJ0blxufVxuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBoZWFkZXIucm9sZSA9ICdiYW5uZXInXG5cbiAgICBjb25zdCBoZWFkZXJOYW1lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGhlYWRlck5hbWVMaW5rLmNsYXNzTGlzdC5hZGQoJ2hlYWRlck5hbWVMaW5rJylcbiAgICBoZWFkZXJOYW1lTGluay5ocmVmID0gJyN0b3AnXG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyTmFtZScsICdxd2lnbGV5LXJlZ3VsYXInKVxuICAgIG5hbWUudGV4dENvbnRlbnQgPSAnSmFzb24gQ2FtcGJlbGwnXG4gICAgXG4gICAgaGVhZGVyTmFtZUxpbmsuYXBwZW5kQ2hpbGQobmFtZSlcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJOYW1lTGluaylcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRoZW1lVG9nZ2xlQnRuKCkpXG5cbiAgICByZXR1cm4gaGVhZGVyXG59XG5cbmNvbnN0IGNyZWF0ZVRyYW5zaXRpb24gPSAoc3R5bGluZ0NsYXNzKSA9PiB7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdHJhbnNpdGlvbi5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJywgc3R5bGluZ0NsYXNzKVxuXG4gICAgcmV0dXJuIHRyYW5zaXRpb25cbn1cblxuY29uc3QgY3JlYXRlQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgY29udGVudENvbnRhaW5lci5yb2xlID0gJ21haW4nXG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUludHJvQ29udGFpbmVyKCkpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUcmFuc2l0aW9uKCd0cmFuc2l0aW9uMScpKVxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdHNDb250YWluZXIoKSlcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRyYW5zaXRpb24oJ3RyYW5zaXRpb24yJykpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBYm91dE1lQ29udGFpbmVyKCkpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0Q29udGFpbmVyKCkpXG5cbiAgICByZXR1cm4gY29udGVudENvbnRhaW5lclxufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICBmb290ZXIucm9sZSA9ICdjb250ZW50aW5mbydcblxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGpjYW1wYmVsbDU3YFxuXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcnXG4gICAgZ2l0aHViTGluay50YXJnZXQgPSAnX2JsYW5rJ1xuXG4gICAgY29uc3QgbmV3R2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgbmV3R2l0aHViSWNvbi5zcmMgPSBnaXRodWJJY29uXG4gICAgbmV3R2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKCdnaXRodWJJY29uJylcblxuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQobmV3R2l0aHViSWNvbilcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKVxuXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaWNvbnMuZGV2SWNvbnNMaW5rKCkpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRlbnQoKSlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKVxuICAgIHNldFRoZW1lUHJlZmVyZW5jZSgpXG4gICAgbG9hZFRoZW1lKClcbiAgICBkaXNwbGF5QWxsUHJvamVjdHMoKVxufVxuIiwiLy8gQ29udmVydCB0byBjbGFzcyB3aXRoIGNvbnN0cnVjdGVyLCBjcmVhdGUgYWRtaW4gVUkgdG8gYWRkIHByb2plY3RzXG5cbi8vIGltcG9ydCBwcm9qZWN0IHNjcmVlbnNob3RzXG5pbXBvcnQgYWRtaW5kYXNoYm9hcmRfMzAwdyBmcm9tICcuLi9hc3NldHMvYWRtaW5kYXNoYm9hcmRfMzAwdy5wbmcnXG5pbXBvcnQgYWRtaW5kYXNoYm9hcmRfNjAwdyBmcm9tICcuLi9hc3NldHMvYWRtaW5kYXNoYm9hcmRfNjAwdy5wbmcnXG5pbXBvcnQgYWRtaW5kYXNoYm9hcmRfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL2FkbWluZGFzaGJvYXJkXzEyNTB3LnBuZydcbmltcG9ydCBiYXR0bGVzaGlwXzMwMHcgZnJvbSAnLi4vYXNzZXRzL2JhdHRsZXNoaXBfMzAwdy5wbmcnXG5pbXBvcnQgYmF0dGxlc2hpcF82MDB3IGZyb20gJy4uL2Fzc2V0cy9iYXR0bGVzaGlwXzYwMHcucG5nJ1xuaW1wb3J0IGJhdHRsZXNoaXBfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL2JhdHRsZXNoaXBfMTI1MHcucG5nJ1xuaW1wb3J0IGJvb3Rfcm9hY2hfYm9tYl8zMDB3IGZyb20gJy4uL2Fzc2V0cy9ib290X3JvYWNoX2JvbWJfMzAwdy5wbmcnXG5pbXBvcnQgYm9vdF9yb2FjaF9ib21iXzYwMHcgZnJvbSAnLi4vYXNzZXRzL2Jvb3Rfcm9hY2hfYm9tYl82MDB3LnBuZydcbmltcG9ydCBib290X3JvYWNoX2JvbWJfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL2Jvb3Rfcm9hY2hfYm9tYl8xMjUwdy5wbmcnXG5pbXBvcnQgY2FsY3VsYXRvcl8zMDB3IGZyb20gJy4uL2Fzc2V0cy9jYWxjdWxhdG9yXzMwMHcucG5nJ1xuaW1wb3J0IGNhbGN1bGF0b3JfNjAwdyBmcm9tICcuLi9hc3NldHMvY2FsY3VsYXRvcl82MDB3LnBuZydcbmltcG9ydCBjYWxjdWxhdG9yXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy9jYWxjdWxhdG9yXzEyNTB3LnBuZydcbmltcG9ydCBjaGVzc18zMDB3IGZyb20gJy4uL2Fzc2V0cy9jaGVzc18zMDB3LnBuZydcbmltcG9ydCBjaGVzc182MDB3IGZyb20gJy4uL2Fzc2V0cy9jaGVzc182MDB3LnBuZydcbmltcG9ydCBjb25uZWN0X2ZvdXJfMzAwdyBmcm9tICcuLi9hc3NldHMvY29ubmVjdF9mb3VyXzMwMHcucG5nJ1xuaW1wb3J0IGNvbm5lY3RfZm91cl82MDB3IGZyb20gJy4uL2Fzc2V0cy9jb25uZWN0X2ZvdXJfNjAwdy5wbmcnXG5pbXBvcnQgY29ubmVjdF9mb3VyXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy9jb25uZWN0X2ZvdXJfMTI1MHcucG5nJ1xuaW1wb3J0IGN2X2J1aWxkZXJfMzAwdyBmcm9tICcuLi9hc3NldHMvY3ZfYnVpbGRlcl8zMDB3LnBuZydcbmltcG9ydCBjdl9idWlsZGVyXzYwMHcgZnJvbSAnLi4vYXNzZXRzL2N2X2J1aWxkZXJfNjAwdy5wbmcnXG5pbXBvcnQgY3ZfYnVpbGRlcl8xMjUwdyBmcm9tICcuLi9hc3NldHMvY3ZfYnVpbGRlcl8xMjUwdy5wbmcnXG5pbXBvcnQgaGFuZ21hbl8zMDB3IGZyb20gJy4uL2Fzc2V0cy9oYW5nbWFuXzMwMHcucG5nJ1xuaW1wb3J0IGhhbmdtYW5fNjAwdyBmcm9tICcuLi9hc3NldHMvaGFuZ21hbl82MDB3LnBuZydcbmltcG9ydCBoYW5nbWFuXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy9oYW5nbWFuXzEyNTB3LnBuZydcbmltcG9ydCBtYXN0ZXJtaW5kXzMwMHcgZnJvbSAnLi4vYXNzZXRzL21hc3Rlcm1pbmRfMzAwdy5wbmcnXG5pbXBvcnQgbWFzdGVybWluZF82MDB3IGZyb20gJy4uL2Fzc2V0cy9tYXN0ZXJtaW5kXzYwMHcucG5nJ1xuaW1wb3J0IG9kaW5ib29rXzMwMHcgZnJvbSAnLi4vYXNzZXRzL29kaW5ib29rXzMwMHcucG5nJ1xuaW1wb3J0IG9kaW5ib29rXzYwMHcgZnJvbSAnLi4vYXNzZXRzL29kaW5ib29rXzYwMHcucG5nJ1xuaW1wb3J0IG9kaW5ib29rXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy9vZGluYm9va18xMjUwdy5wbmcnXG5pbXBvcnQgcmVzdGF1cmFudF8zMDB3IGZyb20gJy4uL2Fzc2V0cy9yZXN0YXVyYW50XzMwMHcucG5nJ1xuaW1wb3J0IHJlc3RhdXJhbnRfNjAwdyBmcm9tICcuLi9hc3NldHMvcmVzdGF1cmFudF82MDB3LnBuZydcbmltcG9ydCByZXN0YXVyYW50XzEyNTB3IGZyb20gJy4uL2Fzc2V0cy9yZXN0YXVyYW50XzEyNTB3LnBuZydcbmltcG9ydCBzaWduX3VwX2Zvcm1fMzAwdyBmcm9tICcuLi9hc3NldHMvc2lnbl91cF9mb3JtXzMwMHcucG5nJ1xuaW1wb3J0IHNpZ25fdXBfZm9ybV82MDB3IGZyb20gJy4uL2Fzc2V0cy9zaWduX3VwX2Zvcm1fNjAwdy5wbmcnXG5pbXBvcnQgc2lnbl91cF9mb3JtXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy9zaWduX3VwX2Zvcm1fMTI1MHcucG5nJ1xuaW1wb3J0IHNrZXRjaF9wYWRfMzAwdyBmcm9tICcuLi9hc3NldHMvc2tldGNoX3BhZF8zMDB3LnBuZydcbmltcG9ydCBza2V0Y2hfcGFkXzYwMHcgZnJvbSAnLi4vYXNzZXRzL3NrZXRjaF9wYWRfNjAwdy5wbmcnXG5pbXBvcnQgc2tldGNoX3BhZF8xMjUwdyBmcm9tICcuLi9hc3NldHMvc2tldGNoX3BhZF8xMjUwdy5wbmcnXG5pbXBvcnQgdGljdGFjdG9lXzMwMHcgZnJvbSAnLi4vYXNzZXRzL3RpY3RhY3RvZV8zMDB3LnBuZydcbmltcG9ydCB0aWN0YWN0b2VfNjAwdyBmcm9tICcuLi9hc3NldHMvdGljdGFjdG9lXzYwMHcucG5nJ1xuaW1wb3J0IHRpY3RhY3RvZV8xMjUwdyBmcm9tICcuLi9hc3NldHMvdGljdGFjdG9lXzEyNTB3LnBuZydcbmltcG9ydCB0b2RvbGlzdF8zMDB3IGZyb20gJy4uL2Fzc2V0cy90b2RvbGlzdF8zMDB3LnBuZydcbmltcG9ydCB0b2RvbGlzdF82MDB3IGZyb20gJy4uL2Fzc2V0cy90b2RvbGlzdF82MDB3LnBuZydcbmltcG9ydCB0b2RvbGlzdF8xMjUwdyBmcm9tICcuLi9hc3NldHMvdG9kb2xpc3RfMTI1MHcucG5nJ1xuaW1wb3J0IHdlYXRoZXJzZXJ2ZV8zMDB3IGZyb20gJy4uL2Fzc2V0cy93ZWF0aGVyc2VydmVfMzAwdy5wbmcnXG5pbXBvcnQgd2VhdGhlcnNlcnZlXzYwMHcgZnJvbSAnLi4vYXNzZXRzL3dlYXRoZXJzZXJ2ZV82MDB3LnBuZydcbmltcG9ydCB3ZWF0aGVyc2VydmVfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL3dlYXRoZXJzZXJ2ZV8xMjUwdy5wbmcnXG5pbXBvcnQgd29ybWhvbGVfbGlnaHRfMzAwdyBmcm9tICcuLi9hc3NldHMvd29ybWhvbGVfbGlnaHRfMzAwdy5wbmcnXG5pbXBvcnQgd29ybWhvbGVfbGlnaHRfNjAwdyBmcm9tICcuLi9hc3NldHMvd29ybWhvbGVfbGlnaHRfNjAwdy5wbmcnXG5pbXBvcnQgd29ybWhvbGVfbGlnaHRfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL3dvcm1ob2xlX2xpZ2h0XzEyNTB3LnBuZydcbi8vIGltcG9ydCB3b3JtaG9sZV9kYXJrXzMwMHcgZnJvbSAnLi4vYXNzZXRzL3dvcm1ob2xlX2RhcmtfMzAwdy5wbmcnXG4vLyBpbXBvcnQgd29ybWhvbGVfZGFya182MDB3IGZyb20gJy4uL2Fzc2V0cy93b3JtaG9sZV9kYXJrXzYwMHcucG5nJ1xuLy8gaW1wb3J0IHdvcm1ob2xlX2RhcmtfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL3dvcm1ob2xlX2RhcmtfMTI1MHcucG5nJ1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdvZGluYm9vaycsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L29kaW4tYm9vay12MicsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9vZGluLWJvb2stdjIuZmx5LmRldi8nLFxuICAgICAgICBkZXNjOiBcIkEgcmVsYXRpdmVseSBzaW1wbGUgc29jaWFsIG1lZGlhIGFwcC4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IGlzIHRvIHRpZSB0b2dldGhlciB0aGUgY29uY2VwdHMgbGVhcm5lZCBkdXJpbmcgdGhlIHJhaWxzIG1vZHVsZSBvZiBUaGUgT2RpbiBQcm9qZWN0LiBUaGlzIGlzIHRoZSBjYXBzdG9uZSBwcm9qZWN0IG9mIFRoZSBPZGluIFByb2plY3QncyBSdWJ5IG9uIFJhaWxzIGNvdXJzZS5cIixcbiAgICAgICAgYWx0SW1nVGV4dDogJ09kaW5ib29rIHVzZXIgcGFnZS4nLFxuICAgICAgICBpY29uczogWydodG1sJywgJ2Jvb3RzdHJhcCcsICdydWJ5JywgJ3JhaWxzJywgJ3BzcWwnLCAnd2VicGFjaycsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IG9kaW5ib29rXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IG9kaW5ib29rXzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogb2RpbmJvb2tfMTI1MHdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ1YgQnVpbGRlcicsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L2N2LWJ1aWxkZXInLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vZmFzY2luYXRpbmctcGVnYXN1cy02YTA1MTQubmV0bGlmeS5hcHAvJyxcbiAgICAgICAgZGVzYzogJ0FuIGFwcGxpY2F0aW9uIHdoZXJlIHVzZXJzIGNhbiBpbnB1dCB0aGVpciBpbmZvcm1hdGlvbiB0byBnZW5lcmF0ZSBhIENWL3LDqXN1bcOpLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3QgaXMgdG8gcHJhY3RpbmcgZGV2ZWxvcGluZyB3aXRoIHJlYWN0IHN0YXRlIGFuZCBwcm9wcy4nLFxuICAgICAgICBhbHRJbWdUZXh0OiAnQmF0dGxlc2hpcCBnYW1lcGxheScsXG4gICAgICAgIGljb25zOiBbJ2NzcycsICdqYXZhc2NyaXB0JywgJ3JlYWN0JywgJ2pzb24nLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiBjdl9idWlsZGVyXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IGN2X2J1aWxkZXJfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiBjdl9idWlsZGVyXzEyNTB3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ05hdmFsIFdhcmZhcmUnLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9uYXZhbC13YXJmYXJlJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL2pjYW1wYmVsbDU3LmdpdGh1Yi5pby9uYXZhbC13YXJmYXJlLycsXG4gICAgICAgIGRlc2M6IFwiQW4gaW50ZXJhY3RpdmUsIHR3byBwbGF5ZXIgZ2FtZSBvZiBCYXR0bGVzaGlwLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3QgaXMgdG8gcHJhY3RpY2UgVGVzdCBEcml2ZW4gRGV2ZWxvcG1lbnQgKFRERCkgYW5kIHRpZSB0b2dldGhlciB0aGUgY29uY2VwdHMgbGVhcm5lZCBpbiB0aGUgSmF2YVNjcmlwdCBtb2R1bGUgb2YgVGhlIE9kaW4gUHJvamVjdC4gVGhpcyBpcyB0aGUgY2Fwc3RvbmUgcHJvamVjdCBvZiBUaGUgT2RpbiBQcm9qZWN0J3MgSmF2YVNjcmlwdCBjb3Vyc2UuXCIsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdCYXR0bGVzaGlwIGdhbWVwbGF5JyxcbiAgICAgICAgaWNvbnM6IFsnY3NzJywgJ2phdmFzY3JpcHQnLCAnamVzdCcsICd3ZWJwYWNrJywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogYmF0dGxlc2hpcF8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiBiYXR0bGVzaGlwXzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogYmF0dGxlc2hpcF8xMjUwd1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdXZWF0aGVyc2VydmUnLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny93ZWF0aGVyLWFwcCcsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9qY2FtcGJlbGw1Ny5naXRodWIuaW8vd2VhdGhlci1hcHAvJyxcbiAgICAgICAgZGVzYzogJ0lucHV0IGEgY2l0eSB0byByZXRyaWV2ZSB3ZWF0aGVyIGluZm9ybWF0aW9uLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3QgaXMgdG8gcHJhY3RpY2UgaW50ZWdyYXRpb24gb2YgYW4gQVBJLCBsaW50ZXIsIFByZXR0aWVyIGFuZCBKYXZhU2NyaXB0IGNvbXBpbGVyLicsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdXZWF0aGVyc2VydmUgdXNlciBwYWdlLicsXG4gICAgICAgIGljb25zOiBbJ2NzcycsICdqYXZhc2NyaXB0JywgJ3dlYnBhY2snLCAnanNvbicsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IHdlYXRoZXJzZXJ2ZV8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiB3ZWF0aGVyc2VydmVfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiB3ZWF0aGVyc2VydmVfMTI1MHdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGhpbmdzIFRvIERvJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvb2Rpbi10b2RvLWxpc3QnLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vamNhbXBiZWxsNTcuZ2l0aHViLmlvL29kaW4tdG9kby1saXN0LycsXG4gICAgICAgIGRlc2M6ICdBIHNpbXBsZSB0by1kbyBsaXN0IGFwcGxpY2F0aW9uLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3QgaXMgdG8gcHJhY3RpY2Ugc2VyaWFsaXphdGlvbiB3aXRoIEpTT04gYW5kIG9iamVjdCBvcmllbnRlZCBwcm9ncmFtbWluZy4nLFxuICAgICAgICBhbHRJbWdUZXh0OiAnVG9kbyBsaXN0LicsXG4gICAgICAgIGljb25zOiBbJ2NzcycsICdqYXZhc2NyaXB0JywgJ3dlYnBhY2snLCAnanNvbicsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IHRvZG9saXN0XzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IHRvZG9saXN0XzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogdG9kb2xpc3RfMTI1MHdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTWlkZGxlIFJpbmcgUmVzdGF1cmFudCcsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L29kaW4tcmVzdGF1cmFudC1wYWdlJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL2pjYW1wYmVsbDU3LmdpdGh1Yi5pby9vZGluLXJlc3RhdXJhbnQtcGFnZS8nLFxuICAgICAgICBkZXNjOiAnQSByZXN0YXVyYW50IHBhZ2Ugd2l0aCB0YWJiZWQgY29udGVudCB0aGF0IHVzZXMgSmF2YVNjcmlwdCBhbG9uZSB0byBnZW5lcmF0ZSBhbGwgb2YgdGhlIGNvbnRlbnQgb24gdGhlIHBhZ2UuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCBpcyB0byBwcmFjdGljZSB1c2luZyBKYXZhU2NyaXB0IG1vZHVsZXMgYW5kIHdlYnBhY2suJyxcbiAgICAgICAgYWx0SW1nVGV4dDogJ01pZGRsZSBSaW5nIFJlc3RhdXJhbnQgUGFnZS4nLFxuICAgICAgICBpY29uczogWydjc3MnLCAnamF2YXNjcmlwdCcsICd3ZWJwYWNrJywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogcmVzdGF1cmFudF8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiByZXN0YXVyYW50XzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogcmVzdGF1cmFudF8xMjUwd1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaWMgVGFjIFRvZScsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L29kaW4tdGljLXRhYy10b2UnLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vamNhbXBiZWxsNTcuZ2l0aHViLmlvL29kaW4tdGljLXRhYy10b2UvJyxcbiAgICAgICAgZGVzYzogJ0FuIGludGVyYWN0aXZlIHR3byBwbGF5ZXIgVGljIFRhYyBUb2UgZ2FtZS4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IGlzIHRvIHByYWN0aWNlIGNyZWF0aW5nIGNsZWFuIGphdmFzY3JpcHQgY29kZSB3aXRoIGZhY3RvcnkgZnVuY3Rpb25zIGFuZCBtb2R1bGFyIGZ1bmN0aW9ucy4nLFxuICAgICAgICBhbHRJbWdUZXh0OiAnVGljIFRhYyBUb2UuJyxcbiAgICAgICAgaWNvbnM6IFsnaHRtbCcsICdjc3MnLCAnamF2YXNjcmlwdCcsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IHRpY3RhY3RvZV8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiB0aWN0YWN0b2VfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiB0aWN0YWN0b2VfMTI1MHdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnV29ybWhvbGUnLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9vZGluLWxpYnJhcnknLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vamNhbXBiZWxsNTcuZ2l0aHViLmlvL29kaW4tbGlicmFyeS8nLFxuICAgICAgICBkZXNjOiAnQW4gaW50ZXJhY3RpdmUgbGlicmFyeSBhcHAuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCBpcyB0byBwcmFjdGljZSB1c2luZyBKYXZhU2NyaXB0IG9iamVjdHMgYW5kIG9iamVjdCBjb25zdHJ1Y3RvcnMuJyxcbiAgICAgICAgYWx0SW1nVGV4dDogJ1dvcm1ob2xlLicsXG4gICAgICAgIGljb25zOiBbJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnLCAnanNvbicsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IHdvcm1ob2xlX2xpZ2h0XzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IHdvcm1ob2xlX2xpZ2h0XzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogd29ybWhvbGVfbGlnaHRfMTI1MHdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQWRtaW4gZGFzaGJvYXJkJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvb2Rpbi1hZG1pbi1kYXNoYm9hcmQnLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vamNhbXBiZWxsNTcuZ2l0aHViLmlvL29kaW4tYWRtaW4tZGFzaGJvYXJkLycsXG4gICAgICAgIGRlc2M6IFwiQSByZXNwb25zaXZlIGxheW91dCB1c2luZyBDU1MgZ3JpZCBhbmQgZmxleGJveC4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IHdhcyB0byBwcmFjdGljZSBjcmVhdGluZyBhbiBpbnRlcmZhY2Ugd2l0aCBDU1MgR3JpZC4gVGhpcyBpcyB0aGUgY2Fwc3RvbmUgcHJvamVjdCBvZiBUaGUgT2RpbiBQcm9qZWN0J3MgSW50ZXJtZWRpYXRlIEhUTUwgYW5kIENTUyBjb3Vyc2UuXCIsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdBZG1pbiBkYXNoYm9hcmQuJyxcbiAgICAgICAgaWNvbnM6IFsnaHRtbCcsICdjc3MnLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiBhZG1pbmRhc2hib2FyZF8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiBhZG1pbmRhc2hib2FyZF82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IGFkbWluZGFzaGJvYXJkXzEyNTB3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1NpZ24tdXAgRm9ybScsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L29kaW4tc2lnbi11cC1mb3JtJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL2pjYW1wYmVsbDU3LmdpdGh1Yi5pby9vZGluLXNpZ24tdXAtZm9ybS8nLFxuICAgICAgICBkZXNjOiAnQSBzaWduIHVwIGZvcm0gZm9yIGEgZmFrZSBzZXJ2aWNlLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3Qgd2FzIHRvIHByYWN0aWNlIGZvcm0gdmFsaWRhdGlvbiwgY3NzIHN0eWxpbmcsIGFuZCBtb2JpbGUgc3R5bGluZy4nLFxuICAgICAgICBhbHRJbWdUZXh0OiAnU2lnbi11cCBmb3JtLicsXG4gICAgICAgIGljb25zOiBbJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiBzaWduX3VwX2Zvcm1fMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogc2lnbl91cF9mb3JtXzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogc2lnbl91cF9mb3JtXzEyNTB3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NoZXNzJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvcnVieV9jaGVzcycsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9yZXBsaXQuY29tL0BqY2FtcGJlbGw1Ny9DaGVzcyNtYWluLnJiJyxcbiAgICAgICAgZGVzYzogXCJBIGNvbW1hbmQgbGluZSBDaGVzcyBnYW1lIHdoZXJlIHR3byBwbGF5ZXJzIGNhbiBwbGF5IGFnYWluc3QgZWFjaCBvdGhlci4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IGlzIHRvIHNob3cgdGhhdCBJIGNhbiB0YWtlIG9uIGEgcHJvamVjdCB3aXRoIGEgbG90IG9mIGRpZmZlcmVudCBjb21wb25lbnRzLiBUaGlzIGlzIHRoZSBjYXBzdG9uZSBwcm9qZWN0IG9mIFRoZSBPZGluIFByb2plY3QncyBSdWJ5IGNvdXJzZS5cIixcbiAgICAgICAgYWx0SW1nVGV4dDogJ0NoZXNzIGdhbWUuJyxcbiAgICAgICAgaWNvbnM6IFsncnVieScsICdyc3BlYycsICd5YW1sJywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogY2hlc3NfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogY2hlc3NfNjAwd1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDb25uZWN0IEZvdXInLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9ydWJ5X2Nvbm5lY3RfZm91cicsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9yZXBsaXQuY29tL0BqY2FtcGJlbGw1Ny9Db25uZWN0LUZvdXIjbWFpbi5yYicsXG4gICAgICAgIGRlc2M6ICdBIGNvbW1hbmQgbGluZSBDb25uZWN0IEZvdXIgZ2FtZSB3aGVyZSB0d28gcGxheWVycyBjYW4gcGxheSBhZ2FpbnN0IGVhY2ggb3RoZXIuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCB3YXMgdG8gcHJhY3RpY2UgVGVzdCBEcml2ZW4gRGV2ZWxvcG1lbnQgKFRERCkgd2l0aCBSU3BlYy4nLFxuICAgICAgICBhbHRJbWdUZXh0OiAnQ29ubmVjdCBGb3VyIGdhbWUuJyxcbiAgICAgICAgaWNvbnM6IFsncnVieScsICdyc3BlYycsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IGNvbm5lY3RfZm91cl8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiBjb25uZWN0X2ZvdXJfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiBjb25uZWN0X2ZvdXJfMTI1MHcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0hhbmdtYW4nLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9oYW5nbWFuJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL3JlcGxpdC5jb20vQGpjYW1wYmVsbDU3L0hhbmdtYW4nLFxuICAgICAgICBkZXNjOiAnQSBjb21tYW5kIGxpbmUgSGFuZ21hbiBnYW1lLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3Qgd2FzIHRvIHByYWN0aWNlIGltcGxlbWVudGF0aW9uIG9mIHNlcmlhbGl6YXRpb24gd2l0aCB0aGUgc2F2ZSBnYW1lIGZlYXR1cmUuJyxcbiAgICAgICAgYWx0SW1nVGV4dDogJ0hhbmdtYW4gZ2FtZS4nLFxuICAgICAgICBpY29uczogWydydWJ5JywgJ3lhbWwnLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiBoYW5nbWFuXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IGhhbmdtYW5fNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiBoYW5nbWFuXzEyNTB3LFxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNYXN0ZXJtaW5kJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvcnVieV9tYXN0ZXJtaW5kJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL3JlcGxpdC5jb20vQGpjYW1wYmVsbDU3L0Zpcm1HdWxsaWJsZVN5c3RlbXMjbWFpbi5yYicsXG4gICAgICAgIGRlc2M6ICdBIGNvbW1hbmQgbGluZSBNYXN0ZXJtaW5kIGdhbWUgcGxheWVkIGFnYWluc3QgQUkuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCB3YXMgdG8gcHJhY3RpY2UgT2JqZWN0IE9yaWVudGVkIFByb2dyYW1taW5nIChPT1ApLicsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdNYXN0ZXJtaW5kIGdhbWUuJyxcbiAgICAgICAgaWNvbnM6IFsncnVieScsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IG1hc3Rlcm1pbmRfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogbWFzdGVybWluZF82MDB3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NhbGN1bGF0b3InLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9vZGluLWNhbGN1bGF0b3InLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vamNhbXBiZWxsNTcuZ2l0aHViLmlvL29kaW4tY2FsY3VsYXRvci8nLFxuICAgICAgICBkZXNjOiBcIkEgZnVsbHkgZnVuY3Rpb25hbCBjYWxjdWxhdG9yIHdpdGggYmFzaWMgYXJpdGhtZXRpYyBvcGVyYXRpb25zIHRoYXQgY2FuIGJlIGNvbnRyb2xsZWQgd2l0aCBtb3VzZSBvciBrZXlib2FyZC4gVGhpcyBpcyB0aGUgY2Fwc3RvbmUgcHJvamVjdCBvZiBUaGUgT2RpbiBQcm9qZWN0J3MgRm91bmRhdGlvbnMgY291cnNlLlwiLFxuICAgICAgICBhbHRJbWdUZXh0OiAnTWFzdGVybWluZCBnYW1lLicsXG4gICAgICAgIGljb25zOiBbJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiBjYWxjdWxhdG9yXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IGNhbGN1bGF0b3JfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiBjYWxjdWxhdG9yXzEyNTB3LFxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTa2V0Y2ggUGFkJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvb2Rpbi1ldGNoLWEtc2tldGNoJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL2pjYW1wYmVsbDU3LmdpdGh1Yi5pby9vZGluLWV0Y2gtYS1za2V0Y2gvJyxcbiAgICAgICAgZGVzYzogJ0FuIEV0Y2ggQSBTa2V0Y2ggYXBwIHRoYXQgYWxsb3dzIHVzZXJzIHRvIGNyZWF0ZSBwaXhlbCBhcnQuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCB3YXMgdG8gcHJhY3RpY2UgaW1wbGVtZW50aW5nIGEgZ3JpZCB3aXRoIGZsZXhib3ggdGhhdCBjYW4gYnkgbWFuaXB1bGF0ZWQgYnkgdGhlIHVzZXIuJyxcbiAgICAgICAgYWx0SW1nVGV4dDogJ01hc3Rlcm1pbmQgZ2FtZS4nLFxuICAgICAgICBpY29uczogWydodG1sJywgJ2NzcycsICdqYXZhc2NyaXB0JywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogc2tldGNoX3BhZF8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiBza2V0Y2hfcGFkXzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogc2tldGNoX3BhZF8xMjUwdyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQm9vdCBSb2FjaCBCb21iJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvb2Rpbi1yb2NrLXBhcGVyLXNjaXNzb3JzJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL2pjYW1wYmVsbDU3LmdpdGh1Yi5pby9vZGluLXJvY2stcGFwZXItc2Npc3NvcnMvJyxcbiAgICAgICAgZGVzYzogJ0EgZnVuIHZhcmlhbnQgb2YgdGhlIGNsYXNzaWMgUm9jaywgUGFwZXIsIFNjaXNzb3JzIGdhbWUhIFRoaXMgZ2FtZSBpcyBwbGF5ZWQgYWdhaW5zdCBBSSBvdmVyIHRoZSBjb3Vyc2Ugb2YgZml2ZSByb3VuZHMuIFRoZXIgcHVycG9zZSBvZiB0aGlzIHByb2plY3QgaXMgdG8gcHJhY3RpY2UgYmFzaWMgSmF2YVNjcmlwdCBjb25jZXB0cyBhbmQgaW1wbGVtZW50IGEgZnVuY3Rpb25pbmcgdXNlciBpbnRlcmZhY2UuJyxcbiAgICAgICAgYWx0SW1nVGV4dDogJ01hc3Rlcm1pbmQgZ2FtZS4nLFxuICAgICAgICBpY29uczogWydodG1sJywgJ2NzcycsICdqYXZhc2NyaXB0JywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogYm9vdF9yb2FjaF9ib21iXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IGJvb3Rfcm9hY2hfYm9tYl82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IGJvb3Rfcm9hY2hfYm9tYl8xMjUwdyxcbiAgICAgICAgfVxuICAgIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Rd2lnbGV5JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVmFyaWFibGVzICovXG5cbjpyb290IHtcbiAgICAtLXByaW1hcnktYmx1ZTogcmdiKDAsIDEyMywgMjU1KTtcbiAgICAtLWxpZ2h0LWJsdWU6IHJnYigyMjQsIDI0NywgMjU1KTtcbiAgICAtLWRhcmstYmx1ZTogcmdiKDAsIDY0LCAxMzMpO1xuICAgIC0tcGFuZWwtYmFja2dyb3VuZDogaHNsKDAsIDAlLCAxMDAlLCAwLjIpO1xuXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLWRhcms6IGdyYXk7XG5cbiAgICAtLXNlbGVjdGlvbi1ob3ZlcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4xKTtcbiAgICAtLXNlbGVjdGlvbi1hY3RpdmU6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMik7XG5cbiAgICAtLWJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigzMiwgMzIsIDMyKTtcbiAgICAtLWJveC1zaGFkb3ctaG92ZXI6IDJweCAycHggNnB4IGJsYWNrO1xuICAgIC0tYm94LXNoYWRvdy1hY3RpdmU6IDFweCAxcHggNnB4IGJsYWNrO1xuXG4gICAgLS1kYXJrLWZvbnQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcbiAgICAtLWRhcmstZm9udC1ob3ZlcjogYmxhY2s7XG4gICAgLS1saWdodC1mb250LWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIC0tbGlnaHQtZm9udC1ob3Zlcjogd2hpdGU7XG5cbiAgICAvKiBjc3MgZGFyayBibHVlcyAqL1xuICAgIC0tZGVmYXVsdC1kYXJrLWJsdWU6IGRhcmtibHVlO1xuICAgIC0tZGVmYXVsdC1taWRuaWdodC1ibHVlOiBtaWRuaWdodGJsdWU7XG4gICAgLS1kZWZhdWx0LW5hdnk6IG5hdnk7XG5cbiAgICAvKiBjc3MgbGlnaHQgYmx1ZXMgKi9cbiAgICAtLWRlZmF1bHQtY29ybmZsb3dlci1ibHVlOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICAtLWRlZmF1bHQtZGVlcC1za3ktYmx1ZTogZGVlcHNreWJsdWU7XG4gICAgLS1kZWZhdWx0LWRvZGdlci1ibHVlOiBkb2RnZXJibHVlO1xuICAgIC0tZGVmYXVsdC1saWdodC1za3ktYmx1ZTogbGlnaHRza3libHVlO1xuICAgIC0tZGVmYXVsdC1za3ktYmx1ZTogc2t5Ymx1ZTtcblxuICAgIC8qIGNzcyB2ZXJ5IGxpZ2h0cyAqL1xuICAgIC0tZGVmYXVsdC1hbGljZS1ibHVlOiBhbGljZWJsdWU7XG4gICAgLS1kZWZhdWx0LWF6dXJlOiBhenVyZTtcbiAgICAtLWRlZmF1bHQtbGlnaHQtYmx1ZTogbGlnaHRibHVlO1xuICAgIC0tZGVmYXVsdC1saWdodC1jeWFuOiBsaWdodGN5YW47XG4gICAgLS1kZWZhdWx0LW1pbnQtY3JlYW06IG1pbnRjcmVhbTtcbiAgICAtLWRlZmF1bHQtcGFsZS10dXJxdW9pc2U6IHBhbGV0dXJxdW9pc2U7XG4gICAgLS1kZWZhdWx0LXBvd2Rlci1ibHVlOiBwb3dkZXJibHVlO1xuICAgIC0tZGVmYXVsdC1zbm93OiBzbm93O1xuICAgIC0tZGVmYXVsdC13aGl0ZTogd2hpdGU7XG59XG5cbi8qIERlZmF1bHQgc3R5bGluZ3MgKi9cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxuICAgIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4ucXdpZ2xleS1yZWd1bGFyIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUXdpZ2xleVwiLCBjdXJzaXZlICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogMS4xN2VtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oNCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4vKiBTVkcgc3R5bGluZyAqL1xuXG4uZ21haWxJY29uIHtcbiAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICBmaWxsOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcbn1cblxuLmdtYWlsSWNvbjpob3ZlciB7XG4gICAgZmlsbDogZmlyZWJyaWNrO1xufVxuXG4ub3Blbkljb24ge1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGZpbGw6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpXG59XG5cbi5vcGVuSWNvbjpob3ZlciB7XG4gICAgZmlsbDogYmxhY2tcbn1cblxuLnRoZW1lVG9nZ2xlSWNvbiB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgZmlsbDogdmFyKC0tbGlnaHQtZm9udC1jb2xvcilcbn1cblxuLyogUGFnZSBzdHlsaW5nICovXG5cbmh0bWwge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXg6IDE7XG59XG5cbi8qIERhcmsgbW9kZSBzdHlsaW5nICovXG5cbmJvZHkuZGFya01vZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItZGFyayk7XG59XG5cbi5wcm9qZWN0c0hlYWRlckNvbnRhaW5lci5kYXJrTW9kZSB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xufVxuXG4uZmlsdGVySWNvbi5kYXJrTW9kZSB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xufVxuXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xuXG5oZWFkZXIge1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbn1cblxuLmhlYWRlck5hbWUge1xuICAgIHBhZGRpbmc6IDAgMnZ3O1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG5uYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLm1lbnViYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWVudUxpbmsge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAydnc7XG59XG5cbi5tZW51TGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWhvdmVyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51TGluazphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1hY3RpdmUpO1xufVxuXG4udGhlbWVUb2dnbGVCdG4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDJ2dztcbn1cblxuLnRoZW1lVG9nZ2xlQnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24taG92ZXIpO1xufVxuXG4udGhlbWVUb2dnbGVCdG46YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tYWN0aXZlKTtcbn1cblxuLnRoZW1lVG9nZ2xlQnRuOmhvdmVyID4gLnRoZW1lVG9nZ2xlSWNvbiB7XG4gICAgZmlsbDogdmFyKC0tbGlnaHQtZm9udC1ob3Zlcik7XG59XG5cbi8qIENvbnRlbnQgc3R5bGluZyAqL1xuXG4vKiBJbnRybyBzdHlsaW5nICovXG5cbi5pbnRyb0JhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA0dnc7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmludHJvQ29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXZ3O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnRyb0ltYWdlIHtcbiAgICBoZWlnaHQ6IG1pbigzMHZ3LCA1MDBweCk7XG4gICAgd2lkdGg6IG1pbigzMHZ3LCA1MDBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDE1dncsIDI1MHB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbn1cblxuLmludHJvSGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uaW50cm9CbHVyYiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmludHJvTGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwLjZ2aDtcbn1cblxuLmludHJvTGlua3MgPiBhOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1ob3Zlcik7XG59XG5cbi50cmFuc2l0aW9uMSB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDAlLCAwIDEwMCUpO1xufVxuXG4vKiBQcm9qZWN0cyBzdHlsaW5nICovXG5cbi5wcm9qZWN0c0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIHBhZGRpbmc6IDR2dztcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnByb2plY3RzSGVhZGVyQ29udGFpbmVyIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1mb250LWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdHNTdWJoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZmlsdGVySWNvbnNDb250YWluZXIgPiBidXR0b24ge1xuICAgIG1hcmdpbjogMCAwLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuXG4uZmlsdGVySWNvbiB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4ucHJvamVjdENhcmRDb250YWluZXIge1xuICAgIG1heC13aWR0aDogbWluKDEyNTBweCwgMTAwJSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogY2xhbXAoMXJlbSwgMnZ3LCAycmVtKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNDBweCwgMWZyKSk7XG59XG5cbi8qIFByb2plY3QgY2FyZCBzdHlsaW5nICovXG5cbi5wcm9qZWN0Q2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwtYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbn1cblxuLnByb2plY3RDYXJkOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LWhvdmVyKTtcbn1cblxuLnByb2plY3RDYXJkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1hY3RpdmUpO1xufVxuXG4ucHJvamVjdEltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmRDb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuOHJlbTtcbn1cblxuLmNhcmRIZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkVGl0bGU6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWhvdmVyKSA7XG59XG5cbi5jYXJkVGl0bGVJY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMC40cmVtO1xufVxuXG4uY2FyZFRpdGxlSWNvbnMgPiBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2FyZEljb24ge1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4ucHJvamVjdERlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLnByb2plY3REZXNjcmlwdGlvbjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpO1xufVxuXG4uY2FyZFNraWxsSWNvbnMge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuNHJlbTtcbn1cblxuLmNhcmRTa2lsbEljb24ge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4udHJhbnNpdGlvbjIge1xuICAgIGhlaWdodDogNHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xufVxuXG4vKiBBYm91dCBtZSBzdHlsaW5nICovXG5cbi5hYm91dE1lQmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBwYWRkaW5nOiAwIDR2dztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hYm91dE1lQ29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ucG9ydHJhaXRJbWFnZSB7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgIG1heC13aWR0aDogbWluKDkwdncsIDY0MHB4KTsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIG1hcmdpbi1sZWZ0OiBtaW4oMnZ3LCAycmVtKTtcbiAgICBtYXJnaW4tYm90dG9tOiBtaW4oMXZ3LCAxcmVtKTtcblxuICAgIC8qIGZvciB0ZXh0IHdyYXA6ICovXG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYWJvdXRNZUhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uYWJvdXRNZVNwYWNlciB7IFxuICAgIGhlaWdodDogNHZoO1xufVxuXG4uYmx1cmJDb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbmVsLWJhY2tncm91bmQpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG59XG5cbi8qIENvbnRhY3QgY2FyZCBzdHlsaW5nICovXG5cbi5jb250YWN0QmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBwYWRkaW5nOiA0dnc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdENvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMjUwcHg7XG59XG5cbi5jb250YWN0Q2FyZENvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwtYmFja2dyb3VuZCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb25uZWN0SWNvbnMge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC40cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb25uZWN0SWNvbnMgPiBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC40cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC40cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmNvbm5lY3RJY29ucyA+IGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWhvdmVyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24taG92ZXIpO1xufVxuXG4uY29ubmVjdEljb25zID4gYTphY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWhvdmVyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tYWN0aXZlKTtcbn1cblxuLmVtYWlsTGluazpob3ZlciA+IC5nbWFpbEljb24ge1xuICAgIGZpbGw6IGZpcmVicmlja1xufVxuXG4vKiBGb290ZXIgc3R5bGluZyAqL1xuXG5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbmZvb3RlciA+IGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5naXRodWJJY29uIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5naXRodWJJY29uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSBzY2FsZSgxLjIpO1xufVxuXG4vKiBNb2JpbGUgc3VwcG9ydCAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAudGhlbWVUb2dnbGVCdG4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG5cbiAgICAuaW50cm9Db250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5pbnRyb0ltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiA5MHZ3O1xuICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDV2dztcbiAgICB9XG5cbiAgICAuYWJvdXRNZUNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5wb3J0cmFpdEltYWdlIHtcbiAgICAgICAgbWFyZ2luOiB1bnNldDtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgfVxuXG4gICAgLmFib3V0TWVTcGFjZXIge1xuICAgICAgICBoZWlnaHQ6IDV2dztcbiAgICB9XG5cbiAgICAuYmx1cmJDb250YWluZXIge1xuICAgICAgICBtYXJnaW46IHVuc2V0O1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxjQUFjOztBQUVkO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIseUNBQXlDOztJQUV6Qyw2QkFBNkI7SUFDN0IsNkJBQTZCOztJQUU3Qix5Q0FBeUM7SUFDekMsMENBQTBDOztJQUUxQyx5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLHNDQUFzQzs7SUFFdEMsa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIseUJBQXlCOztJQUV6QixtQkFBbUI7SUFDbkIsNkJBQTZC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SUFDOUIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJO0FBQ0o7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Rd2lnbGV5JmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIFZhcmlhYmxlcyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWJsdWU6IHJnYigwLCAxMjMsIDI1NSk7XFxuICAgIC0tbGlnaHQtYmx1ZTogcmdiKDIyNCwgMjQ3LCAyNTUpO1xcbiAgICAtLWRhcmstYmx1ZTogcmdiKDAsIDY0LCAxMzMpO1xcbiAgICAtLXBhbmVsLWJhY2tncm91bmQ6IGhzbCgwLCAwJSwgMTAwJSwgMC4yKTtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci1kYXJrOiBncmF5O1xcblxcbiAgICAtLXNlbGVjdGlvbi1ob3ZlcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4xKTtcXG4gICAgLS1zZWxlY3Rpb24tYWN0aXZlOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjIpO1xcblxcbiAgICAtLWJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigzMiwgMzIsIDMyKTtcXG4gICAgLS1ib3gtc2hhZG93LWhvdmVyOiAycHggMnB4IDZweCBibGFjaztcXG4gICAgLS1ib3gtc2hhZG93LWFjdGl2ZTogMXB4IDFweCA2cHggYmxhY2s7XFxuXFxuICAgIC0tZGFyay1mb250LWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XFxuICAgIC0tZGFyay1mb250LWhvdmVyOiBibGFjaztcXG4gICAgLS1saWdodC1mb250LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLWxpZ2h0LWZvbnQtaG92ZXI6IHdoaXRlO1xcblxcbiAgICAvKiBjc3MgZGFyayBibHVlcyAqL1xcbiAgICAtLWRlZmF1bHQtZGFyay1ibHVlOiBkYXJrYmx1ZTtcXG4gICAgLS1kZWZhdWx0LW1pZG5pZ2h0LWJsdWU6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgLS1kZWZhdWx0LW5hdnk6IG5hdnk7XFxuXFxuICAgIC8qIGNzcyBsaWdodCBibHVlcyAqL1xcbiAgICAtLWRlZmF1bHQtY29ybmZsb3dlci1ibHVlOiBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgLS1kZWZhdWx0LWRlZXAtc2t5LWJsdWU6IGRlZXBza3libHVlO1xcbiAgICAtLWRlZmF1bHQtZG9kZ2VyLWJsdWU6IGRvZGdlcmJsdWU7XFxuICAgIC0tZGVmYXVsdC1saWdodC1za3ktYmx1ZTogbGlnaHRza3libHVlO1xcbiAgICAtLWRlZmF1bHQtc2t5LWJsdWU6IHNreWJsdWU7XFxuXFxuICAgIC8qIGNzcyB2ZXJ5IGxpZ2h0cyAqL1xcbiAgICAtLWRlZmF1bHQtYWxpY2UtYmx1ZTogYWxpY2VibHVlO1xcbiAgICAtLWRlZmF1bHQtYXp1cmU6IGF6dXJlO1xcbiAgICAtLWRlZmF1bHQtbGlnaHQtYmx1ZTogbGlnaHRibHVlO1xcbiAgICAtLWRlZmF1bHQtbGlnaHQtY3lhbjogbGlnaHRjeWFuO1xcbiAgICAtLWRlZmF1bHQtbWludC1jcmVhbTogbWludGNyZWFtO1xcbiAgICAtLWRlZmF1bHQtcGFsZS10dXJxdW9pc2U6IHBhbGV0dXJxdW9pc2U7XFxuICAgIC0tZGVmYXVsdC1wb3dkZXItYmx1ZTogcG93ZGVyYmx1ZTtcXG4gICAgLS1kZWZhdWx0LXNub3c6IHNub3c7XFxuICAgIC0tZGVmYXVsdC13aGl0ZTogd2hpdGU7XFxufVxcblxcbi8qIERlZmF1bHQgc3R5bGluZ3MgKi9cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxcbiAgICBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcXG59XFxuXFxuLnF3aWdsZXktcmVndWxhciB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRd2lnbGV5XFxcIiwgY3Vyc2l2ZSAhaW1wb3J0YW50O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4xN2VtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG5hIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFNWRyBzdHlsaW5nICovXFxuXFxuLmdtYWlsSWNvbiB7XFxuICAgIGhlaWdodDogMS44cmVtO1xcbiAgICBmaWxsOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG59XFxuXFxuLmdtYWlsSWNvbjpob3ZlciB7XFxuICAgIGZpbGw6IGZpcmVicmljaztcXG59XFxuXFxuLm9wZW5JY29uIHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGZpbGw6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpXFxufVxcblxcbi5vcGVuSWNvbjpob3ZlciB7XFxuICAgIGZpbGw6IGJsYWNrXFxufVxcblxcbi50aGVtZVRvZ2dsZUljb24ge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgZmlsbDogdmFyKC0tbGlnaHQtZm9udC1jb2xvcilcXG59XFxuXFxuLyogUGFnZSBzdHlsaW5nICovXFxuXFxuaHRtbCB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4vKiBEYXJrIG1vZGUgc3R5bGluZyAqL1xcblxcbmJvZHkuZGFya01vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWRhcmspO1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkZXJDb250YWluZXIuZGFya01vZGUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxufVxcblxcbi5maWx0ZXJJY29uLmRhcmtNb2RlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuXFxuLmhlYWRlck5hbWUge1xcbiAgICBwYWRkaW5nOiAwIDJ2dztcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbm5hdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5tZW51YmFyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWVudUxpbmsge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMnZ3O1xcbn1cXG5cXG4ubWVudUxpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24taG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51TGluazphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tYWN0aXZlKTtcXG59XFxuXFxuLnRoZW1lVG9nZ2xlQnRuIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDJ2dztcXG59XFxuXFxuLnRoZW1lVG9nZ2xlQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWhvdmVyKTtcXG59XFxuXFxuLnRoZW1lVG9nZ2xlQnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1hY3RpdmUpO1xcbn1cXG5cXG4udGhlbWVUb2dnbGVCdG46aG92ZXIgPiAudGhlbWVUb2dnbGVJY29uIHtcXG4gICAgZmlsbDogdmFyKC0tbGlnaHQtZm9udC1ob3Zlcik7XFxufVxcblxcbi8qIENvbnRlbnQgc3R5bGluZyAqL1xcblxcbi8qIEludHJvIHN0eWxpbmcgKi9cXG5cXG4uaW50cm9CYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDR2dztcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaW50cm9Db250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXZ3O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW50cm9JbWFnZSB7XFxuICAgIGhlaWdodDogbWluKDMwdncsIDUwMHB4KTtcXG4gICAgd2lkdGg6IG1pbigzMHZ3LCA1MDBweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IG1pbigxNXZ3LCAyNTBweCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4uaW50cm9IZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uaW50cm9CbHVyYiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5pbnRyb0xpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwLjZ2aDtcXG59XFxuXFxuLmludHJvTGlua3MgPiBhOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpO1xcbn1cXG5cXG4udHJhbnNpdGlvbjEge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMCUsIDAgMTAwJSk7XFxufVxcblxcbi8qIFByb2plY3RzIHN0eWxpbmcgKi9cXG5cXG4ucHJvamVjdHNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHBhZGRpbmc6IDR2dztcXG4gICAgcGFkZGluZy10b3A6IDA7XFxufVxcblxcbi5wcm9qZWN0c0hlYWRlckNvbnRhaW5lciB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWZvbnQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0c1N1YmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZmlsdGVySWNvbnNDb250YWluZXIgPiBidXR0b24ge1xcbiAgICBtYXJnaW46IDAgMC44cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxufVxcblxcbi5maWx0ZXJJY29uIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdENhcmRDb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IG1pbigxMjUwcHgsIDEwMCUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogY2xhbXAoMXJlbSwgMnZ3LCAycmVtKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjQwcHgsIDFmcikpO1xcbn1cXG5cXG4vKiBQcm9qZWN0IGNhcmQgc3R5bGluZyAqL1xcblxcbi5wcm9qZWN0Q2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbmVsLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4ucHJvamVjdENhcmQ6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LWhvdmVyKTtcXG59XFxuXFxuLnByb2plY3RDYXJkOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctYWN0aXZlKTtcXG59XFxuXFxuLnByb2plY3RJbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZENvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC44cmVtO1xcbn1cXG5cXG4uY2FyZEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmRUaXRsZTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWhvdmVyKSA7XFxufVxcblxcbi5jYXJkVGl0bGVJY29ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNHJlbTtcXG59XFxuXFxuLmNhcmRUaXRsZUljb25zID4gYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jYXJkSWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4ucHJvamVjdERlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5wcm9qZWN0RGVzY3JpcHRpb246aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1ob3Zlcik7XFxufVxcblxcbi5jYXJkU2tpbGxJY29ucyB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC40cmVtO1xcbn1cXG5cXG4uY2FyZFNraWxsSWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4udHJhbnNpdGlvbjIge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXG59XFxuXFxuLyogQWJvdXQgbWUgc3R5bGluZyAqL1xcblxcbi5hYm91dE1lQmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIHBhZGRpbmc6IDAgNHZ3O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dE1lQ29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnBvcnRyYWl0SW1hZ2Uge1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgICBtYXgtd2lkdGg6IG1pbig5MHZ3LCA2NDBweCk7ICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICBtYXJnaW4tbGVmdDogbWluKDJ2dywgMnJlbSk7XFxuICAgIG1hcmdpbi1ib3R0b206IG1pbigxdncsIDFyZW0pO1xcblxcbiAgICAvKiBmb3IgdGV4dCB3cmFwOiAqL1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5hYm91dE1lSGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLmFib3V0TWVTcGFjZXIgeyBcXG4gICAgaGVpZ2h0OiA0dmg7XFxufVxcblxcbi5ibHVyYkNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbmVsLWJhY2tncm91bmQpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcXG59XFxuXFxuLyogQ29udGFjdCBjYXJkIHN0eWxpbmcgKi9cXG5cXG4uY29udGFjdEJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBwYWRkaW5nOiA0dnc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3RDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMjUwcHg7XFxufVxcblxcbi5jb250YWN0Q2FyZENvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbmVsLWJhY2tncm91bmQpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb25uZWN0SWNvbnMge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjRyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29ubmVjdEljb25zID4gYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC40cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uY29ubmVjdEljb25zID4gYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWhvdmVyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWhvdmVyKTtcXG59XFxuXFxuLmNvbm5lY3RJY29ucyA+IGE6YWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tYWN0aXZlKTtcXG59XFxuXFxuLmVtYWlsTGluazpob3ZlciA+IC5nbWFpbEljb24ge1xcbiAgICBmaWxsOiBmaXJlYnJpY2tcXG59XFxuXFxuLyogRm9vdGVyIHN0eWxpbmcgKi9cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIgPiBhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdpdGh1Ykljb24ge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ2l0aHViSWNvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi8qIE1vYmlsZSBzdXBwb3J0ICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICBuYXYge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAudGhlbWVUb2dnbGVCdG4ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmludHJvQ29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmludHJvSW1hZ2Uge1xcbiAgICAgICAgaGVpZ2h0OiA5MHZ3O1xcbiAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXZ3O1xcbiAgICB9XFxuXFxuICAgIC5hYm91dE1lQ29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnBvcnRyYWl0SW1hZ2Uge1xcbiAgICAgICAgbWFyZ2luOiB1bnNldDtcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICB9XFxuXFxuICAgIC5hYm91dE1lU3BhY2VyIHtcXG4gICAgICAgIGhlaWdodDogNXZ3O1xcbiAgICB9XFxuXFxuICAgIC5ibHVyYkNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW46IHVuc2V0O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJpbml0aWFsaXplIiwiSWNvbnMiLCJjb25zdHJ1Y3RvciIsImljb25DbGFzc2VzIiwiZGV2SWNvbnNMaW5rIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJlbCIsInR5cGUiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJpY29uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNyZWF0ZUljb24iLCJfdGhpcyIsImljb25DbGFzcyIsImljb25OYW1lIiwibmV3SWNvbiIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhZGRpdGlvbmFsQ2xhc3NlcyIsIkFycmF5IiwiX2tleSIsImFkZCIsInNldEF0dHJpYnV0ZSIsImluY2x1ZGVzIiwiZ2V0SWNvbiIsIl90aGlzMiIsIm5hbWUiLCJfbGVuMiIsIl9rZXkyIiwiR21haWxJY29uU3ZnIiwic3ZnTlMiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJfbGVuMyIsIl9rZXkzIiwic2V0QXR0cmlidXRlTlMiLCJqb2luIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsInBhdGgiLCJhcHBlbmRDaGlsZCIsIk9wZW5JY29uU3ZnIiwiX2xlbjQiLCJfa2V5NCIsInRoZW1lVG9nZ2xlSWNvblN2ZyIsIl9sZW41IiwiX2tleTUiLCJ3MV8zMDB3IiwidzFfNjAwdyIsIncxXzEyNTB3IiwiY3JlYXRlQWJvdXRNZUNvbnRlbnQiLCJhYm91dE1lQ29udGVudCIsInBvcnRyYWl0SW1hZ2UiLCJzcmMiLCJzcmNzZXQiLCJzaXplcyIsImFsdCIsImFib3V0TWVTcGFjZXIiLCJibHVyYkNvbnRhaW5lciIsImFib3V0TWVQMSIsImFib3V0TWVQMiIsImFib3V0TWVQMyIsImNyZWF0ZUFib3V0TWVDb250YWluZXIiLCJhYm91dE1lQmFja2dyb3VuZCIsImFib3V0TWVDb250YWluZXIiLCJpZCIsImFib3V0TWVIZWFkZXIiLCJpY29ucyIsImNyZWF0ZUNvbm5lY3RJY29ucyIsImNvbm5lY3RJY29ucyIsImVtYWlsTGluayIsImVtYWlsVGV4dCIsImNyZWF0ZVRleHROb2RlIiwiZ2l0aHViTGluayIsInRhcmdldCIsImdpdGh1YlRleHQiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwibGlua2VkaW5MaW5rIiwibGlua2VkaW5UZXh0IiwiY3JlYXRlQ29udGFjdENhcmQiLCJjb250YWN0Q2FyZENvbnRhaW5lciIsImNvbnRhY3RDYXJkSGVhZGVyIiwiY3JlYXRlQ29udGFjdENvbnRhaW5lciIsImNvbnRhY3RCYWNrZ3JvdW5kIiwiY29udGFjdENvbnRhaW5lciIsImg0X3NxXzMwMHciLCJoNF9zcV82MDB3IiwiaDRfc3FfMTI1MHciLCJjdiIsImNyZWF0ZUludHJvQ29udGFpbmVyIiwiaW50cm9CYWNrZ3JvdW5kIiwiaW50cm9Db250YWluZXIiLCJpbnRyb0ltYWdlIiwiaW50cm9CbHVyYkNvbnRhaW5lciIsImludHJvSGVhZGVyIiwiaW50cm9CbHVyYiIsImludHJvTGlua3MiLCJpbnRyb1Jlc3VtZUxpbmsiLCJkb3dubG9hZCIsImludHJvRW1haWxMaW5rIiwicHJvamVjdHMiLCJjcmVhdGVQcm9qZWN0Q2FyZCIsInByb2plY3QiLCJwcm9qZWN0Q2FyZCIsInByb2plY3RJbWciLCJpbWciLCJtZWRpdW0iLCJzbWFsbCIsImFsdEltZ1RleHQiLCJjYXJkQ29udGVudCIsImNhcmRIZWFkZXIiLCJjYXJkVGl0bGVMaW5rIiwibGl2ZV91cmwiLCJjYXJkVGl0bGUiLCJjYXJkVGl0bGVJY29ucyIsImNhcmRHaXRodWJMaW5rIiwiY29kZV91cmwiLCJjYXJkTGl2ZUxpbmsiLCJkZXNjcmlwdGlvbkxpbmsiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJkZXNjIiwiY2FyZFNraWxsSWNvbnMiLCJmb3JFYWNoIiwiZGlzcGxheVByb2plY3RzIiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3RDYXJkQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIm5ld1Byb2plY3RDYXJkIiwiZGlzcGxheUFsbFByb2plY3RzIiwiZmlsdGVyUHJvamVjdHNCeUljb24iLCJjaG9zZW5JY29uTmFtZSIsInN0YW5kYXJkaXplZEljb25OYW1lIiwicmVwbGFjZSIsImZpbHRlciIsInNlbGVjdGVkSWNvbiIsImhhbmRsZUljb25DbGljayIsImNob3Nlbkljb24iLCJpY29uRGF0YSIsImdldEF0dHJpYnV0ZSIsImFsbEljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZVByb2plY3RzSGVhZGVyIiwicHJvamVjdHNIZWFkZXJDb250YWluZXIiLCJwcm9qZWN0c0hlYWRlciIsInByb2plY3RzU3ViaGVhZGVyIiwiZmlsdGVySWNvbnNDb250YWluZXIiLCJpY29uTmFtZXMiLCJidXR0b24iLCJjb250YWlucyIsImNyZWF0ZVByb2plY3RDYXJkQ29udGFpbmVyIiwiY3JlYXRlUHJvamVjdHNDb250YWluZXIiLCJwcm9qZWN0c0NvbnRhaW5lciIsImdpdGh1Ykljb24iLCJjcmVhdGVOYXYiLCJuYXYiLCJtZW51YmFyIiwibWVudUl0ZW1zIiwibWVudUl0ZW0iLCJuZXdNZW51SXRlbSIsIm1lbnVMaW5rIiwidG9Mb3dlckNhc2UiLCJzZXRUaGVtZVByZWZlcmVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJ0aGVtZVByZWZlcmVuY2UiLCJ1bmRlZmluZWQiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImxvYWRUaGVtZSIsImJvZHkiLCJmaWx0ZXJJY29ucyIsInRvZ2dsZVRoZW1lIiwiY3VycmVudFRoZW1lIiwiY3JlYXRlVGhlbWVUb2dnbGVCdG4iLCJ0aGVtZVRvZ2dsZUJ0biIsImNyZWF0ZUhlYWRlciIsImhlYWRlciIsInJvbGUiLCJoZWFkZXJOYW1lTGluayIsImNyZWF0ZVRyYW5zaXRpb24iLCJzdHlsaW5nQ2xhc3MiLCJ0cmFuc2l0aW9uIiwiY3JlYXRlQ29udGVudCIsImNvbnRlbnRDb250YWluZXIiLCJjcmVhdGVGb290ZXIiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJuZXdHaXRodWJJY29uIiwiaGVhZCIsImFkbWluZGFzaGJvYXJkXzMwMHciLCJhZG1pbmRhc2hib2FyZF82MDB3IiwiYWRtaW5kYXNoYm9hcmRfMTI1MHciLCJiYXR0bGVzaGlwXzMwMHciLCJiYXR0bGVzaGlwXzYwMHciLCJiYXR0bGVzaGlwXzEyNTB3IiwiYm9vdF9yb2FjaF9ib21iXzMwMHciLCJib290X3JvYWNoX2JvbWJfNjAwdyIsImJvb3Rfcm9hY2hfYm9tYl8xMjUwdyIsImNhbGN1bGF0b3JfMzAwdyIsImNhbGN1bGF0b3JfNjAwdyIsImNhbGN1bGF0b3JfMTI1MHciLCJjaGVzc18zMDB3IiwiY2hlc3NfNjAwdyIsImNvbm5lY3RfZm91cl8zMDB3IiwiY29ubmVjdF9mb3VyXzYwMHciLCJjb25uZWN0X2ZvdXJfMTI1MHciLCJjdl9idWlsZGVyXzMwMHciLCJjdl9idWlsZGVyXzYwMHciLCJjdl9idWlsZGVyXzEyNTB3IiwiaGFuZ21hbl8zMDB3IiwiaGFuZ21hbl82MDB3IiwiaGFuZ21hbl8xMjUwdyIsIm1hc3Rlcm1pbmRfMzAwdyIsIm1hc3Rlcm1pbmRfNjAwdyIsIm9kaW5ib29rXzMwMHciLCJvZGluYm9va182MDB3Iiwib2RpbmJvb2tfMTI1MHciLCJyZXN0YXVyYW50XzMwMHciLCJyZXN0YXVyYW50XzYwMHciLCJyZXN0YXVyYW50XzEyNTB3Iiwic2lnbl91cF9mb3JtXzMwMHciLCJzaWduX3VwX2Zvcm1fNjAwdyIsInNpZ25fdXBfZm9ybV8xMjUwdyIsInNrZXRjaF9wYWRfMzAwdyIsInNrZXRjaF9wYWRfNjAwdyIsInNrZXRjaF9wYWRfMTI1MHciLCJ0aWN0YWN0b2VfMzAwdyIsInRpY3RhY3RvZV82MDB3IiwidGljdGFjdG9lXzEyNTB3IiwidG9kb2xpc3RfMzAwdyIsInRvZG9saXN0XzYwMHciLCJ0b2RvbGlzdF8xMjUwdyIsIndlYXRoZXJzZXJ2ZV8zMDB3Iiwid2VhdGhlcnNlcnZlXzYwMHciLCJ3ZWF0aGVyc2VydmVfMTI1MHciLCJ3b3JtaG9sZV9saWdodF8zMDB3Iiwid29ybWhvbGVfbGlnaHRfNjAwdyIsIndvcm1ob2xlX2xpZ2h0XzEyNTB3IiwibGFyZ2UiXSwic291cmNlUm9vdCI6IiJ9