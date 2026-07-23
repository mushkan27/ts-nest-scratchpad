interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function(){
return `The name of this vehicle is ${this.name}, its model is ${this.year}.`
    }
}

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`)
}

printVehicle(oldCivic)