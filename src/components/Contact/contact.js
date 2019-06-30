import React,{useState} from 'react'
import classes from './contact.module.css'
import Input from './textfield'

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

    return(

    <section id='contact' className={classes.contact}>
        <div className={classes.contact__header}>
        <h4>We are alway at your service</h4>
        <p>Got a question? Got an order? We are here to help you</p>
        </div>
        <div className={classes.contact__content}>
        <div className={classes.contact__content__details}>
            <h4>Contact Info</h4>
            <p>No 5 Tukur road</p>
            <p>imex@yahoo.com</p>
            <p>15140221630</p>
        </div>

        <div className={classes.contact__content__form}>
        <form className={classes.formContainer} action="">
       <Input 
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
        touched={form.name.touched}
        />

        <textarea className={classes.textarea} name="textarea" id="" cols="30" rows="2"></textarea>
        <button></button>
        </form>
        </div>
       
        </div>
    </section>
)}

export default contact