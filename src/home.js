import vadaPavImg from './vada-pav.jpg';

export default function loadHome() {
    const home = document.createElement('div');
    home.id = 'home-container';

    const headLine = document.createElement('h1');
    headLine.textContent = 'Garden Vada Pav';

    const heroImg = document.createElement('img');
    heroImg.src = vadaPavImg;

    heroImg.alt = 'Photo of a vada pav with chutney';
    heroImg.id = 'hero-img';

    const description = document.createElement('p');
    description.textContent = 'Fresh hot vada pav server with coriander chutney';

    home.appendChild(headLine);
    home.appendChild(heroImg);
    home.appendChild(description);
    
    return home;
}