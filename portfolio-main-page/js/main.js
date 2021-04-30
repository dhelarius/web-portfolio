/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show')
            })
        }
}

showMenu('nav__toggle','nav__menu');

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    const navMenu = document.getElementById('nav__menu')
    navMenu.classList.remove('show')
} 

navLink.forEach(n => n.addEventListener('click', linkAction))



/*===== MODAL =====*/
// Get the modal
let modal = document.getElementById("modal-screen")

// Get the image and insert it inside the modal - use its "alt" text as a caption
let images = document.getElementsByClassName("portfolio__img")
let modalImg = document.getElementById("modal-img")
let captionText = document.getElementById("modal-caption")

for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modal.style.display = "block"
        modalImg.src = this.src
        captionText.innerHTML = this.alt
    }
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("modal__close")[0]

// When the user clicks on close icon (x), close the modal
span.onclick = function () {
    modal.style.display = "none"
}