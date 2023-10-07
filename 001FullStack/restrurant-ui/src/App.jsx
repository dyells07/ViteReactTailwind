import { useEffect, useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { BaseUrl } from '../utils/ApiRoutes'

function App() {

  useEffect(()=>{
    getCustomers();
  }, []);

  const getCustomers= async () =>{
    try{
      const response = await fetch(`${BaseUrl}Customer/GetCustomers`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
    
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      const customers = await response.json();
      console.log(response);

    }catch(e){
       console.log(e.request,     '                    requ eerror');
       console.log(e.response);
    }
   
  };
  
  
  return (
    <>
     <div>restro app </div> 

     <div>
       <table>
        <tr>
          <td>

          </td>
        </tr>
       </table>
     </div>
    </>
  )
}

export default App
