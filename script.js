window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    header.classList.toggle('rodaremY', window.scrollY > 0);
});