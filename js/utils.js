import { Robot, Loader, Transporter } from "./classes/robots.js";
import { WarehouseHub } from "./classes/warehouse.js";
import { ChargingStation } from "./classes/chargingStation.js";

const robotRequirements = {
    loader: { class: Loader, label: "Max Weight (kg)", prop: "maxWeight" },
    transporter: { class: Transporter, label: "speed (km/h)", prop: "speed" },
}

// Function to add bot
export function addRobot(name) {

    const config = robotRequirements[name]; //accessing property of object using a variable

    const inputDiv = document.createElement('div');

    inputDiv.classList.add('properties');
    inputDiv.innerHTML = `
    <div class= "model">
    <h3>Initializing ${name.toUpperCase()} </h3>
    <input type="number" id="robot-spec" placeholder="Enter ${config.label}">
    <button id="confirm-bot">BUILD ROBOT</button>
    </div>
    `

    document.body.appendChild(inputDiv);
    console.log(`${name} clicked!`);
    
    document.getElementById('confirm-bot').onclick = () => {
        const specValue = document.getElementById('robot-spec').value;
        if(!specValue) return alert("Please enter a value!");


        const botInstance = new config.class(null, 100, specValue, `/assets/${name}.png`);
        console.log("Success:", botInstance.status());
        
        // Final Step: Show it on the floor
        renderRobotToFloor(botInstance);
        
        // Remove the input box
        inputDiv.remove();
        
    }

}

// function to show robots
function renderRobotToFloor(botInstance){

    const tiles = document.querySelectorAll('.tile');

    for(let tile of tiles){
        if(!tile.classList.contains('occupied')){

            tile.classList.add('occupied');
            
            const robot = document.createElement('div');
            robot.className = 'robot-sprite';
            robot.innerHTML = `
            <img src="${botInstance.image}" alt="${botInstance.constructor.name}">
            `;

            tile.appendChild(robot)
            return;
        }
    }
    console.log(`I am a function to render ${botInstance}`);
    
}