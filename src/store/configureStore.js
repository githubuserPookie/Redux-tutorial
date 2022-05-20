import {configureStore, applyMiddleware, getDefaultMiddleware} from '@reduxjs/toolkit';
import reducer from "./reducer";
import logger from './middlwear/logger';
import func from './middlwear/func';
import error from './middlwear/error';
import api from './middlwear/api';

// configureStore();

export default () => {
    return configureStore({
        reducer,
        middleware: [logger("console"), func, error, api]
    });
}