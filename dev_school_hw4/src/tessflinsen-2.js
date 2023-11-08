class Vector {
    constructor(components) {
        this.components = components;
    }

    check(vector)
    {
        if (this.components.length !== vector.components.length) {
            throw new Error('Vector lengths do not match!');
        }
    }
    add(vector) {
        this.check(vector);
        const result = this.components.map((value, index) => value + vector.components[index]);
        return new Vector(result);
    }

    subtract(vector) {
        this.check(vector);
        const result = this.components.map((value, index) => value - vector.components[index]);
        return new Vector(result);
    }

    dot(vector) {
        this.check(vector);
        return this.components.reduce((sum, value, index) => sum + value * vector.components[index], 0);
    }

    norm() {
        const sumOfSquares = this.components.reduce((sum, value) => sum + value ** 2, 0);
        return Math.sqrt(sumOfSquares);
    }

    toString() {
        return `(${this.components.join(',')})`; 
    }

    equals(vector) {
        if (this.components.length !== vector.components.length) {
            return false;
        }
        return this.components.every((value, index) => value === vector.components[index]);
    }
}


