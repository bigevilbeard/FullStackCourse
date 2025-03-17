// type Holidays = {
//     date: Date,
//     reason: string
// }[];

// abstract class Department {
//     protected abstract holidays: Holidays;
//     protected constructor(protected name: string) {}

//     public addHolidays(holidays: Holidays) {
//         if (Array.isArray(holidays)) {
//             for (const holiday of holidays) {
//                 this.holidays.push(holiday);
//             }
//         }
//     }
//     public abstract printHolidays(): void;
// }

// class ItDepartment extends Department {
//     protected holidays: Holidays = [];
//     constructor() {
//         super("IT Department");
//     }
//     public printHolidays() {
//         if (this.holidays.length === 0) {
//             console.log("There are no holidays");
//         } else {
//             console.log(`Here is the list of holidays ${this.name}`);
//             this.holidays.forEach((holiday: {date: Date, reason: string}, index: number) => {
//                 console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
//             });
//         }
//     }
// }

// class AdminDepartment extends Department {
//     protected holidays: Holidays = [];
//     constructor() {
//         super("Admin Department");
//     }
//     public printHolidays() {
//         if (this.holidays.length === 0) {
//             console.log("There are no holidays");
//         } else {
//             console.log(`Here is the list of holidays ${this.name}`);
//             this.holidays.forEach((holiday: {date: Date, reason: string}, index: number) => {
//                 console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
//             });
//         }
//     }
// }

// const itHolidays: Holidays = [
//     {
//         date: new Date(2022, 10, 11),
//         reason: "IT Department Date",
//     },
//     {
//         date: new Date(2022, 12, 25),
//         reason: "Christmas",
//     }
// ];

// const adminHolidays: Holidays = [
//     {
//         date: new Date(2022, 11, 22),
//         reason: "Admin Department Date",
//     },
//     {
//         date: new Date(2022, 12, 25),
//         reason: "Christmas",
//     }
// ];

// const itDepartment: ItDepartment = new ItDepartment();
// const adminDepartment: AdminDepartment = new AdminDepartment();

// itDepartment.addHolidays(itHolidays);
// adminDepartment.addHolidays(adminHolidays);

// console.log(itDepartment);
// console.log(adminDepartment);


// // console.log("\nIT Department Holidays:");
// itDepartment.printHolidays();

// // console.log("\nAdmin Department Holidays:");
// adminDepartment.printHolidays();



// enum AutomobileTypes {
//     car = "car",
//     bus = "bus",
//     van = "van",
//     truck = "truck",
//     bike = "bike"
// }

// enum AutomobileBrands {
//     ferrari = "ferrari",
//     honda = "honda",
//     bmw = "bmw",
//     toyota = "toyota",
//     tesla = "tesla"
// }

// enum AutomobileColors {
//     red = "red",
//     black = "black",
//     silver = "silver",
//     white = "white",
//     blue = "blue"
// }

// interface Automobile<Type, Brand, Colors>{
//     type: Type;
//     brand: Brand;
//     colors: Colors[];
//     description: string;
// }

// interface CommercialVehicle{
//     capacity: string;
//     licenseRenewalDate: Date;
// }


// class Truck implements Automobile<string, AutomobileBrands, AutomobileColors>,
//     CommercialVehicle {
//     public type: string = "truck";
//     constructor(
//         public brand: AutomobileBrands,
//         public colors: AutomobileColors[],
//         public description: string,
//         public capacity: string,
//         public licenseRenewalDate: Date,
//         private driverName: string = "John Doe"
//     ) {}
// }

// const toyotaTruck: Truck = new Truck(
//     AutomobileBrands.toyota,
//     [AutomobileColors.silver, AutomobileColors.white],
//     "This is Toyota Truck",
//     "1000kg",
//     new Date()
// );


// console.log(toyotaTruck)


