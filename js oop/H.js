// 8. Composition (Object Inside Object - Clearer Explanation)
// Scenario: You are developing a company employee management system where each department has multiple 
// employees.
// Create an Employee class with properties name and position.
// Create a Department class that contains an array of Employee objects.
// Implement a method in Department to return the names of all employees in that department.
// Example:
// let hr = new Department("HR");
// hr.addEmployee(new Employee("Alice", "Manager"));
// hr.addEmployee(new Employee("Bob", "Recruiter"));
// console.log(hr.listEmployees()); // Output: ["Alice", "Bob"]

class Employee 
{
    constructor(name, position) 
    {
        this.name = name;
        this.position = position;
    }
}
  
class Department 
{
    constructor(departmentName) 
    {
        this.departmentName = departmentName;
        this.employees = [];
    }

    addEmployee(employee) 
    {
        if (employee instanceof Employee) 
          {
            this.employees.push(employee);
          } 
          else  
          {
              document.writeln('Invalid employee');
          }
    }
  
    listEmployees() 
    {
        return this.employees.map(employee => employee.name);
    }
}
  
let hr = new Department("HR");
  
hr.addEmployee(new Employee("Alice", "Manager"));
hr.addEmployee(new Employee("Bob", "Recruiter"));
  
document.writeln(hr.listEmployees()); 
  