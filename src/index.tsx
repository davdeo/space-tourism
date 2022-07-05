import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/styles';

import { View } from './enums';
import { App } from './app';
import { Crew } from './feature/crew';
import { Destination } from './feature/destination';
import { Technology } from './feature/technology';
import { Home } from './feature/home';
import { FourZeroFour } from './feature/four-zero-four';

const rootElement = document.querySelector('#root');
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path={View.APP} element={<App />}>
                <Route path={View.FOUR_ZERO_FOUR} element={<FourZeroFour />} />
                <Route index element={<Home />} />
                <Route path={View.CREW} element={<Crew />} />
                <Route path={View.DESTINATION} element={<Destination />} />
                <Route path={View.TECHNOLOGY} element={<Technology />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);
