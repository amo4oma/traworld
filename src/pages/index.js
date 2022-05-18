import * as React from "react"
import { Helmet } from 'react-helmet';
import { Router } from '@reach/router';

import Banner from '../components/Banner';
import '../styles/style.scss';
import Header from '../components/Header'
import Section1 from '../components/Section1/Section1'
import Section2 from '../components/Section2/Section2'
import Section3 from '../components/Section3/Section3'
import Section4 from '../components/Section4/Section4'
import Footer from '../components/Footer/Footer';



 
// markup


const HomePage = () => {


  return (
    <>     
    <div className="main">
      <Header /> 
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>

 </>
  )
}
const IndexPage = () => (
  <>
    <Helmet>
      <title>Traworld</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Router>
      {/* <HomePage path="/traworld" /> */}
      <HomePage path="/" />
    </Router>
    <script
      type="text/javascript"
      src="https://davidjbradshaw.com/imagemap-resizer/js/imageMapResizer.min.js"
      async
    />
  </>
);

export default IndexPage
