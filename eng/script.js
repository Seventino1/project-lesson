
class Car {
  constructor(name, color, speed){
    this.name = name;
    this.color = color;
    this.speed = speed;
  }
}

const car0 = new Car("Audi","Black", 100);

class Truck extends Car {
  constructor(name,color,speed,capacity){
    super(name,color,speed);
    this.capacity = capacity;
  } 
  load(value){
    if(value <= this.capacity){
      console.log(this.name + ` загрузилась на ` + value + ` тонн`);
    } else {
      console.log(this.name + ` не может загрузиться на ` + value + ` тонн`)
    }
  }
}

const car1 = new Truck("BMW","white", 120, 20);

console.log(car1.load(12));