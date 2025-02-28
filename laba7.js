var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TypeDocument;
(function (TypeDocument) {
    TypeDocument["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    TypeDocument["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    TypeDocument["Other"] = "\u0414\u0440\u0443\u0433\u043E\u0439";
})(TypeDocument || (TypeDocument = {}));
var OwnerClass = /** @class */ (function () {
    function OwnerClass(lastName, firstName, middleName, birthDate, documentType, documentSeries, documentNumber) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }
    Object.defineProperty(OwnerClass.prototype, "lastName", {
        get: function () { return this._lastName; },
        set: function (value) { this._lastName = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "firstName", {
        get: function () { return this._firstName; },
        set: function (value) { this._firstName = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "middleName", {
        get: function () { return this._middleName; },
        set: function (value) { this._middleName = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "birthDate", {
        get: function () { return this._birthDate; },
        set: function (value) { this._birthDate = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "documentType", {
        get: function () { return this._documentType; },
        set: function (value) { this._documentType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "documentSeries", {
        get: function () { return this._documentSeries; },
        set: function (value) { this._documentSeries = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "documentNumber", {
        get: function () { return this._documentNumber; },
        set: function (value) { this._documentNumber = value; },
        enumerable: false,
        configurable: true
    });
    OwnerClass.prototype.printOwnerInfo = function () {
        console.log("Информация о владельце:");
        console.log("  \u0424\u0430\u043C\u0438\u043B\u0438\u044F: ".concat(this._lastName));
        console.log("  \u0418\u043C\u044F: ".concat(this._firstName));
        console.log("  \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E: ".concat(this._middleName));
        console.log("  \u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ".concat(this._birthDate.toLocaleDateString()));
        console.log("  \u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this._documentType));
        console.log("  \u0421\u0435\u0440\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this._documentSeries));
        console.log("  \u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this._documentNumber));
    };
    return OwnerClass;
}());
var VehicleClass = /** @class */ (function () {
    function VehicleClass(brand, model, year, vin, registrationNumber, owner) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }
    Object.defineProperty(VehicleClass.prototype, "brand", {
        get: function () { return this._brand; },
        set: function (value) { this._brand = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "year", {
        get: function () { return this._year; },
        set: function (value) { this._year = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    VehicleClass.prototype.printVehicleInfo = function () {
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this._brand));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this._model));
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._year));
        console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this._vin));
        console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._registrationNumber));
    };
    return VehicleClass;
}());
var ownerVehicle = new OwnerClass("Иванов", "Иван", "Иванович", new Date(1990, 2, 10), TypeDocument.Passport, "2313", "1323123");
var vehicle = new VehicleClass("BMW", "M5", 2020, "KFDK788FDJ27Y", "A123BC", ownerVehicle);
ownerVehicle.printOwnerInfo();
console.log(" ");
vehicle.printVehicleInfo();
console.log(" ");
console.log(" ");
console.log(" ");
//2 задание
var CarBodyType;
(function (CarBodyType) {
    CarBodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    CarBodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    CarBodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    CarBodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
    CarBodyType["VAN"] = "\u0424\u0443\u0440\u0433\u043E\u043D";
})(CarBodyType || (CarBodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
})(CarClass || (CarClass = {}));
var CarClassImpl = /** @class */ (function () {
    function CarClassImpl(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    Object.defineProperty(CarClassImpl.prototype, "brand", {
        get: function () { return this._brand; },
        set: function (value) { this._brand = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "year", {
        get: function () { return this._year; },
        set: function (value) { this._year = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "bodyType", {
        get: function () { return this._bodyType; },
        set: function (value) { this._bodyType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarClassImpl.prototype, "carClass", {
        get: function () { return this._carClass; },
        set: function (value) { this._carClass = value; },
        enumerable: false,
        configurable: true
    });
    CarClassImpl.prototype.printVehicleInfo = function () {
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this._brand));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this._model));
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._year));
        console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this._vin));
        console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._registrationNumber));
        console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this._bodyType));
        console.log("\u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ".concat(this._carClass));
    };
    return CarClassImpl;
}());
var MotorbikeClassImpl = /** @class */ (function () {
    function MotorbikeClassImpl(brand, model, year, vin, registrationNumber, owner, frameType, isSportBike) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isSportBike = isSportBike;
    }
    Object.defineProperty(MotorbikeClassImpl.prototype, "brand", {
        get: function () { return this._brand; },
        set: function (value) { this._brand = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "year", {
        get: function () { return this._year; },
        set: function (value) { this._year = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "frameType", {
        get: function () { return this._frameType; },
        set: function (value) { this._frameType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClassImpl.prototype, "isSportBike", {
        get: function () { return this._isSportBike; },
        set: function (value) { this._isSportBike = value; },
        enumerable: false,
        configurable: true
    });
    MotorbikeClassImpl.prototype.printVehicleInfo = function () {
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this._brand));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this._model));
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._year));
        console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this._vin));
        console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._registrationNumber));
        console.log("\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this._frameType));
        console.log("\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B: ".concat(this._isSportBike));
    };
    // Задание 3
    MotorbikeClassImpl.prototype.getMotorbikeSpecificInfo = function () {
        return "\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this._frameType, ", \u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B: ").concat(this._isSportBike);
    };
    return MotorbikeClassImpl;
}());
var VehicleStorageImpl = /** @class */ (function () {
    function VehicleStorageImpl(creationDate, vehicles) {
        this.creationDate = creationDate;
        this.vehicles = vehicles;
    }
    VehicleStorageImpl.prototype.getAllVehicles = function () {
        return this.vehicles;
    };
    VehicleStorageImpl.prototype.sortByOwnerLastName = function () {
        return __spreadArray([], this.vehicles, true).sort(function (a, b) { return a.owner.lastName.localeCompare(b.owner.lastName); });
    };
    VehicleStorageImpl.prototype.filterByOwnerLastName = function (lastNameStart) {
        var lowerCaseLastNameStart = lastNameStart.toLowerCase();
        return this.vehicles.filter(function (vehicle) { return vehicle.owner.lastName.toLowerCase().startsWith(lowerCaseLastNameStart); });
    };
    return VehicleStorageImpl;
}());
//Примеры
var car1 = new CarClassImpl("Mercedes-Benz", "C-Class", 2023, "WBA206...", "AA111BB", ownerVehicle, CarBodyType.Sedan, CarClass.Business);
var motorbike1 = new MotorbikeClassImpl("Ducati", "Panigale V4", 2024, "ZDMV4...", "CC222DD", ownerVehicle, "Trellis", true);
console.log("Информация об автомобиле:");
car1.printVehicleInfo();
console.log("\nИнформация о мотоцикле:");
motorbike1.printVehicleInfo();
// Создадим несколько владельцев и транспортных средств для демонстрации работы методов хранилища
var owner2 = new OwnerClass("Смирнов", "Александр", "Сергеевич", new Date(1985, 5, 20), TypeDocument.Passport, "4567", "789012");
var owner3 = new OwnerClass("Петров", "Дмитрий", "Алексеевич", new Date(1992, 10, 5), TypeDocument.DriverLicense, "7890", "345678");
var car2 = new CarClassImpl("Toyota", "Camry", 2022, "JTDBE70...", "BB222CC", owner2, CarBodyType.Sedan, CarClass.Economy);
var motorbike2 = new MotorbikeClassImpl("Harley-Davidson", "Street Glide", 2023, "1HD1...", "DD333EE", owner3, "Tubular", false);
// Создадим экземпляр хранилища и добавим в него транспортные средства
var vehicleStorage = new VehicleStorageImpl(new Date(), [car1, motorbike1, car2, motorbike2]);
// Продемонстрируем работу метода sortByOwnerLastName
console.log("\nТранспортные средства, отсортированные по фамилии владельца:");
var sortedVehicles = vehicleStorage.sortByOwnerLastName();
sortedVehicles.forEach(function (vehicle) { return console.log("".concat(vehicle.owner.lastName, ": ").concat(vehicle.brand, " ").concat(vehicle.model)); });
// Продемонстрируем работу метода filterByOwnerLastName
console.log("\nТранспортные средства, у которых фамилия владельца начинается на 'Ива':");
var filteredVehicles = vehicleStorage.filterByOwnerLastName("Ива");
filteredVehicles.forEach(function (vehicle) { return console.log("".concat(vehicle.owner.lastName, ": ").concat(vehicle.brand, " ").concat(vehicle.model)); });
// Продемонстрируем работу метода getMotorbikeSpecificInfo
console.log("\nИнформация о мотоцикле (только тип рамы и признак спортивности):");
console.log(motorbike1.getMotorbikeSpecificInfo());
