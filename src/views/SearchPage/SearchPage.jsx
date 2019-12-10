import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { searchActions } from '../../_actions';



class SearchPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          cityId: this.props.match.params.cityId,
          search_text: this.props.match.params.text
        }
      }

    componentDidMount() {
        this.props.dispatch(searchActions.getResult(this.state.cityId, this.state.search_text));
    }

    render() {
        const { search } = this.props;
        
        return (
            <React.Fragment>
            
                <Typography variant="h3" component="h3" align="center">
                    Wyszukiwarka
                </Typography>
                
                {search.loading && <em>Ładuje rezultaty wyszukiwania...</em>}
                {search.error && <span className="text-danger">ERROR: {search.error}</span>}
                {search.items &&
                    <ul>
                        {search.items.results.map((org, index) =>
                            <li key={org.id}>
                                {org.name + ' ' + org.description}
                            </li>
                        )}
                    </ul>
                }
                ------------
                <p>
                    <Link to="/">powróć</Link>
                </p>

            
            </React.Fragment>


        );
    }
}

function mapStateToProps(state) {
    const { search, authentication } = state;
    const { user } = authentication;
    return {
        user,
        search
    };
}

const connectedSearchPage = connect(mapStateToProps)(SearchPage);
export { connectedSearchPage as SearchPage };