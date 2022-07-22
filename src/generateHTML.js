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

    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile Generator</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
      </head>
      <body>
      <style>
      * {
      font-family: "Roboto";
      --primary: #007bb4;
      --accent: rgb(89, 175, 255);
    }
    .manager {
      color: #0310be;
    }
    .engineer {
      color: #212ff3;
    }
    intern {
      color: #6e78fd;
    }
    body {
      width: 100%;
      height: 100%;
      background-color: #e9e9e9;
      color: var(--primary);
    }
    header {
      color: var(--primary);
      border-bottom: 3px solid rgb(0, 11, 32);
      position: fixed;
      text-align: center;
      width: 100%;
      height: 80px;
      top: 0;
      margin: 1rem;
    }
    main {
      position: fixed;
      top: 120px;
    }
    .card {
      background-color: #f3f3f3;
    }
    .cards .card {
      margin: 10px;
    }
    a {
      text-decoration: none;
      color: rgba(0, 214, 132, 0.5);
    }
    a:hover {
      color: var(--accent);
    }
      </style>
        <header><h1>Team Members</h1></header>
        <main class="row justify-content-center w-100 cards">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${filteredData[0][0].getName()}</h5>
              <h6 class="card-subtitle mb-2 "><i class="fa-solid fa-lg fa-mug-hot"></i> ${filteredData[0][0].getRole()}</h6>
              <p class="card-text">ID:<span>${filteredData[0][0].getId()}</span></p>
              <div class="container row">
                <span> Email: <a href="mailto:${filteredData[0][0].getEmail()}" class="card-link">${filteredData[0][0].getEmail()}</a></span>
                <span>
                  Office Number: <a href="#" class="card-link">${filteredData[0][0].getOfficeNumber()}</a></span
                >
              </div>
            </div>
          </div>
          ${filteredData[1].map((engineer) => {
        return `<div class="card" style="width: 18rem">
                <div class="card-body">
                  <h5 class="card-title">${engineer.getName()}</h5>
                  <h6 class="card-subtitle mb-2 "> <i class="fa-solid fa-lg fa-laptop-code"></i> ${engineer.getRole()}</h6>
                  <p class="card-text">
                    ID:<span>${engineer.getId()}</span>
                  </p>
                  <div class="container row">
                    <span>
                      Email:
                      <a target="_blank" href="mailto:${engineer.getEmail()}" class="card-link">
                        ${engineer.getEmail()}
                      </a>
                    </span>
                    <span>
                      GitHub:
                      <a href="https://github.com/${engineer.getGitHubUsername()}" class="card-link">
                        ${engineer.getGitHubUsername()}
                      </a>
                    </span>
                  </div>
                </div>
              </div>`;
    })}
          ${filteredData[2].map((intern) => {
        return `<div class="card" style="width: 18rem">
                <div class="card-body">
                  <h5 class="card-title">${intern.getName()}</h5>
                  <h6 class="card-subtitle mb-2"><i class="fa-solid fa-lg fa-graduation-cap"></i> ${intern.getRole()}</h6>
                  <p class="card-text">
                    ID:<span>${intern.getId()}</span>
                  </p>
                  <div class="container row">
                    <span>
                      Email:
                      <a href="mailto:${intern.getEmail()}" class="card-link">
                        ${intern.getEmail()}
                      </a>
                    </span>
                    <span>
                      School:
                      <a href="#">
                        ${intern.getSchool()}
                      </a>
                    </span>
                  </div>
                </div>
              </div>`;
    })}
        </main>
      </body>
    </html>
    `;
}

module.exports = generateHTML;