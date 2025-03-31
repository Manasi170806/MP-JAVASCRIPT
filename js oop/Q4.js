// perform multilevel inheritance where Indian is parent for class person, person is parent for class employee
// indian class - adharNo,birthPlace
// person - name,age,gender
// emp - id,salary, role
// access all properties of parent by child class only and set and get all values.

class indian 
{
    constructor(adharNo,birthPlace) 
    {
        this.adharNo=adharNo;
        this.birthPlace=birthPlace;
    }

    get() 
    {
        document.writeln(this.adharNo);
        document.writeln(this.birthPlace);
    }
}

class Person extends indian 
{
    constructor(adharNo,birthPlace,name,age,gender) 
    {
        super(adharNo,birthPlace);
        this.name=name;
        this.age=age;
        this.gender=gender;
    }

    get() 
    {
        super.get();
        document.writeln(this.name);
        document.writeln(this.age);
        document.writeln(this.gender);
    }
}

class employee extends Person 
{
    constructor(adharNo,birthPlace,name,age,gender,id,salary,role) 
    {
        super(adharNo,birthPlace,name,age,gender);
        this.id=id;
        this.salary=salary;
        this.role=role;
    }

    get() 
    {
        super.get();
        document.writeln(this.id);
        document.writeln(this.salary);
        document.writeln(this.role);
    }
}

const e1 = new employee("012589645213", "Pune", "Meet", 15, "Male", "101", 50000, "Developer");
e1.get();
