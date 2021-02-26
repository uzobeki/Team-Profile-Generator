const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email){
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    
    getRole(){
        return this.constructor.name
    }
}

module.exports = Manager