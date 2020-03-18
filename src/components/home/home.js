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
        <section className={classes.home}>
        {sideDrawer}
            <div className={classes.home__body__content}>
            <p className={classes.atf_text}>We make your purchase from China easier and safer.</p>
            <button className={classes.button}><a  href="#services">Explore</a></button>
            </div>   
        </section> 
        </>
    )
}

export default Home