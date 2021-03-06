import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { searchActions, cityActions } from '../../_actions';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import queryString from 'query-string'
import ResultCard from '../../_components/ResultCard';
import Pagination from '../../_components/Pagination';
import Grid from '@material-ui/core/Grid';

class SearchPage extends React.Component {
    constructor(props){
        super(props);
    
    this.state = {
        pager: 1,
        };
    

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

    setPager = (num) => {
        this.setState(state => ({ pager: num, }));
        console.log(num)
    };

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        

        const searchValues = {
            city: values.city,
            text: values.text,
            type: values.type,
            sort: values.sort,
            page: this.pager
          };

        this.temporaryValues = searchValues
        
        // console.log(searchValues.city)
        this.props.setter(searchValues.city, searchValues.text, searchValues.type, searchValues.sort);

        // this.props.dispatch(searchActions.getResult(this.state.cityId, this.state.search_text, this.state.type, this.state._sort));
        this.props.dispatch(searchActions.getResult(searchValues.city, searchValues.text, searchValues.type, searchValues.sort, 1));
        // this.props.dispatch(cityActions.getAll());
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.pager !== this.state.pager) {
            const values = queryString.parse(this.props.location.search)
        
            const searchValues = {
                city: values.city,
                text: values.text,
                type: values.type,
                sort: values.sort,
                page: values.page
              };

            this.props.setter(searchValues.city, searchValues.text, searchValues.type, searchValues.sort);
            this.props.dispatch(searchActions.getResult(searchValues.city, searchValues.text, searchValues.type, searchValues.sort, this.state.pager));
            console.log('pager state has changed.')
          }

        if (this.props.location.search !== prevProps.location.search){
            const values = queryString.parse(this.props.location.search)
        
            const searchValues = {
                city: values.city,
                text: values.text,
                type: values.type,
                sort: values.sort,
                page: values.page
              };

            this.props.setter(searchValues.city, searchValues.text, searchValues.type, searchValues.sort);
            this.props.dispatch(searchActions.getResult(searchValues.city, searchValues.text, searchValues.type, searchValues.sort, 1));
            
            // console.log(this.pager)
        }
      }

    render() {
        const { search } = this.props;
        this.props.set_Counter(search.items && search.items.count)
        const _count = search.items && search.items.count
        
        return (
            <React.Fragment>
                {search.loading && <em>Ładuje rezultaty wyszukiwania...</em>}
                {search.error && <span className="text-danger">ERROR: {search.error}</span>}
                {search.items &&
                    <React.Fragment>
                        {search.items.results.map((org, index) =>
                            <ResultCard organization={org}/>

                        )}
                    </React.Fragment>
                }
                { _count==0 && <b>(brak wyników)</b> }
                <Pagination setterPage={this.setPager} counter={_count}/>
               
                
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