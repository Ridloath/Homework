// function Student(name, Id, age)
class Student{
    constructor(name, Id, age){
        this.name = name
        this.Id = Id
        this.age = age
    }
    static StG(){
        return this.name, this.Id, this.age
    }

}
class Subject{
    constructor(name, code){
        this.name = name
        this.code = code
    }
}
class University{
    constructor(name){
        this.name = name
        this.students = []
    }
    get  addStudent(){
        return this.students.push(Student.StG())
    }
    get addsubject(){

    }
}


const Gela = new Student('Gela', 1, 18)
const Uni = new University('cu')
console.log(Gela)

console.log(Uni.GetST)

