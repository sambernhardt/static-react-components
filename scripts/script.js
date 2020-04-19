var links = document.querySelectorAll(".leftColumn a");
var blocks = document.querySelectorAll(".anchorLink");
var positions = Array.from(blocks).map(b => b.offsetTop);
positions.push(Infinity);
window.addEventListener("scroll", e => {
    setScrollPosition();
})
setTimeout(() => {
    positions = Array.from(blocks).map(b => b.offsetTop);
    positions.push(Infinity);
    setScrollPosition();
}, 1000)

function setScrollPosition() {
    positions.forEach((pos, i) => {
        if (!links[i]) return;
        var scroll = window.scrollY + 24;
        if (scroll >= pos && scroll < positions[i+1]) {
            links[i].classList.add("active")
        } else {
            links[i].classList.remove("active")
        }
    })
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});