import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import User from '../Images/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png'
import './Header.css'
import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import btn from '../Images/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='header'  >
        <Container>
          <Row>
            <Col>
              <ul className="nav">
                <li className="list">
                  Olx
                </li>
                <li className="list">
                  <span><i class="ri-roadster-fill"></i> Motors</span>
                </li>
                <li className="list">
                  <span><i class="ri-hotel-line"></i> Property</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="navi">
                <ul className="nav1">
                  <li className="list1">
                    <h1>Olx</h1>
                  </li>
                  <li className="list1">
                    <input type="text" placeholder='Pakistan' />
                    {/* <span><i class="ri-search-line"></i></span> */}
                  </li>
                  <li className="list2">
                    <div className="inp">
                      <input type="text" placeholder='Find Cars, Mobile Phone and More....' />
                      <span><i class="ri-search-line"></i>  </span>
                    </div>

                  </li>
                  <div className='navi1' >
                    <li className="list3">
                      <span className='card_icon' ><i class="ri-chat-3-line"></i></span>
                    </li>
                    <li className="list3">
                      <span><i class="ri-notification-3-line"></i></span>
                    </li>
                    <li className="list3">
                      <span>< motion.img whileTap={{ scale: 1.3 }} src={User} alt="user" /></span>

                    </li>
                    <li className="list3">
                      <span className='i'  ><i class="ri-add-line"></i></span>
                      <button>  <NavLink to={"/PostAds"} >  Sell </NavLink></button>
                    </li>
                  </div>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col>
            <ul className="nav2">
              <li className="list">
                All Catagorey
              </li>
              <li className="list">
                Mobile Phone
              </li>
              <li className="list">
                Cars
              </li>
              <li className="list">
                MotorCycles
              </li>
              <li className="list">
                House
              </li>
              <li className="list">
                Tv-Video-Vudio
              </li>
              <li className="list">
                Tablets
              </li>
              <li className="list">
                Land Plots
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Outlet />

    </>
  )
}

export default Header