import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'


export const addFeedback = (message) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: message
});

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {

  const newFeedback = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
    agree: agree,
    contactType: contactType,
    message: message
  };
  newFeedback.date = new Date().toISOString();
  
  return fetch(baseUrl + 'feedback', {
      method: "POST",
      body: JSON.stringify(newFeedback),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => {
      alert("Thank you for you feedback " + JSON.stringify(response));
  })
  .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};

export const addReserve = (firstname, lastname, telnum, email, room, startDate, endDate) => ({
  type: ActionTypes.ADD_RESERVE,
  payload: firstname, lastname, telnum, email, room, startDate, endDate
});

export const postReserve = (firstname, lastname, telnum, email, room, startDate, endDate) => (dispatch) => {

  const newReserve = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
    room: room,
    startDate: startDate,
    endDate: endDate
  };
  
  newReserve.date = new Date().toISOString();
  
  return fetch(baseUrl + 'reserve', {
      method: "POST",
      body: JSON.stringify(newReserve),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => {
      alert("Thank you for your reservation " + JSON.stringify(response));
  })
  .catch(error =>  { console.log('post reservation', error.message); alert('Your reservation could not be posted\nError: '+error.message); });
};



export const fetchDishes = () => (dispatch) => {

  dispatch(dishesLoading(true));

  return fetch(baseUrl + 'dishes')
      .then(response => {
          if (response.ok) {
          return response;
          } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
          }
      },
      error => {
              var errmess = new Error(error.message);
              throw errmess;
      })
      .then(response => response.json())
      .then(dishes => dispatch(addDishes(dishes)))
      .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});

export const fetchRooms = () => (dispatch) => {

  dispatch(roomsLoading(true));

  return fetch(baseUrl + 'rooms')
      .then(response => {
          if (response.ok) {
          return response;
          } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
          }
      },
      error => {
              var errmess = new Error(error.message);
              throw errmess;
      })
      .then(response => response.json())
      .then(rooms => dispatch(addRooms(rooms)))
      .catch(error => dispatch(roomsFailed(error.message)));
}

export const roomsLoading = () => ({
  type: ActionTypes.ROOMS_LOADING
});

export const roomsFailed = (errmess) => ({
  type: ActionTypes.ROOMS_FAILED,
  payload: errmess
});

export const addRooms = (rooms) => ({
  type: ActionTypes.ADD_ROOMS,
  payload: rooms
});

export const fetchCommentsRoom = () => (dispatch) => {    
  return fetch(baseUrl + 'commentsroom')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(comments => dispatch(addCommentsRoom(comments)))
  .catch(error => dispatch(commentsRoomFailed(error.message)));
};

export const commentsRoomFailed = (errmess) => ({
  type: ActionTypes.COMMENTSROOM_FAILED,
  payload: errmess
});

export const addCommentsRoom = (comments) => ({
  type: ActionTypes.ADD_COMMENTSROOM,
  payload: comments
});

export const addCommentRoom = (comment) => ({
  type: ActionTypes.ADD_COMMENTROOM,
  payload: comment
});

export const postCommentRoom = (roomId, author, comment) => (dispatch) => {

  const newCommentRoom = {
      roomId: roomId,
      author: author,
      comment: comment
  };
  newCommentRoom.date = new Date().toISOString();
  
  return fetch(baseUrl + 'commentsroom', {
      method: "POST",
      body: JSON.stringify(newCommentRoom),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addCommentRoom(response)))
  .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const fetchCommentsDish = () => (dispatch) => {    
  return fetch(baseUrl + 'commentsdish')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(comments => dispatch(addCommentsDish(comments)))
  .catch(error => dispatch(commentsDishFailed(error.message)));
};

export const commentsDishFailed = (errmess) => ({
  type: ActionTypes.COMMENTSDISH_FAILED,
  payload: errmess
});

export const addCommentsDish = (comments) => ({
  type: ActionTypes.ADD_COMMENTSDISH,
  payload: comments
});

export const addCommentDish = (comment) => ({
  type: ActionTypes.ADD_COMMENTDISH,
  payload: comment
});

export const postCommentDish = (dishId, author, comment) => (dispatch) => {

  const newCommentDish = {
      dishId: dishId,
      author: author,
      comment: comment
  };
  newCommentDish.date = new Date().toISOString();
  
  return fetch(baseUrl + 'commentsdish', {
      method: "POST",
      body: JSON.stringify(newCommentDish),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addCommentDish(response)))
  .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const fetchWorkers = () => (dispatch) => {

  dispatch(workersLoading(true));

  return fetch(baseUrl + 'workers')
      .then(response => {
          if (response.ok) {
          return response;
          } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
          }
      },
      error => {
              var errmess = new Error(error.message);
              throw errmess;
      })
      .then(response => response.json())
      .then(workers => dispatch(addWorkers(workers)))
      .catch(error => dispatch(workersFailed(error.message)));
}

export const workersLoading = () => ({
  type: ActionTypes.WORKERS_LOADING
});

export const workersFailed = (errmess) => ({
  type: ActionTypes.WORKERS_FAILED,
  payload: errmess
});

export const addWorkers = (workers) => ({
  type: ActionTypes.ADD_WORKERS,
  payload: workers
});

export const fetchCompanies = () => (dispatch) => {

  dispatch(companiesLoading(true));

  return fetch(baseUrl + 'companies')
      .then(response => {
          if (response.ok) {
          return response;
          } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
          }
      },
      error => {
              var errmess = new Error(error.message);
              throw errmess;
      })
      .then(response => response.json())
      .then(companies => dispatch(addCompanies(companies)))
      .catch(error => dispatch(companiesFailed(error.message)));
}

export const companiesLoading = () => ({
  type: ActionTypes.COMPANIES_LOADING
});

export const companiesFailed = (errmess) => ({
  type: ActionTypes.COMPANIES_FAILED,
  payload: errmess
});

export const addCompanies = (companies) => ({
  type: ActionTypes.ADD_COMPANIES,
  payload: companies
});

export const fetchContacts = () => (dispatch) => { 

  dispatch(contactsLoading(true));

  return fetch(baseUrl + 'contacts')
      .then(response => {
          if (response.ok) {
          return response;
          } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
          }
      },
      error => {
              var errmess = new Error(error.message);
              throw errmess;
      })
      .then(response => response.json())
      .then(contacts => dispatch(addContacts(contacts)))
      .catch(error => dispatch(contactsFailed(error.message)));
}

export const contactsLoading = () => ({
  type: ActionTypes.CONTACTS_LOADING
});

export const contactsFailed = (errmess) => ({
  type: ActionTypes.CONTACTS_FAILED,
  payload: errmess
});

export const addContacts = (contacts) => ({
  type: ActionTypes.ADD_CONTACTS,
  payload: contacts
});

export const fetchPhotos = () => (dispatch) => {

  dispatch(photosLoading(true));

  return fetch(baseUrl + 'photos')
      .then(response => {
          if (response.ok) {
          return response;
          } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
          }
      },
      error => {
              var errmess = new Error(error.message);
              throw errmess;
      })
      .then(response => response.json())
      .then(photos => dispatch(addPhotos(photos)))
      .catch(error => dispatch(photosFailed(error.message)));
}

export const photosLoading = () => ({
  type: ActionTypes.PHOTOS_LOADING
});

export const photosFailed = (errmess) => ({
  type: ActionTypes.PHOTOS_FAILED,
  payload: errmess
});

export const addPhotos = (photos) => ({
  type: ActionTypes.ADD_PHOTOS,
  payload: photos
});