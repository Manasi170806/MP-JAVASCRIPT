// wap to print O on even number 1 on odd numbers.

let nums = [1,2,3,4,67,5,79];

for(let i=0 ; i<nums.length ; i++)
{
    if(nums[i]%2==0)
    {
        document.write("0 ");
    }
    else
    {
        document.write("1 ");
    }
}