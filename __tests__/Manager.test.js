const Manager = require("../lib/Manager");

describe("Manager", () => {

    describe("Initialization", () => {
        it("should create an object with name, id, and email", () => {
            const manager = new Manager("Sarah", 322, "cat@gmail.com", 5105448777);

            expect(manager.name).toEqual("Sarah");
            expect(manager.id).toEqual(322);
            expect(manager.email).toEqual("cat@gmail.com");
            expect(manager.officeNumber).toEqual(5105448777);
        });
    });

    describe("Get Role", () => {
        it("should get role of manager as 'Manager", () => {
            const manager = new Manager("Sarah", 322, "cat@gmail.com", 5105448777);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});