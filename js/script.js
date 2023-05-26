let block = document.querySelector(`.block`),
    docWidth = window.innerWidth - block.offsetWidth,
    docHeight = window.innerHeight - block.offsetHeight;

function getColor() {
    let colors = []
    for (i = 0; i < 3; i++) {
        colors.push(Math.floor(Math.random() * 255))
    }
    return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
}
console.log(block.offsetWidth)

setInterval(() => { block.style.background = getColor() }, 500);

setInterval(() => {
    block.style.top = `${Math.floor(Math.random() * docHeight)}px`;
    block.style.left = `${Math.floor(Math.random() * docWidth)}px`
}, 1000);