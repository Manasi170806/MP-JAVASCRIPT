// check number is palindrom or not.

let realName = "nayan";
let revName = "";

for(let i=realName.length-1 ; i>=0 ; i--)
{
    revName += realName[i];
}
if(realName == revName)
{
    document.write("This Name Is Palindrom");
}
else
{
    document.write("This Name Is Not Palindrom");
}