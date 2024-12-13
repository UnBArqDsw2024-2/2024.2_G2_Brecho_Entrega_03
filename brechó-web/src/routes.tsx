import { createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/__layouts/Login'
import { SignIn } from './pages/login/sign-in'
import { SignUp } from './pages/login/sign-up'
import { Home } from './pages/__layouts/Home'
import { HomePage } from './pages/Home/home'
import { ProductPage } from './pages/product/product-page'
//import { SignUpStore } from './pages/login/sign-up-store'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    children: [
      {
        path: '/',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp/>
      },
    ],
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path:'/product',
        element: <ProductPage/>
      }
    ],
  },
  
])
