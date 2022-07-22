const Employee = require("./Employee");

class Manager extends Employee {
    constructor(managerName, managerId, managerEmail, managerOffice) {
        super(managerName, managerId, managerEmail);
        this.officeNumber = managerOffice;
        if (managerOffice === "") {
            this.officeNumber = "N/A";
        }
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;