const palindromes = function (phrase) {

    let removedPunctuation = phrase.toLowerCase().replace(/\W|\s/g, "");
    console.log(removedPunctuation);
    let split = removedPunctuation.split("");
    let reverse = split.reverse();
    let join = reverse.join("");

    console.log(join);
    return removedPunctuation === join;
};

// Do not edit below this line
module.exports = palindromes;
