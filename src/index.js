import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { loadBugs } from './store/bugs';
// import { configureStore } from '@reduxjs/toolkit';
import { projectAdded } from './store/projects';
import { bugAdded, bugResolved, getUnresolvedBugs } from './store/bugs';


const store = configureStore();

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// store.dispatch(projectAdded({name: "Project 1"}));

// store.dispatch(bugAdded({description: "Bug 1"}));
// store.dispatch(bugAdded({description: "Bug 2"}));
// store.dispatch(bugAdded({description: "Bug 3"}));

// store.dispatch(bugResolved({id: 2}));

// store.dispatch((dispatch, getState) => {
//   store.dispatch({type: "bugsReceived", bugs: [1, 2, 3]})
// })

// store.dispatch({type: "error", payload: {message: "Toast err KEKW"}})

// store.dispatch({
//   type: 'api/apiCallBegan',
//   payload: {
//     url: '/bugs',
//     onSuccess: 'bugs/bugReceived',
//     onError: 'apiRequestFailed'
//   }
// })

store.dispatch(loadBugs())
// const y = getUnresolvedBugs(store.getState());
// console.log(y);