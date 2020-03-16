import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { searchActions, cityActions } from '../../_actions';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import queryString from 'query-string'
import ResultCard from '../../_components/ResultCard';
import Grid from '@material-ui/core/Grid';

class SearchPage extends React.Component {
    constructor(props){
        super(props);
        
        // console.log(values.filter) // "top"
        // console.log(values.origin) // "im"

        // this.state = {
        //   cityId: this.props.match.params.cityId,
        //   search_text: this.props.match.params.text,
        //   type: this.props.match.params.type,
        //   _sort: this.props.match.params._sort
        // }


        // this.props.setter(this.state.cityId, this.state.search_text, this.state.type, this.state._sort);
        // console.log(searchValues)

        // this.props.setter(values.city, values.text, values.type, values._sort);
        
        // this.props.set_Counter()
      }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)

        const searchValues = {
            city: values.city,
            text: values.text,
            type: values.type,
            sort: values.sort,
          };

        this.temporaryValues = searchValues

        // console.log(searchValues.city)
        this.props.setter(searchValues.city, searchValues.text, searchValues.type, searchValues.sort);

        // this.props.dispatch(searchActions.getResult(this.state.cityId, this.state.search_text, this.state.type, this.state._sort));
        this.props.dispatch(searchActions.getResult(searchValues.city, searchValues.text, searchValues.type, searchValues.sort));
        // this.props.dispatch(cityActions.getAll());
    }

    componentDidUpdate(prevProps) {

        if (this.props.location.search !== prevProps.location.search){
            const values = queryString.parse(this.props.location.search)
        
            const searchValues = {
                city: values.city,
                text: values.text,
                type: values.type,
                sort: values.sort,
              };

            this.props.setter(searchValues.city, searchValues.text, searchValues.type, searchValues.sort);
            this.props.dispatch(searchActions.getResult(searchValues.city, searchValues.text, searchValues.type, searchValues.sort));
        }
        // // console.log(searchValues.city)
        // this.props.setter(searchValues.city, searchValues.text, searchValues.type, searchValues.sort);

        // // this.props.dispatch(searchActions.getResult(this.state.cityId, this.state.search_text, this.state.type, this.state._sort));
        // this.props.dispatch(searchActions.getResult(searchValues.city, searchValues.text, searchValues.type, searchValues.sort));
        // // this.props.dispatch(cityActions.getAll());
      }

    render() {
        const { search } = this.props;
        this.props.set_Counter(search.items && search.items.count)
        
        return (
            <React.Fragment>
                {/* {search.items && search.items.count} */}
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
                            <ResultCard organization={org}/>

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