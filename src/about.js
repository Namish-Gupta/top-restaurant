export default function loadAbout() {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const headline = document.createElement('h1');
    headline.textContent = 'Find Our Cart';
    aboutContainer.appendChild(headline);

    const infoCard = document.createElement('div');
    infoCard.classList.add('info-card');

    const phone = document.createElement('p');
    phone.textContent = '📞 +91 98765 43210';

    const address = document.createElement('p');
    address.textContent = '📍 Juhu Beach Road, Mumbai, Maharashtra';

    const hours = document.createElement('p');
    hours.textContent = '🕒 Open Daily: 4:00 PM - 11:30 PM';

    infoCard.appendChild(phone);
    infoCard.appendChild(address);
    infoCard.appendChild(hours);

    aboutContainer.appendChild(infoCard);
    return aboutContainer;
}