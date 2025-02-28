
enum TypeDocument {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    IDCard = "ID карты",
    
}

interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    documentType: TypeDocument;
    documentSeries: string;
    documentNumber: string;

    printOwnerInfo(): void;
}

interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;

    printVehicleInfo(): void;
}

class OwnerClass implements Owner {
    private _lastName: string;
    private _firstName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _documentType: TypeDocument;
    private _documentSeries: string;
    private _documentNumber: string;

    constructor(
        lastName: string,
        firstName: string,
        middleName: string,
        birthDate: Date,
        documentType: TypeDocument,
        documentSeries: string,
        documentNumber: string
    ) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }

    get lastName(): string { return this._lastName; }
    set lastName(value: string) { this._lastName = value; }

    get firstName(): string { return this._firstName; }
    set firstName(value: string) { this._firstName = value; }

    get middleName(): string { return this._middleName; }
    set middleName(value: string) { this._middleName = value; }

    get birthDate(): Date { return this._birthDate; }
    set birthDate(value: Date) { this._birthDate = value; }

    get documentType(): TypeDocument { return this._documentType; }
    set documentType(value: TypeDocument) { this._documentType = value; }

    get documentSeries(): string { return this._documentSeries; }
    set documentSeries(value: string) { this._documentSeries = value; }

    get documentNumber(): string { return this._documentNumber; }
    set documentNumber(value: string) { this._documentNumber = value; }

    printOwnerInfo(): void {
        console.log("Информация о владельце:");
        console.log(`  Фамилия: ${this._lastName}`);
        console.log(`  Имя: ${this._firstName}`);
        console.log(`  Отчество: ${this._middleName}`);
        console.log(`  Дата рождения: ${this._birthDate.toLocaleDateString()}`);
        console.log(`  Тип документа: ${this._documentType}`);
        console.log(`  Серия документа: ${this._documentSeries}`);
        console.log(`  Номер документа: ${this._documentNumber}`);
    }
}

class VehicleClass implements Vehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }

    get brand(): string { return this._brand; }
    set brand(value: string) { this._brand = value; }

    get model(): string { return this._model; }
    set model(value: string) { this._model = value; }

    get year(): number { return this._year; }
    set year(value: number) { this._year = value; }

    get vin(): string { return this._vin; }
    set vin(value: string) { this._vin = value; }

    get registrationNumber(): string { return this._registrationNumber; }
    set registrationNumber(value: string) { this._registrationNumber = value; }

    get owner(): Owner { return this._owner; }
    set owner(value: Owner) { this._owner = value; }

    printVehicleInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
    }
}

const ownerVehicle = new OwnerClass(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1990, 2, 10),
    TypeDocument.Passport,
    "2313",
    "1323123"
);

const vehicle = new VehicleClass(
    "BMW",
    "M5",
    2020,
    "KFDK788FDJ27Y",
    "A123BC",
    ownerVehicle
);

ownerVehicle.printOwnerInfo();
console.log(" ");
vehicle.printVehicleInfo();
console.log(" ");
console.log(" ");
console.log(" ");

//2 задание

enum CarBodyType {
    Sedan = "Седан",
    Hatchback = "Хэтчбек",
    SUV = "Внедорожник",
    Coupe = "Купе",
    VAN = "Фургон"
}
enum CarClass {
    Economy = "Эконом",
    Business = "Бизнес",
    Luxury = "Люкс",
}

interface Car extends Vehicle {
    bodyType: CarBodyType;
    carClass: CarClass;

    printVehicleInfo(): void;
}

interface Motorbike extends Vehicle {
    frameType: string;
    isSportBike: boolean;
    printVehicleInfo(): void;
    getMotorbikeSpecificInfo(): string; // Задание 3: Добавляем метод в интерфейс
}




interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];

    getAllVehicles(): T[];
    sortByOwnerLastName(): T[];
    filterByOwnerLastName(lastNameStart: string): T[];
}

