const Employee = require('../lib/Employee');

describe("Employee class", () => {

  // Test for all use cases when initializing a new Employee object
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      // Act
      const employee = new Employee("Sarah", 322, "cat@gmail.com");

      // Verify that the new object has the correct properties
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






  // it("should throw an error if 'age' is not a number", () => {
  //   // Act
  //   const cb = () => new Employee("Sarah", "2");
  //   const err = new Error("Expected parameter 'age' to be a non-negative number");

  //   // Assert
  //   expect(cb).toThrowError(err);
  // });

  // it("should throw an error if 'age' is less than 0", () => {
  //   // Act
  //   const cb = () => new Employee("Sarah", -1);
  //   const err = new Error("Expected parameter 'age' to be a non-negative number");

  //   // Assert
  //   expect(cb).toThrowError(err);
  // });

}); 