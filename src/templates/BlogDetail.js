import React from "react"
import {graphql} from "gatsby"
import { DangerousChangeType } from "graphql"
import Header from "../components/Header"
import Fab from '@material-ui/core/Fab';
import Home from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import Metadata from "../pages/Metadata";


export const query=graphql`query(
    $slug:String
  ){
    markdownRemark(fields:{
      slug:{
        eq:$slug
      }
    }){frontmatter{
      title
      date
    }
    html

    }
  }`

function BlogDetail(props){

    return(
        <>
        <Metadata/>
    <Header/>

        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
         <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>
         <Fab href="/" className="BlogBottomBtn" color="secondary" aria-label="add">
        <Home />
      </Fab>
        </>

    )

}
export default BlogDetail

