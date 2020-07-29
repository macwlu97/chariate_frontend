import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { userActions, organizationActions } from '../../_actions';
import OutlinedCard from '../../_components/organization/my_org_card';
import SimpleTable from '../../_components/Table/SimpleTable';
import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';

class EventPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          _id: this.props.match.params._id,
        //   _type: this.props.match.params._type,
        }

        // this.props.dispatch(organizationActions.getEvent(this.state._id));
        // this.props.dispatch(organizationActions.getAllInformation(this.state._id));
      }
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
        this.props.dispatch(organizationActions.getOrganizationEvent(this.state._id))
    }

      
    render() {
        const { user, users, event } = this.props;
        return (
            
            <React.Fragment>
                <Typography variant="h3" component="h3" align="center" style={{ paddingBottom: 15}}>
                    Zarządzaj swoimi eventami organizacji
                </Typography>
                
               <SimpleTable event={event} mode={0}></SimpleTable>
                
               
                <p>
                    <Link to="/organization"><Button size="small">powróć</Button></Link>
                </p>

            
            </React.Fragment>


        );
    }
}

function mapStateToProps(state) {
    const { users, event, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
        event
    };
}

const connectedEventPage = connect(mapStateToProps)(EventPage);
export { connectedEventPage as EventPage };