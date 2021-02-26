import React, { PureComponent } from 'react'
import EmployeeService from '../services/EmployeeService';

class SaveEmployee extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
                firstName:'',
                lastName:'',
                email:''
            }
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
    saveEmployee = (event)  =>  {
        event.preventDefault();
        let employee = {
            firstName   :   this.state.firstName,
            lastName    :   this.state.lastName,
            email       :   this.state.email
        };
        console.log('Employee : '+JSON.stringify(employee));
        EmployeeService.addEmployee(employee).then(
            response => {
               this.props.history.push('/employees');
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

export default SaveEmployee;