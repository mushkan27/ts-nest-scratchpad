interface Reportable {
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

const drink = {
    summary():string{
        return `This is a pepsi.`
    }
}

const printSummary = (item: Reportable): void => {
    console.log(`Name: ${item.summary}`)
}

printSummary(oldCivic)
printSummary(drink)