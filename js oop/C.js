// 3. Polymorphism (Method Overriding & Overloading)
// Scenario: You are creating a payment gateway that supports multiple payment methods like CreditCard
// and PayPal. Each method has a pay(amount) function, but the implementation is different.
// Create a base class Payment with a pay(amount) method.
// Extend it into CreditCard and PayPal, overriding pay() to print different messages.
// Implement method overloading by adding a pay() method that either:
// Takes only an amount, or
// Takes an amount and currency (e.g., pay(100, "USD")).
// Tip: Since JavaScript does not support traditional method overloading, use default parameters or checking arguments length inside the method.

class Payment 
{
    pay(amount,currency = "USD") 
    {
        document.writeln(amount);
        document.writeln(currency);
    }
}
  
class CreditCard extends Payment 
{
    pay(amount,currency = "USD") 
    {
        document.writeln(amount);
        document.writeln(currency);
    }
}
  
class PayPal extends Payment 
{
    pay(amount,currency = "USD") 
    {
        document.writeln(amount);
        document.writeln(currency);
    }
}
  
const payment = new Payment();
payment.pay(100);
payment.pay(200,"EUR");

const creditCardPayment = new CreditCard();
creditCardPayment.pay(150); 
creditCardPayment.pay(75,"GBP"); 
  
const paypalPayment = new PayPal();
paypalPayment.pay(50); 
paypalPayment.pay(120,"JPY"); 
  