import React from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ClassListPage from './pages/ClassListPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SigupPage';
import RegisterToFindTuTorPage from './pages/RegisterToFindTutorPage';
import RegisterToMakeTutorPage from './pages/RegisterToMakeTutorPage';
import TutorFeePage from './pages/TutorFeePage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path:"/find-tutor",
        exact: false,
        main: () => <RegisterToFindTuTorPage />
    },
    {
        path:"/make-tutor",
        exact: false,
        main: () => <RegisterToMakeTutorPage />
    },
    {
        path:"/class-list",
        exact: false,
        main: () => <ClassListPage />
    },
    {
        path:"/tutor-fee",
        exact: false,
        main: () => <TutorFeePage />
    },
    {
        path:"/login",
        exact: false,
        main: () => <LoginPage />
    },
    {
        path:"/signup",
        exact: false,
        main: () => <SignupPage />
    },
    {
        path:"",
        exact: false,
        main: () => <NotFoundPage />
    }
    
];

export default routes;