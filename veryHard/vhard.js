class Person {
    constructor(name, jobTitle, age) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.age = age;
    }

    exercise() {
        console.log(`${this.name} is exercising.`);
    }

    fetchJob() {
        console.log(`${this.name} is fetching a job.`);
    }
}

class Programmer extends Person {
    constructor(name, jobTitle, age, languages) {
        super(name, jobTitle, age);
        this.languages = languages;
    }

    learnLanguage(language) {
        this.languages.push(language);
    }

    listLanguages() {
        return this.languages;
    }
}

const person1 = new Person("Wheaty", "Backend Engineer", 28);
const c1 = new Programmer("Fioana", "DevOps", 45, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Shrek", "Janitor", 18, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Donkey", "SysOps", 28, ["HTML", "CSS", "JS", "R"]);

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1.listLanguages());
// console.log(c2.listLanguages());
// console.log(c3.listLanguages());

// console.log(person1);
// console.log(c1);
// console.log(c2);
// console.log(c3);

c1.exercise();
c1.fetchJob();
