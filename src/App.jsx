import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { CustomComponent } from './Components/CustomComponent'
// import HeaderComponent from './Components/HeaderComponent'
// import { FooterComponent } from './Components/FooterComponent'
// import { MapDemo } from './Components/MapDemo'
// import { MapDemo2 } from './Components/MapDemo2'
// import { MapDemo3 } from './Components/MapDemo3'
// import { MapDemo4 } from './Components/MapDemo4'
// import { MapDemo5 } from './Components/MapDemo5'
// import { MapDemo6 } from './Components/MapDemo6'
// import { MapDemo7 } from './Components/MapDemo7'
// import { MapDemo8 } from './Components/MapDemo8'
// import { Routes } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// import { HotstarHome } from './Components/Hotstar/HotstarHome'
// import { HostarShows } from './Components/Hotstar/HostarShows'
// import { Navbar } from './Components/Navbar'
// import { HomeComponent } from './Components/HomeComponent'
// import { ErrorComponent } from './Components/ErrorComponent'
// import { PlayContent } from './Components/Hotstar/PlayContent'
// import { HostarMovies } from './Components/Hotstar/HostarMovies'
// import { Books } from './Components/Books'
// import { BookDetails } from './Components/BookDetails'
// import { StudyBook } from './Components/studyBook'
// import { UseStateDemo } from './Components/UseStateDemo'
// import { UseStateDemo2 } from './Components/USeStateDemo2'
// import { UseStateDemo3 } from './Components/UseStateDemo3'
// import { ProductList } from './Components/ProductList'
// import { Products } from './Components/Products'
// import { DepedentDropdown } from './Components/input/DependentDropDown'
// import { FormDemo } from './Components/Form/FormDemo'
// import { FormDemo2 } from './Components/Form/FormDemo2'
// import { FormDemo3 } from './Components/Form/FormDemo3'
// import { FormDemo4 } from './Components/Form/FormDemo4'
// import { FormDemo5 } from './Components/Form/FormDemo5'
// import { EventForm } from './Components/Form/EventForm'
// import { FormDemo6 } from './Components/Form/FormDemo6'
// import OrderForm from './Components/Form/OrderForm'
// import { ApiDemo1 } from './Components/Api/ApiDemo1'
// import { OmdbApiDemo } from './Components/Api/OMDbApi'
// import { ApiDemo2 } from './Components/Api/ApiDemo2'
// import { ApiDemo3 } from './Components/Api/ApiDemo3'
// // import { ApiDemo4 } from './Components/Api/ApiDemo4'
// import { UpdateUser } from './Components/Api/UpdateUser'
// import Memory from './Components/Api/Memory'
// import { Books2 } from './Components/Books/Books2'
import AppRoutes from './Router/AppRoutes';
import { ThemeContext } from "./Components/ThemeContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

    const [theme, settheme] = useState("light")

  return (
    <>
      <div style={{backgroundColor:theme =="light"?"white":"black",color:theme=="light"?"black":"white"}}>
          <ThemeContext.Provider value={{theme,settheme}}>
        {/* <Navbar></Navbar> */}

            {/* <Routes>
                  <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
                  <Route path='/hotstarhomes' element={<HotstarHome></HotstarHome>}></Route>
                  <Route path='/hotstarshows' element={<HostarShows></HostarShows>}></Route>
                  <Route path='/hotstarmovies' element={<HostarMovies></HostarMovies>}></Route>
                  {/* <Route path='/watch/:id' element={<PlayContent></PlayContent>}></Route> */}
                   {/* <Route path='/watch/:id' element = {<PlayContent/>}></Route>
                  
                   <Route path='/books' element={<Books></Books>}></Route>
                  <Route path='/bookdetails/' element={<BookDetails></BookDetails>}></Route>
                  <Route path='/study/:id' element={<StudyBook></StudyBook>}></Route>
                  
                  <Route path='/usestatedemo' element = {<UseStateDemo/>}></Route>
                  <Route path='/usestatedemo2' element = {<UseStateDemo2/>}></Route>
                  <Route path='/usestatedemo3' element = {<UseStateDemo3/>}></Route>
                  <Route path='/products' element={<Products></Products>}></Route>
                  <Route path='/dropdown' element={<DepedentDropdown></DepedentDropdown>}></Route>
                  <Route path='/formdemo' element={<FormDemo></FormDemo>}></Route>
                  <Route path='/formdemo2' element={<FormDemo2></FormDemo2>}></Route>
                  <Route path='/formdemo3' element={<FormDemo3></FormDemo3>}></Route>
                  <Route path='/formdemo4' element={<FormDemo4></FormDemo4>}></Route>
                  <Route path='/formdemo5' element={<FormDemo5></FormDemo5>}></Route>
                  <Route path='/eventform' element={<EventForm></EventForm>}></Route>
                  <Route path='/formdemo6' element={<FormDemo6></FormDemo6>}></Route>
                  <Route path='orderform' element={<OrderForm></OrderForm>}></Route>
                  <Route path='/apidemo1' element={<ApiDemo1></ApiDemo1>}></Route>
                  <Route path='/omdbapi' element={<OmdbApiDemo></OmdbApiDemo>}></Route>
                  <Route path='/apidemo2' element={<ApiDemo2></ApiDemo2>}></Route>
                  <Route path='/apidemo3' element={<ApiDemo3></ApiDemo3>}></Route>
                  {/* <Route path='/apidemo4' element={<ApiDemo4></ApiDemo4>}></Route> */}
                  {/* <Route path="/updateuser/:id" element={<UpdateUser></UpdateUser>}></Route>
                  <Route path="/memory" element={<Memory></Memory>}></Route>
                  <Route path="/books" element={<Books2></Books2>}></Route>

                  <Route path='/*' element={<ErrorComponent></ErrorComponent>}></Route>
              </Routes> */}
          <AppRoutes></AppRoutes>
          <ToastContainer />
      </ThemeContext.Provider>      

      </div>
      
    </>
  )
}

export default App
