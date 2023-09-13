const cart = document.querySelector('.cart');
const shoppingCart = document.querySelector('.shopping-cart')
const menuCover = document.querySelector('.menu-cover')
const menu = document.querySelector('.menu')
const menuButton = document.querySelector('.menu-button')
const closeMenu = document.querySelector('.close-menu')
const menuCategory = document.querySelectorAll('.category')
const titles = document.querySelectorAll('.category-title')
const btnLeft = document.querySelector('.button-left')
const btnRight = document.querySelector('.button-right')
const btnIncreaseQtty = document.querySelector('.increase')
const btnDeacreaseQtty = document.querySelector('.decrease')
const cartQtty = document.querySelector('.cart-quantity')
const emptyCart = document.querySelector('.cart-details')
const addToCart = document.querySelector('.purchase')

shoppingCart.addEventListener('click', toggleCart)
menuCover.addEventListener('click', showMenu)
menuButton.addEventListener('click', openMenu)
closeMenu.addEventListener('click', hideMenu)

// Adding to cart

let quantity = 0;


btnIncreaseQtty.addEventListener('click',()=>{
    quantity++
    let amount = document.querySelector('.amount').innerHTML = quantity
    let price = 125
    cartQtty.style.display = 'block'
    cartQtty.innerHTML = `${quantity}`
    
    emptyCart.innerHTML=''
    emptyCart.insertAdjacentHTML('beforeend',`
    <div class='checkout-cart'>
        <img src='/images/image-product-1.jpg' alt='shoe'>
        <div class='product-cart-details'>
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x ${amount} <a>$${amount*price}</a></p>
        </div>
        <i class="fa-regular fa-trash-can delete-order" ></i>
    </div>
    <button class='checkout'>Checkout</button>`)
})

emptyCart.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete-order')){
        cartQtty.style.display = 'none'
        emptyCart.innerHTML= '<p>Your cart is empty</p>'
        let amount = document.querySelector('.amount').innerHTML = 0
        quantity = 0
    }
})

// decrease quantity button
btnDeacreaseQtty.addEventListener('click',()=>{
    const emptyCart = document.querySelector('.cart-details')
    if(quantity > 0){
        quantity--
    }
    if(quantity === 0){
        cartQtty.style.display = 'none'
        emptyCart.innerHTML= '<p>Your cart is empty</p>'
        let amount = document.querySelector('.amount').innerHTML = 0
    }else{
        cartQtty.innerHTML = `${quantity}`
        let amount = document.querySelector('.amount').innerHTML = quantity
        let price = 125
        emptyCart.innerHTML=''
        
        emptyCart.insertAdjacentHTML('beforeend',`
        <div class='checkout-cart'>
            <img src='/images/image-product-1.jpg' alt='shoe'>
            <div class='product-cart-details'>
                <p>Fall Limited Edition Sneakers</p>
                <p>$125.00 x ${amount} <a>$${amount*price}</a></p>
            </div>
            <i class="fa-regular fa-trash-can "id='delete-order'></i>
        </div>
        <button class='checkout'>Checkout</button>
        `)
    }
    
    
})



// Carrousel

let slidesIndex = 1
showSlides(slidesIndex)

function plusSlides(n) {
    showSlides(slidesIndex += n);
}

btnLeft.addEventListener('click', ()=>{plusSlides(-1)})
btnRight.addEventListener('click', ()=>{plusSlides(1)})

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('img-slide')
    if (n > slides.length){ slidesIndex = 1}
    if (n < 1){slidesIndex = slides.length}
    for(i = 0; i < slides.length;i++){
        slides[i].style.display = 'none'
    }
    slides[slidesIndex-1].style.display = "block"; 

}

// Menu
titles.forEach(title=>{
    title.addEventListener('click',(e)=>{
        const target = e.target.closest('.category')
        menuCategory.forEach(menu=>{
            if(menu !== target){
                menu.classList.remove('active')
            }
        })
        target.classList.toggle('active')
    })
})

// show menu function
function showMenu(){
    menu.style.display = 'none'
    menuCover.style.display = 'none'
}

//toggle cart
function toggleCart(){
    if(cart.style.display === 'none'){
        cart.style.display = 'block'
    }else{
        cart.style.display = 'none'  
    }
}

// add to cart

addToCart.addEventListener('click',()=>{
    if(quantity === 0){
        return
    }else{
        cart.style.display = 'block'
    }
})

document.addEventListener('click',(e)=>{
    if(!e.target.classList.contains('cart') && e.target.classList.contains('shoppingCart')){
        cart.style.display = 'none'
    }
})

function hideMenu(){
    menu.style.display = 'none'
    menuCover.style.display = 'none'
}

function openMenu(){
    menu.style.display = 'block'
    menuCover.style.display = 'block'
}

// modal

const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.close-modal')

modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal')){
        modal.style.display = 'none'
    }
})

modalBtn.addEventListener('click',()=>modal.style.display = 'none')

const modalPopup =  document.querySelectorAll('.modal-popup')
const modalThumbImage = document.querySelectorAll('.modal-thumbnail-image')

modalPopup.forEach(popup =>{
    popup.addEventListener('click',()=>{
        modal.style.display = 'block'
        // document.querySelector('.modal-image').src = popup.getAttribute('src')
        // document.querySelector('.modal-image').style.width = "100%"
        // console.log(popup.getAttribute('src'))
    })
})

modalThumbImage.forEach(image =>{
    image.addEventListener('click',()=>{
        // document.querySelector('.modal-image').src = image.getAttribute('src')
        // document.querySelector('.modal-image').style.width = "100%"
    })
})

let modalIndex = 1
slideModal(modalIndex)

function slideModal(n){
    let modalSlides = document.getElementsByClassName('modal-slide')
    if(n > modalSlides.length){modalIndex = 1}
    if(n < 1){modalIndex = modalSlides.length}
    
    for(let i = 0 ;i < modalSlides.length; i++){
        modalSlides[i].style.display = 'none'
    }
    modalSlides[modalIndex-1].style.display = 'block'
}

const modalBtnLeft = document.querySelector('.modal-btn-left')
const modalBtnRight = document.querySelector('.modal-btn-right')

function plusModal(n){
    slideModal(modalIndex += n)
    console.log(modalIndex)
}

function modalThumbnailSelect(n){
    slideModal(modalIndex = n)
}

modalBtnLeft.addEventListener('click', ()=>{plusModal(-1)})
modalBtnRight.addEventListener('click', ()=>{plusModal(1)})

