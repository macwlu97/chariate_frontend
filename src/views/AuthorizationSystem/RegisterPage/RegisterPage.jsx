import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';
import Register from '../../../_components/Register';




class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password, first_name, last_name} = this.state;
        const { dispatch } = this.props;
        if (email && password && first_name && last_name) {
            dispatch(userActions.register(email, password, first_name, last_name));
        }
    }

    render() {
        const { registering  } = this.props;
        // const { loggingIn } = this.props;
        const { email, password, first_name, last_name, submitted } = this.state;
        return (
            <Register onSubmit={this.handleSubmit} onChange={this.handleChange} email={email} password={password} first_name={first_name} last_name={last_name} submitted={submitted} registering={registering}/>
        );
    }
}

function mapStateToProps(state) {
    const { registering  } = state.registration;
    return {
        registering 
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage }; 