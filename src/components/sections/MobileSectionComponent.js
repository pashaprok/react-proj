import React, { Component } from 'react'
import BtnMobile from '../buttons/BtnMobile'
import ImageFluid from '../root/ImageFluid'

export default class MobileSection extends Component {
    state = {
        mobile: [
            {
                expr: "adipisicing elit. Explicabo eveniet possimus quam dignissimos accusantium sit at dolor fugiat atque. Excepturi autem quam officia natus."
            },
            {
                expr: "vorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt est iusto, dolores rem vero quo voluptatibus soluta illo."
            },
            {
                expr: "lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at officiis inventore"
            },
            {
                expr: "consectetur adipisicing elit. Laboriosam, magni dolorum"
            },
            {
                expr: "ipsum dolor sit amet consectetur adipisicing elit. Deserunt est iusto, dolores rem vero quo voluptatibus soluta illo."
            },
            {
                expr: "lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at officiis inventore"
            },
            {
                expr: "consectetur adipisicing elit. Laboriosam, magni dolorum"
            }
        ]
    }
    render() {
        return (
            <section className="section section-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <ImageFluid
                                src="assets/img/mobile.jpg"
                                alt="phone"
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <h4 className="left-title dark mobile">
                                mobile app
                            </h4>
                            <div className="mobile-list">
                                {this.state.mobile.map((item, index) => {
                                    return <div className="mobile-item" key={index}>
                                        <p className="mobile-expr">
                                            <i className="fas fa-check"></i> 
                                            {item.expr}
                                        </p>
                                    </div>
                                })}
                            </div>
                            <div className="download__wrapper">
                                <BtnMobile
                                    link="http://www.google.com"
                                    img="assets/img/apple-app-store.svg"  
                                    name="app-store"
                                />
                                <BtnMobile
                                    link="http://www.google.com"
                                    img="assets/img/google-play.png"
                                    name="google-play"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
