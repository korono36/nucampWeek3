// import react and reactdom
    import React from 'react';
    import ReactDOM from 'react-dom';
    import 'font-awesome/css/font-awesome.css';
    import 'bootstrap-social/bootstrap-social.css';
    import DirectoryComponent from './components/DirectoryComponents';
    import MainComponent from './components/MainComponents';
    import 'bootstrap/dist/css/bootstrap.min.css';

// then create the component
    class App extends React.Component{

        render(){
            return(
            <div className="App">
                <MainComponent />
                
                
            </div> 
                // use your component here
                 
            );
        }
    }
// then append it to the dom element with id=root
    ReactDOM.render(<App/>, document.getElementById('root')); 



