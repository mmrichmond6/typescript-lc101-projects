import { Payload } from "./studio/Payload";

class Cargo implements Payload{
    massKg: number;
    name: string;

    constructor(massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }
}


export class Cargo {
    // properties and methods
 }