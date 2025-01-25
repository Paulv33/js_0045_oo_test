
export class Figura{
    constructor(nombre){

        if(new.target === Figura){
            throw new Error("No se puede instanciar la clase abstracta Figura")
        }
        this.nombre = nombre;
    }
    perimetro(){
        return 0
    }   
    area(){
        return 0
    }
}

export class Triangulo extends Figura {
    constructor(base, altura, nombre){
        super(nombre)
        this.base = base
        this.altura = altura
    }
    
    area(){
        return (this.base * this.altura) / 2;
    }

    perimetro() {
        return this.base * 3;
    }

}


export function createTriangulo(base = 10, altura = 20 , nombre = "tri1") {
  
    return new Triangulo(base, altura, nombre);
}



export class Cuadrado extends Figura {
    
    constructor(lado, nombre){
        super(nombre);
        this.lado = lado;
    }

    area(){
        return this._lado ** 2
    }

    perimetro(){
        return this._lado * 4;
    }

    get lado(){
    
       return this._lado;
    }

    set lado(value){
        if (value <= 0) throw new Error("El lado debe ser mayor que 0");
        return this._lado = value;
    }
}

export function createCuadrado(lado, nombre = "cua1") {
    return new Cuadrado(lado, nombre);
}

export class Rectangulo extends Figura{
   
    constructor(base, altura, nombre){
        super(nombre);
        this.base = base;
        this.altura = altura;
    }
    

    area() {
        return this.base * this.altura;
    }

    perimetro(){
        return 2 * (this.base + this.altura);
    }

    get base() {
        return this._base;
    }

    set base(value) {
        if (value <= 0) throw new Error("La base debe ser mayor que 0");
        this._base = value;
    }

    get altura() {
        return this._altura;
    }

    set altura(value) {
        if (value <= 0) throw new Error("La altura debe ser mayor que 0");
        this._altura = value;
    }

} 
    

    export function createRectangulo(nombre, base, altura){
        return new Rectangulo(base, altura, nombre);

    }

export class Circulo extends Figura {

    constructor(radio, nombre){
        super(nombre);
        this.radio = radio;
    }

    area(){
        return Math.PI * this.radio ** 2;
    }

    perimetro(){
        return 2 * Math.PI * this.radio;
    }

    get radio() {
        return this._radio;
    }

    set radio(value) {
        if (value <= 0) throw new Error("El radio debe ser mayor que 0");
        this._radio = value;
    }
}


export function createCirculo(nombre, radio) {
    return new Circulo(radio, nombre)
    
}


 