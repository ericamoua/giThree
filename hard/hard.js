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
const secPatient = new Patient("Dabin", "099-90-8908");
const thirdPateint = new Patient("Wheaty", "123-987-3480");

console.log(firstPatient.getName()); 
const address = firstPatient.getName();
console.log("Addressing package to:", address); 


console.log(firstPatient.SSN);