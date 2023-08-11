const openbtn = document.querySelector('.nav-bar .toggle-menu');
const mobileMenu = document.querySelector('.nav-bar .mobile-menu');
const menuBar = document.querySelector('.nav-bar .menu-bar');
const closebtn = document.querySelector('.nav-bar .close-menu');
const navLinks = document.querySelector('.nav-bar .mobile-menu .nav-links');

function toggleMenu() {
  mobileMenu.classList.toggle('disable');
  menuBar.classList.toggle('disable');
}

openbtn.addEventListener('click', toggleMenu);
closebtn.addEventListener('click', toggleMenu);
navLinks.addEventListener('click', (e) => {
  if (e.target.className === 'nav-item') {
    toggleMenu();
  }
});
// -----------Dynamic projwct section----------

const projectsInfo = [];
const firstProject = document.querySelector('.work-section .project1');
const projectCards = document.querySelectorAll('.work-section .project-sample');

projectsInfo.push({
  projectName: 'Laptop Hire - A Ruby on Rails and React Project',
  projectLang: ['Ruby on Rails', 'React', 'PostgreSQL', 'SCSS'],
  projectImgSrc: './img/bluelapy.png',
  projectImgAlt: 'laptop',
  featureImg: './img/bluelapy.png',
  projectshortDescription:
    '"Laptop Hire" is a booking app that allows users to easily book and reserve laptops online. With Laptop Hire, users can log in and access a wide range of laptops to choose from.',
  projectDescription: `"Laptop Hire" is a group project I created, combining the power of Ruby on Rails and React to revolutionize the laptop rental and reserving experience.
    📅 With "Laptop Hire," users can:
    ✅ Explore a curated selection of laptops
    ✅ Easily schedule laptop reservation
    💼 "Laptop Hire" showcases my passion for creating user-friendly applications and integrating cutting-edge technologies.`,

  seeLive: 'https://laptoprentals.onrender.com/',
  seeSource: 'https://github.com/Harrynoqs/Final-capstone-backend',
});
projectsInfo.push({
  projectName: 'Queen"s Budget ',
  projectLang: ['Ruby on Rails', 'CSS', 'PostgreSQL'],
  projectImgSrc: './img/budget.png',
  projectImgAlt: 'Budget',
  featureImg: './img/budget.png',
  projectshortDescription:
    'Queen"s Budget is a web app that helps users categorize and manage their transactions for easy expense tracking.',
  projectDescription:
    'Introducing the Queen"s Budget! 🚀 A sleek and user-friendly website built with Ruby on Rails, that helps users categorize and manage their transactions for easy expense tracking. Stay organized and gain insights into your spending habits with this user-friendly tool.',
  seeLive: 'https://budgetapp-mhh4.onrender.com',
  seeSource: 'https://github.com/QueenterJuma/Rails-Budget-App',
});
projectsInfo.push({
  projectName: 'Rest Country',
  projectLang: ['React', 'CSS', 'API'],
  projectImgSrc: './img/continents.png',
  projectImgAlt: 'Country',
  featureImg: './img/continents.png',
  projectshortDescription: 'Rest Country is a Metrics webapp that provides users with quick and easy access to information about countries worldwide. ',
  projectDescription: 'Rest Country is a React/Redux Metrics webapp that provides users with quick and easy access to information about countries worldwide. It offers details such as capital, population, currency, languages, and time zone.',
  seeLive: 'https://the-countries.onrender.com/',
  seeSource: 'https://github.com/QueenterJuma/React_Rest_Country_Capstone',
});
projectsInfo.push({
  projectName: 'Space-Travelers',
  projectLang: ['React', 'CSS', 'API'],
  projectImgSrc: './img/space.png',
  projectImgAlt: 'Space Hub',
  featureImg: './img/space.png',
  projectshortDescription:
    'Space Hub is a webapp built with React and Redux, it fetches data from SpaceX API and Displays it. ',
  projectDescription:
    "Welcome to the Space Travel Hub! 🚀 Embark on an extraordinary journey through the cosmos with our out-of-this-world web application. Developed as a thrilling group project, Space Travel Hub integrates SpaceX's powerful API to offer you an unrivaled experience in the realm of space exploration.",
  seeLive: 'https://space-hub-osb.netlify.app/',
  seeSource: 'https://github.com/QueenterJuma/space-travelers-react-redux',
});
projectsInfo.push({
  projectName: 'Math magicians',
  projectLang: ['React', 'CSS', 'HTML', 'JavaScript'],
  projectImgSrc: './img/mathmagic.png',
  projectImgAlt: 'Calculator',
  featureImg: './img/mathmagic.png',
  projectshortDescription:
    '"Math magicians" is a website for all fans of mathematics.',
  projectDescription:
    '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations and Read a random math-related quote.',
  seeLive: 'https://magic-calculator-app.onrender.com/',
  seeSource: 'https://github.com/QueenterJuma/math-magician',
});
projectsInfo.push({
  projectName: 'Dog App',
  projectLang: ['JavaScript', 'CSS'],
  projectImgSrc: './img/dogapp.png',
  projectImgAlt: 'Recipe',
  featureImg: './img/dogapp.png',
  projectshortDescription:
    'Dog App website is an API-based webapp that get informations about breeds of dogs from the base Api.',
  projectDescription: `This website is an Api-based webapp that get informations about breeds of dogs from the base Api and display only the 10 first breeds alphabetically display them and allow user to comment and like those breeds using involvement Api`,
  seeLive: 'https://aminederbal.github.io/capstone-project-2/',
  seeSource: 'https://github.com/QueenterJuma/capstone-project-2',
});
projectsInfo.push({
  projectName: 'LIveworx2023 Conference Capstone',
  projectLang: ['html', 'css', 'javascript'],
  projectImgSrc: './img/liveworx.png',
  projectImgAlt: 'Liveworx',
  featureImg: './img/liveworx.png',
  projectshortDescription:
    'Liveworx2023 Conference Capstone is a first capstone project of Microverse',
  projectDescription: `Welcome to the "Liveworx_Capstone_one" Project! 🎮🕹️ This is a conference web app built with the aim of implementing Microverse"s UI Capstone project and use Flexbox to place elements on the page. Also, adding images and backgrounds to enhance the look of the website.`,
  seeLive: 'https://queenterjuma.github.io/Liveworx_Capstone_one.github.io/',
  seeSource: 'https://github.com/QueenterJuma/Capstone_one.github.io',
});

