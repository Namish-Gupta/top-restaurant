import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

const content = document.getElementById('content');

function renderPage(displayFunction) {
    content.innerHTML = '';
    content.appendChild(displayFunction());
}

function initializeNavigation() {
    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    
    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'About';

    homeBtn.addEventListener('click', () => renderPage(loadHome));
    menuBtn.addEventListener('click', () => renderPage(loadMenu));
    aboutBtn.addEventListener('click', () => renderPage(loadAbout));

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(aboutBtn);

    document.body.insertBefore(navBar, content);
}

initializeNavigation();

renderPage(loadHome);