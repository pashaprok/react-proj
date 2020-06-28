import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StartSection from '../sections/StartSectionComponent'
import BannerStartSection from '../sections/BannerStartSectionComponent'

export default class AppsList extends Component {
    state = {
        appslist: [
            {
                id: 0,
                name: "ToDo",
                link: "/apps/todo",
                bgi: "todo"
            },
            {
                id: 1,
                name: "Weather",
                link: "/apps/weather",
                bgi: "weather"
            },
            {
                id: 2,
                name: "Quiz",
                link: "/apps/quiz",
                bgi: "quiz"
            }
        ]
    }
        
    render() {
        return (
            <div>
                <StartSection
                    bgi="apps-list-start start-section"
                >
                    <BannerStartSection
                        title="Single Apps"
                        subtitle="dolor sit amet consectetur adipisicing elit"
                    />   
                </StartSection>
                <div className="section section-light apps-list-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="apps-list">
                                    {this.state.appslist.map((app) => {
                                        return (
                                            <Link key={app.id} to={app.link}>
                                                <div id={app.bgi} className="app-item">
                                                    <span>
                                                        {app.name}
                                                    </span>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
