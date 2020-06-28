import React from 'react'
import Loading from '../root/LoadingComponent'
import LinkOut from '../root/LinkOut'
import Image from 'react-bootstrap/Image'
import { baseUrl } from '../../shared/baseUrl'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function RenderCompanySlide({ company }) {
    return(
        <div>
            <div className="company-item">
                <LinkOut
                    link={company.link}
                    cls="company-link"
                >
                    <Image src={baseUrl + company.logo} alt="company" fluid />
                </LinkOut>
            </div>
        </div>
    )
}

export default function CompaniesSlider(props) {
    const settingsCompaniesSlider = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    };

    const slidesCompanies = props.companies.companies.map((company) => {
        if (props.companies.isLoadingCompanies) {
           return(           
                <Loading />
           );
       }
       else if (props.companies.errMessCompanies) {
           return(
                <p>{props.companies.errMessCompanies}</p>
           );
       }
       else {return (
            <RenderCompanySlide
                company={company}
                key={company.id}
            />
        );}
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Slider {...settingsCompaniesSlider} className="companies-slider">
                        {slidesCompanies}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
