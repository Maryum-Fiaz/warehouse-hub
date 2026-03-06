// classes practice

// Goal: Build a system where robots perform tasks until they run out of energy, managed by a central hub.

export class Robot {
    #batteryLvl; // private class fields

    constructor(id, userBatteryValue) {
        this.id = id;
        this.#batteryLvl = Math.min(Math.max(userBatteryValue,0), 100);
        // max value 100, min value 0
    }

    get battery(){
        return this.#batteryLvl;
    }


    consumePower(amount) {
        if(this.#batteryLvl > amount) {
            this.#batteryLvl -= amount;
            return  true

        } else {
            return false;
        }
    }

    recharge(){
        if(this.#batteryLvl < 100){
          this.#batteryLvl = 100;
        }
        return `${this.constructor.name} is fully charged`;
    }

    status() {
        return `[${this.constructor.name}] with id [${this.id}] having battery ${this.#batteryLvl}%`
    }

}

export class Loader extends Robot {
    constructor(id, battery, maxWeight) {
        super(id, battery);
        this.maxWeight = maxWeight;
    }

    work() {
        // We use the boolean directly from the parent's method!
        if (this.consumePower(10)) {
            return `Lifting ${this.maxWeight}kg...`;
        }
        return `ERROR: Loader ${this.id} has insufficient power!`;
    }
}

export class Transporter extends Robot {
    constructor(id, battery, speed) {
        super(id, battery);
        this.speed = speed;
    }

    work() {
        // Transporters are heavy, they need 20%
        if (this.consumePower(20)) {
            return `Driving at ${this.speed}km/h... (${this.battery}%)`;
        }
        return `ERROR: Transporter ${this.id} is stranded!`;
    }
}

// const loader1 = new Loader('l1', 4, 78)

// const service = new ChargingStation(loader1);
// service.serviceRobot(loader1)
// const transporter1 = new Transporter('t1', 220, 78)


// let arrayOfBots = [];
// arrayOfBots.push(loader1, transporter1);

// const warehouse = new WarehouseHub(arrayOfBots);
// warehouse.operateAll();
// console.log(warehouse.getStrandedRobots());