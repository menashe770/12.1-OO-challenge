// PART 1
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return 'beep';
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

// PART 2
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

// PART 3
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return 'vroom!';
  }
}

// PART 4
class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(newVehicle) {
    if (!newVehicle instanceof Vehicle) {
      return 'only vehicles allowed';
    }
    if (this.vehicles.length === this.capacity) {
      return `sorry, we're full`;
    }
    this.vehicles.push(newVehicle);
    return 'vehicle added';
  }
}
