//const squareGrid = document.createElement('div');
//squareGrid.classList.add("squareGrid")
//squareGrid.textContent = "doofenshmirtz"
const  container = document.querySelector('.container');

for(let i = 0; i < (16 * 16); i++){
    const squareGrid = document.createElement('div');
    squareGrid.id = i.toString();
    squareGrid.classList.add("squareGrid")
    container.appendChild(squareGrid);
}