//const squareGrid = document.createElement('div');
//squareGrid.classList.add("squareGrid")
//squareGrid.textContent = "doofenshmirtz"
const  container = document.querySelector('.container');
let Grids = document.querySelectorAll('.squareGrid');
function makeGrids(squares) {
    // @ts-ignore
   
    
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    
    for(let i = 0; i < (squares * squares); i++){
        const squareGrid = document.createElement('div');
        
        squareGrid.id = i.toString();
        squareGrid.classList.add("squareGrid")
        // @ts-ignore
        container.appendChild(squareGrid);
    }

    Grids = document.querySelectorAll('.squareGrid');
    Grids.forEach((grid)=> 

{
    grid.addEventListener('mouseover',(e) => {
        // @ts-ignore
        e.target.style.backgroundColor = 'black';

    });

});

}

makeGrids(16);

/*
Grids.forEach((grid)=> 

{
    grid.addEventListener('mouseover',(e) => {
        // @ts-ignore
        e.target.style.backgroundColor = 'red';

    });

});*/

let Input = 0;
const  Prompt = document.querySelector('#Prompt');
// @ts-ignore
Prompt.addEventListener('click', () => 
{
    Input = Number(prompt("Enter the number of squares you want on each side"));
    while(Input > 100 || Input <= 0) {
        Input = Number(prompt("Enter the number of squares you want on each side"));
    }
    // @ts-ignore
    while(container.firstChild) {
        container?.removeChild(container.lastChild);
    }
    makeGrids(Input);
    // @ts-ignore
    
}
);