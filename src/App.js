import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import all components
import UserName from './components/UserName';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Main from './components/Main';



//auth middleware
import { AuthorizeUser } from './middleware/auth';
import { ProtectRoute } from './middleware/auth';

// root routes
const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>
    },
    {
        path : '/Username',
        element : <UserName></UserName>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element :<ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element :<AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '/*',
        element : <PageNotFound></PageNotFound>
    },
    
])


export default function App() {
    return (
        <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
    )
}