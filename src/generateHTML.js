function filterData(data) {
    const manager = data.filter((employee) => {
      return employee.getRole() === "Manager";
    });
    const engineers = data.filter((employee) => {
      return employee.getRole() === "Engineer";
    });
    const interns = data.filter((employee) => {
      return employee.getRole() === "Intern";
    });
    const arr = [manager, engineers, interns];
    return arr;
  }

function generateHTML(data) {
    const filteredData = filterData(data);

    return ``;
}

module.exports = generateHTML;