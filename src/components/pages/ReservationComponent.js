import React, { Component } from 'react'
import Loading from '../root/LoadingComponent'
import BtnFluid from '../buttons/BtnFluid'
import StartSection from '../sections/StartSectionComponent'
import BannerStartSection from '../sections/BannerStartSectionComponent'
import { Button, Col, Row } from 'reactstrap'
import { Control, Form, Errors } from 'react-redux-form'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len)
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function RenderRoomItem({room}) {
    return (
        <option key={room.id}>{room.name} - {room.price}$ per night</option>
    );
}


export default class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: null, 
            lastname: null, 
            telnum: null, 
            email: null, 
            room: null,
            startDate: null,
            endDate: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFN = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }
    handleChangeLN = (e) => {
        this.setState({
          lastname: e.target.value
        })
    }
    handleChangeTN = (e) => {
        this.setState({
          telnum: e.target.value
        })
    }
    handleChangeEm = (e) => {
        this.setState({
          email: e.target.value
        })
    }
    handleChangeR = (e) => {
        this.setState({
            room: e.target.value
        })
    }
    
    handleSubmit(firstname, lastname, telnum, email, room, startDate, endDate) {
        this.props.postReserve(firstname, lastname, telnum, email, room, startDate, endDate);
        this.setState = ({
            firstname: '', 
            lastname: '', 
            telnum: '', 
            email: '', 
            room: '',
            startDate: '',
            endDate: ''
        })
    }

    render() {

        const listRooms = this.props.rooms.rooms.map((room) => {
            if (this.props.rooms.isLoading) {
               return(<Loading />);
            } else if (this.props.rooms.errMess) {
               return(<h4>{this.props.rooms.errMess}</h4>);
            } else {
                return (
                    <RenderRoomItem
                        room={room}
                        key={room.id}
                    />
                );
            } 
        });

        return (
            <div>
                <StartSection
                    bgi="reserve-start start-section start-app-section"
                >
                    <BannerStartSection
                        title="Reserve"
                        subtitle=""
                    />   
                </StartSection>
                <div className="section section-light reserve-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <Form 
                                        model="reservation" 
                                        onSubmit={(firstname, lastname, telnum, email, room, startDate, endDate) => this.handleSubmit(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email, this.state.room, this.state.startDate, this.state.endDate)}
                                        className="reserve-form"
                                    >
                                        <Row className="form-group">
                                            <Col md={6}>
                                                <Control.text model=".firstname" id="firstname" name="firstname"
                                                    placeholder="First Name"
                                                    className="form-control"
                                                    value={this.state.firstname}
                                                    onChange={this.handleChangeFN}
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
                                            <Col md={6}>
                                                <Control.text model=".lastname" id="lastname" name="lastname"
                                                    placeholder="Last Name"
                                                    className="form-control"
                                                    value={this.state.lastname}
                                                    onChange={this.handleChangeLN}
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
                                            <Col md={7}>
                                                <Control.text model=".email" id="email" name="email"
                                                    placeholder="Email"
                                                    className="form-control"
                                                    value={this.state.email}
                                                    onChange={this.handleChangeEm}
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
                                            <Col md={5}>
                                                <Control.text model=".telnum" id="telnum" name="telnum"
                                                    placeholder="Tel. Number"
                                                    className="form-control"
                                                    value={this.state.telnum}
                                                    onChange={this.handleChangeTN}
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
                                            <Col md={4}>
                                                <DateRangePicker
                                                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                                />
                                            </Col>
                                            <Col md={8}>
                                                <Control.select
                                                    model=".room"
                                                    name="room"
                                                    className="form-control"
                                                    value={this.state.room}
                                                    onChange={this.handleChangeR}
                                                >
                                                    {listRooms}
                                                </Control.select>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col className="col-md-12">
                                                <Button
                                                    type="submit"
                                                    className="submit-btn"
                                                >
                                                    Reserve!
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <BtnFluid
                    half={false}
                    link="/rooms"
                    text="back to rooms list"
                    icon={<i className="fas fa-arrow-left"></i>}
                />
            </div>
        )
    }
}
