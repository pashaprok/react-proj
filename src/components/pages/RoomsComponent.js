import React, { useState } from 'react'
import StartSection from '../sections/StartSectionComponent'
import BannerStartSection from '../sections/BannerStartSectionComponent'
import BtnFluid from '../buttons/BtnFluid'
import BtnDark from '../buttons/BtnDark'
import Image from 'react-bootstrap/Image'
import Loading from '../root/LoadingComponent'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../shared/baseUrl'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';


function RenderImageSlide({ image }) {
    return(
        <div>
            <Image src={baseUrl + image} alt="room" fluid className="room-photo" />
        </div>
    )
}

function RenderRoomItem({ room }) {
    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
       <div className="room-item">
            <div className="room-photos">
                <Slider {...settings}>
                    { room.images.map((image, index) => <RenderImageSlide key={index} image={image}/>)}
                </Slider>
            </div>
            <div className="room-info">
                <Link to={`/rooms/${room.id}`} className="title">
                    {room.name}
                </Link>
                <div className="price">
                    price: 
                    <span className="value"> {room.price}$</span>
                    <span className="alert">* room price per night</span>
                </div>
                <p className="description">
                    {room.description}
                </p>
                <BtnDark
                    link={`/rooms/${room.id}`}
                    icon={<i className="fas fa-info"></i>}
                    text="open more"
                />
            </div>
       </div> 
    );
}

const Rooms = (props) => {
    const [activeTab, setActiveTab] = useState('1');
  
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    const singleRooms = props.rooms.rooms.map((room) => {
        if (props.rooms.isLoading) {
           return(<Loading />);
        } else if (props.rooms.errMess) {
           return(<h4>{props.rooms.errMess}</h4>);
        } else if (room.category === "single") {
            return (
                <RenderRoomItem
                    room={room}
                    key={room.id}
                />
            );
        } else {
            return null;
        }
    });

    const doubleRooms = props.rooms.rooms.map((room) => {
        if (props.rooms.isLoading) {
           return(<Loading />);
        } else if (props.rooms.errMess) {
           return(<h4>{props.rooms.errMess}</h4>);
        } else if (room.category === "double") {
            return (
                <RenderRoomItem
                    room={room}
                    key={room.id}
                />
            );
        } else {
            return null;
        }
    });

    const familyRooms = props.rooms.rooms.map((room) => {
        if (props.rooms.isLoading) {
           return(<Loading />);
        } else if (props.rooms.errMess) {
           return(<h4>{props.rooms.errMess}</h4>);
        } else if (room.category === "family") {
            return (
                <RenderRoomItem
                    room={room}
                    key={room.id}
                />
            );
        } else {
            return null;
        }
    });

    return (
        <div>
            <StartSection
                bgi="rooms-start start-section"
            >
                <BannerStartSection
                    title="Our Rooms"
                    subtitle="dolor sit amet consectetur adipisicing elit"
                />   
            </StartSection>
            <section className="section section-light rooms-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div>
                            <Nav tabs className="rooms-tabs-nav">
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Single
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        Double
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}
                                    >
                                        Family
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent className="rooms-tabs-content" activeTab={activeTab}>
                                <TabPane tabId="1">
                                    {singleRooms}
                                </TabPane>
                                <TabPane tabId="2">
                                    {doubleRooms}
                                </TabPane>
                                <TabPane tabId="3">
                                    {familyRooms}
                                </TabPane>
                            </TabContent>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <BtnFluid
                half={false}
                link="/reservation"
                text="reserve room"
                icon={<i className="fas fa-store-alt"></i>}
            />
        </div>
    )
}

export default Rooms;