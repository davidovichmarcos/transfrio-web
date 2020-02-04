import React from 'react';
import { useRoutes } from 'hookrouter';
import { NotFoundPage } from './notFoundPage';
import MainViewer from '../containers/mainViewer';
import Login from '../containers/login';
import DriversView from '../containers/driversView';
import TrucksView from '../containers/trucksView';

const routes = {
    '/': () => <MainViewer />,
    '/login': () => <Login />,
    '/drivers': () => <DriversView />,
    '/trucks': () => <TrucksView />
};

export const Router = () => {
    const routeResult = useRoutes(routes);
    return routeResult || <NotFoundPage />;
}