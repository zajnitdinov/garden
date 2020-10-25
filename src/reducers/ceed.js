const ceed = (state, action) => {
    if (state === undefined){
        return 0
    }
    switch (action.type) {
        case 'ADD_SEED':
            return state.ceed + 1;
        default:
            return state.ceed
    }
}

export default ceed;