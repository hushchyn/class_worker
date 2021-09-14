class Worker{
    constructor( firstName, secondName, rate, days){
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSellery(){
        return this.rate * this.days
    }
}
let worker = new Worker ( 'Andriy','Hushchyn', '10', '27')
console.log(worker.firstName);
console.log(worker.secondName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSellery());



class employeIvan extends Worker{
    constructor ( firstName, secondName, rate, days){
        super ( firstName, secondName, rate, days)
    }
}

let empIvan = new employeIvan('Ivan' , 'Ivanov', '10', '20')
console.log(empIvan.getSellery());


class employePetro extends Worker{
    constructor ( firstName, secondName, rate, days){
        super ( firstName, secondName, rate, days)
    }
}

let empPetro = new employePetro('Ivan' , 'Ivanov', '10', '20')

let sum = empIvan.getSellery() + empPetro.getSellery()
console.log(sum);

