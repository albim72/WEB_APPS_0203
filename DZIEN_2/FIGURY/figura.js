class Figura {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    policzPole() {}
}

class Trojkat extends Figura {
    constructor(a, b) {
        super(a, b)
    }
    policzPole() {
        return this.a * this.b / 2
    }
}

class Prostokat extends Figura {
    constructor(a, b) {
        super(a, b)
    }
    policzPole() {
        return this.a * this.b
    }
}

class Trapez extends Figura {
    constructor(a, b, h) {
        super(a, b)
        this.h = h
    }
    policzPole() {
        return (this.a + this.b) * this.h / 2
    }
}

class Kolo extends Figura {
    constructor(a) {
        super(a, 0)
    }
    policzPole() {
        return Math.PI * this.a * this.a
    }
}
