class EmployeeSearch extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "employee-search"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Search..."
    }), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Filter"
    }));
  }
}
class RowEmployee extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, this.props.employee.firstName), /*#__PURE__*/React.createElement("td", null, this.props.employee.lastName), /*#__PURE__*/React.createElement("td", null, this.props.employee.age), /*#__PURE__*/React.createElement("td", null, this.props.employee.dateOfJoining), /*#__PURE__*/React.createElement("td", null, this.props.employee.title), /*#__PURE__*/React.createElement("td", null, this.props.employee.department), /*#__PURE__*/React.createElement("td", null, this.props.employee.employeeType), /*#__PURE__*/React.createElement("td", null, this.props.employee.currentStatus ? "Working" : "Retired"));
  }
}
class EmployeeTable extends React.Component {
  render() {
    const rows = this.props.employees.map(emp => /*#__PURE__*/React.createElement(RowEmployee, {
      key: emp.firstName + emp.lastName,
      employee: emp
    }));
    return /*#__PURE__*/React.createElement("table", {
      className: "employee-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "First Name"), /*#__PURE__*/React.createElement("th", null, "Last Name"), /*#__PURE__*/React.createElement("th", null, "Age"), /*#__PURE__*/React.createElement("th", null, "Date Of Joining"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Department"), /*#__PURE__*/React.createElement("th", null, "Employee Type"), /*#__PURE__*/React.createElement("th", null, "Current Status"))), /*#__PURE__*/React.createElement("tbody", null, rows));
  }
}
class EmployeeCreate extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.addEmployee;
    const age = parseInt(form.age.value);
    const title = form.title.value;
    const department = form.department.value;
    const employeeType = form.employeeType.value;
    const allowedTitles = ["Employee", "Manager", "Director", "VP"];
    const allowedDepartments = ["IT", "Marketing", "HR", "Engineering"];
    const allowedEmployeeTypes = ["FullTime", "PartTime", "Contract", "Seasonal"];
    if (age < 20 || age > 70) {
      alert("Age must be between 20 and 70.");
      return;
    }
    if (!allowedTitles.includes(title)) {
      alert("Title must be one of Employee, Manager, Director, VP.");
      return;
    }
    if (!allowedDepartments.includes(department)) {
      alert("Department must be one of IT, Marketing, HR, Engineering.");
      return;
    }
    if (!allowedEmployeeTypes.includes(employeeType)) {
      alert("Employee Type must be one of FullTime, PartTime, Contract, Seasonal.");
      return;
    }
    const employee = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      age,
      dateOfJoining: form.dateOfJoining.value,
      title,
      department,
      employeeType,
      currentStatus: true
    };
    const mutation = `
      mutation {
        createEmployee(
          firstName: "${employee.firstName}",
          lastName: "${employee.lastName}",
          age: ${employee.age},
          dateOfJoining: "${employee.dateOfJoining}",
          title: "${employee.title}",
          department: "${employee.department}",
          employeeType: "${employee.employeeType}",
          currentStatus: ${employee.currentStatus}
        ) {
          firstName
          lastName
          age
          dateOfJoining
          title
          department
          employeeType
          currentStatus
        }
      }
    `;
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: mutation
      })
    });
    const result = await response.json();
    this.props.createEmployee(result.data.createEmployee);
    form.reset();
  }
  render() {
    return /*#__PURE__*/React.createElement("form", {
      name: "addEmployee",
      onSubmit: this.handleSubmit,
      className: "employee-form"
    }, /*#__PURE__*/React.createElement("input", {
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      required: true
    }), /*#__PURE__*/React.createElement("input", {
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      required: true
    }), /*#__PURE__*/React.createElement("input", {
      name: "age",
      type: "number",
      placeholder: "Age",
      required: true
    }), /*#__PURE__*/React.createElement("input", {
      name: "dateOfJoining",
      type: "date",
      placeholder: "Date Of Joining",
      required: true
    }), /*#__PURE__*/React.createElement("select", {
      name: "title",
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select Title"), /*#__PURE__*/React.createElement("option", {
      value: "Employee"
    }, "Employee"), /*#__PURE__*/React.createElement("option", {
      value: "Manager"
    }, "Manager"), /*#__PURE__*/React.createElement("option", {
      value: "Director"
    }, "Director"), /*#__PURE__*/React.createElement("option", {
      value: "VP"
    }, "VP")), /*#__PURE__*/React.createElement("select", {
      name: "department",
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select Department"), /*#__PURE__*/React.createElement("option", {
      value: "IT"
    }, "IT"), /*#__PURE__*/React.createElement("option", {
      value: "Marketing"
    }, "Marketing"), /*#__PURE__*/React.createElement("option", {
      value: "HR"
    }, "HR"), /*#__PURE__*/React.createElement("option", {
      value: "Engineering"
    }, "Engineering")), /*#__PURE__*/React.createElement("select", {
      name: "employeeType",
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select Employee Type"), /*#__PURE__*/React.createElement("option", {
      value: "FullTime"
    }, "FullTime"), /*#__PURE__*/React.createElement("option", {
      value: "PartTime"
    }, "PartTime"), /*#__PURE__*/React.createElement("option", {
      value: "Contract"
    }, "Contract"), /*#__PURE__*/React.createElement("option", {
      value: "Seasonal"
    }, "Seasonal")), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Add Employee"
    }));
  }
}
class EmployeeDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
    this.createEmployee = this.createEmployee.bind(this);
  }
  componentDidMount() {
    this.loadEmployees();
  }
  async loadEmployees() {
    const query = `query {
      employees {
        firstName
        lastName
        age
        dateOfJoining
        title
        department
        employeeType
        currentStatus
      }
    }`;
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    const result = await response.json();
    this.setState({
      employees: result.data.employees
    });
  }
  createEmployee(employee) {
    const newEmployees = this.state.employees.slice();
    newEmployees.push(employee);
    this.setState({
      employees: newEmployees
    });
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "employee-directory"
    }, /*#__PURE__*/React.createElement(EmployeeSearch, null), /*#__PURE__*/React.createElement(EmployeeTable, {
      employees: this.state.employees
    }), /*#__PURE__*/React.createElement(EmployeeCreate, {
      createEmployee: this.createEmployee
    }));
  }
}
console.log('Starting React application');
ReactDOM.render( /*#__PURE__*/React.createElement(EmployeeDirectory, null), document.getElementById('contents'));
console.log('React application initialized');