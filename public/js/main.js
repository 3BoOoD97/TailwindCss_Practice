const mobile_nav = document.getElementById('mobile_nav');
const closeBtn = document.getElementById('closeBtn');
const toggleMenu = document.getElementById('toggleMenu');
const allLi= mobile_nav.querySelectorAll('li');


toggleMenu.addEventListener('click', () => {
    mobile_nav.classList.remove("right-[-200%]")
    mobile_nav.classList.add("right-0")
});

closeBtn.addEventListener('click', () => {
    mobile_nav.classList.remove("right-0")
    mobile_nav.classList.add("right-[-200%]")
});

allLi.forEach(li => 
    li.addEventListener('click', () => {
        mobile_nav.classList.remove("right-0")
        mobile_nav.classList.add("right-[-200%]")
    }))
