import React from 'react';
import { Link } from 'react-router-dom';




class SuccesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            submitted: false
        };

        
    }

    render() {
        const { username, password, first_name, last_name, submitted } = this.state;
        return (
            <div>sukces</div>
        );
    }
}

export { SuccesPage }; 