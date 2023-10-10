import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import CustomerIndex from './components/Index/CustomerIndex.jsx'
import AddCustomer from './components/Customer/AddCustomer.jsx'
import User from './components/User/User.jsx'
import EditCustomer from './components/Customer/EditCustomer'
import LandingIndex from './components/Index/LandingIndex'
import FoodItemIndex from './components/Index/FoodItemIndex'
import AddFoodItem from './components/FoodItem/AddFoodItem'
import EditFoodItem from './components/FoodItem/EditFoodItem'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<LandingIndex />} />
      <Route path='/customer' element={<CustomerIndex />} />
      <Route path='/foodItem' element={<FoodItemIndex />} />
      <Route path='/addfoodItem' element={<AddFoodItem />} />
      <Route path='/addcustomer' element={<AddCustomer />} />
      <Route path='/editfoodItem/:foodItemId' element={<EditFoodItem />} />
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
