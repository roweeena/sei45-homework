/*
### Part 1, Rectangle

Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

* isSquare - Returns whether the rectangle is a square or not
* area - Returns the area of the rectangle
* perimeter - Returns the perimeter of the rectangle

*/
const rectangle = function (a,b){
  this.x = a;
  this.y = b;
  this.isSquare = function (){
    return (this.x === this.y) ? 'Is Square' : 'Not Square';
  };
  this.getPerimeter = function (){
    return (this.x*2) + (this.y*2) ;
  };
}

const rect1 = new rectangle(4,4);
console.log('rect1 ', rect1.isSquare());
console.log('rect1 peri: ', rect1.getPerimeter());

const rect2 = new rectangle(3.5,2.25);
console.log('rect2 ', rect2.isSquare());
console.log('rect2 peri: ', rect2.getPerimeter());



/*
Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

* isEquilateral - Returns whether the triangle is equilateral or not
* isIsosceles - Returns whether the triangle is isosceles or not
* area - Returns the area of the Triangle
* isObtuse - Returns whether the triangle is obtuse or not

*/
const triangle = function (a,b,c){
  this.a = a;
  this.b = b;
  this.c = c;
  this.isEquilateral = function (){
    return (this.a===this.b && this.b===this.c && this.a===this.c) ? true : false;
  };
  this.isIsosceles = function (){
    if(this.isEquilateral()===true) return false;
    else if((this.a === this.b) || (this.b===this.c) || (this.c===this.a)) return true;
    else return false;
  };
  this.isObtuse = function (){
    if( (this.c > this.a) && (this.c > this.b)) return true;
    else return false;
  };
  this.getArea = function (){
    const s = (this.a + this.b + this.c)/2;
    return Math.sqrt(s * (s-this.a) * (s-this.b) * (s-this.c));
  };
}

const obtuse      = new triangle(3.5,4,7);
const equilateral = new triangle(6,6,6);
const isosceles   = new triangle(4,4,6);

console.log(`Obtuse area: ${obtuse.getArea()}`);
console.log(`Obtuse isObtuse: ${obtuse.isObtuse()}`);
console.log(`Obtuse isIsosceles: ${obtuse.isIsosceles()}`);
console.log(`Obtuse isEquilateral: ${obtuse.isEquilateral()}`);


console.log(`Equilateral area: ${equilateral.getArea()}`);
console.log(`Equilateral isObtuse: ${equilateral.isObtuse()}`);
console.log(`Equilateral isIsosceles: ${equilateral.isIsosceles()}`);
console.log(`Equilateral isEquilateral: ${equilateral.isEquilateral()}`);


console.log(`Isosceles area: ${isosceles.getArea()}`);
console.log(`Isosceles isObtuse: ${isosceles.isObtuse()}`);
console.log(`Isosceles isIsosceles: ${isosceles.isIsosceles()}`);
console.log(`Isosceles isEquilateral: ${isosceles.isEquilateral()}`);
