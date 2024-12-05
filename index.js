document.addEventListener('DOMContentLoaded', () => {
    const open = document.querySelector('.open');
    const close = document.querySelector('.close');
    const window = document.querySelector('.window');

    open.addEventListener('click', () => {
        window.classList.add('active')
    })

    close.addEventListener('click', () => {
        window.classList.remove('active')
    })

})