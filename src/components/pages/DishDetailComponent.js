import React, { Component, useState } from 'react'
import BtnFluid from '../buttons/BtnFluid'
import LinkOut from '../root/LinkOut'
import {  Modal, ModalBody, ModalFooter, Row, Col, Button } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'
import Image from 'react-bootstrap/Image'
import Loading from '../root/LoadingComponent'
import { baseUrl } from '../../shared/baseUrl'


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postCommentDish(this.props.dishId, values.author, values.comment);
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

function RenderComments({commentsDish, postCommentDish, dishId}){
    if (commentsDish != null) {
        return(
                <div className="dish-comments">
                    <h4>
                        Comments
                    </h4>
                    <ul>
                        {commentsDish.map(comment => {
                            return (
                                <RenderCommentItem
                                    comment={comment}
                                />
                            );
                        })}
                    </ul>
                    <CommentForm dishId={dishId} postCommentDish={postCommentDish} />
                </div>
        );
    }
    
    else {
        return(
            <div></div>
        );
    }
}

function RenderDish({dish}){
    const [modal, setModal] = useState(false);

    if(dish != null){
        const toggle = () => {
            setModal(!modal);
        }

        return(
                <div key={dish.id} className="dish-card">
                    <div className="dish-card-image">
                        <Image src={baseUrl + dish.image} fluid className="dish-photo" />
                        <button className="expand-btn" onClick={toggle}>
                            <i className="fas fa-expand-arrows-alt"></i>
                        </button>
                        <Modal isOpen={modal} toggle={toggle} className="modal-image">
                            <ModalBody>
                                <Image src={baseUrl + dish.image} fluid className="dish-photo" />
                            </ModalBody>
                            <ModalFooter>
                                <LinkOut
                                    cls="download-image-link"
                                    link={baseUrl + dish.image}
                                    onClick={toggle}
                                >
                                    <i className="fas fa-download"></i> download
                                </LinkOut>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <h3 className="dish-card-title">
                        {dish.name}{" "} 
                        <span className="price">
                            - {dish.price}$
                        </span>
                    </h3>
                    <div className="dish-card-description">
                        {dish.description}
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

const DishDetail = (props) => {
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
    else if(props.dish != null){
        return (
            <div className="dish-detail-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-md-5 col-12">
                            <RenderComments 
                                commentsDish={props.commentsDish}
                                postCommentDish={props.postCommentDish}
                                dishId={props.dish.id}
                            />
                        </div>
                    </div>
                </div>
                <BtnFluid
                    half={false}
                    link="/restaurant"
                    text="back to dishes list"
                    icon={<i className="fas fa-arrow-left"></i>}
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

export default DishDetail;