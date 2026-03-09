// classes practice

// Goal: Build a system where robots perform tasks until they run out of energy, managed by a central hub.

export class Robot {
    #batteryLvl; // private class fields

    constructor(id, userBatteryValue) {
        this.id = crypto.randomUUID();
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
    constructor(id, battery, maxWeight, image) {
        super(id, battery);
        this.maxWeight = maxWeight;
        this.image = image;
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
    constructor(id, battery, speed, image) {
        super(id, battery);
        this.speed = speed;
        this.image = image;
    }

    work() {
        // Transporters are heavy, they need 20%
        if (this.consumePower(20)) {
            return `Driving at ${this.speed}km/h... (${this.battery}%)`;
        }
        return `ERROR: Transporter ${this.id} is stranded!`;
    }
}
