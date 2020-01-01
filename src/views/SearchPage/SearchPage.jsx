import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { searchActions, cityActions } from '../../_actions';
import Paper from '@material-ui/core/Paper';


class SearchPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          cityId: this.props.match.params.cityId,
          search_text: this.props.match.params.text,
          type: this.props.match.params.type,
          _sort: this.props.match.params._sort
        }

        this.props.setter(this.state.cityId, this.state.search_text, this.state.type, this.state._sort);
      }

    componentDidMount() {
        this.props.dispatch(searchActions.getResult(this.state.cityId, this.state.search_text, this.state.type, this.state._sort));
        // this.props.dispatch(cityActions.getAll());
    }

    render() {
        const { search } = this.props;
        
        return (
            <React.Fragment>
            
                {/* <Typography variant="h3" component="h3" align="center">
                    Wyszukiwarka
                </Typography> */}
                {/* {this.state._sort}
                {this.state.type} */}
                {search.loading && <em>Ładuje rezultaty wyszukiwania...</em>}
                {search.error && <span className="text-danger">ERROR: {search.error}</span>}
                {search.items &&
                    <React.Fragment>
                        {search.items.results.map((org, index) =>
                            <Paper style={{padding: 20, marginLeft:20, marginBottom: 20}}>
                                {org.name + ' ' + org.description}
                            </Paper>
                        )}
                    </React.Fragment>
                }
                {/* ------------
                <p>
                    <Link to="/">powróć</Link>
                </p> */}

                {/* {city.loading && <em>Ładuje rezultaty wyszukiwania...</em>}
                {city.error && <span className="text-danger">ERROR: {city.error}</span>}
                {city.items &&
                    <React.Fragment>
                        {city.items.results.map((org, index) =>
                            <Paper style={{padding: 20, marginLeft:20, marginBottom: 20}}>
                                {org.name}
                            </Paper>
                        )}
                    </React.Fragment>
                } */}
            </React.Fragment>


        );
    }
}

function mapStateToProps(state) {
    const { search, authentication } = state;
    const { user } = authentication;
    return {
        user,
        search,
    };
}

const connectedSearchPage = connect(mapStateToProps)(SearchPage);
export { connectedSearchPage as SearchPage };