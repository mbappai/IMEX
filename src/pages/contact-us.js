import React from "react"
import Form from "../components/Contact/form/form"
import Address from "../components/Contact/address/address"
import classes from "../page-styles/contact-us.module.css"

const Contact = () => {
  return (
    <div>
      <header className={classes.header}>
        <h2 className={classes.header_title}>Contact Us</h2>
        <p className={classes.header_subTitle}>
          We are always happy to here from our dedicated clients and any
          interested individual interested in patronizing the work that we do.
        </p>
      </header>
      <main className={classes.body}>
       <Address />
        <Form />
      </main>
    </div>
  )
}

export default Contact
