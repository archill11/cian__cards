// toggle likeButton
const likeBtn = document.querySelector('.header__likeBtn')
likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('header__likeBtn--active')
})