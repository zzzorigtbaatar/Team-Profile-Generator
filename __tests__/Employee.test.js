const Employee = require('../lib/Employee');

describe("Employee class", () => {

  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const employee = new Employee("Sarah", 322, "cat@gmail.com");

      expect(employee.name).toEqual("Sarah");
      expect(employee.id).toEqual(322);
      expect(employee.email).toEqual("cat@gmail.com");
    });

    describe("Get Role", () => {
      it("should return 'Employee' when getRole() is called", () => {
        const employee = new Employee("Sarah", 322, "cat@gmail.com");
        expect(employee.getRole()).toEqual("Employee");
      });
    });
  });
}); 