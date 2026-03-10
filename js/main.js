import { addRobot } from "./utils.js";


const warehouseFloor = document.getElementById('warehouse-floor');
const addLoader = document.getElementById('add-loader');
const addTransporter = document.getElementById('add-transporter');
const robotHouse = document.getElementById('robot-house');
const addBot = document.querySelectorAll('.addBot');




// event listener to allow choose bots
robotHouse.addEventListener('click', (e) => {
    if(e.target.classList.contains('addBot')){
        const type = e.target.dataset.type;
        
        addRobot(type)
    }
    
})


// function to add cells on grid floor
function createCells() {

    for(let i=0; i<25; i++){
        const cell = document.createElement('div');
        cell.classList.add('tile');
        warehouseFloor.appendChild(cell)
    }
}
createCells()