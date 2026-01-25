import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CustomComponent } from './Components/CustomComponent'
import HeaderComponent from './Components/HeaderComponent'
import { FooterComponent } from './Components/FooterComponent'
import { MapDemo } from './Components/MapDemo'
import { MapDemo2 } from './Components/MapDemo2'
import { MapDemo3 } from './Components/MapDemo3'
import { MapDemo4 } from './Components/MapDemo4'
import { MapDemo5 } from './Components/MapDemo5'
import { MapDemo6 } from './Components/MapDemo6'
import { MapDemo7 } from './Components/MapDemo7'
import { MapDemo8 } from './Components/MapDemo8'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { HotstarHome } from './Components/Hotstar/HotstarHome'
import { HostarShows } from './Components/Hotstar/HostarShows'
import { Navbar } from './Components/Navbar'
import { HomeComponent } from './Components/HomeComponent'
import { ErrorComponent } from './Components/ErrorComponent'
import { PlayContent } from './Components/Hotstar/PlayContent'
import { HostarMovies } from './Components/Hotstar/HostarMovies'
import { Books } from './Components/Books'
import { BookDetails } from './Components/BookDetails'
import { StudyBook } from './Components/studyBook'
import { UseStateDemo } from './Components/UseStateDemo'
import { UseStateDemo2 } from './Components/USeStateDemo2'
import { UseStateDemo3 } from './Components/UseStateDemo3'
import { ProductList } from './Components/ProductList'
import { Products } from './Components/Products'
import { DepedentDropdown } from './Components/input/DependentDropDown'
import { FormDemo } from './Components/Form/FormDemo'
import { FormDemo2 } from './Components/Form/FormDemo2'
import { FormDemo3 } from './Components/Form/FormDemo3'
import { FormDemo4 } from './Components/Form/FromDemo4'

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>

            <Routes>
                  <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
                  <Route path='/hotstarhomes' element={<HotstarHome></HotstarHome>}></Route>
                  <Route path='/hotstarshows' element={<HostarShows></HostarShows>}></Route>
                  <Route path='/hotstarmovies' element={<HostarMovies></HostarMovies>}></Route>
                  {/* <Route path='/watch/:id' element={<PlayContent></PlayContent>}></Route> */}
                   <Route path='/watch/:id' element = {<PlayContent/>}></Route>
                  
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
                  <Route path='/*' element={<ErrorComponent></ErrorComponent>}></Route>
              </Routes>
      </div>
    </>
  )
}

export default App
