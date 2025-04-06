// 6. Static Methods & Properties
// Scenario: You are building a movie rating system where users can rate movies. The system should also 
// track the total number of ratings given.
// Create a Movie class with properties: title and ratings (array).
// Add a static property totalRatingsCount.
// Implement a method addRating(rating) that updates both instance ratings and the static count.

class Movie 
{
    static totalRatingsCount = 0;
  
    constructor(title) 
    {
        this.title = title;
        this.ratings = [];
    }
  
    addRating(rating) 
    {
        this.ratings.push(rating);       
        Movie.totalRatingsCount++;       
    }
  
    getAverageRating() 
    {
        if (this.ratings.length === 0) return 0; 
        const sum = this.ratings.reduce((total,rating) => total + rating, 0);
        return sum / this.ratings.length;
    }
  
    static getTotalRatingsCount() 
    {
        return Movie.totalRatingsCount;
    }
}
  
const movie1 = new Movie("Inception");
movie1.addRating(5);
movie1.addRating(4);
  
const movie2 = new Movie("The Matrix");
movie2.addRating(5);
movie2.addRating(5);
movie2.addRating(4);
  
const movie3 = new Movie("Titanic");
movie3.addRating(4);
  
document.writeln(movie1.title); 
document.writeln(movie1.getAverageRating()); 
  