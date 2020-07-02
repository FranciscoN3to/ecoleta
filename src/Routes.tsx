import { Route, BrowserRouter} from 'react-router-dom';
import React from 'react';

import Home from './pages/Home'
import CreatePointe from './pages/CreatePointe'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact /> 
            <Route component={CreatePointe} path="/create-point" /> 
        </BrowserRouter>
    )
}

export default Routes