// const createPatient = (name, ssn) => {
//     let patient = {
//         PII:{
//             name: name,
//             SSN: ssn
//         },
//         getName: function() {
//             return this.PII.name;
//         }
//     };
//     return patient;
// }

// const firstPatient = createPatient("Erica", "123-90-9087");

// console.log(firstPatient.PII.name);
// console.log(firstPatient.PII.SSN);
// console.log(firstPatient.getName());

class Patient {
    #PII;

    constructor(name, ssn) {
        this.#PII = {
            name: name,
            SSN: ssn
        };
    }

    getName() {
        return this.#PII.name;
    }
}

const firstPatient = new Patient("Erica", "123-90-8192");
console.log(firstPatient.getName()); 