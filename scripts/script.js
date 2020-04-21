var links = document.querySelectorAll(".leftColumn a");
var anchorLinks = document.querySelectorAll(".anchorLink");
var blocks = document.querySelectorAll(".block");
var positions = Array.from(anchorLinks).map(b => b.offsetTop);
positions.push(Infinity);
window.addEventListener("scroll", e => {
    setScrollPosition();
})
setTimeout(() => {
    positions = Array.from(anchorLinks).map(b => b.offsetTop);
    positions.push(Infinity);
    setScrollPosition();
}, 1000)

const middleOfScreenOffset = (window.innerHeight / 2) - 100;

function setScrollPosition() {
    positions.forEach((pos, i) => {
        if (!links[i]) return;
        var scroll = window.scrollY + 24 + middleOfScreenOffset;
        if (scroll >= pos && scroll < positions[i+1]) {
            links[i].classList.add("active")
        } else {
            links[i].classList.remove("active")
        }
    })
}

var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 300,
    durationMax: 800,
    durationMin: 300,
});

// if (window.location.href.indexOf("#") == -1) {
//     var hiddenLinks = document.querySelectorAll("a.hidden");
//     setTimeout(() => {
//         hiddenLinks.forEach((block, i) => {
//             setTimeout(() => {
//                 block.classList.remove("hidden");
//             }, (EasingFunctions.easeOutCubic(i/hiddenLinks.length)*1000))
//         })
//         setTimeout(() => {
//             document.querySelectorAll("div.hidden").forEach((block, i) => {
//                 setTimeout(() => {
//                     block.classList.remove("hidden");
//                 }, i * 500)
//             })
//         }, 1100)
//     }, 500)
// } else {
//     document.querySelectorAll(".hidden").forEach((block, i) => {
//         block.classList.remove("hidden");
//     })
// }


/*
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 * https://gist.github.com/gre/1650294
 */
EasingFunctions = {
    // no easing, no acceleration
    linear: t => t,
    // accelerating from zero velocity
    easeInQuad: t => t*t,
    // decelerating to zero velocity
    easeOutQuad: t => t*(2-t),
    // acceleration until halfway, then deceleration
    easeInOutQuad: t => t<.5 ? 2*t*t : -1+(4-2*t)*t,
    // accelerating from zero velocity 
    easeInCubic: t => t*t*t,
    // decelerating to zero velocity 
    easeOutCubic: t => (--t)*t*t+1,
    // acceleration until halfway, then deceleration 
    easeInOutCubic: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1,
    // accelerating from zero velocity 
    easeInQuart: t => t*t*t*t,
    // decelerating to zero velocity 
    easeOutQuart: t => 1-(--t)*t*t*t,
    // acceleration until halfway, then deceleration
    easeInOutQuart: t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
    // accelerating from zero velocity
    easeInQuint: t => t*t*t*t*t,
    // decelerating to zero velocity
    easeOutQuint: t => 1+(--t)*t*t*t*t,
    // acceleration until halfway, then deceleration 
    easeInOutQuint: t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t
  }