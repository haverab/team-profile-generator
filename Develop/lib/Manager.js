// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

// Manager class extends the class of Employee-- so you don't have to grab name/id/title again. Adds officeNumber.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // We build a constructor in order to store information on individual managers, using this blueprint.

        // super calls Employee
        super(name, id, email);

        // this grabs officeNumber
        this.officeNumber = officeNumber;

    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    // getRole() = Manager;
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;