
 import React from 'react'

 import Footer from '../footer/footer'
 import Header from '../header/header'
 
 if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  
 const Layout=(props)=>{
 
 return(
     <div>
        <Header/>
    <main>
    {props.children}
    </main>
    <Footer/>
    </div>
 )       
 }

  

export default Layout
