import React from "react"
import {graphql} from 'gatsby'

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Footer from "../components/footer/footer"
import classes from '../page-styles/terms.module.css'


const Bold = ({ children }) => <span className={classes.rtBold}>{children}</span>
const Text = ({ children }) => <p className={classes.rtText}>{children}</p>

const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }

const Terms = ({data}) =>{

    const richtext=documentToReactComponents(data.terms.json,options)
    console.log(richtext);
    
    return(<section>
    <header className={classes.header}>
            <div className={classes.headerContainer}>
            <h2 className={classes.header_title}>Terms and Condition</h2>
            </div>
      </header>

      <div className={classes.body}>
 {richtext}
      </div>
      <Footer/>
</section>
)}
export default Terms

export const query = graphql`
{
    terms:contentfulTermsTermsRichTextNode {
        id
        json
}
    
  }
`