class Student {
    constructor(name , study){
        this.name = name;
        this.study = study
    }
  bioData() {
    console.log(`My nameis ${this.name} `);
  }
  mystudy(){
    console.log(`i am stdying ${this.study}`);
  }
}
let obj1 = new Student("Danish" , "CS");
obj1.bioData();
obj1.mystudy()
