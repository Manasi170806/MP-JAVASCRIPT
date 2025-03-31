// 7. Getter & Setter Methods (Easier Example)
// Scenario: You are developing a student grading system where a student has marks in percentage, but 
// the grade (A, B, C, etc.) should be automatically determined.
// Create a Student class with a property percentage.
// Use a getter grade that returns the grade based on the percentage.
// Use a setter grade that updates percentage based on the grade entered (A, B, C, etc.).
// Example:
// let student = new Student();
// student.percentage = 85;  // Setting percentage
// console.log(student.grade); // Should return 'A'

class Student 
{
    constructor() 
    {
        this._percentage = 0; 
    }
  
    get grade() 
    {
        if (this._percentage >= 90) 
        {
            return 'A';
        } 
        else if (this._percentage >= 80) 
        {
            return 'B';
        } 
        else if (this._percentage >= 70) 
        {
            return 'C';
        }   
        else if (this._percentage >= 60) 
        {
            return 'D';
        }
        else 
        {
            return 'F';
        }
    }
  
    set grade(grade) 
    {
        switch (grade.toUpperCase()) 
        {
          case 'A':
            this._percentage = 90;
            break;
          case 'B':
            this._percentage = 80;
            break;
          case 'C':
            this._percentage = 70;
            break;
          case 'D':
            this._percentage = 60;
            break;
          case 'F':
            this._percentage = 50;
            break;
          default:
            document.writeln('Invalid grade');
        }
    }
  
    get percentage() 
    {
        return this._percentage;
    }
  
    set percentage(value) 
    {
        if (value >= 0 && value <= 100) 
          {
              this._percentage = value;
          } 
          else 
          {
            document.writeln('Invalid percentage');
          }
    }
}

let student = new Student();
  
student.percentage = 85; 
document.writeln(student.grade); 
  