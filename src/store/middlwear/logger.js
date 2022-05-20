const logger = params => store => next => action => {
    console.log(action.type);
    next(action);
    // action();
}

export default logger;