import React, { PureComponent } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployee extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
                empId       :   this.props.match.params.empId,
                firstName   :   this.props.match.params.firstName,
                lastName    :   this.props.match.params.lastName,
                email       :   this.props.match.params.email
            }
            this.saveEmployee = this.saveEmployee.bind(this);
            this.onFirstNameChange = this.onFirstNameChange.bind(this);
            this.onLastNameChange = this.onLastNameChange.bind(this);
            this.onEmailChange = this.onEmailChange.bind(this);
            this.cancel = this.cancel.bind(this);
    }

    onFirstNameChange = (event) =>  {
        this.setState({ firstName:event.target.value});
    }
    onLastNameChange = (event)  =>  {
        this.setState({ lastName:event.target.value});
    }
    onEmailChange = (event)   =>  {
        this.setState({ email:event.target.value});
    }
    cancel = (event)    =>  {
        this.props.history.push('/');
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.empId).then(
            response => {
                let employee = response.data;
                this.setState({
                    firstName   :   employee.firstName,
                    lastName    :   employee.lastName,
                    email   :   employee.email
                });
            }
        )
    }
    saveEmployee = (event)  =>  {
        event.preventDefault();
        let employee = {
            firstName   :   this.state.firstName,
            lastName    :   this.state.lastName,
            email       :   this.state.email
        };
        console.log('Employee : '+JSON.stringify(employee));
        EmployeeService.updateEmployeeBiId(this.state.empId,employee).then(
            response => {
               this.props.history.push('/');
            }
        );
    } 
    render() {
        return (
            <div className="ui segment container">
                <form className="ui form">
                    <div className="">
                        <div className="field">
                            <div className="ui input">
                                <input type="text" placeholder="First name"
                                    value={this.state.firstName}
                                    onChange={this.onFirstNameChange}/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui input">
                                <input type="text" placeholder="Last name"
                                    value={this.state.lastName}
                                    onChange={this.onLastNameChange}/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui input">
                                <input type="text" placeholder="email"
                                    value={this.state.email}
                                    onChange={this.onEmailChange}/>
                            </div>
                        </div>
                        <div className="ui buttons">
                            <button className="ui blue button" onClick={this.saveEmployee}>Save</button>
                            <div className="or"></div>
                            <button className="ui red button" onClick={this.cancel}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default UpdateEmployee;