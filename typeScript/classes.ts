class Vehicle {

   public honk(): void{
        console.log("beep")
    }
}

class Car extends Vehicle {
    private drive(): void {
        console.log("vroom")
    }

    startDriving(): void {
        this.drive()
    }
}

const car = new Car()
car.startDriving()
car.honk()

//constructor
class Person {
    // name: string = "muskan"
    // constructor(name:string){
    //     this.name = name
    // }

     constructor(public name:string){}
}

const person = new Person('ruru')
console.log(person.name)