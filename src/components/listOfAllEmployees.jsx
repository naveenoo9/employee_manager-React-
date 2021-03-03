import React, { PureComponent } from 'react';
import EmployeeService from '../services/EmployeeService';
import EmployeeTable from "./EmployeeTable";

class ListOfAllEmployees extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            employees : []
        }
        this.saveEmployee = this.saveEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    saveEmployee = () =>    {
        this.props.history.push('/add-employee');
    }
    updateEmployee = (empId) =>  {
        this.props.history.push(`/update-employee/${empId}`);
    }
    deleteEmployee = (empId) =>  {
        EmployeeService.deletEmployeeById(empId).then(
            response => {
                this.setState(
                    {
                        employees: this.state.employees.filter(
                            employee => employee.empId !== empId
                        )
                    }
                )
            }
        )
    }
    componentDidMount() {
        EmployeeService.getlistOfAllEmployees().then(
            response => {
                let employees = response.data;
                let sortedEmployees = employees.sort(function(preEmployee, nextEmployee)  {
                    return preEmployee.empId - nextEmployee.empId;
                });
                this.setState({ employees: sortedEmployees});
            }
        );
        
    }
    render() {
        return (
            <div className="ui segment ">
                <div>
                    <button className="ui icon left labeled button" onClick={this.saveEmployee}>
                        <i aria-hidden="true" className="add user icon"></i>Add new Employee</button>
                </div>
                <table className="ui single line table">
                    <thead className="">
                        <tr className="">
                            <th className="text-center">Employee ID</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">E-mail address</th>
                            <th className="text-center"></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            this.state.employees.map(
                                employee => 
                                    <tr key ={employee.empId} className="">
                                        <td className="text-center">{employee.empId}</td>
                                        <td className="text-center">{employee.firstName +', '+employee.lastName}</td>
                                        <td className="text-center">{employee.email}</td>
                                        <td className="text-center">
                                            <div className="ui buttons">
                                                <button className="ui blue button text-center"
                                                    onClick={() => this.updateEmployee(employee.empId)}>Update</button>
                                                <div className="or"></div>
                                                <button className="ui red button text-center"
                                                    onClick={() => this.deleteEmployee(employee.empId)}>Delete</button>
                                            </div></td>
                                    </tr>
                                
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListOfAllEmployees;
