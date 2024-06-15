import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import MainLayout from './layout/main.layout';
import RootLayout from './layout/root.layout';
import HomePage from './pages/home/home.page';
import SignInPage from './pages/sign-in/sign-in.page';
import SignUpPage from './pages/sign-up/sign-up.page';
import JobPage from './pages/job/job.page';
import AdminMainLayout from './layout/admin.layout';
import AdminJobPostsPage from './pages/admin/jobPosts/admin-job-posts.page';
import JobCreatePage from './pages/admin/createJob/job-create.page';
import AdminJobPage from './pages/admin/job/admin-job.page';
import AdminJobApplicationPage from './pages/admin/jobApplication/admin-job-application.page';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your publishable key
const PUBLISHABLE_KEY = "pk_test_c2F2aW5nLWNob3ctODcuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            path: 'home',
            element: <HomePage />,
          },
          {
            path: 'job/:id',
            element: <JobPage />,
          },
        ],
      },
      {
        path: 'admin',
        element: <AdminMainLayout />,
        children: [
          {
            path: 'jobs',
            element: <AdminJobPostsPage />,
          },
          {
            path: 'job/create',
            element: <JobCreatePage />,
          },
          {
            path: 'job/:id',
            element: <AdminJobPage />,
          },
          {
            path: 'job/:id/application/:applicationId',
            element: <AdminJobApplicationPage />,
          },
        ],
      },
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
