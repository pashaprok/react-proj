import React from 'react'
import SloganSection from '../sections/SloganSectionComponent'
import HomeStart from '../sections/HomeStartSectionComponent'
import MobileSection from '../sections/MobileSectionComponent'
import TitleSection from '../sections/TitleSectionComponent'
import Slider from "react-slick"
import { baseUrl } from '../../shared/baseUrl'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Loading from '../root/LoadingComponent'
import Image from 'react-bootstrap/Image'


function RenderPhotoSlide({ photo }) {
    return(
        <div>
            <div className="gallery-item">
                <a 
                    href={baseUrl + photo.image} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="gallery-link"
                >
                    <Image src={baseUrl + photo.image} alt="item" fluid />
                </a>
            </div>
        </div>
    )
}

function Home(props) {

    const settings = {
        dots: false,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    const slidesGallery = props.photos.photos.map((photo) => {
        if (props.photos.isLoadingCompanies) {
           return(           
                <Loading />
           );
       }
       else if (props.photos.errMess) {
           return(
                <p>{props.photos.errMess}</p>
           );
       }
       else {return (
            <RenderPhotoSlide
                photo={photo}
                key={photo.id}
            />
        );}
    });


    return(
        <div>
            <HomeStart />
            <SloganSection />
            <MobileSection />
            <div className="section section-light section-gallery">
                <TitleSection 
                    title='gallery'
                    subtitle="Ipsum dolor sit amet consectetur" 
                />
                <Slider className="gallery-slider" {...settings}>
                    {slidesGallery}
                </Slider>
            </div>
        </div>
    );
}

export default Home;