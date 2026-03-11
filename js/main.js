import { addRobot, activeBots } from "./utils.js";
import { WarehouseHub } from "./classes/warehouse.js";

const warehouseFloor = document.getElementById('warehouse-floor');
const addLoader = document.getElementById('add-loader');
const addTransporter = document.getElementById('add-transporter');
const robotHouse = document.getElementById('robot-house');
const addBot = document.querySelectorAll('.addBot');

console.log('active botsssss: ', activeBots);



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


// object to run multiple objects simultaneously and add with ID's as keys
let botWorkInterval = {};

warehouseFloor.addEventListener('click', (e) => {
    const tile = e.target.closest('.tile');


    if(tile && e.target.closest('.occupied')){
        // console.log(`tile found`);
        const robotDiv = tile.querySelector('.robot-sprite');
        // console.log(robotDiv, ' clicked and id is: ', robotDiv.dataset.id);
        

        activeBots.forEach(bot => {
            if(bot.id === robotDiv.dataset.id){

                // console.log('battery is: ', bot.battery);

                const shiftBtn = document.createElement('button');
                shiftBtn.setAttribute('class', 'shiftBtn');
                shiftBtn.innerText = 'Start';
                tile.appendChild(shiftBtn);

                shiftBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    
                    if(shiftBtn.innerText === 'Start'){
                        shiftBtn.innerText = 'End';

                        robotDiv.classList.add('working-border');

                        botWorkInterval[bot.id] = setInterval(() => {
                           const result = bot.work();

                        //    console.log('WORKING...');

                           if(result === 'ERROR'){
                            stopInterval(bot.id);
                            robotDiv.classList.remove('working-border')

                            alert(`Battery is ${bot.battery}`)
                           }
                        }, 3000)

                    }
                    console.log('btn clicked: ');
                    
                })
            }

        })
console.log('active botsssss 2nd time: ', activeBots);

    }
})

function stopInterval(id) {
    clearInterval(botWorkInterval[id]);
    console.log(`INTERVAL CLEARED if id: ${id}`);
    
}