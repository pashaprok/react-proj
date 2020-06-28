import React from 'react'
import StartSection from '../sections/StartSectionComponent'
import BannerStartSection from '../sections/BannerStartSectionComponent'
import TitleSection from '../sections/TitleSectionComponent'
import EmployeesSection from '../sections/EmployeesSection'
import CompaniesSlider from '../sections/CompaniesSlider'


function About(props) {
    return(
        <div>
            <StartSection
                bgi="about-start start-section"
            >
                <BannerStartSection
                    title="About Us"
                    subtitle="dolor sit amet consectetur adipisicing elit"
                />   
            </StartSection>
            <div className="section section-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="left-title">
                                Opsum dolor sit
                            </h4>
                            <div>
                                <img src="assets/img/about-text.jpg" alt="table" className="text-image top-right" />
                                
                                <p className="single-text-dark">
                                    Lorem ipsum sit amet consectetur adipisicing elit. Facilis, corrupti at! Iste odit aliquam ratione, vel amet beatae quisquam. Laborum culpa molestias, iste aliquid ducimus reiciendis alias ipsa voluptas dolorem sunt corporis debitis veniam nisi, nemo, placeat recusandae at? Quaerat dolorum, nam, repellendus nobis fugiat itaque maxime quae amet nisi exercitationem dolores impedit. Modi, necessitatibus?
                                </p>
                                <p className="single-text-dark">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores eius quam eos reiciendis et voluptate debitis veniam soluta, deleniti deserunt ex pariatur suscipit sapiente quo nemo modi obcaecati neque veritatis dolor dolore! Magni suscipit cum blanditiis quasi impedit veniam unde, dignissimos sint error, eveniet at est sed consequatur porro vel inventore amet natus! Qui mollitia aliquam quo dolorum debitis esse earum excepturi quaerat ut aspernatur, vel maiores. Iste eaque corrupti et minima dolores fugit voluptas illo labore sapiente magnam mollitia neque vel, eos eveniet voluptatem cum officiis reprehenderit officia magni minus facilis dignissimos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto molestiae expedita deleniti voluptates animi quaerat, officia neque deserunt molestias magnam perferendis enim blanditiis laudantium dolorum odio alias itaque accusamus magni consectetur quisquam.
                                </p>
                                <p className="single-text-dark">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod odit et quo molestiae, quibusdam ea aspernatur voluptas nostrum, consequatur quasi, quaerat inventore sint tenetur rem. Voluptatum cum qui natus expedita est asperiores, similique dolore molestias sapiente eligendi unde nesciunt nam a accusantium minus maxime deserunt officia consequuntur quam, at officiis mollitia repellendus distinctio. Facere possimus molestiae ab minima? Quas maxime libero veritatis illum deserunt quia recusandae. Necessitatibus atque molestiae tempora vitae dolorem accusantium, officia adipisci vero iste ducimus itaque exercitationem unde, veniam voluptatem nobis delectus. Recusandae voluptate ipsa quae fugit repudiandae ducimus quasi soluta optio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section section-dark workers-section">
                <div className="container">
                    <TitleSection 
                        title='our employees'
                        subtitle="Ipsum dolor sit amet consectetur" 
                    />
                </div>
                <EmployeesSection
                    workers={props.workers}
                    isLoading={props.workers.isLoading}
                    errMess={props.workers.errMess}
                />
            </section>
            <section className="section section-light companies-section">
                <div className="container">
                    <TitleSection 
                        title='companies'
                        subtitle="Ipsum dolor sit amet consectetur" 
                    />
                </div>
                <CompaniesSlider
                    companies={props.companies}
                    isLoadingCompanies={props.companies.isLoading}
                    errMessCompanies={props.companies.errMess}
                />
            </section>
        </div>
    );
}

export default About;