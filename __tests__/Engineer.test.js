const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    describe("Initialization", () => {
        it("should create an object with a name, id, email, and username if provided valid arguments", () => {
            const engineer = new Engineer("Sarah", 322, "cat@gmail.com", "octocat");

            expect(engineer.name).toEqual("Sarah");
            expect(engineer.id).toEqual(322);
            expect(engineer.email).toEqual("cat@gmail.com");
            expect(engineer.gitHubUsername).toEqual("octocat");
        });

        describe("Get Role", () => {
            it("should return 'Engineer' when getRole() is called", () => {
                const engineer = new Engineer("Sarah", 322, "cat@gmail.com", "octocat");
                expect(engineer.getRole()).toEqual("Engineer");
            });
        });
    });
});