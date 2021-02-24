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

    componentDidMount() {
        EmployeeService.getlistOfAllEmployees().then(
            response => {
                this.setState({ employees: response.data});
                console.log(this.state.employees);
            }
        );
    }
    render() {
        return (
            <div className="ui segment">
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
                                                <button className="ui button">Update</button>
                                                <div className="or"></div>
                                                <button className="ui positive button">Delete</button>
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