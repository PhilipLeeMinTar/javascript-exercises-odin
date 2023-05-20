const findTheOldest = function(persons) {
    const oldest = persons.reduce((max, person) => {
        if (!person.yearOfDeath) person.yearOfDeath = (new Date()).getFullYear();
        const age = person.yearOfDeath - person.yearOfBirth;
        if (age > max) max = age;
        return max;
    }, 0)
    console.log(oldest);
    return persons.find(person => oldest == person.yearOfDeath - person.yearOfBirth);
    
};

// Do not edit below this line
module.exports = findTheOldest;
