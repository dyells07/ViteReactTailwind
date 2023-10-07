import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Dashboard from './admin/Dashboard.jsx';
import { Login } from './admin/Login.jsx';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import ManageCustomer from './admin/user/managecustomer.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
     
      <Route path='admin/managecustomer' element={<ManageCustomer />} />
      {/* <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
