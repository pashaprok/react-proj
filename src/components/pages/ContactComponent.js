import React, { Component } from 'react'
import StartSection from '../sections/StartSectionComponent'
import BannerStartSection from '../sections/BannerStartSectionComponent'
import Loading from '../root/LoadingComponent'
import { Button, Label, Col, Row } from 'reactstrap'
import { Control, Form, Errors } from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


function RenderContactItem({ contact }) {
    return(
        <div className="contact-item">
            <span className="contact-name">
            <i className={contact.icon}></i>:</span>
            <a 
                href={contact.link}
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
            >
                {contact.contact}
            </a>
        </div>
    )
}

class Contact extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(values) {
        this.props.postFeedback(values.firstname, values.lastname, values.telnum, values.email, values.agree, values.contactType, values.message);
        this.props.resetFeedbackForm();
    }

    

    render() {
        const listContacts = this.props.contacts.contacts.map((contact) => {
            if (this.props.contacts.isLoading) {
               return(            
                    <Loading />
               );
           }
           else if (this.props.contacts.errMess) {
               return(
                    <p>{this.props.contacts.errMess}</p>
               );
           }
           else {return (
                <RenderContactItem
                    contact={contact}
                    key={contact.id}
                />
            );}
        });

        return(
            <div>
                <StartSection
                    bgi="contact-start start-section"
                >
                    <BannerStartSection
                        title="Contact Us"
                        subtitle="dolor sit amet consectetur adipisicing elit"
                    />   
                </StartSection>
                <section className="section section-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-12">
                                <div className="feedbak-section">
                                    <h4 className="title">
                                        Do you have questions or have suggestions?
                                    </h4>
                                    <Form 
                                        model="feedback" 
                                        onSubmit={(values) => this.handleSubmit(values)}
                                        className="feedback-form"
                                    >
                                        <Row className="form-group">
                                            <Col>
                                                <Control.text model=".firstname" id="firstname" name="firstname"
                                                    placeholder="First Name"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                                    }}
                                                    />
                                                <Errors
                                                    className="text-danger"
                                                    model=".firstname"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col>
                                                <Control.text model=".lastname" id="lastname" name="lastname"
                                                    placeholder="Last Name"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                                    }}
                                                    />
                                                <Errors
                                                    className="text-danger"
                                                    model=".lastname"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col>
                                                <Control.text model=".telnum" id="telnum" name="telnum"
                                                    placeholder="Tel. Number"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                                    }}
                                                    />
                                                <Errors
                                                    className="text-danger"
                                                    model=".telnum"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 2 numbers',
                                                        maxLength: 'Must be 15 numbers or less',
                                                        isNumber: 'Must be a number'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col>
                                                <Control.text model=".email" id="email" name="email"
                                                    placeholder="Email"
                                                    className="form-control"
                                                    validators={{
                                                        required, validEmail
                                                    }}
                                                    />
                                                <Errors
                                                    className="text-danger"
                                                    model=".email"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        validEmail: 'Invalid Email Address'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col className="col-md-7">
                                            <div className="form-check">
                                                <Label check>
                                                    <Control.checkbox
                                                        model=".agree"
                                                        name="agree"
                                                        className="form-check-input"
                                                    /> {' '}
                                                    <strong>
                                                        May we contact you?
                                                    </strong>
                                                </Label>
                                            </div>
                                            </Col>
                                            <Col className="col-md-5">
                                                <Control.select
                                                    model=".contactType"
                                                    name="contactType"
                                                    className="form-control"
                                                >
                                                    <option>Tel.</option>
                                                    <option>Email</option>
                                                    <option>Telegram</option>
                                                    <option>Viber</option>
                                                </Control.select>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col>
                                                <Control.textarea
                                                    model=".message" 
                                                    id="message" 
                                                    name="message"  
                                                    rows="12"
                                                    className="form-control"
                                                    placeholder="Your Feedback"
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col className="col-md-12">
                                                <Button
                                                    type="submit"
                                                    className="submit-btn"
                                                >
                                                    Send Feedback
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="contacts-card">
                                    <div className="contacts-card-header">
                                        <h4>
                                            Our Contacts
                                        </h4>
                                    </div>
                                    <div className="contacts-card-body">
                                        <div className="contacts-list">
                                            {listContacts}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
        
}

    export default Contact;