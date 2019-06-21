import React from 'react'
import Button from '../styledComp/button'
import classes from './home.module.css'
import Header from '../header/header'

const Home=()=>{
    return(
        <section className={classes.home}>
            {/* <div className={classes.home__body}> */}

            <Header/>
            
            <div className={classes.home__body__content}>
            <p>We make your purchase in China easier and safer.</p>
            <Button>Explore</Button>
            </div>   
            
            {/* </div> */}
        </section>
    )
}

export default Home