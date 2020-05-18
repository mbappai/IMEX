import React from 'react'
import Slide from 'react-reveal/Slide'
import classes from './testimony.module.css'



const Testimony=({data})=>{

    const testimonies=data;

return(
    <section id='testimony' className={classes.testimonials}>
       {testimonies.map(({node})=>(
           <figure className={classes.testimony_card}>
              <blockquote className={classes.testimony_content}>{node.body.body}</blockquote>
              <footer className={classes.testimony_footer}>
       <cite className={classes.author}>{node.author}</cite>
       <cite className={classes.role}>{node.companyName}</cite>
                  </footer> 
           </figure>
       ))}
           
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