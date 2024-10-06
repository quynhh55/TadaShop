
import './App.css'
import Home from "./pages/Home"
import Product from './pages/Product/Product'
import ProductList from './pages/ProductList/ProductList'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Profile from './pages/Profile/Profile'
import Purchase from './components/Purchase/Purchase'
import User from './components/User/User'
import Profiler from './components/Profiler/Profiler'

import Order from './components/Order/Order'
import PendingOrder from './pages/PendingOrder/PendingOrder'
import { logout } from './redux/userRedux'
import { clearCart } from './redux/cartRedux'
import { TOKEN_KEY } from './requestMethod'
import { Layout, Logged, ProtectedRoute } from './Layout'
import ToShipOrder from './pages/ToShipOrder/ToShipOrder'
import CompletedOrder from './pages/CompletedOrder/CompletedOrder'
import CancelledOrder from './pages/CancelledOrder/CancelledOrder'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import ResetPassword from './pages/ResetPassword/ResetPassword'


function App() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch()
  const handleLogout = () => {
    console.log('123');
    dispatch(logout());
    dispatch(clearCart());
    localStorage.removeItem(TOKEN_KEY)
  }

  const LayoutUser = () => {
    return (
      <ProtectedRoute user={user}>
        <Layout handleLogout={handleLogout}>
          <div className="bass">
            <User handleLogout={handleLogout} />
            <Outlet />
          </div>
        </Layout>
      </ProtectedRoute>
    )
  }
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout handleLogout={handleLogout}>
        <Home />
      </Layout>
    },
    {
      path: "/login",
      element: <Logged><Login /></Logged>
    },
    {
      path:"/forgot-password",
      element: <Logged><ForgotPassword/></Logged>
    },
    {
      path:"/reset-password/:id",
      element: <Logged><ResetPassword/></Logged>
    },
    {
      path: "/register",
      element: <Logged><Register /></Logged>
    },
    {
      path: "/products/:category",
      element: <Layout handleLogout={handleLogout}>
        <ProductList />
      </Layout>
    },
    {
      path: "/product/:id",
      element: <Layout handleLogout={handleLogout}>
        <Product />
      </Layout>
    },
    {
      path: "/order",
      element: (
        <ProtectedRoute user={user}>
          <Layout handleLogout={handleLogout}>
            <Order />
          </Layout>
        </ProtectedRoute>
      )
    },
    {
      path: "/cart",
      element: (
        <ProtectedRoute user={user}>
          <Layout handleLogout={handleLogout}>
            <Cart />
          </Layout>
        </ProtectedRoute>)
    },
    {
      path: "/user",
      element: <LayoutUser />,
      children: [
        {
          path: "profile",
          element: <Profiler />,
        },
        { 
          path: "purchase",
          element: <Purchase />,
          children: [
            {
              path: "",
              element: <PendingOrder />
            },
            {
              path: "toship",
              element: <ToShipOrder />
            },
            {
              path: "complete",
              element: <CompletedOrder />
            },
            {
              path: "cancel",
              element: <CancelledOrder />
            }
          ]
        }

      ]
    },
    {
      path: "/user/purchase",
      //element:
    }
  ])
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route index path="/" element={<Home />} />
    //     <Route path="/products/:category" element={<ProductList />} />
    //     <Route path="/product/:id" element={<Product />} />
    //     <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
    //     <Route path="/order" element={<ProtectedRoute><Order /></ProtectedRoute>} />

    //     <Route path='/user/profile' element={<LayoutUser><Profiler/></LayoutUser>} />
    //     <Route path='/user/purchase' element={<LayoutUser><Purchase/><PurchaseProduct/></LayoutUser>} />

    //     {/* <Route path="/user" element={<User />}>
    //       <Route path="profile" element={<LayoutUser><Profiler/></LayoutUser>} />
    //       <Route path="purchase" element={<Purchase />} />
    //     </Route> */}
    //     <Route
    //       path="/login"
    //       element={<Logged><Login /></Logged>}
    //     //element={<Login/>}
    //     />
    //     <Route
    //       path="/register"
    //       element={<Logged><Register /></Logged>}
    //     />
    //   </Routes>
    // </BrowserRouter>
    // //<Profile/>

    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
