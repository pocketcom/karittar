import React from "react"
import { Link } from "gatsby"
import {graphql,useStaticQuery} from "gatsby"
import Blogitem from "../components/Blogitem"
import Metadata from "./Metadata"
import Header from "../components/Header"
import styles from "../components/style.css"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));




const IndexPage = () => {
  const classes = useStyles();
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
    <div className={classes.root}></div>
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
