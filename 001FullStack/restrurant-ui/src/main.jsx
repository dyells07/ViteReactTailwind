import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import CustomerIndex from './components/Index/CustomerIndex.jsx'
import AddCustomer from './components/Customer/AddCustomer.jsx'
import User from './components/User/User.jsx'
import EditCustomer from './components/Customer/EditCustomer'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<CustomerIndex />} />
      <Route path='/addcustomer' element={<AddCustomer />} />
      <Route path='user/:userid' element={<User />} />
      <Route path="/editcustomer/:customerId" element={<EditCustomer />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
