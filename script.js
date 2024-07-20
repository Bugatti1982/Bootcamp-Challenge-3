// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray = [];
  let continueEntering = true;
  let salary = 0;

  while (continueEntering) {
    let firstName = prompt("Enter first name:");
    let lastName = prompt("Enter last name:");
    salary = prompt("Enter salary:")

    if (isNaN(salary)) {
      salary = 0
    }

    employeesArray.push({ firstName, lastName, salary: parseFloat(salary) });

    let cont = confirm("Do you want to add another employee?");
    if (cont == false) {
      continueEntering = false;
    }
  }

  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let avgsal = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    avgsal += employeesArray[i].salary
  }

  avgsal /= employeesArray.length

  return console.log('The average employee salary between our ' +
    employeesArray.length + ' employee(s) is $' + avgsal.toFixed(2))
};


// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randIndex = Math.floor(Math.random() * employeesArray.length)

  console.log('Congratulations to ' +
    employeesArray[randIndex].firstName +
    ' ' +
    employeesArray[randIndex].lastName +
    ', our random drawing winner!')
};

/*
 ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

