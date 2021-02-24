import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div>
                    <h3 className="ui segment header">
                    <i aria-hidden="true" className="users circular icon"></i>My Employee Management</h3>
                </div>
            </div>
        );
    }
}

export default Header