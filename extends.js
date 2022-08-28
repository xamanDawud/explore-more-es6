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
class StudentTwo extends Student {
    constructor(village, ps, zip) {
        super(village, ps, zip);
    }

    two() {
        console.log("this is student two templates");
    }
}

let alia = new StudentTwo("zakigan", "Upazila", 235324);
console.log(alia);