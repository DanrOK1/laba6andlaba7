function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function toUpperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        return result.toUpperCase();
    };
}

@sealed
class Car {
    constructor(public brand: string, public model: string) {}

    @toUpperCase
    getInfo(): string {
        return `Марка: ${this.brand}, Модель: ${this.model}`;
    }
}

const car = new Car('Kia', 'Rio');

car.brand = 'BMW';
car.model = 'M5';

console.log(car.getInfo()); 
