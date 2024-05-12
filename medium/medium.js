const sharePizza = (totalSlices, numberOfPeople) => {
    if (totalSlices <= 0 || numberOfPeople <= 0) {
        return "Invalid input: Please provide positive values for total slices and number of people.";
    }
    let slicesPerPerson = totalSlices / numberOfPeople;

    
    slicesPerPerson = slicesPerPerson.toFixed(2);

    
    let output = `Each person gets ${slicesPerPerson} slices of pizza; from our ${totalSlices} slice pizza`;

    return output;
};


console.log(sharePizza(8, 2)); 
console.log(sharePizza(8, 3)); 
console.log(sharePizza(21, 20)); 
console.log(sharePizza(10, 3)); 
