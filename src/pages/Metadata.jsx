import React from "react"
import { Helmet } from "react-helmet"
class Metadata extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>testtitle</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>

        </Helmet>
      </div>
    )
  }

}
export default Metadata