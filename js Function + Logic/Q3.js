// wap to print factorial of passed number in udf.

function factorial(number) 
{
    let factorial = 1;
        
    for (let i=1 ; i<=number ; i++) 
        {
            factorial = factorial * i;
        }
    document.write("Factorial is: " + factorial);
}

let num = prompt("Enter any number: ");
num = parseInt(num);
        
factorial(num);