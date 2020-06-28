import React, { Component } from 'react'

export default class Readme extends Component {
    render() {
        return (
            <div className="readme-page">
                <div className="container">
                    <div className="about-project">
                        <span className="important">
                            Important!
                        </span> This is not real site. It's only template project.<br />
                        <p className="server">
                            to work correctly, you must run <a 
                                    href="https://github.com/pashaprok/json-server-myres"
                                    target="_blank" 
                                    rel="noopener noreferrer"  
                                    className="sert-link">
                                        JSON-server
                            </a> *launch instruction inside
                        </p>
                        <p className="tech-title">
                            What used in the project:
                        </p>
                        <ul className="tech-list">
                            <li>
                                <i className="fas fa-check"></i> HTML5/CSS3/JavaScript
                            </li>
                            <li>
                                <i className="fas fa-check"></i> Bootstrap
                            </li>
                            <li>
                                <i className="fas fa-check"></i> ReactJS
                            </li>
                            <li>
                                <i className="fas fa-check"></i> Redux
                            </li>
                            <li>
                                <i className="fas fa-check"></i> You can see the whole list of dependencies, additions and libraries by opening the package.json
                            </li>
                        </ul>
                    </div>
                    <div className="about-author">
                        <div className="photo"></div>
                        <p className="title">
                            some information about me
                        </p>
                        <div className="info">
                        My name is <strong>Pavel Prokopiuk</strong>. I was born on March 23, 1999. After graduation, I entered the Kharkov National University of Radio Electronics (KNURE) at the Faculty of Information Radio Technologies, specializing in acoustics and media engineering. I was interested in the creation of sites and from the inside out of school, so in addition to basic subjects, I also began to study web development at the university, I was more interested in the front-end of the rear because it combines both the design, creative part and coding. I love this combination.
                        <br /><br />In my free time I like playing music, playing the guitar and singing. I love films, the series in which are strong and beautiful stories and are shot at a good level. I love not just reviewing, but also studying how they were filmed and deepening more into the story of what is happening in the film. I also like traveling and taking photos, video filming.
                        </div>
                    </div>
                    <div className="about-education">
                        For the most part, I studied web development on my own, finding the necessary resources and information on the Internet, but also went through several online courses. Here are the links to my certificates:
                        <ul className="education-list">
                            <li><a 
                                    href="https://coursera.org/share/b7307e92538abcb63be18768dac06980"
                                    target="_blank" 
                                    rel="noopener noreferrer"  
                                    className="sert-link">
                                        JavaScript, часть 1: основы и функции - Moscow Institute of Physics and Technology
                            </a></li>
                            <li><a 
                                    href="https://coursera.org/share/e54f34304a1b2238b29702b43ae40e38"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="sert-link">
                                        JavaScript, часть 2: прототипы и асинхронность - Moscow Institute of Physics and Technology
                            </a></li>
                            <li><a 
                                    href="https://coursera.org/share/5a475f758bd9909c0f6e0db19de196ee"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="sert-link">
                                        Front-End Web Development with React - The Hong Kong University of Science and Technology
                            </a></li>
                            <li><a 
                                    href="https://coursera.org/share/fe00f2ee55c02a122cfbe98be80fe046"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="sert-link">
                                        Server-side Development with NodeJS, Express and MongoDB - The Hong Kong University of Science and Technology
                            </a></li>
                        </ul>
                    </div>
                    <hr />
                    <div className="mycontacts">
                        <p className="title">
                            My contacts:
                        </p>
                        <ul className="contacts-list">
                            <li>Phone: <a href="tel:+380993123185">+380993123185</a></li>
                            <li>Email: <a href="mailto:pashaprok23@gmail.com">pashaprok23@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
