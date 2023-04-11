const removeFromArray = function(arr) { //may take in any number of arguments
    for (let i=1;i<arguments.length;i++){
        let res = arr.indexOf(arguments[i]);
        if (res != -1){
            arr.splice(res, 1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
