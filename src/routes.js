import React from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ClassListPage from './pages/ClassListPage';
import LoginPage from './pages/LoginPage';

const routes = [
    {
        path: '/',
        exact: true, 
        main: ({token}) => <HomePage token={token}/>
    },
    {
        path: '/login',
        exact: false, 
        main: () => <LoginPage />
    },
    {
        path: '/classes',
        exact: false, 
        main: ({token}) => <ClassListPage token={token}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;