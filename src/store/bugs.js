import { createSlice } from "@reduxjs/toolkit";
import {createSelector} from 'reselect';
import * as actions from './api'

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.list.push({
                id: lastId ++,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug.id == action.payload.id);
            bugs.list[index].resolved = true;
        },
        bugReceived: (bugs, action) => {
            bugs.list = action.payload;
            bugs.loading = false;
        }, 
        bugRequested: (bugs, action) => {
            bugs.loading = true;
        }
    }
})

export const {bugAdded, bugResolved, bugReceived, bugRequested} = slice.actions;
export const bugsReducer = slice.reducer;
export const getUnresolvedBugs = createSelector( 
    state => state.entities.bugs,
    state => state.entities.projects,
    (bugs, projects) => bugs.filter(bug => !bug.resolved)
)
const url = "/bugs";
export const loadBugs = () => actions.apiCallBegan({
    url,
    onStart: bugRequested.type,
    onSuccess: slice.actions.bugReceived.type
});