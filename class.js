class Student {
    constructor(village, ps, zip) {
        this.village = village;
        this.ps = ps;
        this.zip = zip;
    }

    schoolName = "Fulatali islamic Cadet Academy";
    teacher(name) {
        console.log(`Some Student Teacher Name is ${name}`);
    }
}

let stu = new Student();
stu.teacher("Sheikh Kamal");

let isra = new Student("Khilgau", "Dhaka", 23542);
console.log(isra.village);