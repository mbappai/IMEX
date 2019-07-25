import React,{useState} from 'react'
import classes from './contact.module.css'
import Section from '../sharedComp/sections/sections'

const contact=()=>{  
    
    const [form,setForm]= useState(
        {
            email:{value:'',
        isValid:false,
        touched:false
      },
        name:{
            value:'',
         isValid:false,
         touched:false
        },
        textarea:{
            value: ''
        }
    })

    const validate= (target)=>{
         const value= form[target].value
        if(target==='email'){
            const emailValid= value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?true:false
            console.log(emailValid)
            return emailValid
        }else{
            const nameIsValid= value.trim()!== ''?true: false
            console.log(nameIsValid)
            return nameIsValid
        }
       
    }

    //  const changedHandler =(event)=>{
    //         const target=event.target.name
    //         const value= event.target.value
    //         const isValid= validate(target)
    //         setForm({...form,
    //             [target]:{
    //             ...form[target],
    //             value,
    //             isValid,
    //             touched:true
    //         }})
    //     }


    return(
        <Section
        sectionStyles={classes.contact}
        headerStyles={classes.contact__header}
        bodyStyles={classes.contact__content}
        headerNode={
            <>
            <h2>We are alway at your service</h2>
            <div className={classes.contact__header_paragraph}>
        <p>Got a question? Got an order? We are here to help you</p>
            </div>
            </>
        }
        bodyNode={
            <>
             <div className={classes.contact__content__details}>
            <h4>Contact Info</h4>
            <p>No 5 Tukur road</p>
            <p>imex@yahoo.com</p>
            <p>15140221630</p>
            <div className={classes.contact__content__details_socials}><a target='_blank' href="https://www.instagram.com">Instagram Logo</a></div>
        </div>

        <div className={classes.contact__content__form}>
        <form
         name='contact-form'
         method='post'
         className={classes.formContainer}
          data-netlify="true" 
          data-netlify-honeypot="bot-field">

        <input className={classes.input} type="text" name='name'   placeholder='name' />
        <input className={classes.input} type="email" name='email'   placeholder='name@name.com' />
      
        <textarea className={classes.textarea} placeholder='message...' name="textarea"  cols="30" rows="2"></textarea>
        <div className={classes.formContainer__buttonContainer}>
        <button className={classes.formContainer__button}>Send Mail</button>
        </div>
        </form>
        </div>
            </>
        }
        
        />
)}

export default contact