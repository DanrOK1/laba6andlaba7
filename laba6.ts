function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Декоратор для преобразования строк в верхний регистр
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

// Пробуем изменить свойства экземпляра
car.brand = 'BMW';
car.model = 'M5';

// Проверка работоспособности
console.log(car.getInfo()); 