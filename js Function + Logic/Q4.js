// wap to check given number is armstrong or not.

function armstrong(n)
{
    let num = n;
    let result = 0;
    let count = 0;

    while(num>0)
    {
        num = Math.floor(num/10);
        count++;
    }

    num = n;
    for(let i=1 ; i<=count ; i++)
    {
        let last = num%10;
        let multy = 1;
        for(let j=1 ; j<=count ; j++)
        {
            multy = multy * last;
        }
        result = result + multy;
        num = Math.floor(num/10);
    }

    if(n==result)
    {
        document.write("This Is Armstrong Number!");
    }
    else
    {
        document.write("This Is Not Armstrong Number!");
    }
}
armstrong(371);