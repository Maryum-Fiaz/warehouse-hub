import { addRobot, activeBots } from "./utils.js";
import { handleShiftToggle } from "./controls.js";
import { WarehouseHub } from "./classes/warehouse.js";

const warehouseFloor = document.getElementById("warehouse-floor");
const addLoader = document.getElementById("add-loader");
const addTransporter = document.getElementById("add-transporter");
const robotHouse = document.getElementById("robot-house");
const addBot = document.querySelectorAll(".addBot");

console.log("active botsssss: ", activeBots);

// event listener to allow choose bots
robotHouse.addEventListener("click", (e) => {
  if (e.target.classList.contains("addBot")) {
    const type = e.target.dataset.type;
    addRobot(type);
  }
});

// function to add cells on grid floor
function createCells() {
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.classList.add("tile");
    warehouseFloor.appendChild(cell);
  }
}
createCells();

let shiftBtn = "";
warehouseFloor.addEventListener("click", (e) => {
  // finding tile
  const tile = e.target.closest(".tile");

  if (tile && e.target.closest(".occupied")) {
    const robotDiv = tile.querySelector(".robot-sprite");

    //finding bot
    const bot = activeBots.find((b) => b.id === robotDiv.dataset.id);
    console.log("active bot FOUND : ", bot);

    // prevent creating multiple btns
    if (tile.querySelector(".shiftBtn")) {
      return;
    }

    // creating shift start/end btn
    shiftBtn = document.createElement("button");
    shiftBtn.setAttribute("class", "shiftBtn");
    shiftBtn.innerText = "Start";
    tile.appendChild(shiftBtn);

    console.log("tileeee.... ", tile);
    shiftBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      handleShiftToggle(shiftBtn, bot, robotDiv);
    });
    console.log("active botsssss 2nd time: ", activeBots);
  }
  return;
});
