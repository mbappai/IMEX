import React from 'react'
import Slide from 'react-reveal/Slide'
import classes from './testimony.module.css'
import Carousel from './carousel/carousel'
// import Slider from './slider'
// import Arrow from './arrow'


const Testimony=()=>{

    
    // const nextSlide=()=>{
    //     const lastIndex= testimonies.length-1;
    //     const cIndex= currentIndex
    //     const shouldReset= currentIndex === lastIndex;
    //     const index= shouldReset? 0: cIndex+1;
    //     setIndex(index)
    // }

    // const previousSlide=()=>{
    //     const lastIndex= testimonies.length-1;
    //     const cIndex= currentIndex
    //     const shouldReset= currentIndex === 0;
    //     const index= shouldReset? lastIndex: cIndex-1;
    //     setIndex(index)
    // }

return(
    <section id='testimony' className={classes.testimony}>
        <div className={classes.testimony_header}><h2>What people are saying.</h2></div>
{/* <div className={classes.carousel}> */}
<Carousel >

    <Slide right>
    <div className={classes.slider}>
            <blockquote>Working with Secure imex was really a great decision. Their service was
        very fast and efficient. We got the best prices and goods were delivered on time`,
        company:'Flakes desserts Kano</blockquote>
        <p>Flakes desserts Kano</p>
            </div>
    </Slide>
    <Slide right>
    <div className={classes.slider}>
            <blockquote>What I enjoy most about working with Secure imex is their transparency and
        Security. I get to know the companies i am buying from, and I no longer have worries while waiting
        for my goods as they inspect and make sure the goods are up to my specifications.</blockquote>
        <p>S.M Umar</p>
            </div>
    </Slide>
    <Slide right>
    <div className={classes.slider}>
            <blockquote>Secure imex has saved me a lot of money, time and stress because I no longer have 
        to go through the stressful journey to China to buy goods.</blockquote>
        <p>Satoshi and Sons</p>
            </div>
    </Slide>
  </Carousel>
{/* </div> */}
    </section>
)    
}
    
  export default Testimony




//   <Arrow 
//   gliph='&#9664;'
//   clickFunction={previousSlide}
//   styles={classes.left}
//   />
//   <Slider testimony={testimonies[currentIndex]}/>
//   <Arrow 
//   gliph='&#9654;'
//   clickFunction={nextSlide}
//   styles={classes.right}
//   />