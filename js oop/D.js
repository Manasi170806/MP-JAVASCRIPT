// 4. Abstraction (Hiding Implementation Details)
// Scenario: You are developing a car rental system. The way a car starts (startEngine()) differs based 
// on whether it’s a PetrolCar or ElectricCar, but the main method should remain the same.
// Create an abstract Car class with a method startEngine().
// Implement two subclasses PetrolCar and ElectricCar, each defining startEngine() differently.

class Car 
{
    startEngine() 
    {
        throw new Error("startEngine() must be implemented by the subclass.");
    }
}
  
class PetrolCar extends Car 
{
    startEngine() 
    {
        document.writeln("Starting petrol engine...");
    }
}
  
class ElectricCar extends Car 
{
    startEngine() 
    {
        document.writeln("Starting electric motor...");
    }
}
  
const petrolCar = new PetrolCar();
petrolCar.startEngine(); 
  
const electricCar = new ElectricCar();
electricCar.startEngine(); 
  