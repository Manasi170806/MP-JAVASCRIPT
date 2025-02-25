// n factorial

function factorial(n) 
{
    if (n > 1) 
    {
        return n * factorial(n - 1);
    } 
    else 
    {
        return 1;
    }
}

let ans = factorial(5);

document.write("Factorial is ",ans);

