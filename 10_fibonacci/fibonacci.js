const fibonacci = function(number) {
    if (typeof number === "string"){
        number = parseInt(number);
    }
    if (number < 0) return "OOPS";
    let seq = [1, 1] ;
    let newNumber = 1;
    for (let i=2; i<number;i++){
        newNumber = seq[i-1] + seq[i-2];
        seq.push(newNumber);
    }

    console.log(newNumber);
    return newNumber;
};

// Do not edit below this line
module.exports = fibonacci;
