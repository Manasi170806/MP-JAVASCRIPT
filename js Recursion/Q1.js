// 1 to n sum.

function sum(n)
{
    if(n > 1)
    {
        return n + sum(n - 1);
    }
    else
    {
        return 1;
    }
}

let ans = sum(5);

document.write("sum is ",ans);