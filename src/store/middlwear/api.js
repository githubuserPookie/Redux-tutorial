import axios from 'axios';
import * as actions from "../api";
import { bugRequested } from '../bugs';

const api = ({dispatch}) => next => async action => {
    if(action.type !== actions.apiCallBegan.type){
        return next(action)
    }
    next(action);
    const {url, method, onSuccess, onError, data, onStart} = action.payload;
    onStart && dispatch(bugRequested());
    try{
        const response = await axios.request({
            baseURL: 'http://localhost:5000/api',
            url,
            method,
            data
        });
        dispatch(actions.apiCallSuccess(response.data));
        onSuccess && dispatch({type: onSuccess, payload: response.data});
    } catch(error){
        dispatch(actions.apiCallFailed(error));
        onError && dispatch({type: actions.apiCallFailed, payload: error});
    }
}

export default api;