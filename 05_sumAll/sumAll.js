const sumAll = function(first, last) {
    if (typeof first != "number" || typeof last != "number") return "ERROR";
    if (first < 0 || last < 0) return "ERROR";

    let sum = 0;
    if (first < last){
      for (let i=first;i<=last;i++){
        sum += i;
        }
        return sum;  
    } else {
        for (let i=first;i>=last;i--){
            sum += i;
            }
            return sum; 
    }
    
};

// Do not edit below this line
module.exports = sumAll;
