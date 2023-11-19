import React from 'react'
import Footer from "../Components/Footer/Footer"
import Header from '../Components/Header'
import body from '../Images/404507106-800x600.webp'
import body1 from '../Images/404507292-800x600.webp'
import body2 from '../Images/405056607-800x600.webp'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'reactstrap'
import '../Styles/Home.css'
import mobile from '../Images/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png'
import cars from '../Images/vehicles.29fb808d5118f0db56f68a39ce5392e2.png'
import rent from '../Images/property-for-rent.8436595fbaa90d47f0178006f57090a8.png'
import property from '../Images/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png'
import electronics from '../Images/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png'
import bike from '../Images/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png'
import buss from '../Images/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png'
import service from '../Images/services.dc6aef196c0403dc61b0ee813f66fa5b.png'
import job from '../Images/jobs.79e6136dda02111cf8e7afe26b9e0f93.png'
import Product from './Product'




const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Carousel>
        <Carousel.Item interval={2000}>
          <img src={body} alt="" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={body1} alt="" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={body2} alt="" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="catagorey">
        <div className="itemlist">
          <Container>
            <Row>
              <Col lg='6' md='6' >
                <div>
                  <h3>All categories </h3>
                </div>
                <div className="catagories_item">
                  <ul>
                    <li>
                      <img src={mobile} alt="" /> 
                      <span>Mobiles</span>

                    </li>
                    <li>
                      <img src={cars} alt="" />
                      <span>Vehicels</span>

                    </li>
                    <li>
                      <img src={property} alt="" />
                      <span>Property For Sale</span>
                    </li>
                    <li>
                      <img src={rent} alt="" />
                      <span>Property For Rent</span>
                    </li>
                    <li>
                      <img src={electronics} alt="" />
                      <span>Electronic & Home Appliances</span>
                    </li>
                    <li>
                      <img src={bike} alt="" />
                      <span>Bike</span>
                    </li>
                    <li>
                      <img src={buss} alt="" />
                      <span>Business Industril & Agricultures</span>
                    </li>
                    
                  </ul>
                </div>
                
              </Col>
              
            </Row>
          </Container>
        </div>
      </section>
      <Product />

      <Footer />
    </>

  )
}

export default Home