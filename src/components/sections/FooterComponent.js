import React from 'react'
import { Link } from 'react-router-dom'
import LinkOut from '../root/LinkOut'
import CopyRight from '../root/CopyRight'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-12">
                        <h4 className="footer-title">
                            Links: 
                        </h4>
                        <ul className="footer-links">
                            <li>
                                <Link className="footer-link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/restaurant">Restaurant</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/rooms">Rooms</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/apps">Apps</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/readme">ReadMe</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <h4 className="footer-title">
                            Contacts:
                        </h4>
                        <ul className="footer-links">
                            <li>
                                <LinkOut
                                    link="http://www.google.com"
                                    cls="footer-link"
                                >
                                    <i className="fas fa-map-marker-alt"></i> Country, State, City, Street, 234a
                                </LinkOut>
                            </li>
                            <li>
                                <LinkOut
                                    link="tel:+380000000000"
                                    cls="footer-link"
                                >
                                    <i className="fas fa-phone-alt"></i> +380000000000
                                </LinkOut>
                            </li>
                            <li>
                                <LinkOut
                                    link="http://www.telegram.com"
                                    cls="footer-link"
                                >
                                    <i className="fab fa-telegram-plane"></i> telegram
                                </LinkOut>
                            </li>
                            <li>
                                <LinkOut
                                    link="http://www.viber.com" 
                                    cls="footer-link"
                                >
                                    <i className="fab fa-viber"></i> viber
                                </LinkOut>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <h4 className="footer-title">
                            Social:
                        </h4>
                        <ul className="footer-links">
                            <li>
                                <LinkOut
                                    link="http://www.youtube.com" 
                                    cls="footer-link"
                                >
                                    <i className="fab fa-youtube"></i> YouTube
                                </LinkOut>
                            </li>
                            <li>
                                <LinkOut
                                    link="http://www.facebook.com" 
                                    cls="footer-link"
                                >
                                    <i className="fab fa-facebook-f"></i> Facebook
                                </LinkOut>
                            </li>
                                <li>
                                <LinkOut
                                    link="http://www.instagram.com"
                                    cls="footer-link"
                                >
                                    <i className="fab fa-instagram"></i> Instagram
                                </LinkOut>
                            </li>
                            <li>
                                <LinkOut
                                    link="http://www.twitter.com"
                                    cls="footer-link"
                                >
                                    <i className="fab fa-twitter"></i> Twitter
                                </LinkOut>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <CopyRight />
        </div>
    )
}
