
const employees = [
    { name: 'Zura', salary: 1500, age: 28 },
    { name: 'George', salary: 2000, age: 22 },
    { name: 'Anna', salary: 1800, age: 23 },
    { name: 'David', salary: 2500, age: 21 },
    { name: 'Brad', salary: 2600, age: 33 },
];


const sum = employees
    .map(employees => employees.salary)
    .reduce((acc,cur) => acc+cur)
const avregesalary = sum/5
console.log(avregesalary)


const empsage  = employees
    .map(employees => employees.age)
const youngest = Math.min(...empsage)
console.log(youngest)

const absal = employees
    .filter(employees => employees.salary >= 2000)
console.log(absal)

function render(){
    var i= 0
    for (i= 0;i <employees.length;i++){
        document.write(`
        <tr>
            <td>${employees[i].name}</td>
            <td>${employees[i].salary}</td>
            <td>${employees[i].age}</td>
        </tr>
        `)
    }
}

document.write(`
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
        </tr>
    </thead>`)
    render()
document.write('</table>')    
