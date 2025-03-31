// 5. Constructor & Object Creation
// Scenario: You are building a food delivery app where each restaurant has a name, cuisine type, and rating.
// Create a Restaurant class with properties: name, cuisineType, and rating.
// Instantiate 3 restaurant objects with different values.

class Restaurant 
{
    constructor(name,cuisineType,rating) 
    {
        this.name = name;
        this.cuisineType = cuisineType;
        this.rating = rating;
    }
  
    getDetails() 
    {
        return this.name,this.cuisineType,this.rating;
    }
}
  
const restaurant1 = new Restaurant("Pizza Palace","Italian",4.5);
const restaurant2 = new Restaurant("Sushi World","Japanese",4.8);
const restaurant3 = new Restaurant("Curry House","Indian",4.3);
  
document.writeln(restaurant1.getDetails()); 
document.writeln(restaurant2.getDetails()); 
document.writeln(restaurant3.getDetails());