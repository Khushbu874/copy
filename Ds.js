const productImages = document.querySelectorAll(".product-images img"); // selecting all image thumbs
const productImageSlide = document.querySelector(".image-slider"); // selecting image slider element

let activeImageSlide = 0; // default slider image

productImages.forEach((item, i) => { // looping through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide = i; // updating the image slider variable to track current thumb
    })
})

// toggle size buttons

const sizeBtns = document.querySelectorAll('.size-radio-btn'); // selecting size buttons
let checkedBtn = 0; // current selected button

sizeBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => { // adding click event to each 
        sizeBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
        item.classList.add('check'); // adding check class to clicked button
        checkedBtn = i; // upading the variable
    })
})



/*----------------------------home.js-------------------------*/
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

})

/*--------------------------nav.js------------------------------*/
const createNav = () => {
    let nav = document.querySelector('.navbar');


}

createNav();


/*--------------------------footer.js-----------------------------*/
const createFooter = () => {
    let footer = document.querySelector('footer');

    /*
    footer.innerHTML = '
    ';
    */

    createFooter();

}

/*-------------------------cart.js-------------------------------*/

/*
const addToCartButton = document.querySelector('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

let cart = [];
let total = 0;

addToCartButton.addEventListener('click', () => {
    const product = {
        name: 'Decorative Showpiece',
        price: 1050,
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/300427288/AQ/HP/TB/46180097/img-20210716-153242.jpg'
    };

    cart.push(product);
    total += product.price;

    updateCart();
});

function updateCart() {
    cartItems.innerHTML = '';
    total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="'https://5.imimg.com/data5/SELLER/Default/2023/4/300427288/AQ/HP/TB/46180097/img-20210716-153242.jpg'" alt="Product Image" width="50">
            'Decorative Showpiece' - 1050
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.price;

        // Add event listener to the remove button
        const removeButton = li.querySelector('.remove-item');
        removeButton.addEventListener('click', () => {
            removeItem(index);
        });
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}
    */

const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cart = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            name: button.parentElement.querySelector('h2').textContent,
            price: parseFloat(button.parentElement.querySelector('p').textContent.replace('$', ''))
        };

        // Ensure price is a valid number
        if (isNaN(product.price)) {
            console.error('Invalid price format. Please check the price element.');
            return;
        }

        // Add product to the cart array
        cart.push(product);

        // Update the cart display
        updateCart();
    });
});


const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

function updateCart() {
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((product, index) => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} - $${product.price.toFixed(2)} <button class="remove-item" data-index="${index}">Remove</button>`;
        cartItems.appendChild(cartItem);

        totalPrice += product.price;
    });

    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.dataset.index;
            cart.splice(index, 1);
            updateCart();
        });
    });
}