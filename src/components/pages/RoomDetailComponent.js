import React, { Component } from 'react'
import BtnFluid from '../buttons/BtnFluid'
import { Row, Col, Button } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'
import Image from 'react-bootstrap/Image'
import Loading from '../root/LoadingComponent'
import { baseUrl } from '../../shared/baseUrl'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postCommentRoom(this.props.roomId, values.author, values.comment);
    }

    render() {
        return (
            <React.Fragment>
                <LocalForm className="comment-form" onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Col>
                                        <Control.text
                                            model=".author" 
                                            id="author"
                                            name="author"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                minLength: minLength(2), maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Control.textarea
                                            model=".comment" 
                                            id="comment" 
                                            name="comment" 
                                            placeholder="Your Comment" 
                                            rows="6"
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Button
                                            type="submit"
                                            className="submit-btn"
                                        >
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
            </React.Fragment>
        );
    }
}

function RenderCommentItem({comment}) {
    return(
        <li key={comment.id} className="comment-item">
            <div className="comment-body">
                {comment.comment}
            </div>
            <div className="comment-info">
                <span className="comment-author">
                    <i className="fas fa-user"></i>
                    {comment.author}
                </span>
                <span className="comment-date">
                    <i className="fas fa-calendar-day"></i>
                    {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                </span> 
            </div>
        </li>
    );
}

function RenderComments({commentsRoom, postCommentRoom, roomId}){
    if (commentsRoom != null) {
        return(
                <div className="room-comments">
                    <h4>
                        Comments
                    </h4>
                    <ul>
                        {commentsRoom.map(comment => {
                            return (
                                <RenderCommentItem
                                    comment={comment}
                                />
                            );
                        })}
                    </ul>
                    <CommentForm roomId={roomId} postCommentRoom={postCommentRoom} />
                </div>
        );
    }
    
    else {
        return(
            <div></div>
        );
    }
}

function RenderImageSlide({ image }) {
    return(
        <div key={image.id}>
            <Image src={baseUrl + image} alt="room" fluid className="room-details-photo" />
        </div>
    )
}

function NextArrow(props) {
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
          <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    );
}
  
function PrevArrow(props) {
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
          <i className="fas fa-long-arrow-alt-left"></i>
      </div>
    );
}

function RenderRoom({room}){
    let category = room.category;
    let capacity;

    if (category === "family") {
        capacity = "3+ persons";
    } else if (category === "double") {
        capacity = "2 persons";
    } else {
        capacity = "1 person";
    }

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        pauseOnHover: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
                width: "10px",
                height: "10px",
                color: "transparent",
                borderRadius: "50%",
                border: "1.5px #f97e76 solid"
              }}
            />
        )
    };

    if(room != null){
        return(
            <div key={room.id} className="room-details">
                <div className="room-details-card">
                    <div className="room-details-photos">
                        <Slider className="room-photos-slider" {...settings}>
                            { room.images.map((image) => <RenderImageSlide image={image}/>)}
                        </Slider>
                    </div>
                    <div className="room-details-info">
                        <h3 className="room-details-title">
                            {room.name}
                        </h3>
                        <div className="room-price">
                            price: 
                            <span className="value"> {room.price}$</span>
                            <span className="alert">* room price per night</span>
                        </div>
                        <div className="room-capacity">
                            room capacity: 
                            <span className="value">
                                <i className="fas fa-user-friends"></i> {capacity}
                            </span>
                        </div>
                        <div className="room-extras">
                            room extras:
                            <ul className="room-extras-list">
                                {room.extras.map((item) => <li><i className="fas fa-check"></i> {item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="room-description">
                    {room.description}
                </div>
            </div>  
        );
    }
    else{
        return(
            <div></div>
        );
    }
    
}

const RoomDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="wrapper-load">
                <Loading />
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="wrapper-load">
                <h4>{props.errMess}</h4>
            </div>
        );
    }
    else if(props.room != null){
        return (
            <div className="room-detail-page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <RenderRoom room={props.room} />
                            <RenderComments 
                                commentsRoom={props.commentsRoom}
                                postCommentRoom={props.postCommentRoom}
                                roomId={props.room.id}
                            />
                        </div>
                    </div>
                </div>
                <BtnFluid
                    half={true}
                    link="/rooms"
                    text="back to rooms list"
                    icon={<i className="fas fa-arrow-left"></i>}
                />
                <BtnFluid
                    half={true}
                    link="/reservation"
                    text="reserve room"
                    icon={<i className="fas fa-store-alt"></i>}
                />
            </div>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

export default RoomDetail;