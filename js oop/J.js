// 10. Factory Pattern
// Scenario: You are developing a vehicle manufacturing system where cars and bikes are created 
// dynamically based on input.
// Implement a VehicleFactory class with a createVehicle(type, brand, year) method.
// Based on the type, return either a Car or Bike instance.
// Example:
// const myCar = VehicleFactory.createVehicle("car", "Toyota", 2023);
// const myBike = VehicleFactory.createVehicle("bike", "Yamaha", 2022);

class Car 
{
    constructor(brand,year) 
    {
        this.type = "Car";
        this.brand = brand;
        this.year = year;
    }
  
    getDetails() 
    {
        return this.year,this.brand,this.type;
    }
}
  
class Bike 
{
    constructor(brand, year) 
    {
        this.type = "Bike";
        this.brand = brand;
        this.year = year;
    }
  
    getDetails() 
    {
        return this.year,this.brand,this.type;
    }
}
  
class VehicleFactory 
{
    static createVehicle(type, brand, year) 
    {
        if (type.toLowerCase() === "car") 
        {
            return new Car(brand, year); 
        } 
        else if (type.toLowerCase() === "bike") 
        {
            return new Bike(brand, year);
        } 
        else 
        {
            throw new Error("Invalid vehicle type");
        }
    }
}
  
const myCar = VehicleFactory.createVehicle("car", "Toyota", 2023);
const myBike = VehicleFactory.createVehicle("bike", "Yamaha", 2022);
  
document.writeln(myCar.getDetails()); 
document.writeln(myBike.getDetails());
  