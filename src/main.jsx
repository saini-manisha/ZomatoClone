//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Body from "./components/Body.jsx"
import Contact from "./components/Contact.jsx"
import About from "./components/About.jsx"
import ErrorComponent from './components/ErrorComponent.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RestroMenu from './components/RestroMenu.jsx'
import Grocery from './components/Grocery.jsx'
import { Suspense } from 'react'
import Cart from './components/Cart.jsx'

const root=ReactDOM.createRoot(document.getElementById('root'));

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Body></Body>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery></Grocery></Suspense> 
      },
      {
        path:"/restaurants/:resId",
        element:<RestroMenu></RestroMenu>

      },
      {
        path:"/cart",
        element:<Cart></Cart>

      }
    ],
    errorElement:<ErrorComponent></ErrorComponent>
  },
]);



root.render(
<RouterProvider router={appRouter}></RouterProvider>
)
