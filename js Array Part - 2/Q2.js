// count frequency of all character/element in string/array.

let realName = "pranav"
let count = 1;

for(let i=0 ; i<=realName.length-1 ; i++)
{
    count = 0;

    for(let j=i ; j<=realName.length ; j++)
    {
        if(realName[i] == realName[j])
        {
            count++;
        }
    }
    
    document.write(realName[i] + " - " + count + "<br>");
}

