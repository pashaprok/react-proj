import React, { Component } from 'react';
import Home from './pages/HomeComponent';
import About from './pages/AboutComponent';
import Restor from './pages/RestorComponent';
import DishDetail from './pages/DishDetailComponent';
import Rooms from './pages/RoomsComponent';
import RoomDetail from './pages/RoomDetailComponent';
import Reservation from './pages/ReservationComponent';
import Contact from './pages/ContactComponent';
import AppsList from './pages/AppsListComponent';
import TodoApp from './todo/TodoApp';
import WeatherApp from './weather/WeatherApp';
import QuizApp from './quiz/App';
import Error from './pages/ErrorComponent';
import Header from './sections/HeaderComponent';
import Footer from './sections/FooterComponent';
import Readme from './pages/ReadmeComponent';
import { Switch, Route, withRouter } from 'react-router-dom'; 
import { 
    postCommentDish, 
    postCommentRoom, 
    fetchDishes, 
    fetchCommentsDish, 
    fetchRooms, 
    fetchCommentsRoom, 
    fetchWorkers, 
    fetchCompanies, 
    fetchContacts,
    fetchPhotos } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { postFeedback, postReserve } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      commentsDish: state.commentsDish,
      rooms: state.rooms,
      commentsRoom: state.commentsRoom,
      workers: state.workers,
      companies: state.companies,
      contacts: state.contacts,
      photos: state.photos
    };   
}

const mapDispatchToProps = dispatch => ({
    postCommentDish: (dishId, author, comment) => dispatch(postCommentDish(dishId, author, comment)),
    postCommentRoom: (roomId, author, comment) => dispatch(postCommentRoom(roomId, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes())},
    fetchRooms: () => { dispatch(fetchRooms())},
    postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    postReserve: (firstname, lastname, telnum, email, room, startDate, endDate) => dispatch(postReserve(firstname, lastname, telnum, email, room, startDate, endDate)),
    resetReserveForm: () => { dispatch(actions.reset('reserve'))},
    fetchCommentsDish: () => dispatch(fetchCommentsDish()),
    fetchCommentsRoom: () => dispatch(fetchCommentsRoom()),
    fetchWorkers: () => dispatch(fetchWorkers()),
    fetchCompanies: () => dispatch(fetchCompanies()),
    fetchContacts: () => dispatch(fetchContacts()),
    fetchPhotos: () => dispatch(fetchPhotos())
});

class MainComponent extends Component {
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchCommentsDish();
        this.props.fetchRooms();
        this.props.fetchCommentsRoom();
        this.props.fetchWorkers();
        this.props.fetchCompanies();
        this.props.fetchContacts();
        this.props.fetchPhotos();
    }

    render() {

        const Dish = ({match}) => {
            return(
                <DishDetail 
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    commentsDish={this.props.commentsDish.commentsDish.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    commentsErrMess={this.props.commentsDish.errMess}
                    postCommentDish={this.props.postCommentDish}
                />
            );
        }

        const Room = ({match}) => {
            return(
                <RoomDetail 
                    room={this.props.rooms.rooms.filter((room) => room.id === parseInt(match.params.roomId,10))[0]}
                    isLoading={this.props.rooms.isLoading}
                    errMess={this.props.rooms.errMess}
                    commentsRoom={this.props.commentsRoom.commentsRoom.filter((comment) => comment.roomId === parseInt(match.params.roomId,10))}
                    commentsErrMess={this.props.commentsRoom.errMess}
                    postCommentRoom={this.props.postCommentRoom}
                />
            );
        }

        const AboutPage = () => {
            return(
              <About
                workers={this.props.workers}
                isLoading={this.props.workers.isLoading}
                errMess={this.props.workers.errMess}
                companies={this.props.companies}
                isLoadingCompanies={this.props.companies.isLoading}
                errMessCompanies={this.props.companies.errMess}
              />
            );
          }
        
        const ContactPage = () => {
            return(
                <Contact 
                    contacts={this.props.contacts}
                    isLoading={this.props.contacts.isLoading}
                    errMess={this.props.contacts.errMess}
                    resetFeedbackForm={this.props.resetFeedbackForm} 
                    postFeedback={this.props.postFeedback} 
                />
            );
        }

        const ReservationPage = () => {
            return(
                <Reservation 
                    rooms={this.props.rooms}
                    resetReserveForm={this.props.resetReserveForm} 
                    postReserve={this.props.postReserve} 
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact  path="/" component={() => <Home photos={this.props.photos} />} />
                    <Route exact  path="/about" component={AboutPage} />
                    <Route exact path="/restaurant" component={() => <Restor dishes={this.props.dishes} />} />
                    <Route path="/restaurant/:dishId" component={Dish} />
                    <Route exact path="/rooms" component={() => <Rooms rooms={this.props.rooms} />} />
                    <Route path="/rooms/:roomId" component={Room} />
                    <Route path="/reservation" component={ReservationPage} />
                    <Route exact path="/apps" component={AppsList} />
                    <Route exact path="/apps/todo" component={TodoApp} />
                    <Route exact path="/apps/weather" component={WeatherApp} />
                    <Route exact path="/apps/quiz" component={QuizApp} />
                    <Route exact  path="/contact" component={ContactPage} />
                    <Route exact  path="/readme" component={Readme} />
                    <Route component={Error} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));