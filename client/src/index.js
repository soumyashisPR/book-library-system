import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPageContainer from "./routes/landing/LandingPage";
import ReactDOM from 'react-dom';
import {store} from './store';
import {Provider} from "react-redux";
import AddBookPageContainer from "./routes/add/AddBookPage";
import './styles.scss';
import EditBookPageContainer from "./routes/edit/BookDetailsPage";
import Header from "./components/Header";

const App = () =>
    <div className={'app-container'}>
        <Provider store={store}>

            <Router>
                <Header/>
                <div className={'app-body-wrapper'}>
                    <div className={'app-body'}>
                        <Switch>
                            <Route path={'/edit-book'} component={EditBookPageContainer}/>
                            <Route path={'/add-new'} component={AddBookPageContainer}/>
                            <Route path={'/'} component={LandingPageContainer}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    </div>;

ReactDOM.render(<App/>, document.getElementById("root"));
