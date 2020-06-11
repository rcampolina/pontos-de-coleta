import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoints from './pages/CreatePoints';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoints} path="/create-points" />
        </BrowserRouter>
    );
};



export default Routes;