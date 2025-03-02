// wap to create calculator using udf & switch case.

function add(num1,num2)
{
    document.write(num1 + " +" + num2 + " = " + (num1 + num2));
}
function sub(num1,num2)
{
    document.write(num1 + " -" + num2 + " = " + (num1 - num2));
}
function multy(num1,num2)
{
    document.write(num1 + " *" + num2 + " = " + (num1 * num2));
}
function div(num1,num2)
{
    document.write(num1 + " /" + num2 + " = " + (num1 / num2));
}

let num1 = prompt("Enter a num1:")
let num2 = prompt("Enter a num2:")

let x = parseInt(num1);
let y = parseInt(num2);

choice = prompt("Enter your choice from +,-,*,/")

switch(choice)
{
    case '+':add(x,y);
	break;
		
	case '-':sub(x,y);
	break;
		
	case '*':multy(x,y);
	break;
		
	case '/':div(x,y);
	break;
		
	default:document.write("Enter valid input!");	
}

