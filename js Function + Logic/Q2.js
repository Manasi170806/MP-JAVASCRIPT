// wap to check passed number in udf prime or not.

function prime(num) 
{
    let count = 0;
        for (let i=1 ; i<=num ; i++) 
            {
                if (num%i == 0) 
                {
                    count++;
                }
            }
            if (count==2) 
            {
                document.write("This Number Is Prime!");
            } 
            else 
            {
                document.write("This Number Is Not Prime!");
            }
        }

        let num = prompt("Enter a number:");
        let x = parseInt(num);

        prime(x);