// VARIABLES
const btn = document.getElementById('share__btn')
const tooltip = document.querySelector('.share__box')

// EVENT
btn.addEventListener('click', function () {
    tooltip.classList.toggle('show')

    this.classList.toggle('active')

    if (this.classList.contains('active')) {
        this.setAttribute('aria-expanded', 'true')
    } else {
        this.setAttribute('aria-expanded', 'false')
    }
})