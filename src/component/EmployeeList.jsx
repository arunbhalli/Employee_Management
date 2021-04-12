import React, { Component } from "react";
import axios from "axios";

class EmployeeList extends Component {
  state = {
    employees: [],
  };
  componentDidMount(){
    this.getEmployee();
  }
  getEmployee= async () => {
    let employeeData = await axios.get('https://reqres.in/api/users')
    this.setState({employees: employeeData.data.data})
    debugger
  }
  render() {
    let employeeList = this.state.employees.map(employee => {
      return (
        <li key={employee.id} data-cy="employee-item">
          <p data-cy="full-name">
            {employee.first_name} {employee.last_name}
          </p>
        </li>
      );
    });
    return <ul data-cy="employee-list">{employeeList}</ul>;
  }
}
export default EmployeeList;
