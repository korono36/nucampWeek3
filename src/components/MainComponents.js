import React, { Component } from 'react';
import Directory from './DirectoryComponents';
import Contact from './ContactComponents';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponents';
import Footer from './FooterComponents';
import Home from './HomeComponents';
import { Switch, Route, Redirect} from 'react-router-dom';
import { CAMPSITES } from '../components/shared/campsites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
        };
    }

    render() {

        const HomePage = () => {
            return(
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Directory campsites={this.state.campsites} />
                    <Route exact path='contactus' component={Contact} />
                    <Redirect to='/home  '/>
                 </Switch>
                <Footer />
                
            </div>
        );
    };
}

export default Main;