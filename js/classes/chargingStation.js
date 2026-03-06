
import { Robot } from "./robots.js";

export class ChargingStation {
    constructor(bot){
        this.bot = bot;
    }

    serviceRobot(bot){
        console.log(`Charging [${bot.id}] ... (${bot.battery}%)`)
        bot.recharge();
        console.log(`Charge Complete! (${bot.battery}%)` )
    }
}