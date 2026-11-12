import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/userSide/Navbar'
import Home from './Components/userSide/Home'
import ContactUs from './Components/userSide/ContactUs'
import Footer from './Components/userSide/Footer'
import SignIn from './Components/Authentication/SignIn'
import TopSearch from './Components/userSide/TopSearch'
let App=()=>{


  return(
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
  
  
{/*Navbar end*/}
  {/*2nd Nav bar */}

<BrowserRouter>
<TopSearch></TopSearch>
<Navbar></Navbar>
<Routes>
 <Route path='/home' element={<Home></Home>}></Route>

<Route path='/contact' element={<ContactUs></ContactUs>}></Route>

<Route path='/signIn' element={<SignIn></SignIn>}></Route>
 </Routes>
<Footer></Footer>
</BrowserRouter>
  
 
 </>

  )
}
export default App;
