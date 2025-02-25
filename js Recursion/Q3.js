// n to 1 print

function numbers(n)
{
    document.write(n + " ");
    if (n > 0) 
    {   
        numbers(n - 1); 
    }
}

numbers(10);
