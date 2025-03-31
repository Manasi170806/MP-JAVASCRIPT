// wap to create a class for employee with attributes like id ,name,salary and role, set all attributes
// and get for atleast 3 objects/employee.

class employee
{
    id;
    name;
    salary;
    role;

    set(id,name,salary,role)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.role=role;
    }

    get()
    {
        document.writeln(this.id);
        document.writeln(this.name);
        document.writeln(this.salary);
        document.writeln(this.role);
    }
}

const e1 = new employee();
e1.set(11,"Meet",50000,"HR" + "<br>")
e1.get();

const e2 = new employee();
e2.set(12,"Yogi",100000,"MANAGER" + "<br>")
e2.get();

const e3 = new employee();
e3.set(13,"Manav",950000,"CEO" + "<br>")
e3.get();