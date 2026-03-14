

export class WarehouseHub {
    constructor(botList = []){
        this.botList = botList
    }

    operateAll(){
        for(let bot of this.botList){
            console.log(bot.work());
            console.log(bot.status());
        }
    }

    getStrandedRobots(){
       const newBotList = this.botList.filter(bot => bot.battery < 15) || []
       return newBotList;
    }
}


// TODO :
// Keep one global WarehouseHub that manages all activeBots.
// Use the Hub for "Mass Actions" (like a "Start All" button in the sidebar).
