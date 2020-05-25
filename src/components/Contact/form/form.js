import React,{} from 'react'
import classes from './form.module.css'

const contact=()=>{  
    

    return(
        <div className={classes.formBox}>
        <div className={classes.formHeader}>
            <h4 className={classes.formHeaderText}>MAKE AN INQUIRY</h4>
        </div>
      <form
        name="contact"
        method="post"
        className={classes.formContainer}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input hidden name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="company"></label>
        <input
          className={classes.input}
          type="text"
          id="company"
          name="company"
          placeholder="Company Name"
        />
         <label htmlFor="name"></label>
        <input
          className={classes.input}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <label htmlFor="email"></label>
        <input
          className={classes.input}
          type="email"
          id="email"
          name="email"
          placeholder="name@yahoo.com"
        />
       
        <label htmlFor="textarea"></label>
        <textarea
          className={classes.textarea}
          placeholder="Describe your order..."
          name="textarea"
          id="textarea"
          cols="30"
          rows="2"
        ></textarea>
        <div className={classes.buttonContainer}>
          <button className={classes.button}>
            Send Mail
          </button>
        </div>
      </form>
    </div>
        
)}

export default contact