// toggle likeButton
const likeBtn = document.querySelector('.header__likeBtn')
likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('header__likeBtn--active')
})

// translateX radiobuttons
const radioWrapperAbsolut = document.querySelector('.type__radio-wrapper--absolut')
let x1 = null;

function handleTouchStart(e) {
    const firstTouch = e.touches[0];
    x1 = firstTouch.clientX;
}

function handleTouchMove(e) {
    if (!x1) {
        return
    }
    let x2 = e.touches[0].clientX
    let xDiff = x2 - x1

    radioWrapperAbsolut.style.transform = `translateX(${xDiff}px)`
}
radioWrapperAbsolut.addEventListener('touchstart', handleTouchStart, false);
radioWrapperAbsolut.addEventListener('touchmove', handleTouchMove, false);