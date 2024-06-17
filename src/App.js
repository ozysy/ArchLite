import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// импорт всех компонентов
import UserName from './components/UserName';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Main from './components/Main';

// auth middleware
import { AuthorizeUser, ProtectRoute } from './middleware/auth';

// root routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/username',
    element: <UserName />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/password',
    element: (
      <ProtectRoute>
        <Password />
      </ProtectRoute>
    )
  },
  {
    path: '/profile',
    element: (
      <AuthorizeUser>
        <Profile />
      </AuthorizeUser>
    )
  },
  {
    path: '/recovery',
    element: <Recovery />
  },
  {
    path: '/reset',
    element: <Reset />
  },
  {
    path: '/*',
    element: <PageNotFound />
  }
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router} basename="/ArchLite" />
    </main>
  );
}
