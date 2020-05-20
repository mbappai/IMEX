import React ,{useState}from 'react'
// import Button from '../styledComp/button'
import classes from './home.module.css'
import Header from '../header/header'
import SideDrawer from '../sideDrawer/sideDrawer'


const Home=()=>{
    const [show, setShow]=useState(false)

    const showSideBar=()=>{
        setShow(!show)
    }
    const sideDrawer= show? <SideDrawer hideDrawer={showSideBar}/>: ''

    return(
        <>
        <Header showSideBar={showSideBar}/>
        <section id='home' className={classes.home}>
        {sideDrawer}
            <div className={classes.home__body__content}>
            <h1 className={classes.atf_text}>
                <span className={classes.atf_span}>Import</span>
                <span className={classes.atf_span}>From China</span>
                {/* <br/>  */}
                <span className={classes.atf_span}>The Secure Way</span> 
                </h1>
            </div>   
        </section> 
        </>
    )
}

export default Home