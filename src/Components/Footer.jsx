import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer id="footer" className="overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="footer-top-area">
              <div className="row d-flex flex-wrap justify-content-between">
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu">
                    <img src="/images/main-logo.png" alt="logo" />
                    <p className='text-dark'>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
                    <div className="social-links">
                      <ul className="d-flex list-unstyled">
                        <li>
                          <a href="#">
                            <i className='fa fa-facebook'></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className='fa fa-instagram'></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className='fa fa-twitter'></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className='fa fa-linkedin'></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className='fa fa-youtube'></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 pb-3">
                  <div className="footer-menu text-uppercase">
                    <h5 className="widget-title pb-2">Quick Links</h5>
                    <ul className="menu-list list-unstyled text-uppercase">
                      <li className="menu-item pb-2">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="menu-item pb-2">
                        <Link to="/shop">Shop</Link>
                      </li>
                      <li className="menu-item pb-2">
                        <Link to="/contact-us">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu text-uppercase">
                    <h5 className="widget-title pb-2">Policies</h5>
                    <ul className="menu-list list-unstyled">
                      <li className="menu-item pb-2">
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="#">Refund & Returns Policies</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="#">Terms & Condition</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu contact-item">
                    <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
                    <p className='text-dark'>Do you have any queries or suggestions? <a href="mailto:dkaushik@gmail.com">dkaushik@gmail.com</a>
                    </p>
                    <p className='text-dark'>If you need support? Just give us a call. <a href="tel:+55 111 222 333 44">+55 111 222 333 44</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
