"use strict";

class Device {
  constructor(brand, power) {
    this.brand = brand;
    this.power = power;
    this.turnedOn = false;

    Device.devices.push(parseInt(power));
  }

  static showAllDevicesPower() {
    const allDevicesPower = Device.devices.reduce(
      (sum, power) => sum + power,
      0
    );

    console.log(`Total power of all devices is: ${allDevicesPower}W`);
  }

  static devices = [];
}

Device.prototype.turnOn = function () {
  this.turnedOn = true;
  console.log(`${this.brand} is on`);
};

Device.prototype.turnOff = function () {
  this.turnedOn = false;
  console.log(`${this.brand} is off`);
};

Device.prototype.getState = function () {
  console.log(this.turnedOn ? `${this.brand} is on` : `${this.brand} is off`);
};

// CreateDevice.prototype.devices = [];

class Lamp extends Device {
  constructor(brand, power) {
    super(brand, power);

    this.type = "lamp";
  }
}

class Computer extends Device {
  constructor(brand, power) {
    super(brand, power);

    this.type = "computer";
  }
}

class CoffeMaker extends Device {
  constructor(brand, power) {
    super(brand, power);

    this.type = "coffee maker";
    this.coffeCupsCounter = 0;
  }

  makeCoffee() {
    if (!this.turnedOn) {
      console.log("First turn the coffee maker on!");

      return;
    }

    if (this.coffeCupsCounter > 25) {
      console.log("Time to clean coffee maker");

      return;
    }

    console.log("Here is your cup of coffee!");
    this.coffeeCupsCounter++;
  }

  cleanCoffeeMaker() {
    this.coffeeCupsCounter = 0;
    console.log("Coffee machine has been cleaned successfully!");
  }
}

const lamp = new Lamp("Philips", "100W");
const computer = new Computer("IBM", "250W");
const coffeMaker = new CoffeMaker("Krups", "50W");

console.log(lamp);
lamp.turnOn();
computer.turnOn();
lamp.turnOff();
computer.getState();

coffeMaker.turnOn();
coffeMaker.makeCoffee();

console.dir(coffeMaker);

Device.showAllDevicesPower();
