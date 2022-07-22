const Intern = require("../lib/Intern");

describe("Intern", () => {

    describe("Initialization", () => {
        it("should create an object with name, id, and email", () => {
            const intern = new Intern("Sarah", 322, "cat@gmail.com", "Stanford");

            expect(intern.name).toEqual("Sarah");
            expect(intern.id).toEqual(322);
            expect(intern.email).toEqual("cat@gmail.com");
            expect(intern.internSchool).toEqual("Stanford");
        });
    });

    describe("Get Role", () => {
        it("should get role of intern as 'Intern", () => {
            const intern = new Intern("Sarah", 322, "cat@gmail.com", "Stanford");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});