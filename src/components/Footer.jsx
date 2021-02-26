import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
            <footer className="footer">
                <span className="text-muted">All rights reserved.</span>
            </footer>
            </div>
        )
    }
}

export default Footer;