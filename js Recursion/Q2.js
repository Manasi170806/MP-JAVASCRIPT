// 1 to n

function numbers(n)
{
    document.write(n + " ");
    if (n < 10) 
    {   
        numbers(n + 1); 
    }
}

numbers(1);