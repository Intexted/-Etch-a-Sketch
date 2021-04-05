const container = document.getElementById('container');
const resize = document.getElementById('resize');



function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
    colorTransform();

};
makeRows(16, 16);

function colorTransform() {

    const boxs = document.querySelectorAll('.grid-item');
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        let redNum = Math.floor(Math.random() * 255);
        let greenNum = Math.floor(Math.random() * 255);
        let blueNum = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${redNum},${greenNum},${blueNum})`;
    }))
}




resize.addEventListener('click', () => {
    const boxs = document.querySelectorAll('.grid-item');
    boxs.forEach(box => box.style.background = `rgb(255,255,255)`);
    let input = prompt('Size');
    if (input > 0 && input < 100) {
        container.textContent = '';
        makeRows(input, input);
        colorTransform();
    } else {
        container.textContent = '';
        makeRows(16, 16);
    }
})