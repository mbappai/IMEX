import React from 'react'
import classes from './instaSvg.module.css'



const instaSvg=()=>(
<a className={classes.instaLink} aria-label="A link to our instagram page" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/p/BwxnXrCDOyg/?igshid=1q81467jgn7bh">
    <svg  className={classes.insta}   viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path  d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0"/>
    <path  d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0"/>
    <path  d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/>
    </svg>
    </a>
)

export default instaSvg