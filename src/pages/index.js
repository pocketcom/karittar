import React from "react"
import {graphql,useStaticQuery} from "gatsby"
import Blogitem from "../components/Blogitem"
import Metadata from "./Metadata"
import Header from "../components/Header"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'




const IndexPage = () => {
const data= useStaticQuery(graphql
    `query{
      allMarkdownRemark{
        edges{
          node{
            fields{
              slug
            }
            frontmatter{
              title
                date
                description
                thumbnail{
                  childImageSharp{
                    fluid{
                      src
                    }
                  }
                }
             }
          }
        }
      }
    }`
    )

  return(
    <>
    <Metadata/>
    <Header/>
    <CssBaseline />
    <Box pt="20px">
    <Container maxWidth="md">
    <Grid container spacing={3} >
     {data.allMarkdownRemark.edges.map((edge,index)=>(
            <Grid item xs={12} key={index}>
            <Blogitem
            title={edge.node.frontmatter.title}
            date={edge.node.frontmatter.date}
            description={edge.node.frontmatter.description}
            src={edge.node.frontmatter.thumbnail.childImageSharp.fluid.src}
            link={`/blog/${edge.node.fields.slug}`}
            key={index}
            />
            </Grid>
    ))}
    </Grid>
    </Container>
    </Box>

     </>

  )
  }

export default IndexPage
