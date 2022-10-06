import React, {useReducer} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";


const userReduser = (state = {users: [], user: null}, action) => {
    switch (action.type) {
        case "LOAD_USERS":
            return {
                ...state,
                users: action.payload
            };
        case "CHOOSE_USER":
            return
            let id = action.payload;
            let user = state.users.find(value => value.id === id);
            return {...state, user: user}

        default:
            return state;
    }

}


const postReduser = (state = {posts: [], post: null}, action) => {
    switch (action.type) {
        case "LOAD_POSTS":
            return {
                ...state,
                posts: action.payload
            };
        case "CHOOSE_POST":
            return
            let id = action.payload;
            let post = state.posts.find(value => value.id === id);
            return {...state, post: post}
        default:
            return state;
    }

}


const commentReduser = (state = {comments: [], comment: null}, action) => {
    switch (action.type) {
        case "LOAD_COMMENTS":
            return {
                ...state,
                comment: action.payload
            };
        case "CHOOSE_COMMENT":
            return
            let id = action.payload;
            let comment = state.comments.find(value => value.id === id);
            return {...state, comment: comment}
        default:
            return state;
    }

}

const reducer = combineReducers({
    userReduser: userReduser,
    postReduser : postReduser,
    commentReduser: commentReduser
});

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
