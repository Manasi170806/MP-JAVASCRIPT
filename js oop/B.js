// 2. Inheritance (Tricky Question with All Types)
// Scenario: You are working on a vehicle rental system. Different types of vehicles share some common
// properties, but there are multiple levels and categories of vehicles.
// Create a Vehicle class with properties brand and year.
// Create a Car class that extends Vehicle and adds a fuelType property.
// Create a Bike class that extends Vehicle and adds a hasGear property.
// Add another class ElectricCar that extends Car and adds a batteryCapacity property.
// Implement a getDetails() method in Vehicle and override it in different subclasses.

class Vehicle 
{
    constructor(brand,year) 
    {
        this.brand = brand;
        this.year = year;
    }
  
    getDetails() 
    {
        return this.brand,this.year;
    }
}
  
class Car extends Vehicle 
{
    constructor(brand,year,fuelType) 
    {
        super(brand,year);
        this.fuelType = fuelType;
    }
  
    getDetails() 
    {
        return super.getDetails(),this.fuelType;
    }
}
  
class Bike extends Vehicle 
{
    constructor(brand,year,hasGear) 
    {
        super(brand,year); 
        this.hasGear = hasGear;
    }
  
    getDetails() 
    {
        return super.getDetails(),this.hasGear;
    }
} 
  
class ElectricCar extends Car 
{
    constructor(brand,year,fuelType,batteryCapacity) 
    {
        super(brand,year,fuelType); 
        this.batteryCapacity = batteryCapacity;
    }
  
    getDetails() 
    {
        return super.getDetails(),this.batteryCapacity;
    }
}
  
const vehicle = new Vehicle("Toyota",2020);
document.writeln(vehicle.getDetails()); 
  
const car = new Car("Honda",2021,"Petrol");
document.writeln(car.getDetails());
  
const bike = new Bike("Yamaha",2019,true);
document.writeln(bike.getDetails()); 
  
const electricCar = new ElectricCar("Tesla",2022,"Electric",75);
document.writeln(electricCar.getDetails()); 
  