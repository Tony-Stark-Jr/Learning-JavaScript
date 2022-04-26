// ES6 Classes and Inheritance

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName,
            this.experience = givenExperience,
            this.division = givenDivision
    }

    slogan() {
        return `I am ${this.name} and this is the best company`
    }

    joiningYear() {
        return 2022 - `${this.experience}`
    }

    static add(a, b) {
        return a + b;
    }


}

// const Employee1 = new Employee("Santosh Marar", 2, "Programmer & Adminstration")
// console.log(Employee1.slogan());

// console.log(Employee.add(4, 5));

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, github) {
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage() {
        if (this.language == 'Python') {
            return `Python`
        } else {
            return `${this.language}`
        }
    }

    static multiply(a, b) {
        return a * b;
    }
}

const stark = new Programmer("Stark", 3, "Programmer & Adminstartor", "C++", 'github')
console.table(stark);
console.log(stark.favoriteLanguage());
console.log(Programmer.multiply(4, 5));
console.log(stark.joiningYear());