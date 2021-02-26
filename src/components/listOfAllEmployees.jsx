import React, { PureComponent } from 'react';
import EmployeeService from '../services/EmployeeService';
import EmployeeTable from "./EmployeeTable";

class ListOfAllEmployees extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            employees : []
        }
    }
    saveEmployee = () =>    {
        this.props.history.push('/add-employee');
    }
    updateEmployee = () =>  {
        this.props.history.push('/update-employee');
    }
    deleteEmployee = () =>  {
        this.props.history.push('/delete-employee');
    }
    componentDidMount() {
        EmployeeService.getlistOfAllEmployees().then(
            response => {
                this.setState({ employees: response.data});
            }
        );
    }
    render() {
        return (
            <div className="ui segment">
                <div>
                    <button className="ui icon left labeled button" onClick={this.saveEmployee}>
                        <i aria-hidden="true" className="add icon"></i>Add new Employee</button>
                </div>
                <table className="ui single line table">
                    <thead className="">
                        <tr className="">
                            <th className="">Employee ID</th>
                            <th className="">Name</th>
                            <th className="">E-mail address</th>
                            <th className=""></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            this.state.employees.map(
                                employee => 
                                    <tr key ={employee.empId} className="">
                                        <td className="">{employee.empId}</td>
                                        <td className="">{employee.firstName +', '+employee.lastName}</td>
                                        <td className="">{employee.email}</td>
                                        <td className="">
                                            <div className="ui buttons">
                                                <button className="ui button"
                                                    onClick={this.updateEmployee}>Update</button>
                                                <div className="or"></div>
                                                <button className="ui positive button"
                                                    onClick={this.deleteEmployee}>Delete</button>
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