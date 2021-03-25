class Shape{
    constructor(color, radius){
        this.color = color
        this.radius = radius
    } area(){
        let pi = 3.14
        let r = this.radius
        let Area = pi*r*r
        return Area
    }
}

const Shapes = new Shape('red', 5)
console.log(Shapes.area())