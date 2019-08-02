import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Goals from '../components/Goals';
import About from '../components/About';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => {
    return (
        <div>
            <HashRouter>
                <Header />
                <Switch>
                    <Route path='/' component={Home} exact={true} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/goals' component={Goals} />
                    <Route path='/about' component={About} />
                    <Route path='/blogs' component={Blogs} />
                    <Route path='/contact' component={Contact} />
                    <Route component={NotFoundPage} />
                </Switch>
            </HashRouter>
        </div>
    );
};

export default AppRouter;