function addProjectLang(langList) {
  let prolangs = '';
  langList.forEach((lang) => {
    prolangs += `
          <li>${lang}</li>`;
  });
  return prolangs;
}

function createProjectCards() {
  projectsInfo.forEach((project, index) => {
    if (index === 0) {
      firstProject.innerHTML = `
          <img src=${
  project.projectImgSrc
} alt="sample image" class="project-img">
          <div class="project-content">
              <h3 class="project-name">${project.projectName}</h3>
              <p class="project-description">${
  project.projectshortDescription
}</p>
              <ul class="project-lang">
                  ${addProjectLang(project.projectLang)}
              </ul>
              <button type="button" class="half-btn" id="project${index}">See Project</button>
            </div>`;
    } else {
      projectCards[
        index - 1
      ].style.backgroundImage = `url(${project.projectImgSrc})`;
      projectCards[index - 1].innerHTML = `
            <div class="content-wrapper">
                <h3 class="project-name">${project.projectName}</h3>
                <p class="project-description">${
  project.projectshortDescription
}</p>
                <ul class="project-lang">
                  ${addProjectLang(project.projectLang)}
                </ul>
            </div>
            <button type="button" class="full-btn" id="project${index}">See Project</button>`;
    }
  });
}

createProjectCards();

// -------------Model----------
const project = document.querySelector('#portfolio .grid-wrapper');
const modelWrapper = document.querySelector('.model-wrapper');
const model = document.querySelector('.model');
const closepopup = document.querySelector('.model .close-popup');

function addProjectInfo(projectObj) {
  model.querySelector('.project-name').textContent = projectObj.projectName;
  model.querySelector('.project-description').textContent = projectObj.projectDescription;
  model.querySelector('.project-img').src = projectObj.featureImg;
  model.querySelector('.project-img').alt = projectObj.projectImgAlt;
  model.querySelector('.project-lang').innerHTML = `${addProjectLang(
    projectObj.projectLang,
  )}`;
  model.querySelector('.model .see-live').href = projectObj.seeLive;
  model.querySelector('.model .see-source').href = projectObj.seeSource;
}

project.addEventListener('click', (e) => {
  if (e.target.id) {
    const index = e.target.id.replace('project', '');
    if (projectsInfo[index]) {
      modelWrapper.classList.toggle('disable');
      addProjectInfo(projectsInfo[index]);
    }
  }
});

closepopup.addEventListener('click', () => {
  modelWrapper.classList.toggle('disable');
});

// -------------Form----------
const form = document.querySelector('.contact-section .contact-form');
const msg = document.querySelector('.contact-section .contact-form .message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.elements.mail;
  msg.textContent = '';
  if (email.value === email.value.toLowerCase()) {
    form.submit();
  } else {
    msg.textContent = 'Please enter a lowercase email';
  }
});

// ---------Storage-------
function restoreData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  form.elements.name.value = formData.name;
  form.elements.mail.value = formData.email;
  form.elements.msg.value = formData.msg;
}

function updateLocalStorage() {
  const formData = {
    name: form.elements.name.value,
    email: form.elements.mail.value,
    msg: form.elements.msg.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
  restoreData();
}

form.elements.name.onchange = updateLocalStorage;
form.elements.mail.onchange = updateLocalStorage;
form.elements.msg.onchange = updateLocalStorage;

if (!localStorage.getItem('formData')) {
  updateLocalStorage();
} else {
  restoreData();
}

/* eslint-disable */
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });
});
/* eslint-enable */
