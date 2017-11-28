var message:string;

class Cat{
    age:number;
    weight:number;
    greet(): string {
        return  "うちの猫は" + this.age + "歳で、体重は" + this.weight + "kgです"; 
    }
}

var myCat = new Cat();
myCat.age = 3;
myCat.weight = 5.1;
message = myCat.greet();
console.log(message);