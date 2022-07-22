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
  // it("should throw an error if provided no arguments", () => {
  //   // Wrap the object initialization in a callback function that Jest will run
  //   // Act
  //   const cb = () => new Employee();

  //   // Verify that an error was thrown in the callback function
  //   // Assert
  //   expect(cb).toThrow();
  // });

  // it("should throw an error if not provided an age", () => {
  //   // Act
  //   const cb = () => new Employee("Sarah");

  //   // Define the error message that is expected to be thrown
  //   const err = new Error("Expected parameter 'age' to be a non-negative number");

  //   // Verify that the correct error was thrown when the callback is executed
  //   // Assert
  //   expect(cb).toThrowError(err);
  // });

  // it("should throw an error if 'name' is not a string", () => {
  //   // Act
  //   const cb = () => new Employee(3, 2);
  //   const err = new Error("Expected parameter 'name' to be a non-empty string");

  //   // Assert
  //   expect(cb).toThrowError(err);
  // });

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