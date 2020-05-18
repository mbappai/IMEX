import React from "react"
import Form from "../components/Contact/form/form"
import Address from "../components/Contact/address/address"
import classes from "../page-styles/contact-us.module.css"
import PageHeader from '../components/pageHeader/pageHeader'
import Layout from '../components/Layout/layout'

const Contact = () => {
  return (
    <Layout>
     <div>
       <PageHeader hideBackArrow={true} title='Contact Us'/>
      <main className={classes.body}>
        <Address />
        <Form />
      </main>
    </div>
    </Layout>
    
  )
}

export default Contact
