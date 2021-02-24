import React, { PureComponent } from 'react';

class EmployeeTable extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            employee :  {
                empId       :   this.p,
                firstName   :   '',
                lastName    :   '',
                email       :   ''
            }
        }
    }

    render() {
        return (
            <div className="ui segment">
                <table class="ui single line table">
                    <thead class="">
                        <tr class="">
                            <th class="">Employee ID</th>
                            <th class="">Name</th>
                            <th class="">E-mail address</th>
                            <th class=""></th>
                        </tr>
                    </thead>
                    <tbody class="">
                        <tr class="">
                            <td class="">{this.state.employee.empId}</td>
                            <td class="">{this.state.employee.firstName + this.state.employee.lastName}</td>
                            <td class="">{this.state.employee.email}</td>
                            <td class="">
                                <div class="ui buttons">
	                                <button class="ui button">Update</button>
	                                <div class="or"></div>
	                                <button class="ui positive button">Delete</button>
                                </div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmployeeTable;