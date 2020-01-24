import React from 'react';
import {useRoutes} from 'hookrouter';
import {NotFoundPage} from './notFoundPage';
import MainViewer from '../containers/mainViewer';
import Login from '../containers/login';

const routes = {
    '/': () => <MainViewer />,
    '/login': () => <Login />,
};
	
export const Router = () => {
    const routeResult = useRoutes(routes);
    return routeResult || <NotFoundPage />;
}