class CarClassImpl implements Car {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _bodyType: CarBodyType;
    private _carClass: CarClass;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        bodyType: CarBodyType,
        carClass: CarClass
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }


    get brand(): string { return this._brand; }
    set brand(value: string) { this._brand = value; }


    get model(): string { return this._model; }
    set model(value: string) { this._model = value; }


    get year(): number { return this._year; }
    set year(value: number) { this._year = value; }


    get vin(): string { return this._vin; }
    set vin(value: string) { this._vin = value; }


    get registrationNumber(): string { return this._registrationNumber; }
    set registrationNumber(value: string) { this._registrationNumber = value; }


    get owner(): Owner { return this._owner; }
    set owner(value: Owner) { this._owner = value; }


    get bodyType(): CarBodyType { return this._bodyType; }
    set bodyType(value: CarBodyType) { this._bodyType = value; }


    get carClass(): CarClass { return this._carClass; }
    set carClass(value: CarClass) { this._carClass = value; }

    printVehicleInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carClass}`);
    }
}

class MotorbikeClassImpl implements Motorbike {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _frameType: string;
    private _isSportBike: boolean;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        frameType: string,
        isSportBike: boolean
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isSportBike = isSportBike;
    }

    get brand(): string { return this._brand; }
    set brand(value: string) { this._brand = value; }

    get model(): string { return this._model; }
    set model(value: string) { this._model = value; }

    get year(): number { return this._year; }
    set year(value: number) { this._year = value; }

    get vin(): string { return this._vin; }
    set vin(value: string) { this._vin = value; }

    get registrationNumber(): string { return this._registrationNumber; }
    set registrationNumber(value: string) { this._registrationNumber = value; }

    get owner(): Owner { return this._owner; }
    set owner(value: Owner) { this._owner = value; }

    get frameType(): string { return this._frameType; }
    set frameType(value: string) { this._frameType = value; }

    get isSportBike(): boolean { return this._isSportBike; }
    set isSportBike(value: boolean) { this._isSportBike = value; }

    printVehicleInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Спортивный мотоцикл: ${this._isSportBike}`);
    }

    // Задание 3
    public getMotorbikeSpecificInfo(): string {
        return `Тип рамы: ${this._frameType}, Спортивный мотоцикл: ${this._isSportBike}`;
    }
}


class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T>
{
    creationDate: Date;
    vehicles: T[];

    constructor(creationDate: Date, vehicles: T[]) {
        this.creationDate = creationDate;
        this.vehicles = vehicles;
    }

    getAllVehicles(): T[] {
        return this.vehicles;
    }

    sortByOwnerLastName(): T[] {
        return [...this.vehicles].sort((a, b) => a.owner.lastName.localeCompare(b.owner.lastName));
    }

    filterByOwnerLastName(lastNameStart: string): T[] {
        const lowerCaseLastNameStart = lastNameStart.toLowerCase();
        return this.vehicles.filter(vehicle => (vehicle.owner.lastName.toLowerCase() as any).startsWith(lowerCaseLastNameStart));    
    }
}

//Примеры

const car1 = new CarClassImpl(
    "Mercedes-Benz",
    "C-Class",
    2023,
    "WBA206...",
    "AA111BB",
    ownerVehicle,
    CarBodyType.Sedan,
    CarClass.Business
);

const motorbike1 = new MotorbikeClassImpl(
    "Ducati",
    "Panigale V4",
    2024,
    "ZDMV4...",
    "CC222DD",
    ownerVehicle,
    "Trellis",
    true
);

console.log("Информация об автомобиле:");
car1.printVehicleInfo();

console.log("\nИнформация о мотоцикле:");
motorbike1.printVehicleInfo();

// Создадим несколько владельцев и транспортных средств для демонстрации работы методов хранилища
const owner2 = new OwnerClass(
    "Смирнов",
    "Александр",
    "Сергеевич",
    new Date(1985, 5, 20),
    TypeDocument.Passport,
    "4567",
    "789012"
);

const owner3 = new OwnerClass(
    "Петров",
    "Дмитрий",
    "Алексеевич",
    new Date(1992, 10, 5),
    TypeDocument.DriverLicense,
    "7890",
    "345678"
);

const car2 = new CarClassImpl(
    "Toyota",
    "Camry",
    2022,
    "JTDBE70...",
    "BB222CC",
    owner2,
    CarBodyType.Sedan,
    CarClass.Economy
);

const motorbike2 = new MotorbikeClassImpl(
    "Harley-Davidson",
    "Street Glide",
    2023,
    "1HD1...",
    "DD333EE",
    owner3,
    "Tubular",
    false
);


const vehicleStorage = new VehicleStorageImpl<Vehicle>(new Date(), [car1, motorbike1, car2, motorbike2]);

// Проверка метода sortByOwnerLastName
console.log("\nТранспортные средства, отсортированные по фамилии владельца:");
const sortedVehicles = vehicleStorage.sortByOwnerLastName();
sortedVehicles.forEach(vehicle => console.log(`${vehicle.owner.lastName}: ${vehicle.brand} ${vehicle.model}`));

// Проверка метода filterByOwnerLastName
console.log("\nТранспортные средства, у которых фамилия владельца начинается на 'Ива':");
const filteredVehicles = vehicleStorage.filterByOwnerLastName("Ива");
filteredVehicles.forEach(vehicle => console.log(`${vehicle.owner.lastName}: ${vehicle.brand} ${vehicle.model}`));

// Проверка метода getMotorbikeSpecificInfo
console.log("\nИнформация о мотоцикле (только тип рамы и признак спортивности):");
console.log(motorbike1.getMotorbikeSpecificInfo());