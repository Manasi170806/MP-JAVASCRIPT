// 1. Encapsulation (Data Hiding)
// Scenario: You are building an ATM system where a user has a bank account. The balance should not be
// directly accessible but can be checked via a method.
// Create a BankAccount class with a private #balance property.
// Implement deposit(amount) and withdraw(amount) methods.
// Add a getBalance() method to return the balance.

class BankAccount 
{
    #balance;
  
    constructor(Balance = 0) 
    {
        this.#balance = Balance;
    }
  
    deposit(amount) 
    {
        if(amount > 0) 
        {
            this.#balance += amount;
            document.writeln(amount);
        } 
        else 
        {
            document.writeln("Deposit amount must be greater than 0");
        }
    }
  
    withdraw(amount) 
    {
        if(amount > 0) 
        {
            this.#balance -= amount;
            document.writeln(amount);
        } 
        else if(amount <= 0) 
        {
            document.writeln("Withdrawal amount must be greater than 0.");
        } 
        else 
        {
            document.writeln("Insufficient balance.");
        }
    }
  
    getBalance() 
    {
        return this.#balance;
    }
}
  
const myAccount = new BankAccount(100);  

myAccount.deposit(50);  
myAccount.withdraw(30); 
document.writeln(myAccount.getBalance());
  