import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/userSide/Navbar'
import Home from './Components/userSide/Home/Home'
import ContactUs from './Components/userSide/Cantact/ContactUs'
import Footer from './Components/userSide/Footer'
import SignIn from './Components/Authentication/userSignIn'
import TopSearch from './Components/userSide/TopSearch'
import AdminLogin from './Components/Admin Side/AdminLogin'
import Dashboard from './Components/Admin Side/Dashboard/Dashboard'
import Signup from './Components/Authentication/Signup'
import Myprofile from './Components/userSide/Myprofile/Myprofile'
import FAQ from './Components/userSide/FAQ/Faq'
import { DataProvider } from './Components/userSide/DataContext' 
import AboutUs from './Components/userSide/AboutUs/AboutUs'
import Policies from './Components/userSide/Policies/Policies'
import Products from './Components/userSide/Products/Products'
import Privacy from './Components/userSide/Privacy/Privacy'
import History from './Components/userSide/History/History'
import WishList from './Components/userSide/WishList/Wishlist'
let App = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />

     
      <DataProvider>
        <BrowserRouter>
          <TopSearch></TopSearch>
          <Navbar></Navbar>
          <Routes>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/adminLogin' element={<AdminLogin></AdminLogin>}></Route>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
            <Route path='/signUp' element={<Signup></Signup>}></Route>
            <Route path='/signIn' element={<SignIn></SignIn>}></Route>
            <Route path='/userProfile' element={<Myprofile></Myprofile>}></Route>
            <Route path='/faq' element={<FAQ></FAQ>}></Route>
            <Route path='/about' element={<AboutUs></AboutUs>}></Route>
            <Route path='/policies' element={<Policies></Policies>}></Route>
            <Route path='/products' element={<Products></Products>}></Route>
            <Route path='/privacy' element={<Privacy></Privacy>}></Route>
            <Route path='/history' element={<History></History>}></Route>
            <Route path='/wishlist' element={<WishList></WishList>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </DataProvider>
    </>
  )
}

export default App;
