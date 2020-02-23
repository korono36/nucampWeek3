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
                <Media />
            )
        };
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
                main
            </div>
        );
    };
}


const Example = () => {
  return (
    <div>
      
      <Media>
        <Media className="ml-5 mb-4" href="#">
          <Media src="partner.image" alt="partner.name" />
        </Media>
        <Media body>
          <Media heading>
            Bootstrap Outfitters
          </Media>
            Bootstrap Outfitters supplies you with the gear you need at prices you can't beat.
        </Media>
      </Media>
     
      <Media className="ml-5 mb-4">
        <Media left middle href="#">
          <Media src="partner.image" alt="partner.name" />
        </Media>
        <Media body>
          <Media heading>
            Git Out Expeditions
          </Media>
            Join Git Out Expeditions to explore new horizons with a group of other adventurers.
        </Media>
      </Media>
     
      <Media className="ml-5 mb-4">
        <Media left bottom href="#">
          <Media src="partner.image" alt="partner.name" />
        </Media>
        <Media body>
          <Media heading>
            Mongo Fly Shop
          </Media>
            Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop.
        </Media>
      </Media>
      
      <Media className="ml-5 mb-4">
        <Media left bottom href="#">
          <Media src="partner.image" alt="partner.name" />
        </Media>
        <Media body>
          <Media heading>
            Node Outdoor Apparal
          </Media>
            From polar fleeces to swimsuits, hiking boots to waders, a visit to Node will be sure to get you covered.
        </Media>
      </Media>
    </div>
  );
};



export default Main;