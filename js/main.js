import { Robot, Loader, Transporter } from "./classes/robots.js";
import { WarehouseHub } from "./classes/warehouse.js";
import { ChargingStation } from "./classes/chargingStation.js";


const loader1 = new Loader('l1', 4, 78)

const service = new ChargingStation(loader1);
service.serviceRobot(loader1)
const transporter1 = new Transporter('t1', 220, 78)


let arrayOfBots = [];
arrayOfBots.push(loader1, transporter1);

const warehouse = new WarehouseHub(arrayOfBots);
warehouse.operateAll();
console.log(warehouse.getStrandedRobots());