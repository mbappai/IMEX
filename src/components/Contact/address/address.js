import React from 'react'
import classes from './address.module.css'
import InstaSvg from '../../sharedComp/instagram/instaSvg'
import LinkedIn from '../../sharedComp/linkedin/linkedin'
import Facebook from '../../sharedComp/facebook/facebooks'


const Address=()=>{
    return(
        <>
        <article className={classes.addressContainer}>
            <div className={classes.addressHeader}>
            <h4 className={classes.headerText}>OFFICE INFO</h4>
            <p>Drop us a line. We'd love to here from you.</p>
            </div>

            <div className={classes.contactInfo}>
                <p className={classes.phoneNo}>+2349086303580, +86-182-4002-1659</p>
                <p className={classes.address}>69 Magajin Rumfa Road, Nassarawa G.R.A, Kano Nigeria, KN 400001</p>
            </div>

            <div className={classes.socials}>
                <InstaSvg url="https://instagram.com/secure_imex_agency?igshid=13ygp3pa6x20t"/>
                {/* <LinkedIn url="https://www.instagram.com/p/BwxnXrCDOyg/?igshid=1q81467jgn7bh"/> */}
                {/* <Facebook url="https://www.instagram.com/p/BwxnXrCDOyg/?igshid=1q81467jgn7bh"/> */}
            </div>
            <div className={classes.contactEmail}>
                <h4 className={classes.headerText}>CONTACT INFO</h4>
                <p>Haven't found a price that fits your needs? Let us know</p>
                <p className={classes.email}>secureimex.agency@gmail.com</p>
            </div>
        </article>
        {/* <Footer/> */}
        </>
    )
}

export default Address