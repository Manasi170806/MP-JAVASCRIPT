// wap to arrange acending and decending in 1d array.

let numbers =[10,25,22,21,24,30,12,45,15];

for(let i=0 ; i<=numbers.length ; i++)
{
    for(let j=i+1 ; j<=numbers.length ; j++)
    {
        if(numbers[i] > numbers[j])
        {
             let temp = numbers[i];
             numbers[i] = numbers[j];
             numbers[j] = temp; 
        }
    }
}

document.write("Ascending order is :" + "  " + numbers);

// decending

// let numbers =[10,25,22,21,24,30,12,45,15];

// for(let i=0 ; i<=numbers.length ; i++)
// {
//     for(let j=i+1 ; j<=numbers.length ; j++)
//     {
//         if(numbers[i] < numbers[j])
//         {
//              let temp = numbers[i];
//              numbers[i] = numbers[j];
//              numbers[j] = temp; 
//         }
//     }
// }

// document.write("Ascending order is :" + "  " + numbers);