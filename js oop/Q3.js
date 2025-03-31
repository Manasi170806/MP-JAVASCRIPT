// create a class named student with private attributes roll_no,name,age,std and percentage, initialize
// all attributes by parameterized constructor(private attributes need to declare in global scope in class)
// and print all details for 3 students.

class student
{
    #roll_no;
    #name;
    #age;
    #std;
    #percentage;

    constructor(roll_no,name,age,std,percentage)
    {
        this.#roll_no=roll_no;
        this.#name=name;
        this.#age=age;
        this.#std=std;
        this.#percentage=percentage;
    }

    display()
    {
        document.writeln(this.#roll_no);
        document.writeln(this.#name);
        document.writeln(this.#age);
        document.writeln(this.#std);
        document.writeln(this.#percentage);
    }
}

const s1 = new student(1,"Manasi",19,12,90.65 + "<br>");
s1.display()

const s2 = new student(2,"Priya",17,10,85.05 + "<br>");
s2.display()

const s3 = new student(3,"Roshani",18,11,82.45 + "<br>");
s3.display()