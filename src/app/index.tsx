import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.css';
import { Navigation } from '../common/components';

export const App: React.FunctionComponent = () => {
    return (
        <div className="app">
            <Navigation />
            <Outlet />
        </div>
    );
};
