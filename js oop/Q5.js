// wap to perform method overloading to find sum of 2 to 4 arguments.
// ex. sum(10,20), sum(10,20,30), sum(_....4).

class overloading
{
    sum(a, b, c, d)
    {
        if (c == undefined && d == undefined) 
        {
            document.writeln(a + b);
        } 
        else if (d == undefined) 
        {
            document.writeln(a + b + c) ;
        } 
        else 
        {
            document.writeln(a + b + c + d);
        }
    }
} 

const m1 = new overloading();

m1.sum(10,20);
m1.sum(10, 20, 30);
m1.sum(10, 20, 30, 40); 
