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
/* harmony import */ var _assets_h3_sq_300w_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/h3_sq_300w.png */ "./src/assets/h3_sq_300w.png");
/* harmony import */ var _assets_h3_sq_600w_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/h3_sq_600w.png */ "./src/assets/h3_sq_600w.png");
/* harmony import */ var _assets_h3_sq_1250w_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/h3_sq_1250w.png */ "./src/assets/h3_sq_1250w.png");
/* harmony import */ var _assets_cv_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/cv.pdf */ "./src/assets/cv.pdf");




const createIntroContainer = () => {
  const introBackground = document.createElement('div');
  introBackground.classList.add('introBackground');
  const introContainer = document.createElement('div');
  introContainer.classList.add('introContainer');
  const introImage = document.createElement('img');
  introImage.classList.add('introImage');
  introImage.src = _assets_h3_sq_1250w_png__WEBPACK_IMPORTED_MODULE_2__;
  introImage.srcset = `${_assets_h3_sq_1250w_png__WEBPACK_IMPORTED_MODULE_2__} 1250w,
                         ${_assets_h3_sq_600w_png__WEBPACK_IMPORTED_MODULE_1__} 600w,
                         ${_assets_h3_sq_300w_png__WEBPACK_IMPORTED_MODULE_0__} 300w`;
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
`, "",{"version":3,"sources":["webpack://./src/stylesheets/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Qwigley&display=swap');\n\n/* Variables */\n\n:root {\n    --primary-blue: rgb(0, 123, 255);\n    --light-blue: rgb(224, 247, 255);\n    --dark-blue: rgb(0, 64, 133);\n    --panel-background: hsl(0, 0%, 100%, 0.2);\n\n    --background-color: lightgray;\n    --background-color-dark: gray;\n\n    --selection-hover: hsla(0, 0%, 100%, 0.1);\n    --selection-active: hsla(0, 0%, 100%, 0.2);\n\n    --box-shadow: 2px 2px 6px rgb(32, 32, 32);\n    --box-shadow-hover: 2px 2px 6px black;\n    --box-shadow-active: 1px 1px 6px black;\n\n    --dark-font-color: rgb(32, 32, 32);\n    --dark-font-hover: black;\n    --light-font-color: whitesmoke;\n    --light-font-hover: white;\n\n    /* css dark blues */\n    --default-dark-blue: darkblue;\n    --default-midnight-blue: midnightblue;\n    --default-navy: navy;\n\n    /* css light blues */\n    --default-cornflower-blue: cornflowerblue;\n    --default-deep-sky-blue: deepskyblue;\n    --default-dodger-blue: dodgerblue;\n    --default-light-sky-blue: lightskyblue;\n    --default-sky-blue: skyblue;\n\n    /* css very lights */\n    --default-alice-blue: aliceblue;\n    --default-azure: azure;\n    --default-light-blue: lightblue;\n    --default-light-cyan: lightcyan;\n    --default-mint-cream: mintcream;\n    --default-pale-turquoise: paleturquoise;\n    --default-powder-blue: powderblue;\n    --default-snow: snow;\n    --default-white: white;\n}\n\n/* Default stylings */\n\n* {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif !important;\n}\n\n.qwigley-regular {\n    font-size: 3rem;\n    font-family: \"Qwigley\", cursive !important;\n    font-weight: 400;\n    font-style: normal;\n}\n\nh1 {\n    font-size: 2em;\n    font-weight: bold;\n    margin: 0.67em 0;\n}\n\nh2 {\n    font-size: 1.5em;\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.17em;\n    font-weight: bold;\n}\n\nh4 {\n    font-weight: bold;\n  }\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n\nbutton {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n}\n\n/* SVG styling */\n\n.gmailIcon {\n    height: 1.8rem;\n    fill: var(--light-font-color);\n}\n\n.gmailIcon:hover {\n    fill: firebrick;\n}\n\n.openIcon {\n    width: 2rem;\n    fill: var(--light-font-color)\n}\n\n.openIcon:hover {\n    fill: black\n}\n\n.themeToggleIcon {\n    width: 2rem;\n    fill: var(--light-font-color)\n}\n\n/* Page styling */\n\nhtml {\n    scroll-behavior: smooth;\n}\n\nbody {\n    background-color: var(--background-color);\n    color: var(--light-font-color);\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    line-height: normal;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n}\n\n/* Dark mode styling */\n\nbody.darkMode {\n    background-color: var(--background-color-dark);\n}\n\n.projectsHeaderContainer.darkMode {\n    color: var(--light-font-color);\n}\n\n.filterIcon.darkMode {\n    color: var(--light-font-color);\n}\n\n/* Header styling */\n\nheader {\n    height: 4rem;\n    display: flex;\n    align-items: center;\n    background-color: var(--dark-blue);\n}\n\n.headerName {\n    padding: 0 2vw;\n    padding-top: 1rem;\n}\n\nnav {\n    height: 100%;\n    margin-left: auto;\n}\n\n.menubar {\n    height: 100%;\n    display: flex;\n}\n\n.menuLink {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding: 0 2vw;\n}\n\n.menuLink:hover {\n    background-color: var(--selection-hover);\n    cursor: pointer;\n}\n\n.menuLink:active {\n    background-color: var(--selection-active);\n}\n\n.themeToggleBtn {\n    height: 100%;\n    padding: 0 2vw;\n}\n\n.themeToggleBtn:hover {\n    background-color: var(--selection-hover);\n}\n\n.themeToggleBtn:active {\n    background-color: var(--selection-active);\n}\n\n.themeToggleBtn:hover > .themeToggleIcon {\n    fill: var(--light-font-hover);\n}\n\n/* Content styling */\n\n/* Intro styling */\n\n.introBackground {\n    background-color: var(--dark-blue);\n    width: 100%;\n    box-sizing: border-box;\n    padding: 4vw;\n    padding-bottom: 0;\n    display: flex;\n    justify-content: center;\n}\n\n.introContainer {\n    max-width: 1250px;\n    font-size: 1.3rem;\n    display: flex;\n    gap: 5vw;\n    align-items: center;\n}\n\n.introImage {\n    height: min(30vw, 500px);\n    width: min(30vw, 500px);\n    border-radius: min(15vw, 250px);\n    box-shadow: var(--box-shadow);\n}\n\n.introHeader {\n    margin-bottom: 2rem;\n}\n\n.introBlurb {\n    margin-bottom: 2rem;\n}\n\n.introLinks {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    text-decoration: underline;\n    text-underline-offset: 0.6vh;\n}\n\n.introLinks > a:hover {\n    color: var(--light-font-hover);\n}\n\n.transition1 {\n    height: 4rem;\n    width: 100%;\n    background-color: var(--dark-blue);\n    clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);\n}\n\n/* Projects styling */\n\n.projectsContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    padding: 4vw;\n    padding-top: 0;\n}\n\n.projectsHeaderContainer {\n    color: var(--dark-font-color);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    text-align: center;\n    width: 100%;\n}\n\n.projectsSubheader {\n    font-size: 0.9rem;\n}\n\n.filterIconsContainer > button {\n    margin: 0 0.8rem;\n    margin-bottom: 0.8rem;\n}\n\n.filterIcon {\n    font-size: 3rem;\n}\n\n.projectCardContainer {\n    max-width: min(1250px, 100%);\n    display: grid;\n    grid-gap: clamp(1rem, 2vw, 2rem);\n    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n}\n\n/* Project card styling */\n\n.projectCard {\n    background-color: var(--panel-background);\n    border-radius: 8px;\n    overflow: hidden;\n\n    display: flex;\n    flex-direction: column;\n\n    box-shadow: var(--box-shadow);\n}\n\n.projectCard:hover {\n    box-shadow: var(--box-shadow-hover);\n}\n\n.projectCard:active {\n    box-shadow: var(--box-shadow-active);\n}\n\n.projectImage {\n    width: 100%;\n}\n\n.cardContent {\n    background-color: var(--dark-blue);\n    flex: 1;\n    padding: 0.8rem;\n    display: flex;\n    flex-direction: column;\n    gap: 0.8rem;\n}\n\n.cardHeader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.cardTitle:hover {\n    color: var(--light-font-hover) ;\n}\n\n.cardTitleIcons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.4rem;\n}\n\n.cardTitleIcons > a {\n    display: flex;\n}\n\n.cardIcon {\n    font-size: 1.7rem;\n}\n\n.projectDescription {\n    font-size: 1.1rem;\n}\n\n.projectDescription:hover {\n    color: var(--light-font-hover);\n}\n\n.cardSkillIcons {\n    margin-top: auto;\n    display: flex;\n    gap: 0.4rem;\n}\n\n.cardSkillIcon {\n    font-size: 1.4rem;\n}\n\n.transition2 {\n    height: 4rem;\n    width: 100%;\n    background-color: var(--dark-blue);\n    clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%);\n}\n\n/* About me styling */\n\n.aboutMeBackground {\n    background-color: var(--dark-blue);\n    padding: 0 4vw;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n}\n\n.aboutMeContainer {\n    max-width: 1250px;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.portraitImage {\n    width: 40vw;\n    max-width: 90vw;\n    max-width: min(90vw, 640px);    \n    border-radius: 8px;\n    box-shadow: var(--box-shadow);\n    margin-left: min(2vw, 2rem);\n    margin-bottom: min(1vw, 1rem);\n\n    /* for text wrap: */\n    float: right;\n}\n\n.aboutMeHeader {\n    text-align: center;\n    margin: 1rem 0;\n}\n\n.aboutMeSpacer { \n    height: 4vh;\n}\n\n.blurbContainer {\n    background-color: var(--panel-background);\n    box-shadow: var(--box-shadow);\n    border-radius: 8px;\n    padding: 0.8rem;\n    font-size: 1.3rem;\n    margin-right: 5vw;\n}\n\n/* Contact card styling */\n\n.contactBackground {\n    background-color: var(--dark-blue);\n    padding: 4vw;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n}\n\n.contactContainer {\n    width: 100%;\n    max-width: 1250px;\n}\n\n.contactCardContainer {\n    background-color: var(--panel-background);\n    box-shadow: var(--box-shadow);\n    border-radius: 8px;\n    padding: 1rem 2rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    align-items: center;\n\n    /* width: 100%; */\n    box-sizing: border-box;\n}\n\n.connectIcons {\n    font-size: 1.4rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 0.4rem;\n    align-items: center;\n    width: 100%;\n}\n\n.connectIcons > a {\n    display: flex;\n    gap: 0.4rem;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 0.4rem;\n    border-radius: 6px;\n}\n\n.connectIcons > a:hover {\n    color: var(--light-font-hover);\n    background-color: var(--selection-hover);\n}\n\n.connectIcons > a:active {\n    color: var(--light-font-hover);\n    background-color: var(--selection-active);\n}\n\n.emailLink:hover > .gmailIcon {\n    fill: firebrick\n}\n\n/* Footer styling */\n\nfooter {\n    background-color: var(--dark-blue);\n    height: 3rem;\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\nfooter > a {\n    display: flex;\n}\n\n.githubIcon {\n    height: 24px;\n    transition: transform 0.3s ease-in-out;\n}\n\n.githubIcon:hover {\n    transform: rotate(-360deg) scale(1.2);\n}\n\n/* Mobile support */\n\n@media only screen and (max-width: 700px) {\n    nav {\n        display: none;\n    }\n\n    .themeToggleBtn {\n        margin-left: auto;\n    }\n\n    .introContainer {\n        flex-direction: column;\n    }\n\n    .introImage {\n        height: 90vw;\n        width: 90vw;\n        border-radius: 45vw;\n    }\n\n    .aboutMeContent {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .portraitImage {\n        margin: unset;\n        width: 90vw;\n    }\n\n    .aboutMeSpacer {\n        height: 5vw;\n    }\n\n    .blurbContainer {\n        margin: unset;\n    }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/h3_sq_1250w.png":
/*!************************************!*\
  !*** ./src/assets/h3_sq_1250w.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50d92f259bc82b9f8fc0.png";

/***/ }),

/***/ "./src/assets/h3_sq_300w.png":
/*!***********************************!*\
  !*** ./src/assets/h3_sq_300w.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf1983d6eca62ae9fb78.png";

/***/ }),

/***/ "./src/assets/h3_sq_600w.png":
/*!***********************************!*\
  !*** ./src/assets/h3_sq_600w.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a7266520a65236df48c.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrR0FBa0csS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLGNBQWMsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGNBQWMsV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLFdBQVcsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8s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QTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3JpcHRzL0ljb25zLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlBYm91dE1lLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlDb250YWN0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlJbnRyby5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2NyaXB0cy9kaXNwbGF5UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvcGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2NyaXB0cy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGVzaGVldHMvcmVzZXQuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGVzaGVldHMvcmVzZXQuY3NzPzBmMTAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLmNzcz9iZmZjIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlc2hlZXRzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvc3R5bGUuY3NzJztcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vc2NyaXB0cy9wYWdlTG9hZGVyLmpzJ1xuXG5pbml0aWFsaXplKClcbiIsImNsYXNzIEljb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pY29uQ2xhc3NlcyA9IHtcbiAgICAgICAgICAgICdib290c3RyYXAnOiAnZGV2aWNvbi1ib290c3RyYXAtcGxhaW4nLFxuICAgICAgICAgICAgJ2Jvb3RzdHJhcC13b3JkbWFyayc6ICdkZXZpY29uLWJvb3RzdHJhcC1wbGFpbi13b3JkbWFyaycsXG4gICAgICAgICAgICAnY3NzJzogJ2Rldmljb24tY3NzMy1wbGFpbicsXG4gICAgICAgICAgICAnY3NzLXdvcmRtYXJrJzogJ2Rldmljb24tY3NzMy1wbGFpbi13b3JkbWFyaycsXG4gICAgICAgICAgICAnZ2l0JzogJ2Rldmljb24tZ2l0LXBsYWluJyxcbiAgICAgICAgICAgICdnaXQtd29yZG1hcmsnOiAnZGV2aWNvbi1naXQtcGxhaW4td29yZG1hcmsnLFxuICAgICAgICAgICAgJ2dpdGh1Yic6ICdkZXZpY29uLWdpdGh1Yi1vcmlnaW5hbCcsXG4gICAgICAgICAgICAnZ2l0aHViLXdvcmRtYXJrJzogJ2Rldmljb24tZ2l0aHViLW9yaWdpbmFsLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICdodG1sJzogJ2Rldmljb24taHRtbDUtcGxhaW4nLFxuICAgICAgICAgICAgJ2h0bWwtd29yZG1hcmsnOiAnZGV2aWNvbi1odG1sNS1wbGFpbi13b3JkbWFyaycsXG4gICAgICAgICAgICAnamF2YXNjcmlwdCc6ICdkZXZpY29uLWphdmFzY3JpcHQtcGxhaW4nLFxuICAgICAgICAgICAgJ2plc3QnOiAnZGV2aWNvbi1qZXN0LXBsYWluJyxcbiAgICAgICAgICAgICdqc29uJzogJ2Rldmljb24tanNvbi1wbGFpbicsXG4gICAgICAgICAgICAnanNvbi13b3JkbWFyayc6ICdkZXZpY29uLWpzb24tcGxhaW4td29yZG1hcmsnLFxuICAgICAgICAgICAgJ2xpbmtlZGluJzogJ2Rldmljb24tbGlua2VkaW4tcGxhaW4nLFxuICAgICAgICAgICAgJ2xpbmtlZGluLXdvcmRtYXJrJzogJ2Rldmljb24tbGlua2VkaW4tcGxhaW4td29yZG1hcmsnLFxuICAgICAgICAgICAgJ3BzcWwnOiAnZGV2aWNvbi1wb3N0Z3Jlc3FsLXBsYWluJyxcbiAgICAgICAgICAgICdwc3FsLXdvcmRtYXJrJzogJ2Rldmljb24tcG9zdGdyZXNxbC1wbGFpbi13b3JkbWFyaycsXG4gICAgICAgICAgICAncmFpbHMnOiAnZGV2aWNvbi1yYWlscy1wbGFpbicsXG4gICAgICAgICAgICAncmFpbHMtd29yZG1hcmsnOiAnZGV2aWNvbi1yYWlscy1wbGFpbi13b3JkbWFyaycsXG4gICAgICAgICAgICAncmVhY3QnOiAnZGV2aWNvbi1yZWFjdC1vcmlnaW5hbCcsXG4gICAgICAgICAgICAncmVhY3Qtd29yZG1hcmsnOiAnZGV2aWNvbi1yZWFjdC1vcmlnaW5hbC13b3JkbWFyaycsXG4gICAgICAgICAgICAncnNwZWMnOiAnZGV2aWNvbi1yc3BlYy1wbGFpbicsXG4gICAgICAgICAgICAncnNwZWMtd29yZG1hcmsnOiAnZGV2aWNvbi1yc3BlYy1wbGFpbi13b3JkbWFyaycsXG4gICAgICAgICAgICAncnVieSc6ICdkZXZpY29uLXJ1YnktcGxhaW4nLFxuICAgICAgICAgICAgJ3J1Ynktd29yZG1hcmsnOiAnZGV2aWNvbi1ydWJ5LXBsYWluLXdvcmRtYXJrJyxcbiAgICAgICAgICAgICd3ZWJwYWNrJzogJ2Rldmljb24td2VicGFjay1wbGFpbicsXG4gICAgICAgICAgICAnd2VicGFjay13b3JkbWFyayc6ICdkZXZpY29uLXdlYnBhY2stcGxhaW4td29yZG1hcmsnLFxuICAgICAgICAgICAgJ3lhbWwnOiAnZGV2aWNvbi15YW1sLXBsYWluJyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldkljb25zTGluayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0J1xuICAgICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnXG4gICAgICAgIGxpbmsuaHJlZiA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvZGV2aWNvbi5taW4uY3NzJ1xuICAgICAgICByZXR1cm4gbGlua1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzID0gKGljb24pID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdjb2xvcmVkJylcbiAgICAgICAgfSlcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdjb2xvcmVkJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjcmVhdGVJY29uID0gKGljb25DbGFzcywgaWNvbk5hbWUsIC4uLmFkZGl0aW9uYWxDbGFzc2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICAgICAgbmV3SWNvbi5jbGFzc0xpc3QuYWRkKGljb25DbGFzcywgLi4uYWRkaXRpb25hbENsYXNzZXMpXG4gICAgICAgIG5ld0ljb24uc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCBpY29uTmFtZSlcbiAgICAgICAgaWYgKCFhZGRpdGlvbmFsQ2xhc3Nlcy5pbmNsdWRlcygnZmlsdGVySWNvbicpICYmICFhZGRpdGlvbmFsQ2xhc3Nlcy5pbmNsdWRlcygnY29udGFjdEljb24nKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyhuZXdJY29uKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdJY29uXG4gICAgfVxuXG4gICAgZ2V0SWNvbiA9IChuYW1lLCAuLi5hZGRpdGlvbmFsQ2xhc3NlcykgPT4ge1xuICAgICAgICBpZiAodGhpcy5pY29uQ2xhc3Nlc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSWNvbih0aGlzLmljb25DbGFzc2VzW25hbWVdLCBuYW1lLCAuLi5hZGRpdGlvbmFsQ2xhc3NlcylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIFNWRyBpY29uc1xuXG4gICAgR21haWxJY29uU3ZnID0gKC4uLmljb25DbGFzc2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwic3ZnXCIpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJjbGFzc1wiLCBpY29uQ2xhc3Nlcy5qb2luKCcgJykpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiZ21haWxcIjtcblxuICAgICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInBhdGhcIik7XG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlTlMobnVsbCwgXCJkXCIsIFwiTTIwLDE4SDE4VjkuMjVMMTIsMTNMNiw5LjI1VjE4SDRWNkg1LjJMMTIsMTAuMjVMMTguOCw2SDIwTTIwLDRINEMyLjg5LDQgMiw0Ljg5IDIsNlYxOEEyLDIgMCAwLDAgNCwyMEgyMEEyLDIgMCAwLDAgMjIsMThWNkMyMiw0Ljg5IDIxLjEsNCAyMCw0WlwiKTtcblxuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG5cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG5cbiAgICBPcGVuSWNvblN2ZyA9ICguLi5pY29uQ2xhc3NlcykgPT4ge1xuICAgICAgICBjb25zdCBzdmdOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInN2Z1wiKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiY2xhc3NcIiwgaWNvbkNsYXNzZXMuam9pbignICcpKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJvcGVuLWluLW5ld1wiO1xuICAgIFxuICAgICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInBhdGhcIik7XG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlTlMobnVsbCwgXCJkXCIsIFwiTTE0LDNWNUgxNy41OUw3Ljc2LDE0LjgzTDkuMTcsMTYuMjRMMTksNi40MVYxMEgyMVYzTTE5LDE5SDVWNUgxMlYzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWMTJIMTlWMTlaXCIpO1xuICAgIFxuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG4gICAgXG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuXG4gICAgdGhlbWVUb2dnbGVJY29uU3ZnID0gKC4uLmljb25DbGFzc2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwic3ZnXCIpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJjbGFzc1wiLCBpY29uQ2xhc3Nlcy5qb2luKCcgJykpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xuICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcInRoZW1lLWxpZ2h0LWRhcmtcIjtcbiAgICBcbiAgICAgICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJwYXRoXCIpO1xuICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZFwiLCBcIk03LjUsMkM1LjcxLDMuMTUgNC41LDUuMTggNC41LDcuNUM0LjUsOS44MiA1LjcxLDExLjg1IDcuNTMsMTNDNC40NiwxMyAyLDEwLjU0IDIsNy41QTUuNSw1LjUgMCAwLDEgNy41LDJNMTkuMDcsMy41TDIwLjUsNC45M0w0LjkzLDIwLjVMMy41LDE5LjA3TDE5LjA3LDMuNU0xMi44OSw1LjkzTDExLjQxLDVMOS45Nyw2TDEwLjM5LDQuM0w5LDMuMjRMMTAuNzUsMy4xMkwxMS4zMywxLjQ3TDEyLDMuMUwxMy43MywzLjEzTDEyLjM4LDQuMjZMMTIuODksNS45M005LjU5LDkuNTRMOC40Myw4LjgxTDcuMzEsOS41OUw3LjY1LDguMjdMNi41Niw3LjQ0TDcuOTIsNy4zNUw4LjM3LDYuMDZMOC44OCw3LjMzTDEwLjI0LDcuMzZMOS4xOSw4LjIzTDkuNTksOS41NE0xOSwxMy41QTUuNSw1LjUgMCAwLDEgMTMuNSwxOUMxMi4yOCwxOSAxMS4xNSwxOC42IDEwLjI0LDE3LjkzTDE3LjkzLDEwLjI0QzE4LjYsMTEuMTUgMTksMTIuMjggMTksMTMuNU0xNC42LDIwLjA4TDE3LjM3LDE4LjkzTDE3LjEzLDIyLjI4TDE0LjYsMjAuMDhNMTguOTMsMTcuMzhMMjAuMDgsMTQuNjFMMjIuMjgsMTcuMTVMMTguOTMsMTcuMzhNMjAuMDgsMTIuNDJMMTguOTQsOS42NEwyMi4yOCw5Ljg4TDIwLjA4LDEyLjQyTTkuNjMsMTguOTNMMTIuNCwyMC4wOEw5Ljg3LDIyLjI3TDkuNjMsMTguOTNaXCIpO1xuICAgIFxuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG4gICAgXG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbnNcbiIsImltcG9ydCB3MV8zMDB3IGZyb20gJy4uL2Fzc2V0cy93MV8zMDB3LnBuZydcbmltcG9ydCB3MV82MDB3IGZyb20gJy4uL2Fzc2V0cy93MV82MDB3LnBuZydcbmltcG9ydCB3MV8xMjUwdyBmcm9tICcuLi9hc3NldHMvdzFfMTI1MHcucG5nJ1xuXG5jb25zdCBjcmVhdGVBYm91dE1lQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBhYm91dE1lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRNZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWJvdXRNZUNvbnRlbnQnKVxuXG4gICAgY29uc3QgcG9ydHJhaXRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgcG9ydHJhaXRJbWFnZS5jbGFzc0xpc3QuYWRkKCdwb3J0cmFpdEltYWdlJylcbiAgICBwb3J0cmFpdEltYWdlLnNyYyA9IHcxXzEyNTB3XG4gICAgcG9ydHJhaXRJbWFnZS5zcmNzZXQgPSBgJHt3MV8xMjUwd30gMTI1MHcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt3MV82MDB3fSA2MDB3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dzFfMzAwd30gMzAwd2BcbiAgICBwb3J0cmFpdEltYWdlLnNpemVzID0gYChtYXgtd2lkdGg6IDMyMHB4KSAzMDBweCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXgtd2lkdGg6IDY0MHB4KSA2MDBweCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyNTBweGBcbiAgICBwb3J0cmFpdEltYWdlLmFsdCA9ICdQb3J0cmFpdCBpbWFnZS4nXG5cbiAgICBjb25zdCBhYm91dE1lU3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dE1lU3BhY2VyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0TWVTcGFjZXInKVxuXG4gICAgY29uc3QgYmx1cmJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJsdXJiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JsdXJiQ29udGFpbmVyJylcblxuICAgIGNvbnN0IGFib3V0TWVQMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGFib3V0TWVQMS5jbGFzc0xpc3QuYWRkKCdhYm91dE1lUDEnKVxuICAgIGFib3V0TWVQMS50ZXh0Q29udGVudCA9IGBIZWxsbyEgTXkgbmFtZSBpcyBKYXNvbiBDYW1wYmVsbCwgYW5kIEkgYW0gYSBmdWxsLXN0YWNrIHNvZnR3YXJlIGRldmVsb3BlciBiYXNlZCBpbiB0aGUgU2FuIEZyYW5jaXNjbyBCYXkgQXJlYS4gTXkgaW50ZXJlc3QgaW4gdGVjaG5vbG9neSBiZWdhbiBpbiBtaWRkbGUgc2Nob29sLCB3aGVuIEkgdXNlZCBzZWxmLXRhdWdodCBIVE1MIGFuZCBDU1MgdG8gY3JlYXRlIGEgY3VzdG9tIE15U3BhY2UgcGFnZSB0byBpbXByZXNzIG15IGZyaWVuZHMuYFxuXG4gICAgY29uc3QgYWJvdXRNZVAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWJvdXRNZVAyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0TWVQMicpXG4gICAgYWJvdXRNZVAyLnRleHRDb250ZW50ID0gYEFmdGVyIGVhcm5pbmcgYSBkZWdyZWUgaW4gQnVzaW5lc3MgQWRtaW5pc3RyYXRpb24gKEZpbmFuY2UpLCBJIHNwZW50IGZpdmUgeWVhcnMgYXMgYSBtYXRoIHRlYWNoZXIgZm9yIHNldmVudGggYW5kIGVpZ2h0aCBncmFkZSBzdHVkZW50cywgd2hlcmUgSSB1dGlsaXplZCBwcm9ibGVtLXNvbHZpbmcgYW5kIGNvbW11bmljYXRpb24gc2tpbGxzLiBNeSBpbnRlcmVzdCBpbiB0ZWNobm9sb2d5IGNvbnRpbnVlZCB0byBncm93IGR1cmluZyB0aGlzIHRpbWUsIGxlYWRpbmcgbWUgdG8gdHJhbnNpdGlvbiBpbnRvIHNvZnR3YXJlIGRldmVsb3BtZW50LmBcblxuICAgIGNvbnN0IGFib3V0TWVQMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGFib3V0TWVQMy5jbGFzc0xpc3QuYWRkKCdhYm91dE1lUDMnKVxuICAgIGFib3V0TWVQMy50ZXh0Q29udGVudCA9IGBJbiBteSBmcmVlIHRpbWUsIEkgZW5qb3kgcGxheWluZyBkaXNjIGdvbGYsIGhpa2luZywgYXR0ZW5kaW5nIGNvbmNlcnRzLCBhbmQgZ2FtaW5nLmBcblxuICAgIGJsdXJiQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVQMSlcbiAgICBibHVyYkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKVxuICAgIGJsdXJiQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVQMilcbiAgICBibHVyYkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKVxuICAgIGJsdXJiQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVQMylcbiAgICBcbiAgICBhYm91dE1lQ29udGVudC5hcHBlbmRDaGlsZChwb3J0cmFpdEltYWdlKVxuICAgIGFib3V0TWVDb250ZW50LmFwcGVuZENoaWxkKGFib3V0TWVTcGFjZXIpXG4gICAgYWJvdXRNZUNvbnRlbnQuYXBwZW5kQ2hpbGQoYmx1cmJDb250YWluZXIpXG5cbiAgICByZXR1cm4gYWJvdXRNZUNvbnRlbnRcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFib3V0TWVDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYWJvdXRNZUJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0TWVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2Fib3V0TWVCYWNrZ3JvdW5kJylcblxuICAgIGNvbnN0IGFib3V0TWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0TWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXRNZUNvbnRhaW5lcicpXG4gICAgYWJvdXRNZUNvbnRhaW5lci5pZCA9ICdhYm91dG1lJ1xuXG4gICAgY29uc3QgYWJvdXRNZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBhYm91dE1lSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0TWVIZWFkZXInKVxuICAgIGFib3V0TWVIZWFkZXIudGV4dENvbnRlbnQgPSAnQWJvdXQgbWUnXG5cbiAgICBhYm91dE1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVIZWFkZXIpXG4gICAgYWJvdXRNZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBYm91dE1lQ29udGVudCgpKVxuXG4gICAgYWJvdXRNZUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoYWJvdXRNZUNvbnRhaW5lcilcblxuICAgIHJldHVybiBhYm91dE1lQmFja2dyb3VuZFxufVxuIiwiaW1wb3J0IEljb25zIGZyb20gJy4vSWNvbnMnXG5jb25zdCBpY29ucyA9IG5ldyBJY29uc1xuXG5jb25zdCBjcmVhdGVDb25uZWN0SWNvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29ubmVjdEljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25uZWN0SWNvbnMuY2xhc3NMaXN0LmFkZCgnY29ubmVjdEljb25zJylcblxuICAgIGNvbnN0IGVtYWlsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGVtYWlsTGluay5jbGFzc0xpc3QuYWRkKCdlbWFpbExpbmsnKVxuICAgIGVtYWlsTGluay5ocmVmID0gJ21haWx0bzpqY2FtcGJlbGw1N0BnbWFpbC5jb20nXG4gICAgZW1haWxMaW5rLmFwcGVuZENoaWxkKGljb25zLkdtYWlsSWNvblN2ZygnZ21haWxJY29uJywgJ2NvbnRhY3RJY29uJykpXG4gICAgY29uc3QgZW1haWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0VtYWlsJylcbiAgICBlbWFpbExpbmsuYXBwZW5kQ2hpbGQoZW1haWxUZXh0KVxuICAgIFxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3J1xuICAgIGdpdGh1YkxpbmsudGFyZ2V0ID0gJ19ibGFuaydcbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGljb25zLmdldEljb24oJ2dpdGh1YicsICdjb250YWN0SWNvbicpKVxuICAgIGNvbnN0IGdpdGh1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnR2l0aHViJylcbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1YlRleHQpXG4gICAgZ2l0aHViTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gZ2l0aHViTGluay5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2NvbG9yZWQnKSlcbiAgICBnaXRodWJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBnaXRodWJMaW5rLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnY29sb3JlZCcpKVxuXG4gICAgY29uc3QgbGlua2VkaW5MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbGlua2VkaW5MaW5rLmhyZWYgPSAnaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vamFzb24tY2FtcGJlbGwtNTFhMDI3YjgnXG4gICAgbGlua2VkaW5MaW5rLnRhcmdldCA9ICdfYmxhbmsnXG4gICAgbGlua2VkaW5MaW5rLmFwcGVuZENoaWxkKGljb25zLmdldEljb24oJ2xpbmtlZGluJywgJ2NvbnRhY3RJY29uJykpXG4gICAgY29uc3QgbGlua2VkaW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0xpbmtlZEluJylcbiAgICBsaW5rZWRpbkxpbmsuYXBwZW5kQ2hpbGQobGlua2VkaW5UZXh0KVxuICAgIGxpbmtlZGluTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gbGlua2VkaW5MaW5rLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnY29sb3JlZCcpKVxuICAgIGxpbmtlZGluTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gbGlua2VkaW5MaW5rLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnY29sb3JlZCcpKVxuXG4gICAgY29ubmVjdEljb25zLmFwcGVuZENoaWxkKGVtYWlsTGluaylcbiAgICBjb25uZWN0SWNvbnMuYXBwZW5kQ2hpbGQoZ2l0aHViTGluaylcbiAgICBjb25uZWN0SWNvbnMuYXBwZW5kQ2hpbGQobGlua2VkaW5MaW5rKVxuXG4gICAgcmV0dXJuIGNvbm5lY3RJY29uc1xufVxuXG5jb25zdCBjcmVhdGVDb250YWN0Q2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWN0Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdENhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdENhcmRDb250YWluZXInKVxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyLmlkID0gJ2NvbnRhY3QnXG5cbiAgICBjb25zdCBjb250YWN0Q2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjb250YWN0Q2FyZEhlYWRlci50ZXh0Q29udGVudCA9IFwiTGV0cyBjb25uZWN0IVwiXG5cbiAgICBjb250YWN0Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q2FyZEhlYWRlcilcbiAgICBjb250YWN0Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb25uZWN0SWNvbnMoKSlcblxuICAgIHJldHVybiBjb250YWN0Q2FyZENvbnRhaW5lclxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29udGFjdENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWN0QmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdEJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnY29udGFjdEJhY2tncm91bmQnKVxuXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0Q29udGFpbmVyJylcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RDYXJkKCkpXG5cbiAgICBjb250YWN0QmFja2dyb3VuZC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKVxuXG4gICAgcmV0dXJuIGNvbnRhY3RCYWNrZ3JvdW5kXG59XG4iLCJpbXBvcnQgaDNfc3FfMzAwdyBmcm9tICcuLi9hc3NldHMvaDNfc3FfMzAwdy5wbmcnXG5pbXBvcnQgaDNfc3FfNjAwdyBmcm9tICcuLi9hc3NldHMvaDNfc3FfNjAwdy5wbmcnXG5pbXBvcnQgaDNfc3FfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL2gzX3NxXzEyNTB3LnBuZydcbmltcG9ydCBjdiBmcm9tICcuLi9hc3NldHMvY3YucGRmJ1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSW50cm9Db250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaW50cm9CYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbnRyb0JhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnaW50cm9CYWNrZ3JvdW5kJylcblxuICAgIGNvbnN0IGludHJvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbnRyb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnRyb0NvbnRhaW5lcicpXG5cbiAgICBjb25zdCBpbnRyb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbnRyb0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2ludHJvSW1hZ2UnKVxuICAgIGludHJvSW1hZ2Uuc3JjID0gaDNfc3FfMTI1MHdcbiAgICBpbnRyb0ltYWdlLnNyY3NldCA9IGAke2gzX3NxXzEyNTB3fSAxMjUwdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAke2gzX3NxXzYwMHd9IDYwMHcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJHtoM19zcV8zMDB3fSAzMDB3YFxuICAgIGludHJvSW1hZ2Uuc2l6ZXMgPSBgKG1heC13aWR0aDogMzIwcHgpIDMwMHB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgKG1heC13aWR0aDogNjQwcHgpIDYwMHB4XG4gICAgICAgICAgICAgICAgICAgICAgICAxMjUwcHhgXG4gICAgaW50cm9JbWFnZS5hbHQgPSAnUG9ydHJhaXQgaW1hZ2UnXG5cbiAgICBjb25zdCBpbnRyb0JsdXJiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbnRyb0JsdXJiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludHJvQmx1cmJDb250YWluZXInKVxuXG4gICAgY29uc3QgaW50cm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaW50cm9IZWFkZXIuY2xhc3NMaXN0LmFkZCgnaW50cm9IZWFkZXInKVxuICAgIGludHJvSGVhZGVyLnRleHRDb250ZW50ID0gJ0hlbGxvLCBXb3JsZCEnXG5cbiAgICBjb25zdCBpbnRyb0JsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaW50cm9CbHVyYi5jbGFzc0xpc3QuYWRkKCdpbnRyb0JsdXJiJylcbiAgICBpbnRyb0JsdXJiLnRleHRDb250ZW50ID0gJ015IG5hbWUgaXMgSmFzb24gQ2FtcGJlbGwsIGFuZCBJIGFtIGEgZnVsbC1zdGFjayBzb2Z0d2FyZSBkZXZlbG9wZXIgYmFzZWQgaW4gdGhlIFNhbiBGcmFuY2lzY28gQmF5IEFyZWEuIEkgYW0gYSBsaWZlbG9uZyBsZWFybmVyLCBlYWdlciB0byBhcHBseSBteSBrbm93bGVkZ2UgYW5kIHNraWxscyB0byBjcmVhdGUgYW5kIGltcHJvdmUgcHJvZHVjdHMgYW5kIHNlcnZpY2VzLidcblxuICAgIGNvbnN0IGludHJvTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbnRyb0xpbmtzLmNsYXNzTGlzdC5hZGQoJ2ludHJvTGlua3MnKVxuXG4gICAgY29uc3QgaW50cm9SZXN1bWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgaW50cm9SZXN1bWVMaW5rLmNsYXNzTGlzdC5hZGQoJ2ludHJvUmVzdW1lTGluaycpXG4gICAgaW50cm9SZXN1bWVMaW5rLmhyZWYgPSBjdlxuICAgIGludHJvUmVzdW1lTGluay50YXJnZXQgPSAnX2JsYW5rJ1xuICAgIGludHJvUmVzdW1lTGluay5kb3dubG9hZCA9ICdKYXNvbkNhbXBiZWxsX1Jlc3VtZS5wZGYnXG4gICAgaW50cm9SZXN1bWVMaW5rLnRleHRDb250ZW50ID0gJ1Jlc3VtZSdcblxuICAgIGNvbnN0IGludHJvRW1haWxMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgaW50cm9FbWFpbExpbmsuY2xhc3NMaXN0LmFkZCgnaW50cm9FbWFpbExpbmsnKVxuICAgIGludHJvRW1haWxMaW5rLmhyZWYgPSAnbWFpbHRvOmpjYW1wYmVsbDU3QGdtYWlsLmNvbSdcbiAgICBpbnRyb0VtYWlsTGluay50ZXh0Q29udGVudCA9ICdFbWFpbCdcblxuICAgIGludHJvTGlua3MuYXBwZW5kQ2hpbGQoaW50cm9SZXN1bWVMaW5rKVxuICAgIGludHJvTGlua3MuYXBwZW5kQ2hpbGQoaW50cm9FbWFpbExpbmspICBcblxuICAgIGludHJvQmx1cmJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW50cm9IZWFkZXIpXG4gICAgaW50cm9CbHVyYkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb0JsdXJiKVxuICAgIGludHJvQmx1cmJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW50cm9MaW5rcylcblxuICAgIGludHJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvSW1hZ2UpXG4gICAgaW50cm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW50cm9CbHVyYkNvbnRhaW5lcilcblxuICAgIGludHJvQmFja2dyb3VuZC5hcHBlbmRDaGlsZChpbnRyb0NvbnRhaW5lcilcblxuICAgIHJldHVybiBpbnRyb0JhY2tncm91bmRcbn1cbiIsImltcG9ydCBJY29ucyBmcm9tICcuL0ljb25zJ1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnXG5cbmNvbnN0IGljb25zID0gbmV3IEljb25zXG5cbmNvbnN0IGNyZWF0ZVByb2plY3RDYXJkID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdENhcmQnKVxuXG4gICAgY29uc3QgcHJvamVjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgcHJvamVjdEltZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW1nJylcbiAgICBwcm9qZWN0SW1nLnNyYyA9IHByb2plY3QuaW1nLm1lZGl1bVxuICAgIHByb2plY3RJbWcuc3Jjc2V0ID0gYCR7cHJvamVjdC5pbWcuc21hbGx9IDMwMHcsICR7cHJvamVjdC5pbWcubWVkaXVtfSA2MDB3YFxuICAgIHByb2plY3RJbWcuc2l6ZXMgPSBgKG1heC13aWR0aDogMzIwcHgpIDMwMHB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgNjAwcHhgXG4gICAgcHJvamVjdEltZy5hbHQgPSBwcm9qZWN0LmFsdEltZ1RleHRcblxuICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkQ29udGVudCcpXG5cbiAgICBjb25zdCBjYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRIZWFkZXInKVxuXG4gICAgY29uc3QgY2FyZFRpdGxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGNhcmRUaXRsZUxpbmsuaHJlZiA9IHByb2plY3QubGl2ZV91cmxcbiAgICBjYXJkVGl0bGVMaW5rLnRhcmdldCA9ICdfYmxhbmsnXG5cbiAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmRUaXRsZScpXG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lXG5cbiAgICBjYXJkVGl0bGVMaW5rLmFwcGVuZENoaWxkKGNhcmRUaXRsZSlcblxuICAgIGNvbnN0IGNhcmRUaXRsZUljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkVGl0bGVJY29ucy5jbGFzc0xpc3QuYWRkKCdjYXJkVGl0bGVJY29ucycpXG5cbiAgICBjb25zdCBjYXJkR2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGNhcmRHaXRodWJMaW5rLmhyZWYgPSBwcm9qZWN0LmNvZGVfdXJsXG4gICAgY2FyZEdpdGh1YkxpbmsudGFyZ2V0ID0gJ19ibGFuaydcbiAgICBjYXJkR2l0aHViTGluay5hcHBlbmRDaGlsZChpY29ucy5nZXRJY29uKCdnaXRodWInLCAnY2FyZEljb24nKSlcblxuICAgIGNvbnN0IGNhcmRMaXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGNhcmRMaXZlTGluay5ocmVmID0gcHJvamVjdC5saXZlX3VybFxuICAgIGNhcmRMaXZlTGluay50YXJnZXQgPSAnX2JsYW5rJ1xuICAgIGNhcmRMaXZlTGluay5hcHBlbmRDaGlsZChpY29ucy5PcGVuSWNvblN2Zygnb3Blbkljb24nKSlcblxuICAgIGNhcmRUaXRsZUljb25zLmFwcGVuZENoaWxkKGNhcmRHaXRodWJMaW5rKVxuICAgIGNhcmRUaXRsZUljb25zLmFwcGVuZENoaWxkKGNhcmRMaXZlTGluaylcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGRlc2NyaXB0aW9uTGluay5ocmVmID0gcHJvamVjdC5saXZlX3VybFxuICAgIGRlc2NyaXB0aW9uTGluay50YXJnZXQgPSAnX2JsYW5rJ1xuXG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REZXNjcmlwdGlvbicpXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjXG5cbiAgICBkZXNjcmlwdGlvbkxpbmsuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKVxuXG4gICAgY29uc3QgY2FyZFNraWxsSWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmRTa2lsbEljb25zLmNsYXNzTGlzdC5hZGQoJ2NhcmRTa2lsbEljb25zJylcbiAgICBwcm9qZWN0Lmljb25zLmZvckVhY2goaWNvbk5hbWUgPT4ge1xuICAgICAgICBjb25zdCBuZXdJY29uID0gaWNvbnMuZ2V0SWNvbihpY29uTmFtZSwgJ2NhcmRTa2lsbEljb24nKVxuICAgICAgICBjYXJkU2tpbGxJY29ucy5hcHBlbmRDaGlsZChuZXdJY29uKSBcbiAgICB9KVxuXG4gICAgY2FyZEhlYWRlci5hcHBlbmRDaGlsZChjYXJkVGl0bGVMaW5rKVxuICAgIGNhcmRIZWFkZXIuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlSWNvbnMpXG5cbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjYXJkSGVhZGVyKVxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGluaylcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjYXJkU2tpbGxJY29ucylcblxuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RJbWcpXG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpXG5cbiAgICByZXR1cm4gcHJvamVjdENhcmRcbn1cblxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKGZpbHRlcmVkUHJvamVjdHMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q2FyZENvbnRhaW5lcicpXG4gICAgcHJvamVjdENhcmRDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBmaWx0ZXJlZFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RDYXJkID0gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdClcbiAgICAgICAgcHJvamVjdENhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENhcmQpXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBkaXNwbGF5UHJvamVjdHMocHJvamVjdHMpXG59XG5cbmNvbnN0IGZpbHRlclByb2plY3RzQnlJY29uID0gKGNob3Nlbkljb25OYW1lKSA9PiB7XG4gICAgY29uc3Qgc3RhbmRhcmRpemVkSWNvbk5hbWUgPSBjaG9zZW5JY29uTmFtZS5yZXBsYWNlKCctd29yZG1hcmsnLCAnJylcbiAgICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pY29ucy5pbmNsdWRlcyhzdGFuZGFyZGl6ZWRJY29uTmFtZSkpXG4gICAgZGlzcGxheVByb2plY3RzKGZpbHRlcmVkUHJvamVjdHMpXG59XG5cbmxldCBzZWxlY3RlZEljb24gPSBudWxsXG5jb25zdCBoYW5kbGVJY29uQ2xpY2sgPSAoY2hvc2VuSWNvbikgPT4ge1xuICAgIGNvbnN0IGljb25EYXRhID0gY2hvc2VuSWNvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpXG4gICAgY29uc3QgYWxsSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVySWNvbnNDb250YWluZXIgYnV0dG9uIGknKVxuXG4gICAgYWxsSWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcsICdjb2xvcmVkJylcbiAgICB9KVxuXG4gICAgaWYgKHNlbGVjdGVkSWNvbiA9PT0gY2hvc2VuSWNvbikge1xuICAgICAgICBzZWxlY3RlZEljb24gPSBudWxsXG4gICAgICAgIGRpc3BsYXlBbGxQcm9qZWN0cygpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hvc2VuSWNvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcsICdjb2xvcmVkJylcbiAgICAgICAgc2VsZWN0ZWRJY29uID0gY2hvc2VuSWNvblxuICAgICAgICBmaWx0ZXJQcm9qZWN0c0J5SWNvbihpY29uRGF0YSlcbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RzSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0c0hlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0hlYWRlckNvbnRhaW5lcicpXG5cbiAgICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBwcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9ICdNeSBQcm9qZWN0cydcblxuICAgIGNvbnN0IHByb2plY3RzU3ViaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcHJvamVjdHNTdWJoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNTdWJoZWFkZXInKVxuICAgIHByb2plY3RzU3ViaGVhZGVyLnRleHRDb250ZW50ID0gJ2ZpbHRlciBieTonXG5cbiAgICBjb25zdCBmaWx0ZXJJY29uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmlsdGVySWNvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmlsdGVySWNvbnNDb250YWluZXInKVxuXG4gICAgY29uc3QgaWNvbk5hbWVzID0gWydodG1sLXdvcmRtYXJrJywgJ2Nzcy13b3JkbWFyaycsICdqYXZhc2NyaXB0JywgJ3JlYWN0LXdvcmRtYXJrJywgJ3J1Ynktd29yZG1hcmsnLCAncmFpbHMtd29yZG1hcmsnLCAncHNxbC13b3JkbWFyaycsICd3ZWJwYWNrLXdvcmRtYXJrJywgJ3JzcGVjLXdvcmRtYXJrJywgJ2plc3QnLCAnanNvbicsICd5YW1sJywgJ2Jvb3RzdHJhcC13b3JkbWFyaycsICdnaXQtd29yZG1hcmsnLCAnZ2l0aHViLXdvcmRtYXJrJ11cbiAgICBpY29uTmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY29uc3QgaWNvbiA9IGljb25zLmdldEljb24obmFtZSwgJ2ZpbHRlckljb24nKVxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbilcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2NvbG9yZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghYnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnY29sb3JlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZUljb25DbGljayhpY29uKSlcbiAgICAgICAgZmlsdGVySWNvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIH0pXG5cbiAgICBwcm9qZWN0c0hlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcilcbiAgICBwcm9qZWN0c0hlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c1N1YmhlYWRlcikgICAgXG4gICAgcHJvamVjdHNIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlsdGVySWNvbnNDb250YWluZXIpICAgIFxuXG4gICAgcmV0dXJuIHByb2plY3RzSGVhZGVyQ29udGFpbmVyXG59XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RDYXJkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q2FyZENvbnRhaW5lcicpXG5cbiAgICByZXR1cm4gcHJvamVjdENhcmRDb250YWluZXJcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3RzQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0NvbnRhaW5lcicpXG4gICAgcHJvamVjdHNDb250YWluZXIuaWQgPSAncHJvamVjdHMnXG5cbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0c0hlYWRlcigpKVxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDYXJkQ29udGFpbmVyKCkpXG5cbiAgICByZXR1cm4gcHJvamVjdHNDb250YWluZXJcbn1cbiIsImltcG9ydCBnaXRodWJJY29uIGZyb20gJy4uL2Fzc2V0cy9HaXRIdWItbGlnaHQtMzJweC5wbmcnXG5pbXBvcnQgY3YgZnJvbSAnLi4vYXNzZXRzL2N2LnBkZidcbmltcG9ydCBJY29ucyBmcm9tICcuL0ljb25zJ1xuaW1wb3J0IHsgY3JlYXRlSW50cm9Db250YWluZXIgfSBmcm9tICcuL2Rpc3BsYXlJbnRybydcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RzQ29udGFpbmVyLCBkaXNwbGF5QWxsUHJvamVjdHMgfSBmcm9tICcuL2Rpc3BsYXlQcm9qZWN0cydcbmltcG9ydCB7IGNyZWF0ZUFib3V0TWVDb250YWluZXIgfSBmcm9tICcuL2Rpc3BsYXlBYm91dE1lJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdENvbnRhaW5lciB9IGZyb20gJy4vZGlzcGxheUNvbnRhY3QnXG5cbmNvbnN0IGljb25zID0gbmV3IEljb25zXG5cbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuXG4gICAgY29uc3QgbWVudWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBtZW51YmFyLmNsYXNzTGlzdC5hZGQoJ21lbnViYXInKVxuXG4gICAgY29uc3QgbWVudUl0ZW1zID0gWydQcm9qZWN0cycsICdBYm91dCBNZScsICdDb250YWN0JywgJ1Jlc3VtZSddXG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaChtZW51SXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld01lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBuZXdNZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBpZiAobWVudUl0ZW0gPT09ICdSZXN1bWUnKSB7XG4gICAgICAgICAgICBtZW51TGluay5ocmVmID0gY3ZcbiAgICAgICAgICAgIG1lbnVMaW5rLnRhcmdldCA9ICdfYmxhbmsnXG4gICAgICAgICAgICBtZW51TGluay5kb3dubG9hZCA9ICdKYXNvbkNhbXBiZWxsX1Jlc3VtZS5wZGYnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51TGluay5ocmVmID0gYCMke21lbnVJdGVtLnJlcGxhY2UoJyAnLCAnJykudG9Mb3dlckNhc2UoKX1gXG4gICAgICAgIH1cbiAgICAgICAgbWVudUxpbmsuY2xhc3NMaXN0LmFkZCgnbWVudUxpbmsnKVxuICAgICAgICBtZW51TGluay50ZXh0Q29udGVudCA9IG1lbnVJdGVtXG5cbiAgICAgICAgbmV3TWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUxpbmspXG4gICAgICAgIG1lbnViYXIuYXBwZW5kQ2hpbGQobmV3TWVudUl0ZW0pXG4gICAgfSk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudWJhcilcblxuICAgIHJldHVybiBuYXZcbn1cblxuY29uc3Qgc2V0VGhlbWVQcmVmZXJlbmNlID0gKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UudGhlbWVQcmVmZXJlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lUHJlZmVyZW5jZScsICdkYXJrJylcbiAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZVByZWZlcmVuY2UnKSAhPT0gJ2RhcmsnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZVByZWZlcmVuY2UnKSAhPT0gJ2xpZ2h0Jykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWVQcmVmZXJlbmNlJywgJ2RhcmsnKVxuICAgIH1cbn1cblxuY29uc3QgbG9hZFRoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0hlYWRlckNvbnRhaW5lcicpXG4gICAgY29uc3QgZmlsdGVySWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVySWNvbicpXG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lUHJlZmVyZW5jZScpID09PSAnZGFyaycpIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrTW9kZScpXG4gICAgICAgIHByb2plY3RzSGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RhcmtNb2RlJylcbiAgICAgICAgZmlsdGVySWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZGFya01vZGUnKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzSGVhZGVyQ29udGFpbmVyJylcbiAgICBjb25zdCBmaWx0ZXJJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJJY29uJylcblxuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFya01vZGUnKVxuICAgIHByb2plY3RzSGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmtNb2RlJylcbiAgICBmaWx0ZXJJY29ucy5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgICBpY29uLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmtNb2RlJylcbiAgICB9KVxuXG4gICAgY29uc3QgY3VycmVudFRoZW1lID0gYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmtNb2RlJykgPyAnZGFyaycgOiAnbGlnaHQnXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lUHJlZmVyZW5jZScsIGN1cnJlbnRUaGVtZSlcbn1cblxuY29uc3QgY3JlYXRlVGhlbWVUb2dnbGVCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgdGhlbWVUb2dnbGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRoZW1lVG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoJ3RoZW1lVG9nZ2xlQnRuJylcbiAgICB0aGVtZVRvZ2dsZUJ0bi5hcHBlbmRDaGlsZChpY29ucy50aGVtZVRvZ2dsZUljb25TdmcoJ3RoZW1lVG9nZ2xlSWNvbicpKVxuICAgIHRoZW1lVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlVGhlbWUoKSlcbiAgICByZXR1cm4gdGhlbWVUb2dnbGVCdG5cbn1cblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgaGVhZGVyLnJvbGUgPSAnYmFubmVyJ1xuXG4gICAgY29uc3QgaGVhZGVyTmFtZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBoZWFkZXJOYW1lTGluay5jbGFzc0xpc3QuYWRkKCdoZWFkZXJOYW1lTGluaycpXG4gICAgaGVhZGVyTmFtZUxpbmsuaHJlZiA9ICcjdG9wJ1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2hlYWRlck5hbWUnLCAncXdpZ2xleS1yZWd1bGFyJylcbiAgICBuYW1lLnRleHRDb250ZW50ID0gJ0phc29uIENhbXBiZWxsJ1xuICAgIFxuICAgIGhlYWRlck5hbWVMaW5rLmFwcGVuZENoaWxkKG5hbWUpXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTmFtZUxpbmspXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUaGVtZVRvZ2dsZUJ0bigpKVxuXG4gICAgcmV0dXJuIGhlYWRlclxufVxuXG5jb25zdCBjcmVhdGVUcmFuc2l0aW9uID0gKHN0eWxpbmdDbGFzcykgPT4ge1xuICAgIGNvbnN0IHRyYW5zaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRyYW5zaXRpb24uY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicsIHN0eWxpbmdDbGFzcylcblxuICAgIHJldHVybiB0cmFuc2l0aW9uXG59XG5cbmNvbnN0IGNyZWF0ZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIGNvbnRlbnRDb250YWluZXIucm9sZSA9ICdtYWluJ1xuXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbnRyb0NvbnRhaW5lcigpKVxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVHJhbnNpdGlvbigndHJhbnNpdGlvbjEnKSlcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RzQ29udGFpbmVyKCkpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUcmFuc2l0aW9uKCd0cmFuc2l0aW9uMicpKVxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRNZUNvbnRhaW5lcigpKVxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdENvbnRhaW5lcigpKVxuXG4gICAgcmV0dXJuIGNvbnRlbnRDb250YWluZXJcbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgZm9vdGVyLnJvbGUgPSAnY29udGVudGluZm8nXG5cbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBqY2FtcGJlbGw1N2BcblxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3J1xuICAgIGdpdGh1YkxpbmsudGFyZ2V0ID0gJ19ibGFuaydcblxuICAgIGNvbnN0IG5ld0dpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIG5ld0dpdGh1Ykljb24uc3JjID0gZ2l0aHViSWNvblxuICAgIG5ld0dpdGh1Ykljb24uY2xhc3NMaXN0LmFkZCgnZ2l0aHViSWNvbicpXG5cbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKG5ld0dpdGh1Ykljb24pXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluaylcblxuICAgIHJldHVybiBmb290ZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGljb25zLmRldkljb25zTGluaygpKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50KCkpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSlcbiAgICBzZXRUaGVtZVByZWZlcmVuY2UoKVxuICAgIGxvYWRUaGVtZSgpXG4gICAgZGlzcGxheUFsbFByb2plY3RzKClcbn1cbiIsIi8vIENvbnZlcnQgdG8gY2xhc3Mgd2l0aCBjb25zdHJ1Y3RlciwgY3JlYXRlIGFkbWluIFVJIHRvIGFkZCBwcm9qZWN0c1xuXG4vLyBpbXBvcnQgcHJvamVjdCBzY3JlZW5zaG90c1xuaW1wb3J0IGFkbWluZGFzaGJvYXJkXzMwMHcgZnJvbSAnLi4vYXNzZXRzL2FkbWluZGFzaGJvYXJkXzMwMHcucG5nJ1xuaW1wb3J0IGFkbWluZGFzaGJvYXJkXzYwMHcgZnJvbSAnLi4vYXNzZXRzL2FkbWluZGFzaGJvYXJkXzYwMHcucG5nJ1xuaW1wb3J0IGFkbWluZGFzaGJvYXJkXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy9hZG1pbmRhc2hib2FyZF8xMjUwdy5wbmcnXG5pbXBvcnQgYmF0dGxlc2hpcF8zMDB3IGZyb20gJy4uL2Fzc2V0cy9iYXR0bGVzaGlwXzMwMHcucG5nJ1xuaW1wb3J0IGJhdHRsZXNoaXBfNjAwdyBmcm9tICcuLi9hc3NldHMvYmF0dGxlc2hpcF82MDB3LnBuZydcbmltcG9ydCBiYXR0bGVzaGlwXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy9iYXR0bGVzaGlwXzEyNTB3LnBuZydcbmltcG9ydCBib290X3JvYWNoX2JvbWJfMzAwdyBmcm9tICcuLi9hc3NldHMvYm9vdF9yb2FjaF9ib21iXzMwMHcucG5nJ1xuaW1wb3J0IGJvb3Rfcm9hY2hfYm9tYl82MDB3IGZyb20gJy4uL2Fzc2V0cy9ib290X3JvYWNoX2JvbWJfNjAwdy5wbmcnXG5pbXBvcnQgYm9vdF9yb2FjaF9ib21iXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy9ib290X3JvYWNoX2JvbWJfMTI1MHcucG5nJ1xuaW1wb3J0IGNhbGN1bGF0b3JfMzAwdyBmcm9tICcuLi9hc3NldHMvY2FsY3VsYXRvcl8zMDB3LnBuZydcbmltcG9ydCBjYWxjdWxhdG9yXzYwMHcgZnJvbSAnLi4vYXNzZXRzL2NhbGN1bGF0b3JfNjAwdy5wbmcnXG5pbXBvcnQgY2FsY3VsYXRvcl8xMjUwdyBmcm9tICcuLi9hc3NldHMvY2FsY3VsYXRvcl8xMjUwdy5wbmcnXG5pbXBvcnQgY2hlc3NfMzAwdyBmcm9tICcuLi9hc3NldHMvY2hlc3NfMzAwdy5wbmcnXG5pbXBvcnQgY2hlc3NfNjAwdyBmcm9tICcuLi9hc3NldHMvY2hlc3NfNjAwdy5wbmcnXG5pbXBvcnQgY29ubmVjdF9mb3VyXzMwMHcgZnJvbSAnLi4vYXNzZXRzL2Nvbm5lY3RfZm91cl8zMDB3LnBuZydcbmltcG9ydCBjb25uZWN0X2ZvdXJfNjAwdyBmcm9tICcuLi9hc3NldHMvY29ubmVjdF9mb3VyXzYwMHcucG5nJ1xuaW1wb3J0IGNvbm5lY3RfZm91cl8xMjUwdyBmcm9tICcuLi9hc3NldHMvY29ubmVjdF9mb3VyXzEyNTB3LnBuZydcbmltcG9ydCBjdl9idWlsZGVyXzMwMHcgZnJvbSAnLi4vYXNzZXRzL2N2X2J1aWxkZXJfMzAwdy5wbmcnXG5pbXBvcnQgY3ZfYnVpbGRlcl82MDB3IGZyb20gJy4uL2Fzc2V0cy9jdl9idWlsZGVyXzYwMHcucG5nJ1xuaW1wb3J0IGN2X2J1aWxkZXJfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL2N2X2J1aWxkZXJfMTI1MHcucG5nJ1xuaW1wb3J0IGhhbmdtYW5fMzAwdyBmcm9tICcuLi9hc3NldHMvaGFuZ21hbl8zMDB3LnBuZydcbmltcG9ydCBoYW5nbWFuXzYwMHcgZnJvbSAnLi4vYXNzZXRzL2hhbmdtYW5fNjAwdy5wbmcnXG5pbXBvcnQgaGFuZ21hbl8xMjUwdyBmcm9tICcuLi9hc3NldHMvaGFuZ21hbl8xMjUwdy5wbmcnXG5pbXBvcnQgbWFzdGVybWluZF8zMDB3IGZyb20gJy4uL2Fzc2V0cy9tYXN0ZXJtaW5kXzMwMHcucG5nJ1xuaW1wb3J0IG1hc3Rlcm1pbmRfNjAwdyBmcm9tICcuLi9hc3NldHMvbWFzdGVybWluZF82MDB3LnBuZydcbmltcG9ydCBvZGluYm9va18zMDB3IGZyb20gJy4uL2Fzc2V0cy9vZGluYm9va18zMDB3LnBuZydcbmltcG9ydCBvZGluYm9va182MDB3IGZyb20gJy4uL2Fzc2V0cy9vZGluYm9va182MDB3LnBuZydcbmltcG9ydCBvZGluYm9va18xMjUwdyBmcm9tICcuLi9hc3NldHMvb2RpbmJvb2tfMTI1MHcucG5nJ1xuaW1wb3J0IHJlc3RhdXJhbnRfMzAwdyBmcm9tICcuLi9hc3NldHMvcmVzdGF1cmFudF8zMDB3LnBuZydcbmltcG9ydCByZXN0YXVyYW50XzYwMHcgZnJvbSAnLi4vYXNzZXRzL3Jlc3RhdXJhbnRfNjAwdy5wbmcnXG5pbXBvcnQgcmVzdGF1cmFudF8xMjUwdyBmcm9tICcuLi9hc3NldHMvcmVzdGF1cmFudF8xMjUwdy5wbmcnXG5pbXBvcnQgc2lnbl91cF9mb3JtXzMwMHcgZnJvbSAnLi4vYXNzZXRzL3NpZ25fdXBfZm9ybV8zMDB3LnBuZydcbmltcG9ydCBzaWduX3VwX2Zvcm1fNjAwdyBmcm9tICcuLi9hc3NldHMvc2lnbl91cF9mb3JtXzYwMHcucG5nJ1xuaW1wb3J0IHNpZ25fdXBfZm9ybV8xMjUwdyBmcm9tICcuLi9hc3NldHMvc2lnbl91cF9mb3JtXzEyNTB3LnBuZydcbmltcG9ydCBza2V0Y2hfcGFkXzMwMHcgZnJvbSAnLi4vYXNzZXRzL3NrZXRjaF9wYWRfMzAwdy5wbmcnXG5pbXBvcnQgc2tldGNoX3BhZF82MDB3IGZyb20gJy4uL2Fzc2V0cy9za2V0Y2hfcGFkXzYwMHcucG5nJ1xuaW1wb3J0IHNrZXRjaF9wYWRfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL3NrZXRjaF9wYWRfMTI1MHcucG5nJ1xuaW1wb3J0IHRpY3RhY3RvZV8zMDB3IGZyb20gJy4uL2Fzc2V0cy90aWN0YWN0b2VfMzAwdy5wbmcnXG5pbXBvcnQgdGljdGFjdG9lXzYwMHcgZnJvbSAnLi4vYXNzZXRzL3RpY3RhY3RvZV82MDB3LnBuZydcbmltcG9ydCB0aWN0YWN0b2VfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL3RpY3RhY3RvZV8xMjUwdy5wbmcnXG5pbXBvcnQgdG9kb2xpc3RfMzAwdyBmcm9tICcuLi9hc3NldHMvdG9kb2xpc3RfMzAwdy5wbmcnXG5pbXBvcnQgdG9kb2xpc3RfNjAwdyBmcm9tICcuLi9hc3NldHMvdG9kb2xpc3RfNjAwdy5wbmcnXG5pbXBvcnQgdG9kb2xpc3RfMTI1MHcgZnJvbSAnLi4vYXNzZXRzL3RvZG9saXN0XzEyNTB3LnBuZydcbmltcG9ydCB3ZWF0aGVyc2VydmVfMzAwdyBmcm9tICcuLi9hc3NldHMvd2VhdGhlcnNlcnZlXzMwMHcucG5nJ1xuaW1wb3J0IHdlYXRoZXJzZXJ2ZV82MDB3IGZyb20gJy4uL2Fzc2V0cy93ZWF0aGVyc2VydmVfNjAwdy5wbmcnXG5pbXBvcnQgd2VhdGhlcnNlcnZlXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy93ZWF0aGVyc2VydmVfMTI1MHcucG5nJ1xuaW1wb3J0IHdvcm1ob2xlX2xpZ2h0XzMwMHcgZnJvbSAnLi4vYXNzZXRzL3dvcm1ob2xlX2xpZ2h0XzMwMHcucG5nJ1xuaW1wb3J0IHdvcm1ob2xlX2xpZ2h0XzYwMHcgZnJvbSAnLi4vYXNzZXRzL3dvcm1ob2xlX2xpZ2h0XzYwMHcucG5nJ1xuaW1wb3J0IHdvcm1ob2xlX2xpZ2h0XzEyNTB3IGZyb20gJy4uL2Fzc2V0cy93b3JtaG9sZV9saWdodF8xMjUwdy5wbmcnXG4vLyBpbXBvcnQgd29ybWhvbGVfZGFya18zMDB3IGZyb20gJy4uL2Fzc2V0cy93b3JtaG9sZV9kYXJrXzMwMHcucG5nJ1xuLy8gaW1wb3J0IHdvcm1ob2xlX2RhcmtfNjAwdyBmcm9tICcuLi9hc3NldHMvd29ybWhvbGVfZGFya182MDB3LnBuZydcbi8vIGltcG9ydCB3b3JtaG9sZV9kYXJrXzEyNTB3IGZyb20gJy4uL2Fzc2V0cy93b3JtaG9sZV9kYXJrXzEyNTB3LnBuZydcblxuY29uc3QgcHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnb2RpbmJvb2snLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9vZGluLWJvb2stdjInLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vb2Rpbi1ib29rLXYyLmZseS5kZXYvJyxcbiAgICAgICAgZGVzYzogXCJBIHJlbGF0aXZlbHkgc2ltcGxlIHNvY2lhbCBtZWRpYSBhcHAuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCBpcyB0byB0aWUgdG9nZXRoZXIgdGhlIGNvbmNlcHRzIGxlYXJuZWQgZHVyaW5nIHRoZSByYWlscyBtb2R1bGUgb2YgVGhlIE9kaW4gUHJvamVjdC4gVGhpcyBpcyB0aGUgY2Fwc3RvbmUgcHJvamVjdCBvZiBUaGUgT2RpbiBQcm9qZWN0J3MgUnVieSBvbiBSYWlscyBjb3Vyc2UuXCIsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdPZGluYm9vayB1c2VyIHBhZ2UuJyxcbiAgICAgICAgaWNvbnM6IFsnaHRtbCcsICdib290c3RyYXAnLCAncnVieScsICdyYWlscycsICdwc3FsJywgJ3dlYnBhY2snLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiBvZGluYm9va18zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiBvZGluYm9va182MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IG9kaW5ib29rXzEyNTB3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NWIEJ1aWxkZXInLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9jdi1idWlsZGVyJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL2Zhc2NpbmF0aW5nLXBlZ2FzdXMtNmEwNTE0Lm5ldGxpZnkuYXBwLycsXG4gICAgICAgIGRlc2M6ICdBbiBhcHBsaWNhdGlvbiB3aGVyZSB1c2VycyBjYW4gaW5wdXQgdGhlaXIgaW5mb3JtYXRpb24gdG8gZ2VuZXJhdGUgYSBDVi9yw6lzdW3DqS4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IGlzIHRvIHByYWN0aW5nIGRldmVsb3Bpbmcgd2l0aCByZWFjdCBzdGF0ZSBhbmQgcHJvcHMuJyxcbiAgICAgICAgYWx0SW1nVGV4dDogJ0JhdHRsZXNoaXAgZ2FtZXBsYXknLFxuICAgICAgICBpY29uczogWydjc3MnLCAnamF2YXNjcmlwdCcsICdyZWFjdCcsICdqc29uJywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogY3ZfYnVpbGRlcl8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiBjdl9idWlsZGVyXzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogY3ZfYnVpbGRlcl8xMjUwd1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdOYXZhbCBXYXJmYXJlJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvbmF2YWwtd2FyZmFyZScsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9qY2FtcGJlbGw1Ny5naXRodWIuaW8vbmF2YWwtd2FyZmFyZS8nLFxuICAgICAgICBkZXNjOiBcIkFuIGludGVyYWN0aXZlLCB0d28gcGxheWVyIGdhbWUgb2YgQmF0dGxlc2hpcC4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IGlzIHRvIHByYWN0aWNlIFRlc3QgRHJpdmVuIERldmVsb3BtZW50IChUREQpIGFuZCB0aWUgdG9nZXRoZXIgdGhlIGNvbmNlcHRzIGxlYXJuZWQgaW4gdGhlIEphdmFTY3JpcHQgbW9kdWxlIG9mIFRoZSBPZGluIFByb2plY3QuIFRoaXMgaXMgdGhlIGNhcHN0b25lIHByb2plY3Qgb2YgVGhlIE9kaW4gUHJvamVjdCdzIEphdmFTY3JpcHQgY291cnNlLlwiLFxuICAgICAgICBhbHRJbWdUZXh0OiAnQmF0dGxlc2hpcCBnYW1lcGxheScsXG4gICAgICAgIGljb25zOiBbJ2NzcycsICdqYXZhc2NyaXB0JywgJ2plc3QnLCAnd2VicGFjaycsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IGJhdHRsZXNoaXBfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogYmF0dGxlc2hpcF82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IGJhdHRsZXNoaXBfMTI1MHdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnV2VhdGhlcnNlcnZlJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvd2VhdGhlci1hcHAnLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vamNhbXBiZWxsNTcuZ2l0aHViLmlvL3dlYXRoZXItYXBwLycsXG4gICAgICAgIGRlc2M6ICdJbnB1dCBhIGNpdHkgdG8gcmV0cmlldmUgd2VhdGhlciBpbmZvcm1hdGlvbi4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IGlzIHRvIHByYWN0aWNlIGludGVncmF0aW9uIG9mIGFuIEFQSSwgbGludGVyLCBQcmV0dGllciBhbmQgSmF2YVNjcmlwdCBjb21waWxlci4nLFxuICAgICAgICBhbHRJbWdUZXh0OiAnV2VhdGhlcnNlcnZlIHVzZXIgcGFnZS4nLFxuICAgICAgICBpY29uczogWydjc3MnLCAnamF2YXNjcmlwdCcsICd3ZWJwYWNrJywgJ2pzb24nLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiB3ZWF0aGVyc2VydmVfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogd2VhdGhlcnNlcnZlXzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogd2VhdGhlcnNlcnZlXzEyNTB3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RoaW5ncyBUbyBEbycsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L29kaW4tdG9kby1saXN0JyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL2pjYW1wYmVsbDU3LmdpdGh1Yi5pby9vZGluLXRvZG8tbGlzdC8nLFxuICAgICAgICBkZXNjOiAnQSBzaW1wbGUgdG8tZG8gbGlzdCBhcHBsaWNhdGlvbi4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IGlzIHRvIHByYWN0aWNlIHNlcmlhbGl6YXRpb24gd2l0aCBKU09OIGFuZCBvYmplY3Qgb3JpZW50ZWQgcHJvZ3JhbW1pbmcuJyxcbiAgICAgICAgYWx0SW1nVGV4dDogJ1RvZG8gbGlzdC4nLFxuICAgICAgICBpY29uczogWydjc3MnLCAnamF2YXNjcmlwdCcsICd3ZWJwYWNrJywgJ2pzb24nLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiB0b2RvbGlzdF8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiB0b2RvbGlzdF82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IHRvZG9saXN0XzEyNTB3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01pZGRsZSBSaW5nIFJlc3RhdXJhbnQnLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9vZGluLXJlc3RhdXJhbnQtcGFnZScsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9qY2FtcGJlbGw1Ny5naXRodWIuaW8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvJyxcbiAgICAgICAgZGVzYzogJ0EgcmVzdGF1cmFudCBwYWdlIHdpdGggdGFiYmVkIGNvbnRlbnQgdGhhdCB1c2VzIEphdmFTY3JpcHQgYWxvbmUgdG8gZ2VuZXJhdGUgYWxsIG9mIHRoZSBjb250ZW50IG9uIHRoZSBwYWdlLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3QgaXMgdG8gcHJhY3RpY2UgdXNpbmcgSmF2YVNjcmlwdCBtb2R1bGVzIGFuZCB3ZWJwYWNrLicsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdNaWRkbGUgUmluZyBSZXN0YXVyYW50IFBhZ2UuJyxcbiAgICAgICAgaWNvbnM6IFsnY3NzJywgJ2phdmFzY3JpcHQnLCAnd2VicGFjaycsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IHJlc3RhdXJhbnRfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogcmVzdGF1cmFudF82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IHJlc3RhdXJhbnRfMTI1MHdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGljIFRhYyBUb2UnLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9vZGluLXRpYy10YWMtdG9lJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL2pjYW1wYmVsbDU3LmdpdGh1Yi5pby9vZGluLXRpYy10YWMtdG9lLycsXG4gICAgICAgIGRlc2M6ICdBbiBpbnRlcmFjdGl2ZSB0d28gcGxheWVyIFRpYyBUYWMgVG9lIGdhbWUuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCBpcyB0byBwcmFjdGljZSBjcmVhdGluZyBjbGVhbiBqYXZhc2NyaXB0IGNvZGUgd2l0aCBmYWN0b3J5IGZ1bmN0aW9ucyBhbmQgbW9kdWxhciBmdW5jdGlvbnMuJyxcbiAgICAgICAgYWx0SW1nVGV4dDogJ1RpYyBUYWMgVG9lLicsXG4gICAgICAgIGljb25zOiBbJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiB0aWN0YWN0b2VfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogdGljdGFjdG9lXzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogdGljdGFjdG9lXzEyNTB3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1dvcm1ob2xlJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvb2Rpbi1saWJyYXJ5JyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL2pjYW1wYmVsbDU3LmdpdGh1Yi5pby9vZGluLWxpYnJhcnkvJyxcbiAgICAgICAgZGVzYzogJ0FuIGludGVyYWN0aXZlIGxpYnJhcnkgYXBwLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3QgaXMgdG8gcHJhY3RpY2UgdXNpbmcgSmF2YVNjcmlwdCBvYmplY3RzIGFuZCBvYmplY3QgY29uc3RydWN0b3JzLicsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdXb3JtaG9sZS4nLFxuICAgICAgICBpY29uczogWydodG1sJywgJ2NzcycsICdqYXZhc2NyaXB0JywgJ2pzb24nLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiB3b3JtaG9sZV9saWdodF8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiB3b3JtaG9sZV9saWdodF82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IHdvcm1ob2xlX2xpZ2h0XzEyNTB3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0FkbWluIGRhc2hib2FyZCcsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L29kaW4tYWRtaW4tZGFzaGJvYXJkJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL2pjYW1wYmVsbDU3LmdpdGh1Yi5pby9vZGluLWFkbWluLWRhc2hib2FyZC8nLFxuICAgICAgICBkZXNjOiBcIkEgcmVzcG9uc2l2ZSBsYXlvdXQgdXNpbmcgQ1NTIGdyaWQgYW5kIGZsZXhib3guIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCB3YXMgdG8gcHJhY3RpY2UgY3JlYXRpbmcgYW4gaW50ZXJmYWNlIHdpdGggQ1NTIEdyaWQuIFRoaXMgaXMgdGhlIGNhcHN0b25lIHByb2plY3Qgb2YgVGhlIE9kaW4gUHJvamVjdCdzIEludGVybWVkaWF0ZSBIVE1MIGFuZCBDU1MgY291cnNlLlwiLFxuICAgICAgICBhbHRJbWdUZXh0OiAnQWRtaW4gZGFzaGJvYXJkLicsXG4gICAgICAgIGljb25zOiBbJ2h0bWwnLCAnY3NzJywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogYWRtaW5kYXNoYm9hcmRfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogYWRtaW5kYXNoYm9hcmRfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiBhZG1pbmRhc2hib2FyZF8xMjUwd1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTaWduLXVwIEZvcm0nLFxuICAgICAgICBjb2RlX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Ny9vZGluLXNpZ24tdXAtZm9ybScsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9qY2FtcGJlbGw1Ny5naXRodWIuaW8vb2Rpbi1zaWduLXVwLWZvcm0vJyxcbiAgICAgICAgZGVzYzogJ0Egc2lnbiB1cCBmb3JtIGZvciBhIGZha2Ugc2VydmljZS4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IHdhcyB0byBwcmFjdGljZSBmb3JtIHZhbGlkYXRpb24sIGNzcyBzdHlsaW5nLCBhbmQgbW9iaWxlIHN0eWxpbmcuJyxcbiAgICAgICAgYWx0SW1nVGV4dDogJ1NpZ24tdXAgZm9ybS4nLFxuICAgICAgICBpY29uczogWydodG1sJywgJ2NzcycsICdqYXZhc2NyaXB0JywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogc2lnbl91cF9mb3JtXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IHNpZ25fdXBfZm9ybV82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IHNpZ25fdXBfZm9ybV8xMjUwd1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDaGVzcycsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L3J1YnlfY2hlc3MnLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vcmVwbGl0LmNvbS9AamNhbXBiZWxsNTcvQ2hlc3MjbWFpbi5yYicsXG4gICAgICAgIGRlc2M6IFwiQSBjb21tYW5kIGxpbmUgQ2hlc3MgZ2FtZSB3aGVyZSB0d28gcGxheWVycyBjYW4gcGxheSBhZ2FpbnN0IGVhY2ggb3RoZXIuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCBpcyB0byBzaG93IHRoYXQgSSBjYW4gdGFrZSBvbiBhIHByb2plY3Qgd2l0aCBhIGxvdCBvZiBkaWZmZXJlbnQgY29tcG9uZW50cy4gVGhpcyBpcyB0aGUgY2Fwc3RvbmUgcHJvamVjdCBvZiBUaGUgT2RpbiBQcm9qZWN0J3MgUnVieSBjb3Vyc2UuXCIsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdDaGVzcyBnYW1lLicsXG4gICAgICAgIGljb25zOiBbJ3J1YnknLCAncnNwZWMnLCAneWFtbCcsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IGNoZXNzXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IGNoZXNzXzYwMHdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ29ubmVjdCBGb3VyJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvcnVieV9jb25uZWN0X2ZvdXInLFxuICAgICAgICBsaXZlX3VybDogJ2h0dHBzOi8vcmVwbGl0LmNvbS9AamNhbXBiZWxsNTcvQ29ubmVjdC1Gb3VyI21haW4ucmInLFxuICAgICAgICBkZXNjOiAnQSBjb21tYW5kIGxpbmUgQ29ubmVjdCBGb3VyIGdhbWUgd2hlcmUgdHdvIHBsYXllcnMgY2FuIHBsYXkgYWdhaW5zdCBlYWNoIG90aGVyLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3Qgd2FzIHRvIHByYWN0aWNlIFRlc3QgRHJpdmVuIERldmVsb3BtZW50IChUREQpIHdpdGggUlNwZWMuJyxcbiAgICAgICAgYWx0SW1nVGV4dDogJ0Nvbm5lY3QgRm91ciBnYW1lLicsXG4gICAgICAgIGljb25zOiBbJ3J1YnknLCAncnNwZWMnLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiBjb25uZWN0X2ZvdXJfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogY29ubmVjdF9mb3VyXzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogY29ubmVjdF9mb3VyXzEyNTB3LFxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdIYW5nbWFuJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvaGFuZ21hbicsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9yZXBsaXQuY29tL0BqY2FtcGJlbGw1Ny9IYW5nbWFuJyxcbiAgICAgICAgZGVzYzogJ0EgY29tbWFuZCBsaW5lIEhhbmdtYW4gZ2FtZS4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IHdhcyB0byBwcmFjdGljZSBpbXBsZW1lbnRhdGlvbiBvZiBzZXJpYWxpemF0aW9uIHdpdGggdGhlIHNhdmUgZ2FtZSBmZWF0dXJlLicsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdIYW5nbWFuIGdhbWUuJyxcbiAgICAgICAgaWNvbnM6IFsncnVieScsICd5YW1sJywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogaGFuZ21hbl8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiBoYW5nbWFuXzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogaGFuZ21hbl8xMjUwdyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTWFzdGVybWluZCcsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L3J1YnlfbWFzdGVybWluZCcsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9yZXBsaXQuY29tL0BqY2FtcGJlbGw1Ny9GaXJtR3VsbGlibGVTeXN0ZW1zI21haW4ucmInLFxuICAgICAgICBkZXNjOiAnQSBjb21tYW5kIGxpbmUgTWFzdGVybWluZCBnYW1lIHBsYXllZCBhZ2FpbnN0IEFJLiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3Qgd2FzIHRvIHByYWN0aWNlIE9iamVjdCBPcmllbnRlZCBQcm9ncmFtbWluZyAoT09QKS4nLFxuICAgICAgICBhbHRJbWdUZXh0OiAnTWFzdGVybWluZCBnYW1lLicsXG4gICAgICAgIGljb25zOiBbJ3J1YnknLCAnZ2l0JywgJ2dpdGh1YiddLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgIHNtYWxsOiBtYXN0ZXJtaW5kXzMwMHcsXG4gICAgICAgICAgICBtZWRpdW06IG1hc3Rlcm1pbmRfNjAwd1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDYWxjdWxhdG9yJyxcbiAgICAgICAgY29kZV91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcvb2Rpbi1jYWxjdWxhdG9yJyxcbiAgICAgICAgbGl2ZV91cmw6ICdodHRwczovL2pjYW1wYmVsbDU3LmdpdGh1Yi5pby9vZGluLWNhbGN1bGF0b3IvJyxcbiAgICAgICAgZGVzYzogXCJBIGZ1bGx5IGZ1bmN0aW9uYWwgY2FsY3VsYXRvciB3aXRoIGJhc2ljIGFyaXRobWV0aWMgb3BlcmF0aW9ucyB0aGF0IGNhbiBiZSBjb250cm9sbGVkIHdpdGggbW91c2Ugb3Iga2V5Ym9hcmQuIFRoaXMgaXMgdGhlIGNhcHN0b25lIHByb2plY3Qgb2YgVGhlIE9kaW4gUHJvamVjdCdzIEZvdW5kYXRpb25zIGNvdXJzZS5cIixcbiAgICAgICAgYWx0SW1nVGV4dDogJ01hc3Rlcm1pbmQgZ2FtZS4nLFxuICAgICAgICBpY29uczogWydodG1sJywgJ2NzcycsICdqYXZhc2NyaXB0JywgJ2dpdCcsICdnaXRodWInXSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBzbWFsbDogY2FsY3VsYXRvcl8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiBjYWxjdWxhdG9yXzYwMHcsXG4gICAgICAgICAgICBsYXJnZTogY2FsY3VsYXRvcl8xMjUwdyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU2tldGNoIFBhZCcsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L29kaW4tZXRjaC1hLXNrZXRjaCcsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9qY2FtcGJlbGw1Ny5naXRodWIuaW8vb2Rpbi1ldGNoLWEtc2tldGNoLycsXG4gICAgICAgIGRlc2M6ICdBbiBFdGNoIEEgU2tldGNoIGFwcCB0aGF0IGFsbG93cyB1c2VycyB0byBjcmVhdGUgcGl4ZWwgYXJ0LiBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3Qgd2FzIHRvIHByYWN0aWNlIGltcGxlbWVudGluZyBhIGdyaWQgd2l0aCBmbGV4Ym94IHRoYXQgY2FuIGJ5IG1hbmlwdWxhdGVkIGJ5IHRoZSB1c2VyLicsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdNYXN0ZXJtaW5kIGdhbWUuJyxcbiAgICAgICAgaWNvbnM6IFsnaHRtbCcsICdjc3MnLCAnamF2YXNjcmlwdCcsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IHNrZXRjaF9wYWRfMzAwdyxcbiAgICAgICAgICAgIG1lZGl1bTogc2tldGNoX3BhZF82MDB3LFxuICAgICAgICAgICAgbGFyZ2U6IHNrZXRjaF9wYWRfMTI1MHcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0Jvb3QgUm9hY2ggQm9tYicsXG4gICAgICAgIGNvZGVfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3L29kaW4tcm9jay1wYXBlci1zY2lzc29ycycsXG4gICAgICAgIGxpdmVfdXJsOiAnaHR0cHM6Ly9qY2FtcGJlbGw1Ny5naXRodWIuaW8vb2Rpbi1yb2NrLXBhcGVyLXNjaXNzb3JzLycsXG4gICAgICAgIGRlc2M6ICdBIGZ1biB2YXJpYW50IG9mIHRoZSBjbGFzc2ljIFJvY2ssIFBhcGVyLCBTY2lzc29ycyBnYW1lISBUaGlzIGdhbWUgaXMgcGxheWVkIGFnYWluc3QgQUkgb3ZlciB0aGUgY291cnNlIG9mIGZpdmUgcm91bmRzLiBUaGVyIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IGlzIHRvIHByYWN0aWNlIGJhc2ljIEphdmFTY3JpcHQgY29uY2VwdHMgYW5kIGltcGxlbWVudCBhIGZ1bmN0aW9uaW5nIHVzZXIgaW50ZXJmYWNlLicsXG4gICAgICAgIGFsdEltZ1RleHQ6ICdNYXN0ZXJtaW5kIGdhbWUuJyxcbiAgICAgICAgaWNvbnM6IFsnaHRtbCcsICdjc3MnLCAnamF2YXNjcmlwdCcsICdnaXQnLCAnZ2l0aHViJ10sXG4gICAgICAgIGltZzoge1xuICAgICAgICAgICAgc21hbGw6IGJvb3Rfcm9hY2hfYm9tYl8zMDB3LFxuICAgICAgICAgICAgbWVkaXVtOiBib290X3JvYWNoX2JvbWJfNjAwdyxcbiAgICAgICAgICAgIGxhcmdlOiBib290X3JvYWNoX2JvbWJfMTI1MHcsXG4gICAgICAgIH1cbiAgICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0c1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXdpZ2xleSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFZhcmlhYmxlcyAqL1xuXG46cm9vdCB7XG4gICAgLS1wcmltYXJ5LWJsdWU6IHJnYigwLCAxMjMsIDI1NSk7XG4gICAgLS1saWdodC1ibHVlOiByZ2IoMjI0LCAyNDcsIDI1NSk7XG4gICAgLS1kYXJrLWJsdWU6IHJnYigwLCA2NCwgMTMzKTtcbiAgICAtLXBhbmVsLWJhY2tncm91bmQ6IGhzbCgwLCAwJSwgMTAwJSwgMC4yKTtcblxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvci1kYXJrOiBncmF5O1xuXG4gICAgLS1zZWxlY3Rpb24taG92ZXI6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMSk7XG4gICAgLS1zZWxlY3Rpb24tYWN0aXZlOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjIpO1xuXG4gICAgLS1ib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMzIsIDMyLCAzMik7XG4gICAgLS1ib3gtc2hhZG93LWhvdmVyOiAycHggMnB4IDZweCBibGFjaztcbiAgICAtLWJveC1zaGFkb3ctYWN0aXZlOiAxcHggMXB4IDZweCBibGFjaztcblxuICAgIC0tZGFyay1mb250LWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XG4gICAgLS1kYXJrLWZvbnQtaG92ZXI6IGJsYWNrO1xuICAgIC0tbGlnaHQtZm9udC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICAtLWxpZ2h0LWZvbnQtaG92ZXI6IHdoaXRlO1xuXG4gICAgLyogY3NzIGRhcmsgYmx1ZXMgKi9cbiAgICAtLWRlZmF1bHQtZGFyay1ibHVlOiBkYXJrYmx1ZTtcbiAgICAtLWRlZmF1bHQtbWlkbmlnaHQtYmx1ZTogbWlkbmlnaHRibHVlO1xuICAgIC0tZGVmYXVsdC1uYXZ5OiBuYXZ5O1xuXG4gICAgLyogY3NzIGxpZ2h0IGJsdWVzICovXG4gICAgLS1kZWZhdWx0LWNvcm5mbG93ZXItYmx1ZTogY29ybmZsb3dlcmJsdWU7XG4gICAgLS1kZWZhdWx0LWRlZXAtc2t5LWJsdWU6IGRlZXBza3libHVlO1xuICAgIC0tZGVmYXVsdC1kb2RnZXItYmx1ZTogZG9kZ2VyYmx1ZTtcbiAgICAtLWRlZmF1bHQtbGlnaHQtc2t5LWJsdWU6IGxpZ2h0c2t5Ymx1ZTtcbiAgICAtLWRlZmF1bHQtc2t5LWJsdWU6IHNreWJsdWU7XG5cbiAgICAvKiBjc3MgdmVyeSBsaWdodHMgKi9cbiAgICAtLWRlZmF1bHQtYWxpY2UtYmx1ZTogYWxpY2VibHVlO1xuICAgIC0tZGVmYXVsdC1henVyZTogYXp1cmU7XG4gICAgLS1kZWZhdWx0LWxpZ2h0LWJsdWU6IGxpZ2h0Ymx1ZTtcbiAgICAtLWRlZmF1bHQtbGlnaHQtY3lhbjogbGlnaHRjeWFuO1xuICAgIC0tZGVmYXVsdC1taW50LWNyZWFtOiBtaW50Y3JlYW07XG4gICAgLS1kZWZhdWx0LXBhbGUtdHVycXVvaXNlOiBwYWxldHVycXVvaXNlO1xuICAgIC0tZGVmYXVsdC1wb3dkZXItYmx1ZTogcG93ZGVyYmx1ZTtcbiAgICAtLWRlZmF1bHQtc25vdzogc25vdztcbiAgICAtLWRlZmF1bHQtd2hpdGU6IHdoaXRlO1xufVxuXG4vKiBEZWZhdWx0IHN0eWxpbmdzICovXG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcbiAgICBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuLnF3aWdsZXktcmVndWxhciB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIlF3aWdsZXlcIiwgY3Vyc2l2ZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmgzIHtcbiAgICBmb250LXNpemU6IDEuMTdlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaDQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbmEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLyogU1ZHIHN0eWxpbmcgKi9cblxuLmdtYWlsSWNvbiB7XG4gICAgaGVpZ2h0OiAxLjhyZW07XG4gICAgZmlsbDogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XG59XG5cbi5nbWFpbEljb246aG92ZXIge1xuICAgIGZpbGw6IGZpcmVicmljaztcbn1cblxuLm9wZW5JY29uIHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBmaWxsOiB2YXIoLS1saWdodC1mb250LWNvbG9yKVxufVxuXG4ub3Blbkljb246aG92ZXIge1xuICAgIGZpbGw6IGJsYWNrXG59XG5cbi50aGVtZVRvZ2dsZUljb24ge1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGZpbGw6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpXG59XG5cbi8qIFBhZ2Ugc3R5bGluZyAqL1xuXG5odG1sIHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4OiAxO1xufVxuXG4vKiBEYXJrIG1vZGUgc3R5bGluZyAqL1xuXG5ib2R5LmRhcmtNb2RlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWRhcmspO1xufVxuXG4ucHJvamVjdHNIZWFkZXJDb250YWluZXIuZGFya01vZGUge1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcbn1cblxuLmZpbHRlckljb24uZGFya01vZGUge1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcbn1cblxuLyogSGVhZGVyIHN0eWxpbmcgKi9cblxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG59XG5cbi5oZWFkZXJOYW1lIHtcbiAgICBwYWRkaW5nOiAwIDJ2dztcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxubmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5tZW51YmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLm1lbnVMaW5rIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMnZ3O1xufVxuXG4ubWVudUxpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1ob3Zlcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudUxpbms6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tYWN0aXZlKTtcbn1cblxuLnRoZW1lVG9nZ2xlQnRuIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMCAydnc7XG59XG5cbi50aGVtZVRvZ2dsZUJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWhvdmVyKTtcbn1cblxuLnRoZW1lVG9nZ2xlQnRuOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWFjdGl2ZSk7XG59XG5cbi50aGVtZVRvZ2dsZUJ0bjpob3ZlciA+IC50aGVtZVRvZ2dsZUljb24ge1xuICAgIGZpbGw6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpO1xufVxuXG4vKiBDb250ZW50IHN0eWxpbmcgKi9cblxuLyogSW50cm8gc3R5bGluZyAqL1xuXG4uaW50cm9CYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogNHZ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbnRyb0NvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjUwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDV2dztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW50cm9JbWFnZSB7XG4gICAgaGVpZ2h0OiBtaW4oMzB2dywgNTAwcHgpO1xuICAgIHdpZHRoOiBtaW4oMzB2dywgNTAwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IG1pbigxNXZ3LCAyNTBweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59XG5cbi5pbnRyb0hlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmludHJvQmx1cmIge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5pbnRyb0xpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC42dmg7XG59XG5cbi5pbnRyb0xpbmtzID4gYTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpO1xufVxuXG4udHJhbnNpdGlvbjEge1xuICAgIGhlaWdodDogNHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwJSwgMCAxMDAlKTtcbn1cblxuLyogUHJvamVjdHMgc3R5bGluZyAqL1xuXG4ucHJvamVjdHNDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG4gICAgcGFkZGluZzogNHZ3O1xuICAgIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ucHJvamVjdHNIZWFkZXJDb250YWluZXIge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWZvbnQtY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0c1N1YmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5maWx0ZXJJY29uc0NvbnRhaW5lciA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG59XG5cbi5maWx0ZXJJY29uIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi5wcm9qZWN0Q2FyZENvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiBtaW4oMTI1MHB4LCAxMDAlKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcbn1cblxuLyogUHJvamVjdCBjYXJkIHN0eWxpbmcgKi9cblxuLnByb2plY3RDYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbC1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG4ucHJvamVjdENhcmQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctaG92ZXIpO1xufVxuXG4ucHJvamVjdENhcmQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LWFjdGl2ZSk7XG59XG5cbi5wcm9qZWN0SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZENvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC44cmVtO1xufVxuXG4uY2FyZEhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmRUaXRsZTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpIDtcbn1cblxuLmNhcmRUaXRsZUljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjRyZW07XG59XG5cbi5jYXJkVGl0bGVJY29ucyA+IGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXJkSWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5wcm9qZWN0RGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4ucHJvamVjdERlc2NyaXB0aW9uOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1ob3Zlcik7XG59XG5cbi5jYXJkU2tpbGxJY29ucyB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC40cmVtO1xufVxuXG4uY2FyZFNraWxsSWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi50cmFuc2l0aW9uMiB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XG59XG5cbi8qIEFib3V0IG1lIHN0eWxpbmcgKi9cblxuLmFib3V0TWVCYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIHBhZGRpbmc6IDAgNHZ3O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFib3V0TWVDb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTI1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5wb3J0cmFpdEltYWdlIHtcbiAgICB3aWR0aDogNDB2dztcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgbWF4LXdpZHRoOiBtaW4oOTB2dywgNjQwcHgpOyAgICBcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgbWFyZ2luLWxlZnQ6IG1pbigydncsIDJyZW0pO1xuICAgIG1hcmdpbi1ib3R0b206IG1pbigxdncsIDFyZW0pO1xuXG4gICAgLyogZm9yIHRleHQgd3JhcDogKi9cbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5hYm91dE1lSGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5hYm91dE1lU3BhY2VyIHsgXG4gICAgaGVpZ2h0OiA0dmg7XG59XG5cbi5ibHVyYkNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwtYmFja2dyb3VuZCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcbn1cblxuLyogQ29udGFjdCBjYXJkIHN0eWxpbmcgKi9cblxuLmNvbnRhY3RCYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIHBhZGRpbmc6IDR2dztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWN0Q29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcbn1cblxuLmNvbnRhY3RDYXJkQ29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbC1iYWNrZ3JvdW5kKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbm5lY3RJY29ucyB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjRyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbm5lY3RJY29ucyA+IGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjRyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uY29ubmVjdEljb25zID4gYTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1ob3Zlcik7XG59XG5cbi5jb25uZWN0SWNvbnMgPiBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1hY3RpdmUpO1xufVxuXG4uZW1haWxMaW5rOmhvdmVyID4gLmdtYWlsSWNvbiB7XG4gICAgZmlsbDogZmlyZWJyaWNrXG59XG5cbi8qIEZvb3RlciBzdHlsaW5nICovXG5cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuZm9vdGVyID4gYSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmdpdGh1Ykljb24ge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmdpdGh1Ykljb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMik7XG59XG5cbi8qIE1vYmlsZSBzdXBwb3J0ICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBuYXYge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC50aGVtZVRvZ2dsZUJ0biB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC5pbnRyb0NvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmludHJvSW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDkwdnc7XG4gICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXZ3O1xuICAgIH1cblxuICAgIC5hYm91dE1lQ29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnBvcnRyYWl0SW1hZ2Uge1xuICAgICAgICBtYXJnaW46IHVuc2V0O1xuICAgICAgICB3aWR0aDogOTB2dztcbiAgICB9XG5cbiAgICAuYWJvdXRNZVNwYWNlciB7XG4gICAgICAgIGhlaWdodDogNXZ3O1xuICAgIH1cblxuICAgIC5ibHVyYkNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogdW5zZXQ7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLGNBQWM7O0FBRWQ7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1Qix5Q0FBeUM7O0lBRXpDLDZCQUE2QjtJQUM3Qiw2QkFBNkI7O0lBRTdCLHlDQUF5QztJQUN6QywwQ0FBMEM7O0lBRTFDLHlDQUF5QztJQUN6QyxxQ0FBcUM7SUFDckMsc0NBQXNDOztJQUV0QyxrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qix5QkFBeUI7O0lBRXpCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDLG9CQUFvQjs7SUFFcEIsb0JBQW9CO0lB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O0FBRUE7SUFDSTtBQUNKOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXdpZ2xleSZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBWYXJpYWJsZXMgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1ibHVlOiByZ2IoMCwgMTIzLCAyNTUpO1xcbiAgICAtLWxpZ2h0LWJsdWU6IHJnYigyMjQsIDI0NywgMjU1KTtcXG4gICAgLS1kYXJrLWJsdWU6IHJnYigwLCA2NCwgMTMzKTtcXG4gICAgLS1wYW5lbC1iYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEwMCUsIDAuMik7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICAtLWJhY2tncm91bmQtY29sb3ItZGFyazogZ3JheTtcXG5cXG4gICAgLS1zZWxlY3Rpb24taG92ZXI6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMSk7XFxuICAgIC0tc2VsZWN0aW9uLWFjdGl2ZTogaHNsYSgwLCAwJSwgMTAwJSwgMC4yKTtcXG5cXG4gICAgLS1ib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMzIsIDMyLCAzMik7XFxuICAgIC0tYm94LXNoYWRvdy1ob3ZlcjogMnB4IDJweCA2cHggYmxhY2s7XFxuICAgIC0tYm94LXNoYWRvdy1hY3RpdmU6IDFweCAxcHggNnB4IGJsYWNrO1xcblxcbiAgICAtLWRhcmstZm9udC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xcbiAgICAtLWRhcmstZm9udC1ob3ZlcjogYmxhY2s7XFxuICAgIC0tbGlnaHQtZm9udC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS1saWdodC1mb250LWhvdmVyOiB3aGl0ZTtcXG5cXG4gICAgLyogY3NzIGRhcmsgYmx1ZXMgKi9cXG4gICAgLS1kZWZhdWx0LWRhcmstYmx1ZTogZGFya2JsdWU7XFxuICAgIC0tZGVmYXVsdC1taWRuaWdodC1ibHVlOiBtaWRuaWdodGJsdWU7XFxuICAgIC0tZGVmYXVsdC1uYXZ5OiBuYXZ5O1xcblxcbiAgICAvKiBjc3MgbGlnaHQgYmx1ZXMgKi9cXG4gICAgLS1kZWZhdWx0LWNvcm5mbG93ZXItYmx1ZTogY29ybmZsb3dlcmJsdWU7XFxuICAgIC0tZGVmYXVsdC1kZWVwLXNreS1ibHVlOiBkZWVwc2t5Ymx1ZTtcXG4gICAgLS1kZWZhdWx0LWRvZGdlci1ibHVlOiBkb2RnZXJibHVlO1xcbiAgICAtLWRlZmF1bHQtbGlnaHQtc2t5LWJsdWU6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgLS1kZWZhdWx0LXNreS1ibHVlOiBza3libHVlO1xcblxcbiAgICAvKiBjc3MgdmVyeSBsaWdodHMgKi9cXG4gICAgLS1kZWZhdWx0LWFsaWNlLWJsdWU6IGFsaWNlYmx1ZTtcXG4gICAgLS1kZWZhdWx0LWF6dXJlOiBhenVyZTtcXG4gICAgLS1kZWZhdWx0LWxpZ2h0LWJsdWU6IGxpZ2h0Ymx1ZTtcXG4gICAgLS1kZWZhdWx0LWxpZ2h0LWN5YW46IGxpZ2h0Y3lhbjtcXG4gICAgLS1kZWZhdWx0LW1pbnQtY3JlYW06IG1pbnRjcmVhbTtcXG4gICAgLS1kZWZhdWx0LXBhbGUtdHVycXVvaXNlOiBwYWxldHVycXVvaXNlO1xcbiAgICAtLWRlZmF1bHQtcG93ZGVyLWJsdWU6IHBvd2RlcmJsdWU7XFxuICAgIC0tZGVmYXVsdC1zbm93OiBzbm93O1xcbiAgICAtLWRlZmF1bHQtd2hpdGU6IHdoaXRlO1xcbn1cXG5cXG4vKiBEZWZhdWx0IHN0eWxpbmdzICovXFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcXG4gICAgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxufVxcblxcbi5xd2lnbGV5LXJlZ3VsYXIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUXdpZ2xleVxcXCIsIGN1cnNpdmUgIWltcG9ydGFudDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuMTdlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBTVkcgc3R5bGluZyAqL1xcblxcbi5nbWFpbEljb24ge1xcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXG4gICAgZmlsbDogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxufVxcblxcbi5nbWFpbEljb246aG92ZXIge1xcbiAgICBmaWxsOiBmaXJlYnJpY2s7XFxufVxcblxcbi5vcGVuSWNvbiB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBmaWxsOiB2YXIoLS1saWdodC1mb250LWNvbG9yKVxcbn1cXG5cXG4ub3Blbkljb246aG92ZXIge1xcbiAgICBmaWxsOiBibGFja1xcbn1cXG5cXG4udGhlbWVUb2dnbGVJY29uIHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGZpbGw6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpXFxufVxcblxcbi8qIFBhZ2Ugc3R5bGluZyAqL1xcblxcbmh0bWwge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLyogRGFyayBtb2RlIHN0eWxpbmcgKi9cXG5cXG5ib2R5LmRhcmtNb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1kYXJrKTtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyQ29udGFpbmVyLmRhcmtNb2RlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZmlsdGVySWNvbi5kYXJrTW9kZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWNvbG9yKTtcXG59XFxuXFxuLyogSGVhZGVyIHN0eWxpbmcgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi5oZWFkZXJOYW1lIHtcXG4gICAgcGFkZGluZzogMCAydnc7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG5uYXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubWVudWJhciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lbnVMaW5rIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDJ2dztcXG59XFxuXFxuLm1lbnVMaW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudUxpbms6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWFjdGl2ZSk7XFxufVxcblxcbi50aGVtZVRvZ2dsZUJ0biB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAydnc7XFxufVxcblxcbi50aGVtZVRvZ2dsZUJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1ob3Zlcik7XFxufVxcblxcbi50aGVtZVRvZ2dsZUJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tYWN0aXZlKTtcXG59XFxuXFxuLnRoZW1lVG9nZ2xlQnRuOmhvdmVyID4gLnRoZW1lVG9nZ2xlSWNvbiB7XFxuICAgIGZpbGw6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpO1xcbn1cXG5cXG4vKiBDb250ZW50IHN0eWxpbmcgKi9cXG5cXG4vKiBJbnRybyBzdHlsaW5nICovXFxuXFxuLmludHJvQmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA0dnc7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmludHJvQ29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDV2dztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmludHJvSW1hZ2Uge1xcbiAgICBoZWlnaHQ6IG1pbigzMHZ3LCA1MDBweCk7XFxuICAgIHdpZHRoOiBtaW4oMzB2dywgNTAwcHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMTV2dywgMjUwcHgpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG59XFxuXFxuLmludHJvSGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmludHJvQmx1cmIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uaW50cm9MaW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC42dmg7XFxufVxcblxcbi5pbnRyb0xpbmtzID4gYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWhvdmVyKTtcXG59XFxuXFxuLnRyYW5zaXRpb24xIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDAlLCAwIDEwMCUpO1xcbn1cXG5cXG4vKiBQcm9qZWN0cyBzdHlsaW5nICovXFxuXFxuLnByb2plY3RzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nOiA0dnc7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkZXJDb250YWluZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1mb250LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHNTdWJoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmZpbHRlckljb25zQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwIDAuOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG5cXG4uZmlsdGVySWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnByb2plY3RDYXJkQ29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiBtaW4oMTI1MHB4LCAxMDAlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IGNsYW1wKDFyZW0sIDJ2dywgMnJlbSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcXG59XFxuXFxuLyogUHJvamVjdCBjYXJkIHN0eWxpbmcgKi9cXG5cXG4ucHJvamVjdENhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbC1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG59XFxuXFxuLnByb2plY3RDYXJkOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1ob3Zlcik7XFxufVxcblxcbi5wcm9qZWN0Q2FyZDphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LWFjdGl2ZSk7XFxufVxcblxcbi5wcm9qZWN0SW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmRDb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuOHJlbTtcXG59XFxuXFxuLmNhcmRIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkVGl0bGU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1ob3ZlcikgO1xcbn1cXG5cXG4uY2FyZFRpdGxlSWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjRyZW07XFxufVxcblxcbi5jYXJkVGl0bGVJY29ucyA+IGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY2FyZEljb24ge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLnByb2plY3REZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4ucHJvamVjdERlc2NyaXB0aW9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWZvbnQtaG92ZXIpO1xcbn1cXG5cXG4uY2FyZFNraWxsSWNvbnMge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNHJlbTtcXG59XFxuXFxuLmNhcmRTa2lsbEljb24ge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLnRyYW5zaXRpb24yIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxufVxcblxcbi8qIEFib3V0IG1lIHN0eWxpbmcgKi9cXG5cXG4uYWJvdXRNZUJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBwYWRkaW5nOiAwIDR2dztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXRNZUNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTI1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wb3J0cmFpdEltYWdlIHtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIG1heC13aWR0aDogOTB2dztcXG4gICAgbWF4LXdpZHRoOiBtaW4oOTB2dywgNjQwcHgpOyAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgbWFyZ2luLWxlZnQ6IG1pbigydncsIDJyZW0pO1xcbiAgICBtYXJnaW4tYm90dG9tOiBtaW4oMXZ3LCAxcmVtKTtcXG5cXG4gICAgLyogZm9yIHRleHQgd3JhcDogKi9cXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uYWJvdXRNZUhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi5hYm91dE1lU3BhY2VyIHsgXFxuICAgIGhlaWdodDogNHZoO1xcbn1cXG5cXG4uYmx1cmJDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbC1iYWNrZ3JvdW5kKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XFxufVxcblxcbi8qIENvbnRhY3QgY2FyZCBzdHlsaW5nICovXFxuXFxuLmNvbnRhY3RCYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgcGFkZGluZzogNHZ3O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTI1MHB4O1xcbn1cXG5cXG4uY29udGFjdENhcmRDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbC1iYWNrZ3JvdW5kKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY29ubmVjdEljb25zIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC40cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbm5lY3RJY29ucyA+IGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmNvbm5lY3RJY29ucyA+IGE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1ob3Zlcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1ob3Zlcik7XFxufVxcblxcbi5jb25uZWN0SWNvbnMgPiBhOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1mb250LWhvdmVyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWFjdGl2ZSk7XFxufVxcblxcbi5lbWFpbExpbms6aG92ZXIgPiAuZ21haWxJY29uIHtcXG4gICAgZmlsbDogZmlyZWJyaWNrXFxufVxcblxcbi8qIEZvb3RlciBzdHlsaW5nICovXFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuZm9vdGVyID4gYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5naXRodWJJY29uIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdpdGh1Ykljb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBNb2JpbGUgc3VwcG9ydCAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgbmF2IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLnRoZW1lVG9nZ2xlQnRuIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5pbnRyb0NvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5pbnRyb0ltYWdlIHtcXG4gICAgICAgIGhlaWdodDogOTB2dztcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDV2dztcXG4gICAgfVxcblxcbiAgICAuYWJvdXRNZUNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wb3J0cmFpdEltYWdlIHtcXG4gICAgICAgIG1hcmdpbjogdW5zZXQ7XFxuICAgICAgICB3aWR0aDogOTB2dztcXG4gICAgfVxcblxcbiAgICAuYWJvdXRNZVNwYWNlciB7XFxuICAgICAgICBoZWlnaHQ6IDV2dztcXG4gICAgfVxcblxcbiAgICAuYmx1cmJDb250YWluZXIge1xcbiAgICAgICAgbWFyZ2luOiB1bnNldDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZSIsIkljb25zIiwiY29uc3RydWN0b3IiLCJpY29uQ2xhc3NlcyIsImRldkljb25zTGluayIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZWwiLCJ0eXBlIiwiaHJlZiIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaWNvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjcmVhdGVJY29uIiwiX3RoaXMiLCJpY29uQ2xhc3MiLCJpY29uTmFtZSIsIm5ld0ljb24iLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYWRkaXRpb25hbENsYXNzZXMiLCJBcnJheSIsIl9rZXkiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJpbmNsdWRlcyIsImdldEljb24iLCJfdGhpczIiLCJuYW1lIiwiX2xlbjIiLCJfa2V5MiIsIkdtYWlsSWNvblN2ZyIsInN2Z05TIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwiX2xlbjMiLCJfa2V5MyIsInNldEF0dHJpYnV0ZU5TIiwiam9pbiIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJwYXRoIiwiYXBwZW5kQ2hpbGQiLCJPcGVuSWNvblN2ZyIsIl9sZW40IiwiX2tleTQiLCJ0aGVtZVRvZ2dsZUljb25TdmciLCJfbGVuNSIsIl9rZXk1IiwidzFfMzAwdyIsIncxXzYwMHciLCJ3MV8xMjUwdyIsImNyZWF0ZUFib3V0TWVDb250ZW50IiwiYWJvdXRNZUNvbnRlbnQiLCJwb3J0cmFpdEltYWdlIiwic3JjIiwic3Jjc2V0Iiwic2l6ZXMiLCJhbHQiLCJhYm91dE1lU3BhY2VyIiwiYmx1cmJDb250YWluZXIiLCJhYm91dE1lUDEiLCJhYm91dE1lUDIiLCJhYm91dE1lUDMiLCJjcmVhdGVBYm91dE1lQ29udGFpbmVyIiwiYWJvdXRNZUJhY2tncm91bmQiLCJhYm91dE1lQ29udGFpbmVyIiwiaWQiLCJhYm91dE1lSGVhZGVyIiwiaWNvbnMiLCJjcmVhdGVDb25uZWN0SWNvbnMiLCJjb25uZWN0SWNvbnMiLCJlbWFpbExpbmsiLCJlbWFpbFRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImdpdGh1YkxpbmsiLCJ0YXJnZXQiLCJnaXRodWJUZXh0IiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsImxpbmtlZGluTGluayIsImxpbmtlZGluVGV4dCIsImNyZWF0ZUNvbnRhY3RDYXJkIiwiY29udGFjdENhcmRDb250YWluZXIiLCJjb250YWN0Q2FyZEhlYWRlciIsImNyZWF0ZUNvbnRhY3RDb250YWluZXIiLCJjb250YWN0QmFja2dyb3VuZCIsImNvbnRhY3RDb250YWluZXIiLCJoM19zcV8zMDB3IiwiaDNfc3FfNjAwdyIsImgzX3NxXzEyNTB3IiwiY3YiLCJjcmVhdGVJbnRyb0NvbnRhaW5lciIsImludHJvQmFja2dyb3VuZCIsImludHJvQ29udGFpbmVyIiwiaW50cm9JbWFnZSIsImludHJvQmx1cmJDb250YWluZXIiLCJpbnRyb0hlYWRlciIsImludHJvQmx1cmIiLCJpbnRyb0xpbmtzIiwiaW50cm9SZXN1bWVMaW5rIiwiZG93bmxvYWQiLCJpbnRyb0VtYWlsTGluayIsInByb2plY3RzIiwiY3JlYXRlUHJvamVjdENhcmQiLCJwcm9qZWN0IiwicHJvamVjdENhcmQiLCJwcm9qZWN0SW1nIiwiaW1nIiwibWVkaXVtIiwic21hbGwiLCJhbHRJbWdUZXh0IiwiY2FyZENvbnRlbnQiLCJjYXJkSGVhZGVyIiwiY2FyZFRpdGxlTGluayIsImxpdmVfdXJsIiwiY2FyZFRpdGxlIiwiY2FyZFRpdGxlSWNvbnMiLCJjYXJkR2l0aHViTGluayIsImNvZGVfdXJsIiwiY2FyZExpdmVMaW5rIiwiZGVzY3JpcHRpb25MaW5rIiwicHJvamVjdERlc2NyaXB0aW9uIiwiZGVzYyIsImNhcmRTa2lsbEljb25zIiwiZm9yRWFjaCIsImRpc3BsYXlQcm9qZWN0cyIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0Q2FyZENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJuZXdQcm9qZWN0Q2FyZCIsImRpc3BsYXlBbGxQcm9qZWN0cyIsImZpbHRlclByb2plY3RzQnlJY29uIiwiY2hvc2VuSWNvbk5hbWUiLCJzdGFuZGFyZGl6ZWRJY29uTmFtZSIsInJlcGxhY2UiLCJmaWx0ZXIiLCJzZWxlY3RlZEljb24iLCJoYW5kbGVJY29uQ2xpY2siLCJjaG9zZW5JY29uIiwiaWNvbkRhdGEiLCJnZXRBdHRyaWJ1dGUiLCJhbGxJY29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVQcm9qZWN0c0hlYWRlciIsInByb2plY3RzSGVhZGVyQ29udGFpbmVyIiwicHJvamVjdHNIZWFkZXIiLCJwcm9qZWN0c1N1YmhlYWRlciIsImZpbHRlckljb25zQ29udGFpbmVyIiwiaWNvbk5hbWVzIiwiYnV0dG9uIiwiY29udGFpbnMiLCJjcmVhdGVQcm9qZWN0Q2FyZENvbnRhaW5lciIsImNyZWF0ZVByb2plY3RzQ29udGFpbmVyIiwicHJvamVjdHNDb250YWluZXIiLCJnaXRodWJJY29uIiwiY3JlYXRlTmF2IiwibmF2IiwibWVudWJhciIsIm1lbnVJdGVtcyIsIm1lbnVJdGVtIiwibmV3TWVudUl0ZW0iLCJtZW51TGluayIsInRvTG93ZXJDYXNlIiwic2V0VGhlbWVQcmVmZXJlbmNlIiwibG9jYWxTdG9yYWdlIiwidGhlbWVQcmVmZXJlbmNlIiwidW5kZWZpbmVkIiwic2V0SXRlbSIsImdldEl0ZW0iLCJsb2FkVGhlbWUiLCJib2R5IiwiZmlsdGVySWNvbnMiLCJ0b2dnbGVUaGVtZSIsImN1cnJlbnRUaGVtZSIsImNyZWF0ZVRoZW1lVG9nZ2xlQnRuIiwidGhlbWVUb2dnbGVCdG4iLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJyb2xlIiwiaGVhZGVyTmFtZUxpbmsiLCJjcmVhdGVUcmFuc2l0aW9uIiwic3R5bGluZ0NsYXNzIiwidHJhbnNpdGlvbiIsImNyZWF0ZUNvbnRlbnQiLCJjb250ZW50Q29udGFpbmVyIiwiY3JlYXRlRm9vdGVyIiwiZm9vdGVyIiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibmV3R2l0aHViSWNvbiIsImhlYWQiLCJhZG1pbmRhc2hib2FyZF8zMDB3IiwiYWRtaW5kYXNoYm9hcmRfNjAwdyIsImFkbWluZGFzaGJvYXJkXzEyNTB3IiwiYmF0dGxlc2hpcF8zMDB3IiwiYmF0dGxlc2hpcF82MDB3IiwiYmF0dGxlc2hpcF8xMjUwdyIsImJvb3Rfcm9hY2hfYm9tYl8zMDB3IiwiYm9vdF9yb2FjaF9ib21iXzYwMHciLCJib290X3JvYWNoX2JvbWJfMTI1MHciLCJjYWxjdWxhdG9yXzMwMHciLCJjYWxjdWxhdG9yXzYwMHciLCJjYWxjdWxhdG9yXzEyNTB3IiwiY2hlc3NfMzAwdyIsImNoZXNzXzYwMHciLCJjb25uZWN0X2ZvdXJfMzAwdyIsImNvbm5lY3RfZm91cl82MDB3IiwiY29ubmVjdF9mb3VyXzEyNTB3IiwiY3ZfYnVpbGRlcl8zMDB3IiwiY3ZfYnVpbGRlcl82MDB3IiwiY3ZfYnVpbGRlcl8xMjUwdyIsImhhbmdtYW5fMzAwdyIsImhhbmdtYW5fNjAwdyIsImhhbmdtYW5fMTI1MHciLCJtYXN0ZXJtaW5kXzMwMHciLCJtYXN0ZXJtaW5kXzYwMHciLCJvZGluYm9va18zMDB3Iiwib2RpbmJvb2tfNjAwdyIsIm9kaW5ib29rXzEyNTB3IiwicmVzdGF1cmFudF8zMDB3IiwicmVzdGF1cmFudF82MDB3IiwicmVzdGF1cmFudF8xMjUwdyIsInNpZ25fdXBfZm9ybV8zMDB3Iiwic2lnbl91cF9mb3JtXzYwMHciLCJzaWduX3VwX2Zvcm1fMTI1MHciLCJza2V0Y2hfcGFkXzMwMHciLCJza2V0Y2hfcGFkXzYwMHciLCJza2V0Y2hfcGFkXzEyNTB3IiwidGljdGFjdG9lXzMwMHciLCJ0aWN0YWN0b2VfNjAwdyIsInRpY3RhY3RvZV8xMjUwdyIsInRvZG9saXN0XzMwMHciLCJ0b2RvbGlzdF82MDB3IiwidG9kb2xpc3RfMTI1MHciLCJ3ZWF0aGVyc2VydmVfMzAwdyIsIndlYXRoZXJzZXJ2ZV82MDB3Iiwid2VhdGhlcnNlcnZlXzEyNTB3Iiwid29ybWhvbGVfbGlnaHRfMzAwdyIsIndvcm1ob2xlX2xpZ2h0XzYwMHciLCJ3b3JtaG9sZV9saWdodF8xMjUwdyIsImxhcmdlIl0sInNvdXJjZVJvb3QiOiIifQ==