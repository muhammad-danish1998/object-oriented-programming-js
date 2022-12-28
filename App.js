// ----------- key pints -------------

// if we put static before instance method then inheritance can not
// access static method
//we can acces instance method
//for inheritance we use extend
// we have also use super funtion in inherited before function
//contructor funtion auto call when object is created and all properties will be 
// define in contructor function
// static function can not be call by object 
// ------------------------------------------
// --------------- creating class ------------

class Student {
    constructor(name,age){
        this.name = name
        this.age = age;
        console.log("Contructor Function");
    }
    getData(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
    static coffe(){
        console.log("hello i need coffe");
    }
}
//  a = new Student("Danish");
 b = new Student("ALi" , 25);

//  a.getData()
 b.getData()
 Student.coffe()



