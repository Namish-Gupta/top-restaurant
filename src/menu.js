export default function loadMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu-container';

    const headLine = document.createElement('h1');
    headLine.textContent = 'Garden Menu';
    menu.appendChild(headLine);

    const items = [
        {
            name: 'Mumbai Vada Pav',
            description: 'Deep-fried potato dumpling placed inside a bread bun (pav) sliced in half through the middle, served with green chili.',
            price: '₹20'
        },
        {
            name: 'Special Pav Bhaji',
            description: 'A spicy curry of mixed vegetables (bhaji) cooked in a special blend of spices and served with soft buttered bread bun (pav).',
            price: '₹120'
        },
        {
            name: 'Masala Chai',
            description: 'Classic tea brewed with milk, sugar, and aromatic spices like cardamom and ginger.',
            price: '₹15'
        }
    ];

    const menuGrid = document.createElement('div');
    menuGrid.id = 'menu-grid';

    items.forEach(item => {
        const menuItemCard = document.createElement('div');
        menuItemCard.classList.add('menu-item-card');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;
        itemDesc.classList.add('item-description');

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        itemPrice.classList.add('item-price');

        const orderBtn = document.createElement('button');
        orderBtn.textContent = 'Order Now';
        orderBtn.classList.add('order-btn');

        menuItemCard.appendChild(itemName);
        menuItemCard.appendChild(itemDesc);
        menuItemCard.appendChild(itemPrice);
        menuItemCard.appendChild(orderBtn);

        menuGrid.appendChild(menuItemCard);
    });

    menu.appendChild(menuGrid);
    return menu;
}