import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import { userActions, organizationActions } from '../../_actions';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import queryString from 'query-string'
import { collectionsActions } from '../../../_actions';
import ResultCardCollection from '../../../_components/ResultCardCollection';

class CollectionsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url: this.props.location.pathname,
        };
    }

    setUrl = (newUrl) => {
        this.setState(state => ({ url: newUrl, }));
        console.log(newUrl)
    };

    componentDidMount() {
        this.props.dispatch(collectionsActions.get_collection(this.state.url));
    };

    render() {
        const { user, collections } = this.props;

        let TitlePage;
        if(this.state.url === "/popularity-organizations"){
            TitlePage = "Popularne organizacje w tym tygodniu"
        } else if(this.state.url === "/favorites-organizations"){
            TitlePage = "Twoje ulubione organizacje"
        } else if(this.state.url === "/growing-popularity-organizations") {
            TitlePage = "Zyskujące na popularności"
        } else if(this.state.url === "/last-added-organizations") {
            TitlePage = "Odkryj w tym tygodniu"
        } else if(this.state.url === "/new-organizations"){
            TitlePage = "Radar premier"
        } else {
            TitlePage = "no-name"
        }

        return (
            
            <React.Fragment>
                <Grid Container>
                {/* {this.state.url} */}
                
                <Grid item md={12} align="center">
                <Typography variant="h3" component="h3">
                    {TitlePage}
                </Typography>
                <Box my={3}/>
                    {collections.loading && <em>Ładuje rezultaty...</em>}
                    {(collections.error || collections.items === "failed") && <span className="text-danger">Brak elementów kolekcji.</span>}
                    {collections.items && collections.items !== "failed" &&
                        <React.Fragment>
                            {collections.items.map((org, index) =>
                                <ResultCardCollection organization={org}/>
                            )}
                        </React.Fragment>
                    }
                    {/* { _count==0 && <b>(brak wyników)</b> } */}
                <Box my={3}/>
                    <Link to="/">POWRÓĆ</Link>
                </Grid>
                </Grid>
            
            </React.Fragment>


        );
    }
}

function mapStateToProps(state) {
    const { authentication, collections } = state;
    const { user } = authentication;
    return {
        user,
        collections
    };
}

const connectedCollectionsPage = connect(mapStateToProps)(CollectionsPage);
export { connectedCollectionsPage as CollectionsPage };