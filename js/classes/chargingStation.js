
import { Robot } from "./robots.js";

export class ChargingStation {
    constructor(bot){
        this.bot = bot;
    }

    serviceRobot(){
       return this.bot.recharge();
    }
}