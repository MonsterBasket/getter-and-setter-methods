class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2;
    }
    get area(){
        return Math.PI * (this.radius**2)
    }
    get circumference(){
        return Math.PI * this.diameter
    }
    set diameter(length){
        this.radius = length / 2;
    }
    set circumference(length){
        this.radius = length / Math.PI / 2;
    }
    set area(num){
        this.radius = Math.sqrt(num/Math.PI);
    }
}