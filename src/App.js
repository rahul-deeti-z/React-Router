import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import OrderSummary from './components/ordersummary';
import NoMatch from './components/nomatch';
import Products from './components/products';
import FeaturedProducts from './components/featuredproducts';
import NewProducts from './components/newproducts';
import Users from './components/users';
import UserDetails from './components/userdetails';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path='/products' element={<Products />} > 
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserDetails />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;


/***
 * Configuring Routes
 * Links
 * Active Links
 * Navigating Programatically
 * No match Route
 * Nested Routes
 * Index Route
 * Dynamic Routes
 * URL Params
 * Search Params
 * Relative Links
 * Lazy Loading (Not covering here)
 * Authentication and Protected Routes (Not covering here)
 ***/


/***
 * React router is smart enough to find most specific matching route
 * ====> Relative Links: 
 *  1. Relative Link is a Link that does not start with a '/' and will inherit 
 *     the closest route in which they are rendered.
 *  2. For Example see links in Products component
 */