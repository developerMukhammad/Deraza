

const Btnopen = document.querySelector('.btn')
const Btnclose = document.querySelector('.bitn')
const Btntog = document.querySelector('.tog')
const Btnremove = document.querySelector('.remove')
const wleft = document.querySelector('.window-left')
const wright = document.querySelector('.window-right')

Btnopen.addEventListener('click', () => {

    wleft.classList.add('left')
    wright.classList.add('right')

    Btnopen.classList.add('bg-color')
    Btnclose.classList.remove('bg-color')
    Btntog.classList.remove('bg-color')
})

Btnclose.addEventListener('click', () => {
    wleft.classList.remove('left')
    wright.classList.remove('right')

    Btnopen.classList.remove('bg-color')
    Btnclose.classList.add('bg-color')
    Btntog.classList.remove('bg-color')
})

Btntog.addEventListener('click', () => {
    wleft.classList.toggle('left')
    wright.classList.toggle('right')
    
    Btnopen.classList.remove('bg-color')
    Btnclose.classList.remove('bg-color')
    Btntog.classList.add('bg-color')
})

Btnremove.addEventListener('click', () => {
    Btnopen.classList.remove('bg-color')
    Btnclose.classList.remove('bg-color')
    Btntog.classList.remove('bg-color')
})