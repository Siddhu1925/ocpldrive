import React from 'react'
import Home from '../Components1/Home'
import Overview from '../Components1/Overview'
import TopNavbar from '../Components1/TopNavbar'
import Work from '../Components1/Work'
import Catalog from '../Components1/Catalog'
import Contact from '../Components1/Contact'
import Footer from '../Components1/Footer'



function Page() {
  return (
    <div>
      <TopNavbar/>
       <Home/>
       <Overview/>
       <Work/>
       <Catalog/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default Page