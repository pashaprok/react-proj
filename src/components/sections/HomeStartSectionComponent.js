import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
            ...style, 
            display: "block",  
        }}
        onClick={onClick}
      >
          <i className="fas fa-chevron-right"></i>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
            ...style, 
            display: "block", 
        }}
        onClick={onClick}
      >
          <i className="fas fa-chevron-left"></i>
      </div>
    );
  }

export default class HomeStart extends Component {
    constructor() {
        super();
        
        this.state = {
            slides: [
                {
                    bg: "assets/img/home-start-slide-one.jpg",
                    title: "lorem ipsum"
                },
                {
                    bg: "assets/img/home-start-slide-two.jpg",
                    title: "dolor bim"
                },
                {
                    bg: "assets/img/home-start-slide-three.jpg",
                    title: "kores doller"
                },
            ]
        }
    }

  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div>
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "12px",
            height: "12px",
            color: "transparent",
            borderRadius: "50%",
            border: "2px #f97e76 solid"
          }}
        />
      )
    };
    return (
      <div className="home-start">
        <Slider className="home-start-slider" {...settings}>
            {this.state.slides.map((item, index) => {
                return <div key={index}>
                        <div className="slide">
                            <img src={item.bg} alt="slide-background" />
                            <div className="slide-inner">
                                <h2 className="title">
                                    {item.title}
                                </h2>
                            </div>
                        </div>                   
                    </div>
                })}
        </Slider>
      </div>
    );
  }
}