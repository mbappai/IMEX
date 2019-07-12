import React,{useState, useRef} from 'react'
import classes from './contact.module.css'
import Input from './textfield'
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

     const changedHandler =(event)=>{
            const target=event.target.name
            const value= event.target.value
            const isValid= validate(target)
            setForm({...form,
                [target]:{
                ...form[target],
                value,
                isValid,
                touched:true
            }})
        }

         const ref = useRef()

        //  const validate=()=>{
        //      return ref.current.reportValidity()
        //  }

         const submitHandler=(event)=>{
            event.preventDefault()
            validate()
         }

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
        <form ref={ref} className={classes.formContainer} onSubmit={submitHandler}>

        <input className={classes.input} type="text" required placeholder='name' minLength='3' />
        <input className={classes.input} type="email" required placeholder='email' pattern="/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i"  />
       {/* <Input 
       onChangedHandler={changedHandler}
        isValid={form.email.isValid}
        value={form.email.value}
        name='email'
        placeholder='Email'
        touched={form.email.touched}
        />

       <Input 
       onChangedHandler={changedHandler}
        isValid={form.name.isValid}
        value={form.name.value}
        name='name'
        placeholder='Name'
        touched={form.name.touched} */}


        <textarea className={classes.textarea} placeholder='message...' name="textarea" id="" cols="30" rows="2"></textarea>
        <div className={classes.formContainer__buttonContainer}>
        <button className={classes.formContainer__button}> Send Mail </button>
        </div>
        </form>
        </div>
            </>
        }
        
        />
    // <section id='contact' className={classes.contact}>
    //     <div className={classes.contact__header}>
    //     <h4>We are alway at your service</h4>
    //     <p>Got a question? Got an order? We are here to help you</p>
    //     </div>
    //     <div className={classes.contact__content}>
    //     <div className={classes.contact__content__details}>
    //         <h4>Contact Info</h4>
    //         <p>No 5 Tukur road</p>
    //         <p>imex@yahoo.com</p>
    //         <p>15140221630</p>
    //     </div>

    //     <div className={classes.contact__content__form}>
    //     <form className={classes.formContainer} action="">
    //    <Input 
    //    onChangedHandler={changedHandler}
    //     isValid={form.email.isValid}
    //     value={form.email.value}
    //     name='email'
    //     placeholder='Email'
    //     touched={form.email.touched}
    //     />

    //    <Input 
    //    onChangedHandler={changedHandler}
    //     isValid={form.name.isValid}
    //     value={form.name.value}
    //     name='name'
    //     placeholder='Name'
    //     touched={form.name.touched}
    //     />

    //     <textarea className={classes.textarea} name="textarea" id="" cols="30" rows="2"></textarea>
    //     <button></button>
    //     </form>
    //     </div>
       
    //     </div>
    // </section>
)}

export default contact