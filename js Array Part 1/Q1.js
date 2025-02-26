// wap to print only even numbers from Array.

let nums = [1,2,3,4,67,5,79];

for(let i=0 ; i<nums.length ; i++)
{
    if(nums[i]%2==0)
    {
        document.write(nums[i] + " ");
    }
}