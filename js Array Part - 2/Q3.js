// wap to find max/min from array.

let num = [1,2,5,9,3,15,8];

let maximum = num[0];

for(let i=0 ; i<=num.length-1 ; i++)
{
    if(maximum<num[i])
    {
        maximum = num[i];
    }
}
document.write("maximum number is ",maximum);

// min
// let num = [1,2,5,9,3,15,8];

// let minimum = num[0];

// for(let i=0 ; i<=num.length-1 ; i++)
// {
//     if(minimum>num[i])
//     {
//         minimum = num[i];
//     }
// }
// document.write("minimum number is ",minimum);