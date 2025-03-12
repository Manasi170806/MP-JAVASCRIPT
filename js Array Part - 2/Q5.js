// wap to use all array method

let arr= [1,2,3,4,5,6];
let birds = arr;
document.write(birds + "<br>");
document.write("<br>"); 

//length
{
    let str = arr.length;
    document.write(arr.length); 
    document.write("<br>"); 
    document.write("<br>"); 
}

//Push
{
    let str = arr.push("7" + "<br>");
    document.write(arr);
    document.write("<br>"); 
}

//join
{
    let str = arr.join("_ ")
    document.write(str)
    document.write("<br>"); 
}

//at
{
    let str = arr.at("4 ")
    document.write(str)
    document.write("<br>");
    document.write("<br>"); 
}

//pop
{
    let str = arr.pop()
    document.write(str)
    document.write("<br>");  
}

//shift
{
    let str = arr.shift()
    document.write(str)
    document.write("<br>"); 
    document.write("<br>"); 
}

//unshift
{
    let str = arr.unshift("0")
    document.write(arr)
    document.write("<br>"); 
    document.write("<br>"); 
}

//splice
{
    let str = arr.splice(2,2);
    document.write(str)
    document.write("<br>")
    document.write("<br>"); 
}

//slice
{
    let str = arr.slice(2,4);
    document.write(str)
    document.write("<br>"); 
}