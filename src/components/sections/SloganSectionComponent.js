import React, { Component } from 'react'
import TitleSection from './TitleSectionComponent'

function RenderSlogan({index, item}) {
    return(
        <div key={index} className="slogan-item">
            <span>
                <i className={item.icon}></i>
            </span>
            <h4>
                {item.title}
            </h4>
            <p>
                {item.info}
            </p>
        </div>
    );
}

export default class SloganSection extends Component {
    state = {
        slogans: [
            {
                icon: "fas fa-american-sign-language-interpreting",
                title: "Comfort for Clients",
                info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, perspiciatis"
            },
            {
                icon: "fab fa-accessible-icon",
                title: "Fast Services",
                info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, perspiciatis"
            },
            {
                icon: "fas fa-cogs",
                title: "Reliability",
                info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, perspiciatis"
            }
        ]
    }
    render() {
        return (
            <section className="section section-light slogan-section">
                <div className="container">
                    <TitleSection 
                        title='our slogans'
                        subtitle="Ipsum dolor sit amet consectetur" 
                    />
                    <div className="slogans-list">
                        {this.state.slogans.map((item, index) => {
                            return  <RenderSlogan 
                                        item={item} 
                                        index={index} 
                                    />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}
